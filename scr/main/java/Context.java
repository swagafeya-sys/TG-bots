package ru.faktish.core;
import ru.faktish.db.Database;import ru.faktish.vk.VkClient;
public record Context(VkClient vk,Database db,long peer,long user,String[] args,String command){}
