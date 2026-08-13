package ru.faktish.core;
import ru.faktish.db.Database;
public class Permissions{
 public static final String[] N={"Пользователь","Модератор","Старший модератор","Администратор","Старший администратор","Владелец беседы","Менеджер бота"};
 public static String name(int r){return r>=0&&r<N.length?N[r]:"Пользователь";}
 public static boolean chat(Database d,long chat,long user,int need)throws Exception{return d.role(chat,user)>=need;}
 public static boolean global(Database d,long user,int need)throws Exception{return d.globalRole(user)>=need;}
}
