package ru.faktish.db;
import java.sql.*;import java.nio.file.*;import java.util.*;
public class Database implements AutoCloseable{
 private final Connection c;
 public Database(String path)throws Exception{Path p=Path.of(path);if(p.getParent()!=null)Files.createDirectories(p.getParent());c=DriverManager.getConnection("jdbc:sqlite:"+path);c.createStatement().execute("PRAGMA journal_mode=WAL");setup();}
 private void setup()throws Exception{String[] sql={
 "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY,nick TEXT,balance INTEGER DEFAULT 0,bank INTEGER DEFAULT 0,reputation INTEGER DEFAULT 0,limit_left INTEGER DEFAULT 350000000,last_prize TEXT,duel_w INTEGER DEFAULT 0,duel_l INTEGER DEFAULT 0,won INTEGER DEFAULT 0,lost INTEGER DEFAULT 0,roulette_w INTEGER DEFAULT 0,roulette_l INTEGER DEFAULT 0,roulette_win INTEGER DEFAULT 0,roulette_loss INTEGER DEFAULT 0,trans_sent INTEGER DEFAULT 0,trans_recv INTEGER DEFAULT 0,cases INTEGER DEFAULT 0,vip TEXT DEFAULT '',deposit INTEGER DEFAULT 0,sub_claimed INTEGER DEFAULT 0)",
 "CREATE TABLE IF NOT EXISTS global_roles(user_id INTEGER PRIMARY KEY,role INTEGER NOT NULL)",
 "CREATE TABLE IF NOT EXISTS chat_roles(chat_id INTEGER,user_id INTEGER,role INTEGER DEFAULT 0,nick TEXT DEFAULT '',status TEXT DEFAULT '',points INTEGER DEFAULT 0,age INTEGER DEFAULT 0,has_pc INTEGER DEFAULT 0,discord TEXT DEFAULT '',forum TEXT DEFAULT '',last_appointment TEXT,PRIMARY KEY(chat_id,user_id))",
 "CREATE TABLE IF NOT EXISTS warns(id INTEGER PRIMARY KEY AUTOINCREMENT,chat_id INTEGER,user_id INTEGER,issuer INTEGER,reason TEXT,created TEXT)",
 "CREATE TABLE IF NOT EXISTS mutes(chat_id INTEGER,user_id INTEGER,until_ts INTEGER,reason TEXT,PRIMARY KEY(chat_id,user_id))",
 "CREATE TABLE IF NOT EXISTS bans(chat_id INTEGER,user_id INTEGER,issuer INTEGER,reason TEXT,created TEXT,PRIMARY KEY(chat_id,user_id))",
 "CREATE TABLE IF NOT EXISTS global_bans(user_id INTEGER PRIMARY KEY,issuer INTEGER,reason TEXT,created TEXT)",
 "CREATE TABLE IF NOT EXISTS settings(chat_id INTEGER,key TEXT,value TEXT,PRIMARY KEY(chat_id,key))",
 "CREATE TABLE IF NOT EXISTS tags(chat_id INTEGER,name TEXT,content TEXT,creator INTEGER,PRIMARY KEY(chat_id,name))",
 "CREATE TABLE IF NOT EXISTS promos(code TEXT PRIMARY KEY,amount INTEGER,uses INTEGER DEFAULT 1)",
 "CREATE TABLE IF NOT EXISTS promo_used(code TEXT,user_id INTEGER,PRIMARY KEY(code,user_id))",
 "CREATE TABLE IF NOT EXISTS chats(chat_id INTEGER PRIMARY KEY,title TEXT,link TEXT)",
 "CREATE TABLE IF NOT EXISTS custom_roles(chat_id INTEGER,name TEXT,priority INTEGER,PRIMARY KEY(chat_id,name))",
 "CREATE TABLE IF NOT EXISTS user_custom_roles(chat_id INTEGER,user_id INTEGER,name TEXT,PRIMARY KEY(chat_id,user_id))",
 "CREATE TABLE IF NOT EXISTS command_perms(chat_id INTEGER,command TEXT,priority INTEGER,PRIMARY KEY(chat_id,command))",
 "CREATE TABLE IF NOT EXISTS user_commands(chat_id INTEGER,user_id INTEGER,command TEXT,PRIMARY KEY(chat_id,user_id,command))",
 "CREATE TABLE IF NOT EXISTS messages(chat_id INTEGER,user_id INTEGER,cmid INTEGER,created INTEGER)",
 "CREATE TABLE IF NOT EXISTS businesses(id INTEGER PRIMARY KEY AUTOINCREMENT,owner INTEGER,name TEXT,price INTEGER,products INTEGER DEFAULT 0,money INTEGER DEFAULT 0)",
 "CREATE TABLE IF NOT EXISTS auctions(id INTEGER PRIMARY KEY AUTOINCREMENT,biz_id INTEGER,owner INTEGER,ends INTEGER,bid INTEGER DEFAULT 0,bidder INTEGER DEFAULT 0)",
 "CREATE TABLE IF NOT EXISTS charity(user_id INTEGER PRIMARY KEY,total INTEGER DEFAULT 0)",
 "CREATE TABLE IF NOT EXISTS duels(id INTEGER PRIMARY KEY AUTOINCREMENT,chat_id INTEGER,creator INTEGER,bet INTEGER,status TEXT DEFAULT 'open',opponent INTEGER DEFAULT 0)",
 "CREATE TABLE IF NOT EXISTS action_logs(id INTEGER PRIMARY KEY AUTOINCREMENT,issuer INTEGER,action TEXT,target INTEGER,details TEXT,created TEXT)"};for(String s:sql)c.createStatement().execute(s);}
 private void user(long id)throws Exception{PreparedStatement q=c.prepareStatement("INSERT OR IGNORE INTO users(id,balance) VALUES(?,0)");q.setLong(1,id);q.executeUpdate();q.close();}
 public synchronized long bal(long id)throws Exception{user(id);return one("SELECT balance FROM users WHERE id="+id);} public synchronized long bank(long id)throws Exception{user(id);return one("SELECT bank FROM users WHERE id="+id);}
 public synchronized void addBal(long id,long d)throws Exception{user(id);PreparedStatement q=c.prepareStatement("UPDATE users SET balance=MIN(1000000000000,balance+?) WHERE id=?");q.setLong(1,d);q.setLong(2,id);q.executeUpdate();q.close();}
 public synchronized boolean takeBal(long id,long d)throws Exception{user(id);if(bal(id)<d)return false;addBal(id,-d);return true;}
 public synchronized void bankPut(long id,long d)throws Exception{if(bal(id)>=d){addBal(id,-d);PreparedStatement q=c.prepareStatement("UPDATE users SET bank=bank+? WHERE id=?");q.setLong(1,d);q.setLong(2,id);q.executeUpdate();q.close();}}
 public synchronized boolean bankTake(long id,long d)throws Exception{user(id);if(bank(id)<d)return false;PreparedStatement q=c.prepareStatement("UPDATE users SET bank=bank-?,balance=balance+? WHERE id=?");q.setLong(1,d);q.setLong(2,d);q.setLong(3,id);q.executeUpdate();q.close();return true;}
 public synchronized void setBal(long id,long b)throws Exception{user(id);PreparedStatement q=c.prepareStatement("UPDATE users SET balance=? WHERE id=?");q.setLong(1,b);q.setLong(2,id);q.executeUpdate();q.close();}
 public synchronized int role(long chat,long user)throws Exception{if(chat==0)return 0;PreparedStatement q=c.prepareStatement("SELECT role FROM chat_roles WHERE chat_id=? AND user_id=?");q.setLong(1,chat);q.setLong(2,user);ResultSet r=q.executeQuery();int x=r.next()?r.getInt(1):0;r.close();q.close();return x;}
 public synchronized void setRole(long chat,long user,int role)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO chat_roles(chat_id,user_id,role) VALUES(?,?,?) ON CONFLICT(chat_id,user_id) DO UPDATE SET role=excluded.role");q.setLong(1,chat);q.setLong(2,user);q.setInt(3,role);q.executeUpdate();q.close();}
 public synchronized int globalRole(long user)throws Exception{PreparedStatement q=c.prepareStatement("SELECT role FROM global_roles WHERE user_id=?");q.setLong(1,user);ResultSet r=q.executeQuery();int x=r.next()?r.getInt(1):0;r.close();q.close();return x;}
 public synchronized void setGlobal(long user,int role)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO global_roles(user_id,role) VALUES(?,?) ON CONFLICT(user_id) DO UPDATE SET role=excluded.role");q.setLong(1,user);q.setInt(2,role);q.executeUpdate();q.close();}
 public synchronized List<Long> top()throws Exception{return longs("SELECT id FROM users ORDER BY (balance+bank) DESC LIMIT 10");}
 public synchronized void warn(long chat,long user,long issuer,String reason)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO warns(chat_id,user_id,issuer,reason,created) VALUES(?,?,?,?,datetime('now'))");q.setLong(1,chat);q.setLong(2,user);q.setLong(3,issuer);q.setString(4,reason);q.executeUpdate();q.close();}
 public synchronized int warns(long chat,long user)throws Exception{return (int)one("SELECT count(*) FROM warns WHERE chat_id="+chat+" AND user_id="+user);}
 public synchronized void clearWarns(long chat,long user)throws Exception{c.createStatement().executeUpdate("DELETE FROM warns WHERE chat_id="+chat+" AND user_id="+user);}
 public synchronized void ban(long chat,long user,long issuer,String reason)throws Exception{PreparedStatement q=c.prepareStatement("INSERT OR REPLACE INTO bans VALUES(?,?,?,?,datetime('now'))");q.setLong(1,chat);q.setLong(2,user);q.setLong(3,issuer);q.setString(4,reason);q.executeUpdate();q.close();}
 public synchronized void unban(long chat,long user)throws Exception{c.createStatement().executeUpdate("DELETE FROM bans WHERE chat_id="+chat+" AND user_id="+user);}
 public synchronized boolean banned(long chat,long user)throws Exception{return one("SELECT count(*) FROM bans WHERE chat_id="+chat+" AND user_id="+user)>0;}
 public synchronized void globalBan(long user,long issuer,String reason)throws Exception{PreparedStatement q=c.prepareStatement("INSERT OR REPLACE INTO global_bans VALUES(?,?,?,datetime('now'))");q.setLong(1,user);q.setLong(2,issuer);q.setString(3,reason);q.executeUpdate();q.close();}
 public synchronized boolean gban(long user)throws Exception{return one("SELECT count(*) FROM global_bans WHERE user_id="+user)>0;}
 public synchronized void nick(long chat,long user,String n)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO chat_roles(chat_id,user_id,nick) VALUES(?,?,?) ON CONFLICT(chat_id,user_id) DO UPDATE SET nick=excluded.nick");q.setLong(1,chat);q.setLong(2,user);q.setString(3,n);q.executeUpdate();q.close();}
 public synchronized String nick(long chat,long user)throws Exception{return str("SELECT nick FROM chat_roles WHERE chat_id="+chat+" AND user_id="+user);}
 public synchronized void setting(long chat,String k,String v)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO settings VALUES(?,?,?) ON CONFLICT(chat_id,key) DO UPDATE SET value=excluded.value");q.setLong(1,chat);q.setString(2,k);q.setString(3,v);q.executeUpdate();q.close();}
 public synchronized String setting(long chat,String k)throws Exception{return str("SELECT value FROM settings WHERE chat_id="+chat+" AND key='"+k.replace("'","''")+"'");}
 public synchronized long one(String s)throws Exception{ResultSet r=c.createStatement().executeQuery(s);long x=r.next()?r.getLong(1):0;r.close();return x;} private String str(String s)throws Exception{ResultSet r=c.createStatement().executeQuery(s);String x=r.next()?r.getString(1):"";r.close();return x;} private List<Long> longs(String s)throws Exception{List<Long> a=new ArrayList<>();ResultSet r=c.createStatement().executeQuery(s);while(r.next())a.add(r.getLong(1));r.close();return a;}

 public synchronized void registerChat(long peer)throws Exception{if(peer<2000000000L)return;PreparedStatement q=c.prepareStatement("INSERT OR IGNORE INTO chats(chat_id,title,link) VALUES(?,?,?)");q.setLong(1,peer);q.setString(2,"");q.setString(3,"");q.executeUpdate();q.close();}
 public synchronized List<Long> peers()throws Exception{return longs("SELECT chat_id FROM chats ORDER BY chat_id");}
 public synchronized void customRole(long chat,String name,int priority)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO custom_roles(chat_id,name,priority) VALUES(?,?,?) ON CONFLICT(chat_id,name) DO UPDATE SET priority=excluded.priority");q.setLong(1,chat);q.setString(2,name);q.setInt(3,priority);q.executeUpdate();q.close();}
 public synchronized void deleteCustomRole(long chat,String name)throws Exception{PreparedStatement q=c.prepareStatement("DELETE FROM custom_roles WHERE chat_id=? AND name=?");q.setLong(1,chat);q.setString(2,name);q.executeUpdate();q.close();PreparedStatement u=c.prepareStatement("DELETE FROM user_custom_roles WHERE chat_id=? AND name=?");u.setLong(1,chat);u.setString(2,name);u.executeUpdate();u.close();}
 public synchronized void assignCustomRole(long chat,long user,String name)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO user_custom_roles(chat_id,user_id,name) VALUES(?,?,?) ON CONFLICT(chat_id,user_id) DO UPDATE SET name=excluded.name");q.setLong(1,chat);q.setLong(2,user);q.setString(3,name);q.executeUpdate();q.close();}
 public synchronized int customPriority(long chat,long user)throws Exception{PreparedStatement q=c.prepareStatement("SELECT r.priority FROM user_custom_roles u JOIN custom_roles r ON r.chat_id=u.chat_id AND r.name=u.name WHERE u.chat_id=? AND u.user_id=?");q.setLong(1,chat);q.setLong(2,user);ResultSet r=q.executeQuery();int x=r.next()?r.getInt(1):0;r.close();q.close();return x;}
 public synchronized void setCommandPerm(long chat,String cmd,int priority)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO command_perms(chat_id,command,priority) VALUES(?,?,?) ON CONFLICT(chat_id,command) DO UPDATE SET priority=excluded.priority");q.setLong(1,chat);q.setString(2,cmd.toLowerCase());q.setInt(3,priority);q.executeUpdate();q.close();}
 public synchronized int commandPerm(long chat,String cmd)throws Exception{return (int)one("SELECT priority FROM command_perms WHERE chat_id="+chat+" AND command='"+cmd.replace("'","''")+"'");}
 public synchronized void giveCommand(long chat,long user,String cmd)throws Exception{PreparedStatement q=c.prepareStatement("INSERT OR REPLACE INTO user_commands(chat_id,user_id,command) VALUES(?,?,?)");q.setLong(1,chat);q.setLong(2,user);q.setString(3,cmd.toLowerCase());q.executeUpdate();q.close();}
 public synchronized void takeCommand(long chat,long user,String cmd)throws Exception{PreparedStatement q=c.prepareStatement("DELETE FROM user_commands WHERE chat_id=? AND user_id=? AND command=?");q.setLong(1,chat);q.setLong(2,user);q.setString(3,cmd.toLowerCase());q.executeUpdate();q.close();}
 public synchronized boolean hasCommand(long chat,long user,String cmd)throws Exception{return one("SELECT count(*) FROM user_commands WHERE chat_id="+chat+" AND user_id="+user+" AND command='"+cmd.replace("'","''")+"'")>0;}
 public synchronized int caseCount(long user)throws Exception{user(user);return (int)one("SELECT cases FROM users WHERE id="+user);}
 public synchronized void addCases(long user,int n)throws Exception{user(user);PreparedStatement q=c.prepareStatement("UPDATE users SET cases=cases+? WHERE id=?");q.setInt(1,n);q.setLong(2,user);q.executeUpdate();q.close();}
 public synchronized String vip(long user)throws Exception{user(user);return str("SELECT vip FROM users WHERE id="+user);}
 public synchronized void setVip(long user,String v)throws Exception{user(user);PreparedStatement q=c.prepareStatement("UPDATE users SET vip=? WHERE id=?");q.setString(1,v);q.setLong(2,user);q.executeUpdate();q.close();}
 public synchronized void setLastPrize(long user,String d)throws Exception{user(user);PreparedStatement q=c.prepareStatement("UPDATE users SET last_prize=? WHERE id=?");q.setString(1,d);q.setLong(2,user);q.executeUpdate();q.close();}
 public synchronized String lastPrize(long user)throws Exception{user(user);return str("SELECT last_prize FROM users WHERE id="+user);}
 public synchronized void charityAdd(long user,long amount)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO charity(user_id,total) VALUES(?,?) ON CONFLICT(user_id) DO UPDATE SET total=total+excluded.total");q.setLong(1,user);q.setLong(2,amount);q.executeUpdate();q.close();}
 public synchronized long charityTotal(long user)throws Exception{return one("SELECT total FROM charity WHERE user_id="+user);}

 public synchronized long createDuel(long chat,long creator,long bet)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO duels(chat_id,creator,bet,status) VALUES(?,?,?,?)",Statement.RETURN_GENERATED_KEYS);q.setLong(1,chat);q.setLong(2,creator);q.setLong(3,bet);q.setString(4,"open");q.executeUpdate();ResultSet r=q.getGeneratedKeys();long id=r.next()?r.getLong(1):0;r.close();q.close();return id;}
 public synchronized long duelCreator(long id)throws Exception{return one("SELECT creator FROM duels WHERE id="+id);}
 public synchronized long duelBet(long id)throws Exception{return one("SELECT bet FROM duels WHERE id="+id);}
 public synchronized boolean duelOpen(long id)throws Exception{return "open".equals(str("SELECT status FROM duels WHERE id="+id));}
 public synchronized void closeDuel(long id,long opponent)throws Exception{PreparedStatement q=c.prepareStatement("UPDATE duels SET status='closed',opponent=? WHERE id=?");q.setLong(1,opponent);q.setLong(2,id);q.executeUpdate();q.close();}
 public synchronized void deleteDuel(long id)throws Exception{PreparedStatement q=c.prepareStatement("DELETE FROM duels WHERE id=?");q.setLong(1,id);q.executeUpdate();q.close();}
 public synchronized void log(long i,String a,long t,String d)throws Exception{PreparedStatement q=c.prepareStatement("INSERT INTO action_logs VALUES(NULL,?,?,?,?,datetime('now'))");q.setLong(1,i);q.setString(2,a);q.setLong(3,t);q.setString(4,d);q.executeUpdate();q.close();}
 public synchronized void close()throws Exception{c.close();}
}
