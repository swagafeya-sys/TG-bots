from flask import Flask, render_template, request, redirect, url_for, session, abort, flash
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3, os
from functools import wraps

app=Flask(__name__)
app.secret_key=os.environ.get("SECRET_KEY","change-me-in-production")
DB="forum.db"

def db():
    c=sqlite3.connect(DB); c.row_factory=sqlite3.Row; return c

def init_db():
    c=db()
    c.executescript("""
    CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'user',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS categories(
      id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL,
      description TEXT DEFAULT ''
    );
    CREATE TABLE IF NOT EXISTS topics(
      id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL,
      category_id INTEGER NOT NULL, user_id INTEGER NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP, locked INTEGER DEFAULT 0,
      FOREIGN KEY(category_id) REFERENCES categories(id),
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
    CREATE TABLE IF NOT EXISTS posts(
      id INTEGER PRIMARY KEY AUTOINCREMENT, topic_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL, content TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(topic_id) REFERENCES topics(id),
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
    CREATE TABLE IF NOT EXISTS reports(
      id INTEGER PRIMARY KEY AUTOINCREMENT, post_id INTEGER, user_id INTEGER NOT NULL,
      reason TEXT NOT NULL, status TEXT DEFAULT 'open',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    """)
    if not c.execute("SELECT 1 FROM users LIMIT 1").fetchone():
        c.execute("INSERT INTO users(username,password,role) VALUES(?,?,?)",
                  ("admin",generate_password_hash("admin123"),"admin"))
    if not c.execute("SELECT 1 FROM categories LIMIT 1").fetchone():
        c.executemany("INSERT INTO categories(name,description) VALUES(?,?)",[
            ("Общие обсуждения","Новости, общение и вопросы."),
            ("Модерация","Жалобы, апелляции и правила."),
            ("Помощь","Вопросы по проекту и техническая помощь.")
        ])
    c.commit(); c.close()

def login_required(f):
    @wraps(f)
    def w(*a,**kw):
        if "uid" not in session: return redirect(url_for("login"))
        return f(*a,**kw)
    return w

def staff_required(f):
    @wraps(f)
    def w(*a,**kw):
        if session.get("role") not in ("moderator","admin"): abort(403)
        return f(*a,**kw)
    return w

def admin_required(f):
    @wraps(f)
    def w(*a,**kw):
        if session.get("role")!="admin": abort(403)
        return f(*a,**kw)
    return w

@app.context_processor
def inject():
    return {"me":session.get("username"),"role":session.get("role")}

@app.route("/")
def index():
    c=db(); cats=c.execute("SELECT * FROM categories").fetchall(); c.close()
    return render_template("index.html",categories=cats)

@app.route("/category/<int:cid>")
def category(cid):
    c=db(); cat=c.execute("SELECT * FROM categories WHERE id=?",(cid,)).fetchone()
    topics=c.execute("""SELECT t.*,u.username,(SELECT COUNT(*) FROM posts p WHERE p.topic_id=t.id) replies
                       FROM topics t JOIN users u ON u.id=t.user_id WHERE category_id=? ORDER BY t.id DESC""",(cid,)).fetchall()
    c.close()
    if not cat: abort(404)
    return render_template("category.html",cat=cat,topics=topics)

@app.route("/topic/<int:tid>",methods=["GET","POST"])
def topic(tid):
    c=db(); t=c.execute("""SELECT t.*,c.name category,u.username FROM topics t
      JOIN categories c ON c.id=t.category_id JOIN users u ON u.id=t.user_id WHERE t.id=?""",(tid,)).fetchone()
    if not t: abort(404)
    if request.method=="POST":
        if not session.get("uid"): return redirect(url_for("login"))
        if t["locked"] and session.get("role") not in ("moderator","admin"): abort(403)
        text=request.form.get("content","").strip()
        if text:
            c.execute("INSERT INTO posts(topic_id,user_id,content) VALUES(?,?,?)",(tid,session["uid"],text)); c.commit()
        return redirect(url_for("topic",tid=tid))
    posts=c.execute("""SELECT p.*,u.username,u.role FROM posts p JOIN users u ON u.id=p.user_id
                       WHERE topic_id=? ORDER BY p.id""",(tid,)).fetchall()
    c.close(); return render_template("topic.html",topic=t,posts=posts)

@app.route("/new/<int:cid>",methods=["GET","POST"])
@login_required
def new_topic(cid):
    c=db(); cat=c.execute("SELECT * FROM categories WHERE id=?",(cid,)).fetchone()
    if not cat: abort(404)
    if request.method=="POST":
        title=request.form.get("title","").strip(); content=request.form.get("content","").strip()
        if title and content:
            cur=c.execute("INSERT INTO topics(title,category_id,user_id) VALUES(?,?,?)",(title,cid,session["uid"]))
            tid=cur.lastrowid; c.execute("INSERT INTO posts(topic_id,user_id,content) VALUES(?,?,?)",(tid,session["uid"],content)); c.commit()
            return redirect(url_for("topic",tid=tid))
    c.close(); return render_template("new_topic.html",cat=cat)

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method=="POST":
        c=db(); u=c.execute("SELECT * FROM users WHERE username=?",(request.form.get("username"),)).fetchone(); c.close()
        if u and check_password_hash(u["password"],request.form.get("password","")):
            session.update(uid=u["id"],username=u["username"],role=u["role"]); return redirect(url_for("index"))
        flash("Неверный логин или пароль")
    return render_template("login.html")

@app.route("/register",methods=["GET","POST"])
def register():
    if request.method=="POST":
        name=request.form.get("username","").strip(); pw=request.form.get("password","")
        if len(name)<3 or len(pw)<6: flash("Логин от 3 символов, пароль от 6."); return render_template("register.html")
        try:
            c=db(); cur=c.execute("INSERT INTO users(username,password) VALUES(?,?)",(name,generate_password_hash(pw))); c.commit()
            session.update(uid=cur.lastrowid,username=name,role="user"); c.close(); return redirect(url_for("index"))
        except sqlite3.IntegrityError: flash("Такой пользователь уже существует.")
    return render_template("register.html")

@app.route("/logout")
def logout(): session.clear(); return redirect(url_for("index"))

@app.route("/admin")
@staff_required
def admin():
    c=db()
    stats={k:c.execute(q).fetchone()[0] for k,q in {
        "users":"SELECT COUNT(*) FROM users","topics":"SELECT COUNT(*) FROM topics",
        "posts":"SELECT COUNT(*) FROM posts","reports":"SELECT COUNT(*) FROM reports WHERE status='open'"
    }.items()}
    users=c.execute("SELECT id,username,role,created_at FROM users ORDER BY id DESC LIMIT 100").fetchall()
    reports=c.execute("""SELECT r.*,u.username reporter FROM reports r JOIN users u ON u.id=r.user_id
                         ORDER BY r.id DESC LIMIT 50""").fetchall()
    cats=c.execute("SELECT * FROM categories ORDER BY id").fetchall(); c.close()
    return render_template("admin.html",stats=stats,users=users,reports=reports,cats=cats)

@app.route("/admin/user/<int:uid>/role",methods=["POST"])
@admin_required
def set_role(uid):
    role=request.form.get("role")
    if role not in ("user","moderator","admin"): abort(400)
    c=db(); c.execute("UPDATE users SET role=? WHERE id=?",(role,uid)); c.commit(); c.close()
    return redirect(url_for("admin"))

@app.route("/admin/category",methods=["POST"])
@admin_required
def add_category():
    name=request.form.get("name","").strip(); desc=request.form.get("description","").strip()
    if name:
        c=db(); c.execute("INSERT INTO categories(name,description) VALUES(?,?)",(name,desc)); c.commit(); c.close()
    return redirect(url_for("admin"))

@app.route("/admin/topic/<int:tid>/lock",methods=["POST"])
@staff_required
def lock_topic(tid):
    c=db(); c.execute("UPDATE topics SET locked=1-locked WHERE id=?",(tid,)); c.commit(); c.close()
    return redirect(request.referrer or url_for("admin"))

@app.route("/report/<int:pid>",methods=["POST"])
@login_required
def report(pid):
    reason=request.form.get("reason","Нарушение правил").strip()
    c=db(); c.execute("INSERT INTO reports(post_id,user_id,reason) VALUES(?,?,?)",(pid,session["uid"],reason)); c.commit(); c.close()
    flash("Жалоба отправлена."); return redirect(request.referrer or url_for("index"))

if __name__=="__main__":
    init_db(); app.run(host="0.0.0.0",port=5000,debug=True)
