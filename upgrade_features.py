# P.W. Economy Upgrade Pack 2.0
# Подключается к существующему bot.py без удаления старых функций.
import sqlite3
import random
import re
from datetime import datetime, timedelta
from contextlib import closing

DB = 'economy_bot.db'

def db(sql, params=(), one=False, all_rows=False):
    with closing(sqlite3.connect(DB)) as c:
        cur = c.execute(sql, params)
        result = cur.fetchone() if one else (cur.fetchall() if all_rows else None)
        c.commit()
        return result

def M():
    # Ссылка на основной bot.py, который запущен как __main__.
    return __import__('__main__')

def send(chat_id, text):
    return M().send_message(chat_id, text)

def user(uid):
    return M().get_user(uid)

def update(uid, **kwargs):
    return M().update_user(uid, **kwargs)

def now():
    return datetime.now().isoformat(timespec='seconds')

def init():
    cols = db('PRAGMA table_info(users)', all_rows=True)
    names = [x[1] for x in cols]
    for col, typ in [('username','TEXT DEFAULT ""'),('last_daily','TEXT DEFAULT "2000-01-01"'),('daily_streak','INTEGER DEFAULT 0'),('last_seen','TEXT DEFAULT "2000-01-01"')]:
        if col not in names:
            db(f'ALTER TABLE users ADD COLUMN {col} {typ}')
    db('''CREATE TABLE IF NOT EXISTS bank_accounts(user_id INTEGER PRIMARY KEY,balance INTEGER DEFAULT 0)''')
    db('''CREATE TABLE IF NOT EXISTS cooldowns(user_id INTEGER,action TEXT,last_time TEXT,PRIMARY KEY(user_id,action))''')
    db('''CREATE TABLE IF NOT EXISTS cars(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,name TEXT,price INTEGER,class_name TEXT,income_bonus INTEGER,created_at TEXT)''')
    db('''CREATE TABLE IF NOT EXISTS achievements(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,code TEXT,title TEXT,reward INTEGER,created_at TEXT,UNIQUE(user_id,code))''')
    db('''CREATE TABLE IF NOT EXISTS event_progress(user_id INTEGER,event_id INTEGER,progress INTEGER DEFAULT 0,completed INTEGER DEFAULT 0,PRIMARY KEY(user_id,event_id))''')
    db('''CREATE TABLE IF NOT EXISTS promo_uses(user_id INTEGER,code TEXT,used_at TEXT,PRIMARY KEY(user_id,code))''')
    db('''CREATE TABLE IF NOT EXISTS admin_logs(id INTEGER PRIMARY KEY AUTOINCREMENT,admin_id INTEGER,action TEXT,target_id INTEGER,amount INTEGER,details TEXT,created_at TEXT)''')
    db('''CREATE TABLE IF NOT EXISTS business_state(user_id INTEGER PRIMARY KEY,last_collect TEXT,level INTEGER DEFAULT 1)''')
    db('''CREATE TABLE IF NOT EXISTS user_jobs(user_id INTEGER PRIMARY KEY,job_id INTEGER DEFAULT 1)''')
    db('''CREATE TABLE IF NOT EXISTS property_catalog(id INTEGER PRIMARY KEY,kind TEXT,name TEXT,price INTEGER,tax INTEGER,level_req INTEGER,bonus INTEGER)''')
    db('''CREATE TABLE IF NOT EXISTS garage_catalog(id INTEGER PRIMARY KEY,name TEXT,price INTEGER,slots INTEGER,level_req INTEGER)''')
    db('''CREATE TABLE IF NOT EXISTS car_catalog(id INTEGER PRIMARY KEY,name TEXT,price INTEGER,class_name TEXT,income_bonus INTEGER,level_req INTEGER)''')
    houses=[(1,'house','Комната',2000,50,1,0),(2,'house','Квартира',10000,120,3,2),(3,'house','Дом',50000,300,8,5),(4,'house','Пентхаус',250000,1000,20,10)]
    garages=[(1,'Гараж на 1 авто',3000,1,1),(2,'Гараж на 3 авто',12000,3,5),(3,'Гараж на 5 авто',30000,5,10),(4,'Гараж на 10 авто',100000,10,20)]
    cars=[(1,'Lada Priora',5000,'D',50,1),(2,'Toyota Supra',25000,'C',100,3),(3,'BMW M5',75000,'B',180,7),(4,'Mercedes AMG',150000,'A',300,12),(5,'Bugatti Chiron',750000,'S',700,25)]
    for x in houses: db('INSERT OR IGNORE INTO property_catalog VALUES(?,?,?,?,?,?,?)',x)
    for x in garages: db('INSERT OR IGNORE INTO garage_catalog VALUES(?,?,?,?,?)',x)
    for x in cars: db('INSERT OR IGNORE INTO car_catalog VALUES(?,?,?,?,?,?)',x)

init()

ACH = {
    'first_work':('Первая работа',500),'ten_work':('Трудяга',1500),
    'millionaire':('Миллионер',10000),'first_house':('Собственник',1000),
    'first_car':('Автолюбитель',1000),'business_owner':('Предприниматель',3000),
    'level_10':('Ветеран',5000),'rob_50':('Грабитель',5000),'steal_50':('Угонщик',5000)
}

def set_username(uid, username):
    db('UPDATE users SET username=?,last_seen=? WHERE user_id=?',(username or '',now(),uid))

def bank(uid):
    db('INSERT OR IGNORE INTO bank_accounts(user_id,balance) VALUES(?,0)',(uid,))
    return db('SELECT balance FROM bank_accounts WHERE user_id=?',(uid,),one=True)[0]

def cooldown(uid, action, seconds):
    row=db('SELECT last_time FROM cooldowns WHERE user_id=? AND action=?',(uid,action),one=True)
    if not row: return 0
    try: left=seconds-(datetime.now()-datetime.fromisoformat(row[0])).total_seconds()
    except: return 0
    return max(0,int(left))

def touch(uid,action):
    db('INSERT INTO cooldowns(user_id,action,last_time) VALUES(?,?,?) ON CONFLICT(user_id,action) DO UPDATE SET last_time=excluded.last_time',(uid,action,now()))

def fmt(sec):
    sec=max(0,int(sec)); return f'{sec//3600} ч. {(sec%3600)//60} мин.' if sec>=3600 else f'{sec//60} мин. {sec%60} сек.'


def apply_taxes(uid):
    u=user(uid)
    if not (u['house'] or u['garage'] or u['business']): return 0
    try: last=datetime.fromisoformat(u['last_tax_time'])
    except: last=datetime.now()
    hours=int((datetime.now()-last).total_seconds()//3600)
    if hours<=0: return 0
    tax=((200 if u['house'] else 0)+(150 if u['garage'] else 0)+(300 if u['business'] else 0))*hours
    update(uid,balance=max(0,u['balance']-tax),last_tax_time=now())
    return tax

def profile_plus(chat,uid):
    apply_taxes(uid); u=user(uid); cars_count=db('SELECT COUNT(*) FROM cars WHERE user_id=?',(uid,),one=True)[0]; ach_count=db('SELECT COUNT(*) FROM achievements WHERE user_id=?',(uid,),one=True)[0]
    send(chat,f'👤 *ПРОФИЛЬ*\n\n💰 Наличные: {u["balance"]:,} B-coins\n🏦 Банк: {bank(uid):,}\n⭐ Уровень: {u["level"]}\n✨ XP: {u["xp"]}/{M().get_xp_for_next_level(u["level"])}\n💼 Работа: {u["work"]}\n🏠 Дом: {u["house"] or "❌"}\n🚗 Гараж: {u["garage"] or "❌"}\n🚘 Авто: {cars_count}\n🏢 Бизнес: {u["business"] or "❌"}\n🏆 Достижений: {ach_count}\n🎯 Ивент-очков: {u["event_points"]}')

def event_action(uid, action):
    row=db("SELECT id,name,task_count,reward_points FROM events WHERE active=1 AND task_type=? ORDER BY id DESC LIMIT 1",(action,),one=True)
    if not row: return
    eid,name,count,reward=row
    cur=db('SELECT progress,completed FROM event_progress WHERE user_id=? AND event_id=?',(uid,eid),one=True)
    progress=(cur[0] if cur else 0)+1
    if cur and cur[1]: return
    if progress>=count:
        db('INSERT INTO event_progress(user_id,event_id,progress,completed) VALUES(?,?,?,1) ON CONFLICT(user_id,event_id) DO UPDATE SET progress=excluded.progress,completed=1',(uid,eid,progress))
        u=user(uid); update(uid,event_points=u['event_points']+reward); send(uid,f'🎯 *Ивент выполнен!*\n{name}\n🏆 +{reward} очков')
    else:
        db('INSERT INTO event_progress(user_id,event_id,progress,completed) VALUES(?,?,?,0) ON CONFLICT(user_id,event_id) DO UPDATE SET progress=excluded.progress',(uid,eid,progress))

def daily(chat,uid):
    u=user(uid)
    try: last=datetime.fromisoformat(u['last_daily'])
    except: last=datetime.min
    diff=(datetime.now()-last).total_seconds()
    if diff<86400: return send(chat,f'🎁 Daily уже получен. Осталось: {fmt(86400-diff)}')
    streak=u['daily_streak']+1 if diff<172800 else 1
    reward={1:500,2:750,3:1000,4:1500,5:2000,6:3000,7:10000}.get(streak,10000)
    update(uid,balance=u['balance']+reward,last_daily=now(),daily_streak=streak)
    send(chat,f'🎁 *DAILY*\n🔥 Серия: {streak} дней\n💰 +{reward:,} B-coins')

def bank_menu(chat,uid):
    send(chat,f'🏦 *Банк*\n\n💰 Наличные: {user(uid)["balance"]:,}\n🏦 Счёт: {bank(uid):,}\n\n/deposit сумма\n/withdraw сумма')

def deposit(chat,uid,amount):
    amount=int(amount); u=user(uid)
    if amount<=0 or u['balance']<amount: return send(chat,'❌ Недостаточно наличных.')
    update(uid,balance=u['balance']-amount); db('UPDATE bank_accounts SET balance=balance+? WHERE user_id=?',(amount,uid)); send(chat,f'🏦 Внесено: {amount:,} B-coins')

def withdraw(chat,uid,amount):
    amount=int(amount); b=bank(uid)
    if amount<=0 or b<amount: return send(chat,'❌ Недостаточно денег на счёте.')
    db('UPDATE bank_accounts SET balance=balance-? WHERE user_id=?',(amount,uid)); u=user(uid); update(uid,balance=u['balance']+amount); send(chat,f'💵 Снято: {amount:,} B-coins')

def pay(chat,uid,target,amount):
    target=int(target); amount=int(amount); u=user(uid)
    if target==uid or amount<=0: return send(chat,'❌ Некорректный перевод.')
    if u['balance']<amount: return send(chat,'❌ Недостаточно денег.')
    t=user(target); update(uid,balance=u['balance']-amount); update(target,balance=t['balance']+amount)
    send(chat,f'💸 Перевод: {amount:,} B-coins → {target}'); send(target,f'💰 Вам перевели {amount:,} B-coins')

def top(chat):
    rows=db('SELECT user_id,username,balance,level FROM users ORDER BY balance DESC LIMIT 10',all_rows=True)
    text='🏆 *ТОП-10 БОГАТЫХ*\n\n'
    for i,r in enumerate(rows,1): text+=f'{i}. {r[1] or r[0]} — {r[2]:,} 💰 | {r[3]} lvl\n'
    send(chat,text)

def jobs(chat,uid):
    u=user(uid); W=M().WORKS; text='💼 *Работы*\n\n'
    for jid,w in W.items(): text+=f'{"✅" if u["level"]>=w["level_req"] else "🔒"} {jid}. {w["name"]} — {w["min"]}-{w["max"]} 💰 | с {w["level_req"]} ур.\n'
    send(chat,text+'\n/setjob ID')

def setjob(chat,uid,jid):
    jid=int(jid); W=M().WORKS; u=user(uid)
    if jid not in W or u['level']<W[jid]['level_req']: return send(chat,'❌ Работа недоступна.')
    db('INSERT INTO user_jobs(user_id,job_id) VALUES(?,?) ON CONFLICT(user_id) DO UPDATE SET job_id=excluded.job_id',(uid,jid)); update(uid,work=W[jid]['name']); send(chat,f'💼 Выбрана работа: {W[jid]["name"]}')

def cars(chat,uid):
    rows=db('SELECT id,name,price,class_name,income_bonus,level_req FROM car_catalog ORDER BY price',all_rows=True); owned=db('SELECT id,name,class_name FROM cars WHERE user_id=?',(uid,),all_rows=True)
    text='🚗 *Автосалон*\n\n'+''.join(f'{r[0]}. {r[1]} — {r[2]:,} 💰 | {r[3]} | +{r[4]} | ур.{r[5]}\n' for r in rows)
    text+='\n🚘 Ваши авто:\n'+('\n'.join(f'#{r[0]} {r[1]} [{r[2]}]' for r in owned) if owned else 'нет')+'\n\n/buycar ID\n/sellcar ID'
    send(chat,text)

def buycar(chat,uid,cid):
    r=db('SELECT id,name,price,class_name,income_bonus,level_req FROM car_catalog WHERE id=?',(int(cid),),one=True); u=user(uid)
    if not r: return send(chat,'❌ Авто не найдено.')
    if u['level']<r[5] or u['balance']<r[2]: return send(chat,'❌ Недостаточный уровень или баланс.')
    garage=u['garage']; limit=1
    m=re.search(r'(\d+) авто',garage or '')
    if m: limit=int(m.group(1))
    if db('SELECT COUNT(*) FROM cars WHERE user_id=?',(uid,),one=True)[0]>=limit: return send(chat,'❌ В гараже нет свободных мест. Купите гараж через /realty.')
    update(uid,balance=u['balance']-r[2]); db('INSERT INTO cars(user_id,name,price,class_name,income_bonus,created_at) VALUES(?,?,?,?,?,?)',(uid,r[1],r[2],r[3],r[4],now())); achievement(uid,'first_car'); send(chat,f'🚗 Куплено: {r[1]}\n💰 -{r[2]:,}')

def sellcar(chat,uid,idx):
    rows=db('SELECT id,name,price FROM cars WHERE user_id=? ORDER BY id',(uid,),all_rows=True)
    try: r=rows[int(idx)-1]
    except: return send(chat,'❌ Неверный номер авто.')
    refund=r[2]*70//100; db('DELETE FROM cars WHERE id=?',(r[0],)); u=user(uid); update(uid,balance=u['balance']+refund); send(chat,f'🚗 Продано: {r[1]}\n💰 +{refund:,}')

def realty(chat,uid):
    h=db("SELECT id,name,price,tax,level_req FROM property_catalog WHERE kind='house' ORDER BY price",all_rows=True); g=db('SELECT id,name,price,slots,level_req FROM garage_catalog ORDER BY price',all_rows=True)
    text='🏠 *Недвижимость*\n\n🏠 ДОМА\n'+''.join(f'{r[0]}. {r[1]} — {r[2]:,} | налог {r[3]}/ч | ур.{r[4]}\n' for r in h)
    text+='\n🚗 ГАРАЖИ\n'+''.join(f'{r[0]}. {r[1]} — {r[2]:,} | {r[3]} мест | ур.{r[4]}\n' for r in g)
    send(chat,text+'\n/buyhome ID\n/buygarage ID')

def buyhome(chat,uid,cid):
    r=db("SELECT name,price,tax,level_req FROM property_catalog WHERE id=? AND kind='house'",(int(cid),),one=True); u=user(uid)
    if not r: return send(chat,'❌ Дом не найден.')
    if u['house'] or u['level']<r[3] or u['balance']<r[1]: return send(chat,'❌ Покупка недоступна.')
    update(uid,balance=u['balance']-r[1],house=r[0]); achievement(uid,'first_house'); send(chat,f'🏠 Куплено: {r[0]}\n💰 -{r[1]:,}\n⚠️ Налог: {r[2]}/час')

def buygarage(chat,uid,cid):
    r=db('SELECT name,price,slots,level_req FROM garage_catalog WHERE id=?',(int(cid),),one=True); u=user(uid)
    if not r: return send(chat,'❌ Гараж не найден.')
    if u['garage'] or u['level']<r[3] or u['balance']<r[1]: return send(chat,'❌ Покупка недоступна.')
    update(uid,balance=u['balance']-r[1],garage=r[0]); send(chat,f'🚗 Куплено: {r[0]}\n💰 -{r[1]:,}\nМест: {r[2]}')

def business(chat,uid):
    u=user(uid)
    if not u['business']: return send(chat,'🏢 У вас нет бизнеса. /buybusiness')
    b=db('SELECT income_min,income_max,tax FROM custom_businesses WHERE name=?',(u['business'],),one=True); st=db('SELECT level,last_collect FROM business_state WHERE user_id=?',(uid,),one=True); lvl=st[0] if st else 1
    send(chat,f'🏢 *{u["business"]}*\n\n📈 Уровень: {lvl}/5\n💰 Доход: {b[0]}-{b[1]} × уровень\n⚠️ Налог: {b[2]}/час\n\n/bizcollect\n/bizupgrade')

def bizcollect(chat,uid):
    u=user(uid)
    if not u['business']: return send(chat,'❌ Нет бизнеса.')
    b=db('SELECT income_min,income_max FROM custom_businesses WHERE name=?',(u['business'],),one=True); st=db('SELECT level,last_collect FROM business_state WHERE user_id=?',(uid,),one=True); lvl=st[0] if st else 1
    if st and st[1]:
        left=3600-(datetime.now()-datetime.fromisoformat(st[1])).total_seconds()
        if left>0: return send(chat,f'⏳ Сбор через {fmt(left)}')
    income=random.randint(b[0],b[1])*lvl; db('INSERT INTO business_state(user_id,last_collect,level) VALUES(?,?,?) ON CONFLICT(user_id) DO UPDATE SET last_collect=excluded.last_collect',(uid,now(),lvl)); update(uid,balance=u['balance']+income); send(chat,f'🏢 Доход: +{income:,} B-coins')

def bizupgrade(chat,uid):
    u=user(uid)
    if not u['business']: return send(chat,'❌ Нет бизнеса.')
    st=db('SELECT level FROM business_state WHERE user_id=?',(uid,),one=True); lvl=st[0] if st else 1
    if lvl>=5: return send(chat,'🏢 Максимальный уровень.')
    price=5000*lvl
    if u['balance']<price: return send(chat,f'❌ Нужно {price:,} B-coins.')
    update(uid,balance=u['balance']-price); db('INSERT INTO business_state(user_id,last_collect,level) VALUES(?,?,?) ON CONFLICT(user_id) DO UPDATE SET level=excluded.level',(uid,now(),lvl+1)); send(chat,f'📈 Бизнес улучшен: {lvl+1}/5\n💰 -{price:,}')

def achievement(uid,code):
    if code not in ACH: return
    title,reward=ACH[code]
    try:
        db('INSERT INTO achievements(user_id,code,title,reward,created_at) VALUES(?,?,?,?,?)',(uid,code,title,reward,now())); u=user(uid); update(uid,balance=u['balance']+reward); send(uid,f'🏆 *Достижение: {title}*\n🎁 +{reward} B-coins')
    except sqlite3.IntegrityError: pass

def achievements(chat,uid):
    rows=db('SELECT title,reward FROM achievements WHERE user_id=? ORDER BY id DESC',(uid,),all_rows=True); send(chat,'🏆 *Достижения*\n\n'+('\n'.join(f'🏆 {r[0]} — +{r[1]} 💰' for r in rows) if rows else 'Пока нет достижений.'))

def sellitem(chat,uid,item,qty=1):
    qty=int(qty); item=item.lower(); prices={'аптечка':250,'билет':100,'энергетик':75,'пицца':150}; row=db('SELECT quantity FROM inventory WHERE user_id=? AND item_name=?',(uid,item),one=True)
    if item not in prices or not row or row[0]<qty or qty<=0: return send(chat,'❌ Нельзя продать это количество предметов.')
    db('UPDATE inventory SET quantity=quantity-? WHERE user_id=? AND item_name=?',(qty,uid,item)); db('DELETE FROM inventory WHERE user_id=? AND item_name=? AND quantity<=0',(uid,item)); u=user(uid); total=prices[item]*qty; update(uid,balance=u['balance']+total); send(chat,f'💰 Продано {item} x{qty}: +{total:,}')

def useitem(chat,uid,item):
    item=item.lower(); row=db('SELECT quantity FROM inventory WHERE user_id=? AND item_name=?',(uid,item),one=True)
    if item not in {'энергетик','пицца'} or not row or row[0]<1: return send(chat,'❌ Предмет нельзя использовать или его нет.')
    db('UPDATE inventory SET quantity=quantity-1 WHERE user_id=? AND item_name=?',(uid,item)); db('DELETE FROM inventory WHERE user_id=? AND item_name=? AND quantity<=0',(uid,item)); send(chat,f'🍕 Использован: {item}.')

def help_new(chat):
    send(chat,'🧩 *Новые команды*\n\n/daily\n/bank\n/deposit сумма\n/withdraw сумма\n/pay ID сумма\n/top\n/achievements\n/jobs\n/setjob ID\n/cars\n/buycar ID\n/sellcar номер\n/realty\n/buyhome ID\n/buygarage ID\n/business\n/bizcollect\n/bizupgrade\n/sell предмет количество\n/use предмет')

def admin_log(admin,action,target=0,amount=0,details=''):
    db('INSERT INTO admin_logs(admin_id,action,target_id,amount,details,created_at) VALUES(?,?,?,?,?,?)',(admin,action,target,amount,details,now()))

def admin(chat,uid,text):
    if uid != M().ADMIN_ID: return False
    p=text.split()
    try:
        cmd=p[0]
        if cmd=='/ban': db('INSERT OR IGNORE INTO bans(user_id) VALUES(?)',(int(p[1]),)); admin_log(uid,'BAN',int(p[1])); send(chat,'🚫 Заблокирован.'); return True
        if cmd=='/unban': db('DELETE FROM bans WHERE user_id=?',(int(p[1]),)); admin_log(uid,'UNBAN',int(p[1])); send(chat,'✅ Разблокирован.'); return True
        if cmd=='/give':
            t,a=int(p[1]),int(p[2]); u=user(t); update(t,balance=u['balance']+a); admin_log(uid,'GIVE',t,a); send(chat,'✅ Деньги выданы.'); return True
        if cmd=='/setxp':
            t,x=int(p[1]),int(p[2]); update(t,xp=max(0,x)); admin_log(uid,'SETXP',t,x); send(chat,'✅ XP установлено.'); return True
        if cmd=='/take':
            t,a=int(p[1]),int(p[2]); u=user(t); update(t,balance=max(0,u['balance']-a)); admin_log(uid,'TAKE',t,a); send(chat,'✅ Деньги сняты.'); return True
        if cmd=='/setbalance':
            t,a=int(p[1]),int(p[2]); update(t,balance=max(0,a)); admin_log(uid,'SETBALANCE',t,a); send(chat,'✅ Баланс установлен.'); return True
        if cmd=='/setlevel':
            t,l=int(p[1]),int(p[2]); update(t,level=max(1,l)); admin_log(uid,'SETLEVEL',t,l); send(chat,'✅ Уровень установлен.'); return True
        if cmd=='/userinfo':
            t=int(p[1]); u=user(t); send(chat,f'👤 ID: {t}\n💰 {u["balance"]:,}\n⭐ {u["level"]}\n💼 {u["work"]}\n🏠 {u["house"] or "нет"}\n🚗 {db("SELECT COUNT(*) FROM cars WHERE user_id=?",(t,),one=True)[0]}\n🏢 {u["business"] or "нет"}'); return True
        if cmd=='/giveitem':
            t,item,q=int(p[1]),p[2],int(p[3]); [M().add_item(t,item) for _ in range(q)]; admin_log(uid,'GIVEITEM',t,q,item); send(chat,'✅ Предмет выдан.'); return True
        if cmd=='/logs':
            rows=db('SELECT created_at,action,target_id,amount,details FROM admin_logs ORDER BY id DESC LIMIT 20',all_rows=True); send(chat,'🛡 *Логи*\n\n'+('\n'.join(map(str,rows)) if rows else 'Пусто.')); return True
    except Exception as e:
        send(chat,f'❌ Формат команды неверный: {e}'); return True
    return False
