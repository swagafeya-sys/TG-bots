/* Я потерял свои глаза в кодеине */
console.log({ start: true })
var [skidki_post, eth, logid, likesban, captcha_on, captchaTime, achat, donatePhoto, pinguage, regTime] = [String ("wall-210137308_2361"), 0, 5, 15, false, 300000, 46, String (), 0, Date.now ()]
var [ethtime, btctime] = [Number(3600000 * 5), Number (3600000)]
var [likeslog, groupId, komissiakazik, nalogkazik, skidki, replyed_idgroup, system] = [0, 210137308, 0.50, 5000000, false, "bearbot", parseInt (100)]
const autodon = [{ id: 0, summa: 0}];
const skinlist = require ("./database/skinlist.json");
const [bankphoto, balancephoto, btcphoto, adminphoto, ratingphoto, sccar, donatrubphoto, exphoto, premium, vipstatusphoto, gamevalutephoto] = ["photo-210137308_457244236", "photo-210137308_457244235", "photo-210137308_457244234", "photo-210137308_457244233", "photo-210137308_457244232", "https://vk.com/photo-210137308_457244231", "photo-210137308_457244230", "photo-210137308_457244229", "photo-210137308_457244228", "photo-210137308_457244227", "photo-210137308_457244226"]
let normaadm = false;
function Regtime() {
let date = new Date();
let days = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;
var times = hours + ':' + minutes + ':' + seconds
return times;
};

function craft_left(stamp) {
	stamp = stamp / 1000;
	let s = stamp % 60;
	stamp = ( stamp - s ) / 60
	let m = stamp % 60;
	stamp = ( stamp - m ) / 60;
	let h = ( stamp ) % 24;
	let d = ( stamp - h ) / 24;
	let text = ``;
	if(d > 0) text = Math.floor(d) + " д ";
	if(h > 0 && d < 1) text = Math.floor(h) + " ч ";
	if (m > 0 && h < 1 && d < 1) text = Math.floor(m) + " мин ";
	if(s > 0 && m < 1 && h < 1 && d < 1) text = Math.floor(s) + " сек ";
	return text;
	}
	

function Regweek(){
var date = new Date();
let week = date.getDay();
if(week == 1) week = "понедельник";
if(week == 2) week = "вторник";
if(week == 3) week = "среда";
if(week == 4) week = "четверг";
if(week == 5) week = "пятница";
if(week == 6) week = "суббота";
if(week == 0) week = "воскресенье";
let datas = week;
return datas;
};
function getReg() {
var arr = ['января', 'февраля','марта','апреля', 'мая','июня','июля', 'августа','сентября','ноября','декабря',];

//ЦЕЛОЕ ЧИСЛО
function abs(num, origin) {
 if (num === Math.abs(origin)) return num;

 return abs(num + 1, origin || num);
}
//ЦЕЛОЕ ЧИСЛО
var times = new Date();
var date = arr[times.getMonth() -1];

if (times.getMonth () == 0) date = arr[times.getMonth()];

var timy = Regtime();
var weekSt = Regweek();
return weekSt + ', ' + times.getDate() + ' ' + date + ', ' + timy;
};
function print(x) {
try { 
console.log(x)
}
catch (e) {
console.log(e)
}
}

print(" 🔥 [➡] Ахуенно, братан, мы взлетаем! ");
print ("💎 Бульба Ботяра (@bulba_bot) успешно запущен!")
print (" 📖 Создатель: @id1060048895")
const { VK, Keyboard, CallbackService, Event } = require('vk-io');
const TelegramBot = require ("node-telegram-bot-api")
var logger_vk = []
const vk = new VK({ token: "token", apiMode: "parallel" });
const logger_tg = new TelegramBot ("", {
	polling: true
})
var query = require("samp-query");
var bir = new VK({ token: "" });
const { DevUp } = require("api-devup");

const {

memoryUsage

} = require("process");

/*====================[COMMANDS 2.0]============*/
const reqCommands = require('./commands.js');
async () => await reqCommands;
/*==============================================*/

//const fetch = require("\./node_modules/node-fetch/index.js");
const devUp = new DevUp("");
//const commands = require('./commands.json');
const commands = [];
const commander = [];
let yr = 2;
let vips = 0;
let start = Date.now();
let premiums = 0;
let superfarm = 0;
let topvine = "";
let rudazhelezo = 0;
let almruda = 0;
let own = 569336824;
let ownn = 567686843;
let zolotrud = 0;
let poslmsg = "";
let posltime = 0;
let reptt = false;
//let timerud = 60000;
let timerud = Number(3600000 * 5)
let code = require('./database/code.json');
//const userbot = require('./userbot.js');
let zap = 0;
let lg2 = [];
var fs = require("fs");
const axios = require("axios");
/*const numcap = require("numcap");*/
/*var num = new numcap();*/
let giving = false;
let rol = "";
let ch = 0;
var numcap = require("numcap");
const reeq = require ("request")
const { promisify } = require('util');
const pttrrpost = promisify (reeq.post);
/*let clans = require('./database/clans.json');*/
let user = new VK({token: ""});
const request = require('prequest');
/*const requests = require('request');*/
/*var num = require("numcap");*/
let texting = String();

const KEYBOARD_COLUMNS_MAX = 4;
const getSchool = require ("./function/getSchool.js")
const time = require ("./function/time.js")
const weekStamps = require ("./function/weekstamp.js")
const createcode = require('./database/code.json');
const gen_key = require ("./function/genkey.js")
const getObjectBearCoin = require ("./function/objbear.js")
const displayTime = require ("./function/koin.js")
const { unixMin, unixSec, unixHours, testlol, getRandomInt, pad, left, timeQsenser, addZero, sleep, getUnix, getRandomElement } = require ("./function/function.js")

/*==============================[TOKENS -- GROUP]=================*/
const { updates, snippets } = vk;
const VkBot = require('node-vk-bot-api');
//const bot = new VkBot("");
const api = require('node-vk-bot-api/lib/api');
/*===============================================================*/
/*==============================[TOKENS -- USER]=================*/
/*===============================================================*/
/*===============================================================*/
const cars = require('./database/cars.json');
const { msgError } = require ("./function/function.js")
const utils = require('./utils');
const hostel = require('./database/test.json');
const yachts = require('./database/ya.json');
const cvetok = require('./database/cvetok.json');
const airplanes = require('./database/air.json');
const helicopters = require('./database/hel.json');
const homes = require('./database/homes.json');
const apartments = require('./database/apart.json');
const phones = require('./database/phones.json');
const pets = require('./database/pets.json');
const petsupd = require('./database/petsupd.json');
const farms = require('./database/farms.json');
const bizfo = require('./database/bizfo.json');
const travel = require('./database/travel.json');
const businesses3 = require('./database/bizz.json');
const businesses = require('./database/businesses.json');
const pref = require('./database/pref.json');
const works = require('./database/works.json');
const rotateText = require('./database/rotateText.json');
const bizclan = require('./database/cl.json');
let promo = "0";
let btc = 6000;
let users = require('./database/users.json');
let users2 = require('./database/users2.json');
let users3 = require('./database/users3.json');
let config = require('./database/settings.json');
let botinfo = require('./database/bot.json');
let botinf = require('./database/bot.json');
let boss = require('./database/boss.json');
let bossinfo = require('./database/boss.json');
let reportss = require('./database/rep.json');
let clans = require('./database/clans.json');
let chats = require('./database/chats.json');
let quest = require('./database/quest.json');
let buttons = [];
/*===============================================================*/
/*==========================================================================================================*/
/*==========================================================================================================*/
/*==========================================================================================================*/
/*==========================================================================================================*/
let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);
let smilerandom = Array.from("❤💮🌅🚫🔖👑👔▶💸🤡🌁🤑⏰👥🕋😍👔🥺📍");
let smilik = utils.pick([14409, 6660, 6832, 15791, 3275, 16927, 15560]);
let many = utils.pick([3390, 3407, 8242, 8254, 6666, 6844, 16420, 16428, 16432, 15559, 15562, 15352, 14754, 3395, 6671]);
let plak = utils.pick([3411, 8264, 3287, 6676, 6700, 6850, 6849, 15793, 15800, 10223, 10225, 14411, 15347, 14751, 3362, 4644]);

async function saveUsers()
{
	await require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	return "Готово!";
}

function mathjamp(num, com) {
return Math.floor(Number(num*com));
};

async function saveClans() {
await require('fs').writeFileSync('./database/clans.json', JSON.stringify(clans, null, '\t'));
/*await sleep(5000);*/ //засыпаем
}

async function saveAll() {
/*require('fs').writeFileSync('../database/users.json', JSON.stringify(users, null, '\t'));*/
require('fs').writeFileSync('./database/users2.json', JSON.stringify(users2, null, '\t'));
require('fs').writeFileSync('./database/users3.json', JSON.stringify(users3, null, '\t'));
return true;
}

async function saveConfig()
{
	try {
	require('fs').writeFileSync('./database/settings.json', JSON.stringify(config, null, '\t'));
	return true;
	} catch (e) { console.log(e) }
}
async function saveCommands() {
await require('fs').writeFileSync('./commands.json', JSON.stringify(commands, null, '\t'));
return true;
}

async function saveQuest() {
try {
require('fs').writeFileSync('./database/quest.json', JSON.stringify(quest, null, '\t'));
return true;
} catch (e) { console.log(e) }
}

async function saveChats() {
try {
require('fs').writeFileSync('./database/chats.json', JSON.stringify(chats, null, '\t'));
return true;
} catch (e) { console.log(e) }
}

async function saveRep() {
try {
require('fs').writeFileSync('./database/rep.json', JSON.stringify(reportss, null, '\t'));
return true;
} catch (e) { console.log(e) }
}

async function saveBot() {
try {
require('fs').writeFileSync('./database/bot.json', JSON.stringify(botinfo, null, '\t'));
return true;
} catch (e) { console.log(e) }
}

async function saveCode() {
try {
require('fs').writeFileSync('./database/code.json', JSON.stringify(code, null, '\t'));
return true;
} catch (e) { console.log(e) }
}

global.setTimeout(async () => {
const rout = await request("https://apirone.com/api/v2/ticker?currency=btc");
if (!rout.bsd) return;
btc = Math.floor(Number(rout.bsd));
}, 5);

var eth_old = 0;

global.setTimeout(async () => {
eth = utils.random(3500,5400);
}, 1000);

global.setInterval(async () => {
const rout = await request("https://apirone.com/api/v2/ticker?currency=btc");
if (!rout.bsd) return;
btc = Math.floor(Number(rout.bsd));
btctime = 36000000;
}, 3600000);

global.setInterval(async () => {
btctime -= 1000;
}, 1000);

global.setInterval(async () => {
	await saveUsers();
	await saveBot();
	console.log(' База данных успешно сохранена.');
	console.log('');
}, 30000);

global.setInterval(async () => {
eth_old = eth;
eth = utils.random(3500,6500);
ethtime = Number(3600000*5);
}, Number(3600000*5));

global.setInterval(async () => {
ethtime -= 1000;
}, 1000);

global.setInterval (() => {
	users.map (x => {
		if (!x.balance) {
			x.balance = 5000
		}
		
		if (!x.farms) {
			x.farms = 0
		}
	})
}, 30000)

global.setInterval(() => {
if (reptt === true) {
for (i in reportss) {
delete reportss[i];
}

if (reportss !== []) {
for (i in reportss) {
delete reportss[i]
}
}
}
}, 60000);

global.setTimeout(() => {
if (quest[1].text === quest[0].text) {
quest[1].text = randomquest;
}
}, 1000);

let materia = 0;

const proc = []

const rudaproc = []

global.setInterval(() => {
rudazhelezo = utils.random(200, 1749);
zolotrud = utils.random(50000, 927192);
almruda = utils.random(93920, 9999999);
materia = utils.random(1000000, 1000000000);

if (!rudaproc) {
rudaproc.push ({
	zhelezo: Math.floor(rudazhelezo*100/proc [0]),
	zoloto: Math.floor (zolotrud*100/proc [1]),
	almaz: Math.floor (almruda*100/proc [2]),
	materia: Math.floor (materia*100/proc[3])
})
}
else {
	rudaproc [0] = {
		zhelezo: Math.floor(rudazhelezo*100/proc [0]),
		zoloto: Math.floor (zolotrud*100/proc [1]),
		almaz: Math.floor (almruda*100/proc [2]),
		materia: Math.floor (materia*100/proc[3])
	}
}
timerud = Number(3600000*5);
}, Number(3600000*5));

global.setTimeout(() => {
rudazhelezo = utils.random(200, 1749);
zolotrud = utils.random(50000, 927192);
almruda = utils.random(93920, 9999999);
materia = 1000000000;
proc.push (rudazhelezo, zolotrud, almruda, materia)
rudaproc [0] = {
	zhelezo: Math.floor(rudazhelezo*100/proc [0]),
	zoloto: Math.floor (zolotrud*100/proc [1]),
	almaz: Math.floor (almruda*100/proc [2]),
	materia: Math.floor (materia*100/proc[3])
}
}, 5);

var logger_user_tg = false;

global.setInterval (() => {
	if (logger_user_tg) {
	logger_tg.sendDocument (1440768414, "./database/users.json")
	}
	
	if (!logger_user_tg) return;
}, 3600000)

global.setTimeout (() => {
	if (logger_user_tg) {
	logger_tg.sendDocument (1440768414, "./database/users.json")
	}
	
	if (!logger_user_tg) return;
}, 1000)

global.setInterval(() => {
timerud -= 1000;
}, 1000);

global.setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(async x=> {
        if (x.mainer === false) {
		var frmbtc = 0;
		let farmm = farms[x.misc.farm - 1];
		frmbtc += farmm.farm_btc;
		var frmbtcm = frmbtc * x.farms;
		x.farm_btc += frmbtcm;

		await vk.api.messages.send({ user_id: x.id, message: `@id${x.id} (${x.tag}), фермы накопили новые биткоины, скорее сними их! 🤑` }).catch(e=>console.log(e));
}

	});
}, 3600000);

global.setInterval(() => {
users.filter(x=>x.ck !== 0).map(x => {
const sl = cvetok.find(x=>x.id===Number(x.ck));
if (x.ckvod >= 20) {
x.ckvod -= 20;
}
if (!sl) return;
x.materia += sl.fin;
});
}, 3600000);

global.setInterval(async () => {
for (var i =0; i<users.length;i++) {
if (users[i]) {
if (users[i].biz === NaN || users[i].biz === null) {
users[i].biz = 0;
}
}
}
}, 600000);

global.setInterval(async () => {
	users.filter(x=> x.settings.old == false).map(x=> {
		x.settings.old == true;
	});
}, 604800);

global.setInterval(async () => {
await users.filter(x => x.settings.adm > 0 && x.clanid !== 1).map(x => x.clanid = null);
}, 1000);
global.setInterval(async () => {
users.map(user => {
    if(user.c2 >= 3500) { user.c2 = 3500;}
});
}, 60000*5);

global.setInterval(async () => {
users.map(user => {
    if(user.c1 >= 30000) { user.c1 = 30000;}
});
}, 60000*5);

global.setInterval(async () => {
users.filter(x => x.business > 0).map(user => {
			if (!user.bizx2) {
			const biz = businesses[user.business - 1];
			if(!biz) return;

			user.biz += biz.earn * user.bizlvl;
		}
	if (user.bizx2) {
		const biz = businesses[user.business - 1];
		if(!biz) return;
		user.biz += biz.earn * user.bizlvl * 2;
		}
	});
}, 3600000);

global.setInterval(() => {
users.filter(x => x.energy === 0).map(x => {
x.energy = x.maxenergy;
})
}, 300000);

global.setInterval(async () => {
await users.map(x=>{
x.eth = Math.abs(x.eth);
});
}, 600000);

global.setTimeout(() => {
users.map(x => {
x.maxenergy = 10
});
}, 600000);

setInterval (() => {
	users.map (x => {
		
	if(x.exp >= 24)
	{
		x.exp = 1;
		x.level += 1;
	}
	
		if (x.balance < 0) {
			x.balance = Math.abs(x.balance);
		}

			if (x.ban == undefined) {
				x.ban = false;
			}
			
			if (x.balance > x.limitbalance) {
				x.balance = x.limitbalance;
				}

				if (x.transport.car > cars.length) {
					x.transport.car = 0;
					}

				if (x.farms > x.farmslimit) {
					x.farms = x.farmslimit;
					}

				if (x.balance < 0) {
				x.balance = 0;
				}

	   if (x.tag == String ()) {
          x.tag = "СМЕНИТЕ НИК"
       }
       
	x.eth = Math.abs(x.eth);
    x.balance = Math.abs(x.balance);
    x.rating = Math.abs(x.rating);
    x.settings.adm = Math.abs(x.settings.adm);
	})
}, 600000)

global.setInterval(() => {
if (poslmsg) {
posltime += 1000;
}
}, 1000);

/*global.setInterval(() => {
zap += 1000;
}, 1000);*/

global.setInterval(() => {
saveRep();
saveChats();
saveQuest();
console.log(" База репортов сохранена! ");
console.log(" База чатов сохранена! ");
console.log(" База квестов сохранена! ");
console.log(" База данных 2 || 3 сохранена! ");
}, 60000);

global.setInterval(async () => {
	users.map(user => {
		if(user.btc > 500000000000)
		{
			user.btc = 500000000000;
		}
	});
}, 1);

global.setInterval(async () => {
await users.forEach(e=>{
if (e.business) {e.timebiz+=1000;}
});
}, 1000);

global.setInterval(async () => {
	users.map(user => {
		if(user.farm_btc > 50000000000)
		{
			user.farm_btc = 50000000000;
		}
	});
}, 1);

global.setInterval(() => {
users.filter(x => x.obnova === undefined || x.bizz2 === undefined || x.biz2 === undefined || x.quest1 === undefined || x.quest2 === undefined).map(x => {
x.obnova = false
x.bizz2 = 0
x.biz2 = 0
x.quest1 = false
x.quest2 = false
});
}, 100000);



global.setInterval(() => {
users.filter(x => x.bizz2 > 0).map(x => {
x.biz2 += bizfo[x.bizz2 - 1].fin * ctx.bizlvl;
});
}, 3600000);

global.setInterval (() => {
	users.map (x => {
		x.activ_get += 1000
	})
}, 1000)

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = 0;
		user.timers.bonus = 0;
		user.promo = false;
		user.energy = user.maxenergy;
		user.timers.metal = 0;
		user.timers.poxod = 0;
	});
}

function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}
let own9 = 575652491;

global.setInterval(() => { clearTemp(); }, 3600000 * 24);
global.setInterval(() => { clearPromo(); }, 3600000);
global.setInterval(async () => {
await saveClans()
}, 30000);
/*==========================================================================================================*/
/*===============================================================[СОХРАНЕНИЕ]==========================================*/
global.setInterval(async () => {
await saveCommands();
}, 300000);

global.setInterval(() => {saveCode() }, 60000);
/*==========================================================================================================*/
/*==========================================================================================================*/

vk.updates.on([ 'chat_invite_user'], async (context) => {
	if(Math.abs(context.eventMemberId) === 210137308) {
	if (chats.find(x=>x.id===context.chatId)) return;
let invlink;
/*invlink = await vk.api.messages.getInviteLink({ peer_id: context.peerId })
	      if(invlink && invlink.link) invlink = invlink.link*/
	await chats.push({
		id: context.chatId,
		link: "",
		time: 0
	});
	saveChats();
   context.send(`🔥 Приветствую всех, кто в беседе! @all

       Я — [vk.com/@imvelikolepniy]! Хорошо, что ты меня пригласил вовремя в беседу, ведь со мной ты можешь классно провести время.

      ⭐ Посмотреть команды БОТА — «Помощь».`,
    {
        keyboard: Keyboard.keyboard([
   [
    Keyboard.textButton ({
     label: "🔥 Донат"
    }),
    Keyboard.textButton ({
     label: `🛍 Магазин`
    }),
Keyboard.textButton ({
label: "⭐ Профиль"
}),
   ],
[
Keyboard.textButton ({
label: "📆 Работы"
}),
Keyboard.textButton ({
label: "💼 Бизнесы"
}),
Keyboard.textButton ({
label: "👑 Топ"
})
],
   [
   Keyboard.textButton({
   label: "👑 Баланс"
   }),
   Keyboard.textButton({
    label: "📝 Помощь"
    }),
    Keyboard.textButton({
     label: "⛈️ Босс"
     })
   ],
   [
    Keyboard.textButton({
     label: "⚙ Настройки"
     }),

     Keyboard.textButton({
      label: "🔑 Автомат"
      }),

      Keyboard.textButton({
       label: "💰 Банк"
       })
   ]
  ])
 })
 
  }
});

const likespost = [{
	id: 675,
	summa: 50000000000
}]

updates.on("like", async (e) => {
var user = await users.find(x=>x.id===Number(e.likerId));
if (user.likerlog.find(x=>x.id === e.objectId)) {
return 1;
return 0;
}

if (e ["objectType"] != "post") return;

console
.debug (`${e.likerId} - ${e.objectId}`)

await user.liker.push(e.objectId);
await user.likerlog.push({id:e.objectId});
let baliklike = 10000000
let textlike = ``

if (user.vip) {
	baliklike = 15000000
}

if (user.prem) {
	baliklike = 20000000
}

if (user.imortal) {
	
	baliklike = 30000000
}

if (user.luxury) {
	
	baliklike = 40000000
}

if (user.deluxe) {
	
	baliklike = 30000000 * 5;
}


user.balance += baliklike;

if (!user.deluxe) {
user.bilet_like += 2;
}

if (user.deluxe) {
user.bilet_like += 2*5;
}

var kassabiz = 0;

if (user.business != 0 && user.biz != 0) {
	user.biz += Math.floor (Number (user.biz / 100 * 2));
	kassabiz = Math.floor (Number (user.biz / 100 * 2));
   //Math.floor (Number (user.biz * 0.2));
}

const follow_group = await vk.api.call("groups.isMember", { user_id: user.id, group_id: groupId });

user.limit_trade += 1000000000

if (!follow_group) {
await vk.api.messages.send({ user_id: user.id,random_id: Math.random()*99999, 
message: `❤ *id${user.id} (${user.tag}), вам начислено +${utils.sp(baliklike)}$ за лайк!

Общие бонусы за активность:
${user.biz > 0 ? "💼 +2% к кассе бизнеса." : "\t"} (+${utils.sp(kassabiz)})
💵 +${utils.sp (1000000000)}$ к лимиту переводов
🎰 +${user.deluxe ? "10" : "2"} билета для автомата


💎 Подписывайся на @bulba_bot и получай дополнительные ПРИЗЫ!`,
keyboard:Keyboard.keyboard ([
    [ gen_key ("❤ Топ", "топ лайки")],[
	Keyboard.urlButton ({
		label: "🔔 Подписаться",
		url: "https://vk.com/@bulba_bot"
	})]
]).inline () })
}

else {
	await vk.api.messages.send({ user_id: user.id,random_id: Math.random()*99999, 
message: `❤ *id${user.id} (${user.tag}), вам начислено +${utils.sp(baliklike)}$ за лайк!

Общие бонусы за активность:
${user.biz > 0 ? "💼 +2% к кассе бизнеса." : "\t"} (+${utils.sp(kassabiz)})
💵 +${utils.sp (1000000000)}$ к лимиту переводов
🎰 +${user.deluxe ? "10" : "2"} билета для автомата


✨ За подписку на @bulba_bot ПРИЗЫ удвоены!`, keyboard:Keyboard.keyboard ([
    [ gen_key ("❤ Топ", "топ лайки")] ]).inline ()

 })
}

});
/*======================================================*/

/*==========================================================================================================*/
let randomquest = utils.pick(["🔮 » Выйграть 15-ть рейтинга в бонусе\n ⏰ » Приз: 5 ферм [первых]", "🔋 » Собрать 200.000.000 биткоинов с ферм \n 🚀 » Приз: 500.000.000.000$"]);
/*==========================================================================================================*/
//updates.use(QuestionManager.middleware)
updates.start(() => console.log(`🎭 Запустился за ${Date.now()-regTime}`)); // start
const {PagesManager} = require(`vk-io-pages`)
const pagesManager = new PagesManager ()
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	// if (message.attachments[0].type === 'sticker') message.send({ sticker_id: 72119 });
	if(/\[club[^]+\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club[^]+\|(.*)\]/ig, '').trim();
  if(/\[public[^]+\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[public[^]+\|(.*)\]/ig, '').trim();
  if(/\[@[^]+\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[@[^]+\|(.*)\]/ig, '').trim();
  if(message.text.startsWith('/')) { message.text = message.text.replace(/^\//i, '') }
  if(message.text.startsWith('.')) { message.text = message.text.replace(/^\./i, '') }
  if(message.text.startsWith('!')) { message.text = message.text.replace(/^\!/i, '') }
  message.text = message.text.replace(/(милка )/ig, '').replace(/(миловиен )/ig, '').replace(/(миловин )/ig, '').replace(/(мил )/ig, '').replace(/(милкис )/ig, '');
  const typePing = Date.now();
 // message.text = message.text.replace(/(проф )
 message.text = message.text.replace(/(cmd )/ig, '');
	if(/\[club210137308\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club210137308\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();
		users.push({
			idtgver: undefined,
			code_telegram_und: undefined,
			accounttg: "—",
			lvld: 1,
			lvlkk: 10,
			cryptod: false,
			deluxe: false,
			botbear_wallet: 0,
			wallet_ton: String (),
			scamid: false,
			scamrep: false,
			scambank: false,
			scambtc: false,
			scamcash: false,
			bearmaks: false,
			ostrovsky: false,
			supercat: false,
			supercats: {
				time: 0,
				times: 0
			},
			medal: 0,
			mech9may: false,
			zash9may: false,
			adm_time: 0,
			luxury: false,
			lenmon: false,
			bplvl: 1,
			bearpass: false,
			arenda_tr: 0,
			arenda_trtime: 0,
			set_time: 0,
			repadmId: null,
			bilet_like: 0,
			anorma: 0,
			anorma_all: 0,
			anorma_hi: 0,
			allgive: 0,
			donate_uvedi: false,
			last_anime: null,
			activ_get: 0,
			refuse: false,
			limit_trade: 10000000000,
			prefixadm: String (),
			boss_kubok: 0,
			secret_case: 0,
			rep_ut: 0,
			vzlom_new: 0,
			vzlom_zakaz: 0,
			vzlom_summa: 0,
			vzlomlvl: 1,
			tester: false,
			imortalbonus: 0,
			snegovik: false,
			santa: false,
			prosh: 25,
			quest: [],
			questday: [],
			lvlpass: 1,
			point: 0,
			dkopen: 1,
			caseopen: 1,
			capchammd: false,
			gorod: [],
			refcount: [],
			imortal: false,
			snezki: 0,
			podarokinfo: 0,
			elka: {
            ukrash: [],
			visota: 10,
			time: 0
			},
			captcha: {
			touch: false,
			key: 0
			},
			zametka: [],
			likerlog: [],
			videocart: 0,
			x: 1,
			planet: 0,
			timebiz: 0,
			eth: 1,
			limitbalancelvl: 1,
			stroykatime: 0,
			limitestroyka: 0,
			codes: [],
			reporttime: 0,
			reporttimes: false,
			stroyka: 0,
			stroykalvl: 1,
			clickcmd: 0,
			naloghome: 0,
			nalogcar: 0,
			nalogfarms: 0,
			mycmd: [],
			id: message.senderId,
            liker: [],
            firstblack: false,
            egg: 0,
            getJon: 0,
			uid: [users.length, "USER#" + users.length],
			adm: 0,
			podarok: 0,
            podpis: 0,
            sp: false,
            ck: 0,
			dtsrc: false,
            braktime: 0,
            mainer: false,
			captmsg: 0,
            bas: false,
            getJo: 0,
            konfeti: 0,
            may: 0,
            maycount: 0,
            cherep: false,
            clanid: null,
            sport: false,
            nitro: false,
            voina: 0,
            launc: false,
			captrd: 0,
			captresh: false,
            aw: 0,
           reptext: "",
            repban: false,
            ng16: false,
            ng17: false,
            ng18: false,
            ng19: false,
            quest1: false,
            materia: 0,
            quest2: false,
            ng14: 0,
            travel: 0,
            traveltime: 0,
            travelvalue: 0,
            ng15: false,
            bizz2: 0,
            milllion: 0,
            biz2: 0,
            ckvod: 0,
            kruiz: 0,
            donatbear: 0,
            biz3: 0,
            bizz3: 0,
            limitbalance: 25000000000000000,
            clanid: null,
            msg: 0,
            obnova: false,
            rassil: true,
            logi: true,
			vipstatus: [],
            nch: false,
            pizdenka: 0,
            bizx2: false,
            daiving: 0,
            opitwork: 0,
            gossn: [],
            bizlimit: false,
            ref: 0,
            bbaonus: 0,
            dcoin: 0,
           bilet: 0,
            rass: false,
            bans: false,
            farmtime: 0,
            exppp: 0,
            exptime: 0,
            tiktokgg: null,
            clansat: [],
            maxenergy: 10,
            knhelp: true,
            bankch: 0,
            shtet: 0,
            atimeeee: 1,
            alog: "",
            activ: "",
            bbinv: "выключено",
			balance: 5000,
			vipbonus: 0,
			prembonus: 0,
			expo: 2,
			sneg: 0,
            ng: false,
            kickchat: 0,
            avarn: 0,
			sntime: false,
			prichban: "",
            evaltime: false,
            evaltimee: 60,
		    bantimeee: 0,
			bank: 0,
			btc: 100,
			limitbank: 1000000000,
			limitpere: 250000000,
			vip: 0,
			prem: 0,
			farm_btc: 0,
			farms: 0,
			farmslimit: 2000,
			energy: 10,
			opit: 0,
			biz: 0,
			bossyr: 0,
			bossyron: 0,
			c1: 0,
			c2: 0,
			c3: 0,
			c4: 0,
			c5: 0,
			report: false,
			c6: 0,
			c7:0,
			vipnew: false,
			zhelezo: 0,
			zoloto: 0,
			almaz: 0,
			bizlvl: 0,
			nicklimit: 16,
			rating: 0,
			regDate: getReg(),
			mention: true,
			ban: false,
			timers: {
				ohota: 0,
				obnul: 0,
				ogr: 0,
				daiving: 0,
				trades: 0,
				metal: 0,
				hasWorked: 0,
				bonus: 0,
				clad: 0,
				vipdr: false,
				vidat: 0,
				poxod: 0,
				poxod2: false,
				kopat: false,
				hack: 0
			},
			tag: user_info.first_name,
			famtag: user_info.last_name,
			work: 0,
			business: 0,
			biz2: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			promo: false,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				pet: 0,
			},
			settings: {
				bans: 0,
				banstime: 0,
				vig: 0,
                answer: 0,
				firstmsg: true,
				adm: 0,
				eval: false,
				trade: true,
				old: false,
				limit: 1000000
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: [],
				semia: []
			},
						brak: {
							deti: 0
						},
						fammenu: {
						deti: 0,
						braktime: 0,
						gonnnn: 0
						}
		});
		vk.api.messages.send({
			chat_id: achat,
			random_id: 0,
		 forward: JSON.stringify({
				peer_id:message.peerId,
				conversation_message_ids: message.conversationMessageId
			}),
			message: `🐰 Новый пупсик!
			VKID: ${user_info.id},
			ID: ${users.find(x=>x.id===user_info.id).uid}`
			});
			
		console.log(` +1 игрок [Игроков: ${users.length}]`);
		console.log(``);
        const inff = await vk.api.users.get({ user_ids: message.senderId, fields: "photo_id" });
     vk.api.messages.send({ chat_id: achat, random_id: Math.random() * 99999, message: `👤 » Новый пользователь в базе данных! \n ⏰ » Информация [Имя/Фамилия]: [id${message.senderId}|${user_info.first_name} ${user_info.last_name}] \n 🚀 » ID / VKID: ${utils.sp(users.length - 1)} / ${message.senderId}`});
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);
	ctx = users.find(x => x.id === message.senderId);
	const bot = (text, params) => {
		/* ${utils.pick (Array.from ("👑⚡⭐🔥💎"))}  */
		var text_bot = "";
		
		if (message.user.deluxe) text_bot += "🤴 DELUXE";
		if (message.user.settings.adm && message.user.deluxe) text_bot += " + ADMIN";
		
		if (message.user.settings.adm && !message.user.deluxe) text_bot += "🤴 ADMIN";
		
		if (!message.user.deluxe && !message.user.settings.adm) text_bot = "👤";
		
		return message.send(`[${text_bot}] ${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}
	const reply_bot = (smile, text, params) => {
		return message.reply(`${smile} ${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}
	
	if (!message.user.refsource && message.referralValue && Number (message.referralValue) !== message ["senderId"] && !message.user.refuse) {
    	const user = users.find (x => x.id == Number (message.referralValue));
		
		if (!user) return bot (`скам ссылка недействительна! 🎀`)
		
		user.ref += 1;
		message.user.refuse = true;
		user.balance += 500000000000;
	    message.user.balance += 500000000000;
	    
	    vk.api.messages.send ({ user_id: user.id, random_id: 0, message: `🤡 Вы заскамили «@id${message.user.id} ${message.user.tag}» на $500млрд!` })
	
	    return bot (`вас заскамил «@id${user.id} (${user.tag})»! 🤡
	
	    💰 +500,000,000,000$`)
    }
	
       
    if (message.messagePayload) {
    	if(message.user.ban) {
	if (!message.isChat) {
    return bot(`вы бали забанены навсегда! 📝
    📆 Обжаловать бан можно по [@id1060048895|данной] ссылке.`, {
    	attachment: ""
     });
    }
    }
   
    if(message.user.pizdenka > Date.now()) {
    if (!message.isChat) {
    return bot(`вы заблокированы ещë на ${left(message.user.pizdenka - Date.now())}! 📝
     📆 Обжаловать бан можно по [@id1060048895|данной] ссылке.`);
    }
    
    if (message.isChat) return;
    }
    
    if (message.messagePayload.command) {
    	const command = commands.find(x=> x[0].test(message.messagePayload.command));
    
    if (!command) return;
         
        message.args = message.messagePayload.command.match(command[0]); 
        await command[1](message, bot);
        return;
    }
    }
    
	if(message.user.ban) {
	if (!message.isChat) {
    return bot(`вы были забанены навсегда! 📝
    💰 Взять разблокировку аккаунтка можно через создателя (vk.com/1060048895)`)
    }
    }
   
    if(message.user.pizdenka > Date.now()) {
    if (!message.isChat) {
    return bot(`вы заблокированы ещë на ${craft_left (message.user.pizdenka - Date.now())}! 📝
     💰 Взять разблокировку аккаунтка можно через создателя (vk.com/1060048895)`);
    }
    
    if (message.isChat) return;
    }

    if(ctx.obnova) {
    if (!message.isChat) {
    	return bot(`👔 » Тех.работы! Смотрите СТЕНУ бота!`);
    }
    
    if (message.isChat) {
    	botinfo.msg += 1;
    	return;
    }
    }
    
	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{

reply_bot ("📆", `наша встреча — замечательное событие. Рад тебя приветствовать в Бульба Боте!

📝 Битва кланов, много призов, хорошие бонусы, частые раздачи, хорошее оформление команд — всё это и многое другое уже ждёт вас 😍

💎 Чтобы начать играть, необхожимо всего посмотреть команды по команде «Помощь».`, {
                 keyboard: Keyboard.keyboard([
   [
    Keyboard.textButton ({
     label: "🔥 Донат"
    }),
    Keyboard.textButton ({
     label: `🛍 Магазин`
    }),
Keyboard.textButton ({
label: "⭐ Профиль"
}),
   ],
[
Keyboard.textButton ({
label: "📆 Работы"
}),
Keyboard.textButton ({
label: "💼 Бизнесы"
}),
Keyboard.textButton ({
label: "👑 Топ"
})
],
   [
   Keyboard.textButton({
   label: "👑 Баланс"
   }),
   Keyboard.textButton({
    label: "📝 Помощь"
    }),
    Keyboard.textButton({
     label: "⛈️ Босс"
     })
   ],
   [
    Keyboard.textButton({
     label: "⚙ Настройки"
     }),

     Keyboard.textButton({
      label: "🔑 Автомат"
      }),

      Keyboard.textButton({
       label: "💰 Банк"
       })
   ]
  ])
  })

		message.user.settings.firstmsg = false;
        message.user.balance = 50000;

		saveUsers();
		return;

	}

     if (message.isChat) {
    	const chat = chats.find (x => x.id == message.chatId);
        if (chat) {
        
        if (chat.avtokick) {
        	if (String (message.text).includes ("http") || String (message.text).includes ("https") || String (message.text).includes ("com") || String (message.text).includes ("ru") || String (message.text).includes ("t.me") || String (message.text).includes ("vk.com")) {
        	vk.api.messages.removeChatUser({ chat_id: message.chatId, user_id: message.senderId });
        
            return bot (`данный пользователь был исключен по АВТОкику! ✅`)
        }
        }
        }
    }
    
    
    
	if(!command)
	{
        let randbdcommandtestxuygovno = utils.pick(["Биткоин", "Баланс", "Профиль", "Фермы", "Бизнесы", "Донат", "Магазин", "Казино", "Копать"]);
        let randbdcommandtestxuygovno2 = utils.pick(["Биткоин", "Баланс", "Профиль", "Фермы", "Бизнесы", "Донат", "Магазин", "Казино", "Копать"]);
        if (randbdcommandtestxuygovno === randbdcommandtestxuygovno2) {
        randbdcommandtestxuygovno = utils.pick(["Биткоин", "Баланс", "Профиль", "Фермы", "Бизнесы", "Донат", "Магазин", "Казино", "Копать"]);
        randbdcommandtestxuygovno2 = utils.pick(["Биткоин", "Баланс", "Профиль", "Фермы", "Бизнесы", "Донат", "Магазин", "Казино", "Копать"]);
        }
		if(!message.isChat) return bot(`данной команды не найдено! ✖️
       
      📄 Схожие команды:
      
       ▶ ${randbdcommandtestxuygovno}
       ▶ ${randbdcommandtestxuygovno2}`);
		if(message.isChat) return;

	}
    
	message.args = message.text.match(command[0]);
	
	bool = message.text.match(command[0]);
	
	await message.loadMessagePayload();
	await command[1](message, bot);
	
    botinfo.msg += 1;
    posltime = 0;
    ctx.msg += 1;
    message.user.anorma_all += 1;
    message.user.anorma += 1;
    ctx.activ_get = 0;
	ctx.clickcmd += 1
    ctx.activ = getReg();
    
    if (message.chatId === achat) {
    ctx.alog = getReg();
    }
    
    if (!logger_vk [message.user.uid [0]]) {
   	logger_vk [message.user.uid [0]] = [{
   	message: message.text,
       time: getReg ()
   }]
  }
  
  if (logger_vk [message.user.uid [0]]) {
  	logger_vk [message.user.uid [0]]
      .push ({
      	message: message.text,
          time: getReg ()
      })
  }
  
  vk.api.messages.send ({
  	user_id: own,
      message: `@id${message.user.id} (${ctx.tag}) — ${message.text} (${ctx.settings.adm > 0 ? "АДМИН" : 'ЮЗЕР'})`,
      random_id: 0
  })

  vk.api.messages.send ({
	chat_id: logid,
	message: `@id${message.user.id} (${ctx.tag}) — ${message.text} (${ctx.settings.adm > 0 ? "АДМИН" : 'ЮЗЕР'})`,
	random_id: 0
})
    
});

const bear = {
 hear: (x,a)=> commands.push ([x,a])
}

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	},
	bot: (p, f) => {
		commands.push([p, f]);
},
one: (p,f) => {
commands.push([p,f]);
}
}

const lupus = {
	bot: (p,f) => {
		commands.push([p, f]);
}
}

const Bear = {
bot: (x,a) => {
commands.push([x,a]);
},
hear: (x,a) => {
commands.push([x,a]);
}
}

const ythWeh = {
bot: (x,a) => {
commands.push([x, a]);
}
}

const opra = {
	hear: (p, f) => {
		commands.push([p, f]);
	},
	bot: (p, f) => {
		commands.push([p, f]);
},
one: (p,f) => {
commands.push([p,f]);
}
}

const doubleSkamming = {
	hear: (p, f) => {
		commands.push([p, f]);
	},
	bot: (p, f) => {
		commands.push([p, f]);
},
one: (p,f) => {
commands.push([p,f]);
}
}

var kosti = [];
let kostitime = 30000;

bear.hear (/^(?:режим кости)$/i, async (message, bot) => {
	if (message.chatId !== 225) return bot (`зайдите в официальную беседу «Кости»! 👇🏻`, {
		keyboard: Keyboard.keyboard ([
		   Keyboard.urlButton ({
			url: "https://vk.me/join/ZEgu1dzKr3WWFckE2_ejS8Ws20nI1_m5EkU=",
			label: "🔗 Кости"
			})
		]).inline ()
	})
	
	return bot (`режим костей включен! Приятной игры! ⭐👇🏻`, {
		keyboard: Keyboard.keyboard ([
		   [gen_key ("✅ Ставка", "ставка кости"), gen_key ("⭐ Баланс", "баланс"), gen_key ("💸 Бонус", "бонус")],
	       [gen_key ("🤝 Суть игры", "кости суть")],
	       [
	      Keyboard.urlButton ({
		   url: "https://vk.me/join/ZEgu1dzKr3WWFckE2_ejS8Ws20nI1_m5EkU=",
		   label: "🔗 Беседа #1"
		  }),
		Keyboard.urlButton ({
			url: "https://vk.me/join/ZEgu1dzKr3WWFckE2_ejS8Ws20nI1_m5EkU=",
			label: "🔗 Беседа #2"
		})
		]
		])
	})
})

bear.hear (/^(?:ставка кости)$/i, (message, bot) => {
	if (message.chatId !== 225) return bot (`зайдите в официальную беседу «Кости»! 👇🏻`, {
		keyboard: Keyboard.keyboard ([
		   Keyboard.urlButton ({
			url: "https://vk.me/join/ZEgu1dzKr3WWFckE2_ejS8Ws20nI1_m5EkU=",
			label: "🔗 Кости"
			})
		]).inline ()
	})
	
	if (!kosti.length) {
	return bot (`чтобы поставить ставку в костях, вам необходимо прописать команду: 👇🏻
	
	🔗 Скости [сумма]`);
	}
	
	else {
		
		let summa = 0;
		
		kosti.map (x => summa += x.summa);
		
		return bot (`информация об игре «Кости»:
		
${kosti.map (x => `✅ @id${x.id} (${x.name}) — ${utils.sp (x.summa)}$`).join ("\n")}
		
		💸 Общий банк: ${utils.sp (summa)}$
		➕ До окончания: ${craft_left (kostitime)}`)
	}
})

bear.hear (/^(?:скости)\s(.*)$/i, async (message, bot) => {
	if (message.chatId !== 225) return bot (`зайдите в официальную беседу «Кости»! 👇🏻`, {
		keyboard: Keyboard.keyboard ([
		   Keyboard.urlButton ({
			url: "https://vk.me/join/ZEgu1dzKr3WWFckE2_ejS8Ws20nI1_m5EkU=",
			label: "🔗 Кости"
			})
		]).inline ()
	})
	
	const arg = Number (String (message.args [1]).replace (/к/g, "000"));
	
	if (message.user.balance < arg) return bot (`нехватает денег на ставку! 💸`);
	
	message.user.balance -= arg;
	if (kosti.find (x => x.id == message.user.id)) return bot (`вы уже поставили ставку! ⛔`)
	
	kosti.push ({ name: message.user.tag, id: message.user.id, summa: arg })
	
	if (kosti.length >= 5) {
		
		const timer = setInterval (() => {
			kostitime -= 1000;
		}, 1000);
		
		botinfo.kosti += 1;
		
		vk.api.messages.send ({ chat_id: 225, random_id: 0, message: `✅ Ставки приняты и не будут приниматься до окончания игры!` })
		
		setTimeout (() => {
			clearInterval (timer);
			
			kostitime = 30000;
			
			const random = utils.pick ([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]);
			
			let summa = 0;
			
			kosti.map (x => summa += x.summa);
			
			users.find (x => x.id == kosti [random].id).balance += Number (summa);
			
			vk.api.messages.send ({ chat_id: 225, random_id: 0, message: `🤝 Результаты игры «Кости #${botinfo.kosti}»:
			
			✅ Победитель: @id${kosti[random].id} (${kosti[random].name})\n\n💸 +${utils.sp (summa)}$`})
			
			kosti = [];
		}, 30000);
	}
	
	await bot (`успешная ставка на сумму ${utils.sp (arg)}$! ✅`)
})

bear.hear (/^(?:кости суть)$/i, async (message, bot) => {
	return bot (`суть игры «Кости»:
	
	🤝 5 человек ставят ставку на определенную сумму, человек, у которого выпало большее очко — побеждает.`)
})

bear.hear (/^(?:проверить конкурс)$/i, async (message, bot) => {
	const sf = await vk.api.call("groups.isMember", { user_id: message.senderId, group_id: groupId });
	const jd = await vk.api.call("groups.isMember", { user_id: message.senderId, group_id: 226296383 });
	
	if (!sf) return bot (`вы не подписаны на Свагу! ⛔`)
	if (!jd) return bot (`вы не подписаны на (@id1060048895)! ⛔`)
	
	message.user.skin = skinlist ["drill"]
	
	return bot (`вам выдано:
	
    🥷 DRILL SKIN + RESPECT`)
})

bear.hear (/^(?:количество команд)$/i, msg => msg.send (commands.length))
// BP

const bearpass_com = {
	"1": {
		check: function (user) {
			if (user ["c1"] >= 500) {
				user ["balance"] += 350000000000
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user ["c3"] += 10
				}
				
				return {
					donate_case: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"2": {
		check: function (user) {
			if (user ["balance"] >= 1000000000000000) {
				user ["balance"] += 25000000000000
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user ["vip"] = true;
				}
				
				return {
					vip: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"3": {
		check: function (user) {
			if (user ["c2"] >= 1000) {
				user ["c3"] += 2
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user ["premium"] = true;
				}
				
				return {
					premium: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"4": {
		check: function (user) {
			if (user ["btc"] >= 1000000000) {
				user ["btc"] += 2000000000
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user ["imortal"] = true;
				}
				
				return {
					imortal: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"5": {
		check: function (user) {
			if (user ["eth"] >= 450000000) {
				user ["eth"] += 200000000
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user ["tester"] = true;
				}
				
				return {
					tester: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"6": {
		check: function (user) {
			if (user ["balance"] >= 2000000000000000) {
				user ["balance"] += 250000000000000
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user ["settings"] ["adm"] = 4;
					user ["prefix"] = "🔥 Старший администратор"
				}
				
				return {
					adm: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"7": {
		check: function (user) {
			if (user ["stroykalvl"] >= 50) {
				user ["c3"] += 15
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user ["c3"] += 15;
				}
				
				return {
					dcase: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"8": {
		check: function (user) {
			if (user ["stroykalvl"] >= 300) {
				user ["c2"] += 200
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.letmon = true;
				}
				
				return {
					letmon: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"9": {
		check: function (user) {
			if (user ["btc"] >= 4000000000) {
				user ["c1"] += 1
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c3 += 3;
				}
				
				return {
					dcase: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"10": {
		check: function (user) {
			if (user ["stroykalvl"] >= 500) {
				user ["letmon"] = true;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c3 += 10;
				}
				
				return {
					letmon: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"11": {
		check: function (user) {
			if (user ["stroykalvl"] >= 800) {
				user ["btc"] +=350000000;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c3 += 30;
				}
				
				return {
					btc: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"12": {
		check: function (user) {
			if (user ["stroykalvl"] >= 1000) {
				user ["c3"] += 15;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c3 += 10;
				}
				
				return {
					c3: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"13": {
		check: function (user) {
			if (user ["stroykalvl"] >= 1500) {
				user ["timers"].bonus = 0;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c4 += 30;
				}
				
				return {
					c4: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"14": {
		check: function (user) {
			if (user ["stroykalvl"] >= 2500) {
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c3 += 30;
				}
				
				return {
					letmon: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"15": {
		check: function (user) {
			if (user ["stroykalvl"] >= 3000) {
				user ["c1"] += 150;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c4 += 15;
					user.luxury = true;
				}
				
				return {
					luxury: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"16": {
		check: function (user) {
			if (user ["stroykalvl"] >= 3500) {
				user ["c2"] += 200;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c4 += 15;
				}
				
				return {
					luxury: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"17": {
		check: function (user) {
			if (user ["stroykalvl"] >= 5000) {
				user ["c3"] += 30;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c4 += 15;
				}
				
				return {
					luxury: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"18": {
		check: function (user) {
			if (user ["stroykalvl"] >= 7000) {
				user ["c1"] += 250;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.c4 += 50;
					user.luxury = true;
				}
				
				return {
					luxury: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	"19": {
		check: function (user) {
			if (user ["stroykalvl"] >= 10000) {
				user ["len_per"] = true;
				user ["bplvl"] += 1;
				
				if (user ["bearpass"]) {
					user.letcase += 50;
				}
				
				return {
					luxury: user ["bearpass"],
					quest: true
				}
			}
			
			else {
				return false
			}
		}
	},
	
	
	
	
}

bear.hear (/^(?:бульбапасс|💎 BulbaPass)$/i, async (message, bot) => {
	//const bp = bearpass_com [message.user.bplvl].check (message.user)
	
	const lvl = message.user.bplvl;
	
	const des = {
		"1": `ℹ️ Задание: набрать 500 старых контейнеров («Кейсы»)
		💰 Приз: 350,000,000,000$
		🔍 Дополнительный приз: 10 донат-кейсов`,
		"2": `ℹ️ Задание: иметь на балансе 1,000,000,000,000,000$ («Баланс»)
		💰 Приз: 25трлн$
		🔍 Дополнительный приз: VIP статус`,
		"3": `ℹ️ Задание: набрать 1,000 дубайских контейнеров («Кейсы»)
		💰 Приз: 2 донат-кейса.
		🔍 Дополнительный приз: PREMIUM статус`,
		"4": `ℹ️ Задание: набрать 1,000,000,000 BTC («Биткоин»)
		💰 Приз: 2,000,000,000 биткоинов.
		🔍 Дополнительный приз: IMORTAL статус.`,
		"5": `ℹ️ Задание: набрать 450млн ETH («Банк»)
		💰 Приз: 200млн ETH
		🔍 Дополнительный приз: PREMIUM подписка навсегда`,
		"6": `ℹ️ Задание: иметь на балансе 20трлд$ («Баланс»)
		💰 Приз: 250трлн$
		🔍 Дополнительный приз: Старший администратор`,
		"7": `ℹ️ Задание: выполнить 50 заказов на стройке («Стройка»)
		💰 Приз: 15 донат-кейсов
		🔍 Дополнительный приз: 15 донат-кейсов.`,
		"8": `ℹ️ Задание: выполнить 300 заказов на стройке («Стройка»)
		💰 Приз: 200 вторых кейсов.
		🔍 Дополнительный приз: статус «Летний монстр»`,
		"9": `ℹ️ Задание: иметь на руках 4,000,000,000 биткоинов («Биткоин»)
		💰 Приз: 1 донат-кейс
		🔍 Приз с BearPass+: 3 донат-кейса`,
		"10": `ℹ️ Задание: выполнить 500 заказов на стройке («Стройка»)
		💰 Приз: статус «Летний монстр»
		🔍 Дополнительный приз: 10 донат-кейсов.`,
		"11": `ℹ️ Задание: выполнить 800 заказов на стройке («Стройка»)
		💰 Приз: 350,000,000 BTC
		🔍 Дополнительный приз: 30 донат-кейсов.`,
		"12": `ℹ️ Задание: выполнить 1,000 заказов на стройке («Стройка»)
		💰 Приз: 15 донат-кейсов.
		🔍 Дополнительный приз: 10 донат-кейсов.`,
		"13": `ℹ️ Задание: выполнить 1,500 заказов на стройке («Стройка»)
		💰 Приз: бесплатный бонус.
		🔍 Дополнительный приз: 30 рейтинг кейсов.`,
		"14": `ℹ️ Задание: выполнить 2,500 заказов на стройке («Стройка»)
		💰 Приз: скидка 10% на все товары.
		🔍 Дополнительный приз: 30 донат-кейсов.`,
		"15": `ℹ️ Задание: выполнить 3,000 заказов на стройке («Стройка»)
		💰 Приз: 150 первых кейсов.
		🔍 Дополнительный приз: 15 рейтинг кейсов + LUXURY статус.`,
		"16": `ℹ️ Задание: выполнить 3,500 заказов на стройке («Стройка»)
		💰 Приз: 200 вторых кейсов.
		🔍 Дополнительный приз: 15 рейтинг кейсов`,
		"17": `ℹ️ Задание: выполнить 5,000 заказов на стройке («Стройка»)
		💰 Приз: 30 DK
		🔍 Дополнительный приз: 15 рейтинг кейсов`,
		"18": `ℹ️ Задание: выполнить 7,000 заказов на стройке («Стройка»)
		💰 Приз: 250 первых кейсов.
		🔍 Дополнительный приз: 50 рейтинг кейсов`,
		"19": `ℹ️ Задание: выполнить 10,000 заказов на стройке («Стройка»)
		💰 Приз: статус «Летний перерыв»
		🔍 Дополнительный приз: 50 летних кейсов.`,
		"20": `ℹ️ Задание: выполнить 12,000 заказов на стройке («Стройка»)
		💰 Приз: особый статус «Summer»
		🔍 Дополнительный приз: эксклюзив подарки`,
	    }
	
	return bot (`ваш уровень BulbaPass: ${lvl} (сезон: «Зимний апокалипсис»)
	
	${message.user.bearpass ? "⭐ Имеется платная подписка на BP (до 31.12.2024, 23:59 MSK)" : "📛 Подписка на платный BP отсутствует."}
	
	${!des [lvl] ? "✨ Выполнены все задания с BP!" : des [lvl]}`, {
		keyboard: Keyboard.keyboard ([
		   [gen_key ("⭐ Обычный", "призы бп"), gen_key ("💎 Платный", "призы бпс")],
		   gen_key ("🔍 Проверить задание", "проверить задание")
		]).inline ()
	})
})

bear.hear (/^(?:призы бп)$/i, async (message, bot) => {
	return bot (`призы с обычного BP:
	
	💎 500 ТРЛН$ и 350 МЛРД$ в общей сумме.
	🎁 Бесплатный бонус.
	🔍 200 МЛН ETH + 65 донат-кейсов + 2,350 МЛРД биткоинов + 400 ВТОРЫХ кейсов.
	⭐ Скидка 10% на все товары.
	📦 150 первых кейсов.
    ✨ Статус «Летний монстр».
    🚀 Эксклюзивный статус «Зимушка-зима».
    💸 Статус «Зимний апокалипсис».`)
})

bear.hear (/^(?:призы бпс)$/i, async (message, bot) => {
	return bot (`призы с BP+:
	
	💎 500 ТРЛН$ и 350 МЛРД$ в общей сумме.
	🔍 200 МЛН ETH + 160 донат-кейсов + 2,350 МЛРД биткоинов.
    💯 АДМИНКА навсегда.
    🎁 Бесплатный бонус.
    👨‍💻 Подписка «PREMIUM» навсегда.
    💎 PREMIUM + IMORTAL + VIP статусы.
    📦 150 первых кейсов.
    💽 400 вторых кейсов.
    ⭐ LUXURY статус навсегда.
    📦 125 рейтинг кейсов.
    ✨ Статус «Зимний монстр».
    💸 Статус «Зимний перерыв».
    💽 50 зимних кейсов.
    🚀 Эксклюзивный статус «Зимушка-зима»
`)
})

bear.hear (/^(?:проверить задание)$/i, async (message, bot) => {
	
	if (message.user.bplvl == 16) return bot (`вы выполнили все уровни BP! 🎀
    ⏱️ Ожидайте нового сезона.`)
	
	const bp = bearpass_com [message.user.bplvl].check (message.user)
	
	if (!bp) return bot (`вы не выполнили задание полностью! 😔
	🔍 Выполняй задание и приходи позже.`)
	
	if (bp) {
		return bot (`вы выполнили задание из BulbaPass! 💎
		🔍 Бонусы начислены на ваш аккаунт.
		${message.user.bearpass ? "⭐ Бонус за платную подписку начислен!" : "🔍 С платной подпиской бонусов станет больше!"}`)
	}
})

bear.hear(/^(?:инфокосмос|икосмос|хуйсукахз)$/i, async (message, bot) => {
await fetch("https://api.nasa.gov/planetary/apod?api_key=Xam8fZT4b5Wa84YP9igJPZg4fdwsxEP6vdNvZohL").then(q=>q.json()).then(async x=>await bot(`информация о космосе на дату «${x.date}», «${x.copyright}»:
👔 — Новости: ${x.explanation}.`, {attachment:x.hdurl}))
});

global.setInterval(async () =>{
await users.forEach(e=>{
if (e.marriage.partner) {e.braktime+=1000;};
});
}, 1000);

setInterval (async () => {
await users.map (x => {
if (x.settings.adm > 0) {
x.captcha.touch = false
}
})
}, 1);

bear.hear(/^(?:аправила)$/i, async (message, bot) => {
if (message.user.settings.adm < 1) return;
	await vk.api.messages.send({
    chat_id: message.chatId,
	random_id: 0,
    forward: JSON.stringify({
				peer_id: 569336824,
				conversation_message_ids: 74217
			}),
			message: `✏️ Правила для администраторов:`
			});
})

global.setInterval(async () => {
await users.map(x=>{if(x.clickbilet>=250){x.bilet+=1;x.clickbilet-=250;}})},1000);

bear.hear(/^(?:топ лайки)$/i, async (message, bot) => {
    let top = [];
    await users.filter(x => x.liker.length > 0).map(x => {
        top.push({ like: x.liker.length, balance: x.balance, tag: x.tag, id: x.id, mention: x.mention });
    });

    top.sort((a, b) => {
        return b.like - a.like;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++) {
        if (!top[i]) return message.send('👥 В боте должно зарегистрировано не менее 10 игроков!');
        const user = top[i];

        text += `${i === 9 ? `🔟` : `${i + 1}⃣`} ${user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`} — ${utils.sp(user.like)}\n`;
    }

    return bot(`топ игроков по лайкам на постах:
        ${text}—————————————————
👔 — ${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.liker.length)}`);
});

bear.hear(/^(?:активность)\s([0-9]+)$/i, async (message, bot) => {
if (ctx.settings.adm < 3) return;
var user = await users.find(x => x.uid.find (q => q == message.args [1]));
return bot(`информация о активности «${user.tag}»:
⭐ — Активность в АДМ.БЕСЕДЕ: ${user.alog == String () ? 'не найдено' : user.alog}.
⭐ — Активность в боте: ${user.activ == String () ? 'не найдено' : user.alog}.
`);
});
bear.hear(/^(?:бкик)$/i, async (message, bot) => {
if (message.isChat === false) return bot(`это не беседа!`);
var response = await vk.api.messages.getConversationsById({ peer_ids: message.peerId, group_id: groupId, random_id: 0});
 if (response.items[0].chat_settings.owner_id !== message.senderId) return bot(`команда доступна только создателю беседы.`);
if (message.replyMessage) {
   id = message.replyMessage.senderId;

await vk.api.messages.removeChatUser({ chat_id: message.chatId, user_id: id });
return bot(`человек «${users.find(x=>x.id===id).tag}» был кикнут! ⭐`);
}
});

bear.hear(/^(?:топ медали)$/i, async (message, bot) => {
    let top = [];

    users.filter(x => x.settings.adm === 0).map(x => {
        top.push({ bossyr: x.bossyron, medal: x.maycount, tag: x.tag, id: x.id, mention: x.mention });
    });

    top.sort((a, b) => {
        return b.medal - a.medal;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++) {
        if (top.length < 10) return bot(`нету 10-ти игроков! 😞`);
        const user = top[i];

        text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${user.medal} медалей.\n`;
    }
    return bot(`топ по общему урону:
  ${text}—————————————————
👑 — ${utils.gi(find() + 1)} ${message.user.tag} — ${message.user.maycount} шт.`,
        {
            keyboard: JSON.stringify(
                {
                    "inline": true,
                    "buttons": [
                        [{
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "⏰ Профиль"
                            },
                            "color": "positive"
                        },
                        {
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "💸 Баланс"
                            },
                            "color": "negative"
                        }],
                    ]
                })
        });
});
bear.hear(/^(?:постл)\s([0-9]+)$/i, async (message, bot) => {
if (ctx.settings.adm == 0) return;
var user = await users.find(x => x.uid.find (q => q == message.args [1]));
if (user.liker.length == 0) return bot(`у юзера нету постов, которые он лайкал! 👔`);
var result = "";
for (b in user.liker) {
result += `${b}. https://vk.com/wall-210137308_${user.liker[b]}\n`;
}
await bot(`посты, которые лайкал юзер:
${result}`);
});
bear.hear(/^(?:(\/)info)$/i, async (message, bot) => {
var id = 0;
if (message.replyMessage) {
id = message.replyMessage.senderId;
const [us] = await vk.api.users.get({ user_ids: id, fields: "sex,status,domian,bdate,photo_200" });
const a = await vk.api.utils.getShortLink({ url: `${us.photo_200}` });
let rs = await vk.api.users.get({ user_ids: id, fields: "last_seen, online, last_name, first_name" });
let [inf] = await vk.api.users.get({ user_ids: id });
if(rs[0].online === 0) tx = `${inf.first_name} ${inf.last_name} — Не онлайн!`;
if(rs[0].last_seen) tx = `${inf.first_name} ${inf.last_name} — Онлайн с телефона!`;
if(!rs[0].last_seen) tx = `${inf.first_name} ${inf.last_name} — Был в сети недавно!`;
if(rs[0].online === "undefined") tx = `${inf.first_name} ${inf.last_name} — В сети с ПК!`;
await bot(`
👤 » И.Ф: @id${message.senderId} (${us.first_name} ${us.last_name})
✏ » Адрес: ${us.domian ? us.domian : '⛔'}
🆔 » Цифровой ID: ${id}
?? » Ссылка на аву: ${a.short_url}
${us.sex === 2 ? '👨' : '👧'} » Пол: ${us.sex === 2 ? 'Мужской' : 'Женский'}
✏ » Статус: ${us.status}
🎂 » Дата рождения: ${us.bdate ? us.bdate : '⛔'}
🔗 » Ссылка: vk.com/id${id}
🧲 » ${tx}`);
}
if (message.forwards[0]) {
id = message.forwards[0].senderId;
const [us] = await vk.api.users.get({ user_ids: id, fields: "sex,status,domian,bdate,photo_200" });
const a = await vk.api.utils.getShortLink({ url: `${us.photo_200}` });
let rs = await vk.api.users.get({ user_ids: id, fields: "last_seen, online, last_name, first_name" });
let [inf] = await vk.api.users.get({ user_ids: id });
if(rs[0].online === 0) tx = `${inf.first_name} ${inf.last_name} — Не онлайн!`;
if(rs[0].last_seen) tx = `${inf.first_name} ${inf.last_name} — Онлайн с телефона!`;
if(!rs[0].last_seen) tx = `${inf.first_name} ${inf.last_name} — Был в сети недавно!`;
if(rs[0].online === "undefined") tx = `${inf.first_name} ${inf.last_name} — В сети с ПК!`;
await bot(`
👤 » И.Ф: @id${message.senderId} (${us.first_name} ${us.last_name})
✏ » Адрес: ${us.domian ? us.domian : '⛔'}
🆔 » Цифровой ID: ${id}
📸 » Ссылка на аву: ${a.short_url}
${us.sex === 2 ? '👨' : '👧'} » Пол: ${us.sex === 2 ? 'Мужской' : 'Женский'}
✏ » Статус: ${us.status}
🎂 » Дата рождения: ${us.bdate ? us.bdate : '⛔'}
🔗 » Ссылка: vk.com/id${id}
🧲 » ${tx}`);
}
});

bear.hear(/^(?:доминфо)$/i, async (message, bot) => {
	return bot (`данная функция недоступна.`)
  	function getHome() {
  	var result = ctx.realty.home;
  return result;
  };

  const home = await getHome();
  if (home === 0) return bot(`у вас нету дома! ⭐`);
  return bot(`ваш дом «${homes[home - 1].name}»:
  ⭐ — Прибыль: ${Math.floor(homes[home - 1].cost / 5)}$.
  💵 — Баланс: ${utils.sp(ctx.balance)}$.
  `);
  });

bear.hear(/^(?:автомат|ав|🔑 Автомат)$/i, async (message, bot) => {
await bot(`игровой автомат, вот что за развлечение! Скорее покупай билеты, и крути свой барабан, пока билеты не разобрали!`, {attachment:"photo-210137308_457241684", keyboard:JSON.stringify(
  {
   "inline": true,
   "buttons": [
   [{
    "action": {
    "type": "text",
    "payload": "{}",
    "label": "🎰 Крутить"
    },
   "color": "positive"
   }],
   [{
    "action": {
    "type": "text",
    "payload": "{}",
    "label": "✏️ Купить билет"
    },
    "color": "positive"

    }],
	[{
		"action": {
		"type": "text",
		"payload": "{}",
		"label": "📄 Призы"
		},
		"color": "positive"
	
		}],
   ]
  })
  })
  
var costes = {
	avcost: 15
}

bear.hear(/^(?:✏️ Купить билет)$/i, async (message, bot) => {
if (message.user.bilet_like < 35) return bot(`у вас меньше 50 билетов! ✖️

❤ Получить билеты можно ставя лайки на записи в Bot Bear.`);
message.user.bilet_like -= Number (35);
message.user.bilet += 1;
await bot(`вы купили пропускной билет в игру в автомат за 50 билетов! 💸

💎 Ваши билеты: ${utils.sp (message.user.bilet)}`);
});

bear.hear(/^(?:📄 Призы)$/i, async (message, bot) => {
	return bot (`призы с рулетки:
	
	💰 Донат-валюта
	👑 Рейтинг
	💰 Валюта
	⚙ Биткоины
	🔑 Эфириумы
	📦 Кейсы
	
	🥷 Чтобы получить билет, необходимо набрать 50 баллов (билетов).
	`)
})

bear.hear(/^(?:🎰 Крутить)$/i, async (message, bot) => {
if (message.user.bilet == 0) return bot(`недостаточно билетов! ??`);
message.user.bilet -= 1;
var random = utils.pick([1,1,2,2,3,3,4,4,5,5,6,6]);
if (random == 1) {
var rdb = utils.random(0,5050594902);
message.user.balance += rdb;
await bot(`вы получили ${utils.sp(rdb)}$! 🔑`);
await message.send ({ sticker_id: 15562 })
}
if (random == 2) {
var rddc = utils.random (0,20)
message.user.dcoin += rddc;
await bot(`вы выйграли ${rddc} донат-монет! 🔑`);
await message.send ({ sticker_id: 15562 })
}
if (random == 3) {
var rd = utils.random(0,500000);
message.user.btc += rd;
await bot(`вы получили ${utils.sp(rd)}💿! 🔑`);
await message.send ({ sticker_id: 15562 })
}

if (random === 4) {
var caase = utils.random(5, 200);
message.user.c1 += caase;
await bot(`вам выпало ${utils.sp(caase)} кейсов. 💡`);
await message.send ({ sticker_id: 15562 })
}
if (random === 5) {
var ethd = utils.random(5, 200123);
message.user.eth += ethd
await bot (`вы выиграли ${utils.rn(ethd)} ETH! ⚙`) 
await message.send ({ sticker_id: 15562 })
}
if (random === 6) {
var ethd = utils.random(5, 6000);
message.user.rating += ethd
await bot (`вы выиграли ${utils.rn(ethd)} рейтинга! 👑`) 
await message.send ({ sticker_id: 15562 })
}
});
bear.hear(/^(?:.миловиен напомни)\s([0-9]+)\s(мин|час|дней)\s([^]+)$/i, async (message, bot) => {
var napomni = message.args[2].toString().replace(/мин/gi, "min").replace(/час/gi, "chas").replace(/дней/gi, "day");
var result = null;
if (napomni === "min") {result=60000*message.args[1];};
if (napomni === "chas") {result=3600000*message.args[1];};
if (napomni === "day") {result=3600000*24*message.args[1];};

global.setTimeout(async () => {
await vk.api.messages.send({
user_ids: message.senderId,
random_id: Math.random() * 99999,
message: message.args[3]});
}, result);
await bot(`напомню фразу «${message.args[3]}» через ${left(result)}. ⭐`);
});

bear.hear(/^(?:вор)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 1 || message.args[1] >= 4) return;

	const int = utils.random(1, 3);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		const ramn = utils.pick([1000, 3000, 8000, 50000, 25000]);
		message.user.balance += ramn;
		return bot(`вор был найден человеком «${ctx.tag}»!
        ⌛ » Полиция заплатила вам ${ranm}$.`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали под какой цифрой скрывался вор! 🥺`);
	}
});

bear.hear(/^(?:помощь|хелп|команды|🎲 Помощь|📝 Помощь)$/i, async function (context, bot) {
      await bot (`начать пользоваться @bearbot (Bot Bear) очень просто!
      
      📝 Всего 4 раздела в помощи, чтобы посмотреть какой-либо из разделов, нажмите на кнопку.`, {
      	keyboard: Keyboard.keyboard ([
             [
                Keyboard.textButton ({
               	label: "📝 Разное"
               }),
               
                 Keyboard.textButton ({
               	label: "🎮 Игры"
               })
              ],
              [
                  Keyboard.textButton ({
                  	label: "🔥 Заработок"
                  }),
                  
                  Keyboard.textButton ({
                  	label: "👤 Прочее"
                  })         
              ],
              [
                  Keyboard.textButton ({
                  	label: "📆 Настройки"
                  }),
                  Keyboard.urlButton ({
                  	label: utils.pick (Array.from ("💎📆⚡⭐")) + " Донат",
                      url: "https://vk.com/market-210137308"
                  })
                  
              ],
              [
                  Keyboard.urlButton ({
                  	label: "📋 Беседа #1",
                      url: "https://vk.me/join/AJQ1d1vpPB/6D4JJwVOpDZbU"
                   })
              ]
      	]).inline ()
      })

})

bear.hear(/^(?:📆 Настройки|⚙ Настройки|настройки)$/i, async (message, bot) => {
	const rassil = message.user.rassil ? '✅' : '⛔'
	const uvedi = message.user.notifications ? '✅' : '⛔'
	
	return bot (`подробная информация о ваших настройках:
	
	${rassil == '✅' ? '✅ Рассылка включена' : '⛔ Рассылка выключена'}
	${uvedi == '✅' ? '✅ Уведомления включены' : '⛔ Уведомления выключены'}	
	`, {
		keyboard: Keyboard.keyboard ([
		   Keyboard.textButton ({
			    label: rassil == '✅' ? '✅ Рассылка включена' : '⛔ Рассылка выключена',
			    color: rassil == '✅' ? Keyboard.POSITIVE_COLOR : Keyboard.NEGATIVE_COLOR
    		}),
    Keyboard.textButton ({
    	label: uvedi == '✅' ? '✅ Уведомления включены' : '⛔ Уведомления выключены',
        color: uvedi == '✅' ? Keyboard.POSITIVE_COLOR : Keyboard.NEGATIVE_COLOR
    })
	    ]).inline ()
	})
})

bear.hear(/^(?:📜 Статистика|бот|стата|📈 » Статистика)$/i, function (message, bot) {
let text = "";
if (message.user.settings.adm < 5) return bot (`покупка администратора — «Донат».`)
const balalance = users.reduce(function (cum, bal) {
cum + bal.balance;
});

return bot(`информация о боте:
⭐ Всего игроков: ${utils.sp(users.length)} шт.
🆘 Всего репортов: ${utils.sp(botinfo.rep)} шт.
📄 Сообщений: ${utils.sp(botinfo.msg)} шт.

👨‍💻 Кодер: @ostronix (Стас Островский)

📊 Общий процент падений курса руды: ${rudaproc [0].zhelezo + rudaproc [0].zoloto + rudaproc [0].almaz+rudaproc[0].materia}%
`);
});

bear.hear(/^(?:аниме)$/i, async (message, bot) => {
const { data } = await axios.get ("https://anime777.ru/api/rand?type=&genre=&country=&year=")
message.user.last_anime = {
	name: data.material_data.title,
	des: data.material_data.description
}

await message.send(`✏️ @id${message.senderId} (${message.user.tag}), сгенерировал аниме:
📆 Название аниме: ${data.material_data.title}, ${data.material_data.title_en}.
🆔 ID сериала: ${data.id}.
 `, {
 	keyboard: Keyboard.keyboard ([
     [gen_key ("✏️ Описание", "аниме описание"), gen_key ("🔥 Ещë", "аниме")]
     ]).inline ()
 })
 
})
});

bear.hear(/^(?:аниме описание)$/i, async (message, bot) => {
	const anime = message.user.last_anime
	
	if (!anime) return bot (`в данный момент, вы не сделали ни одного запроса по команде «Аниме». ${smileerror}`)
	
	return bot (`описание аниме под названием «${anime.name}»:
	${anime.des}`)
})

bear.hear(/^(?:череп)$/i, async (message, bot) => {
await bot(`чепер «Стиллиур» хочет поговорить с тобой.

💀 — «Собери все 15 конфет для моего мешка, но будь осторожен, мумии уходят раз в день».
💀 — «Взамен я подарю тебе легендарный статус «Черепной» и очень ценную донат-машину».

🎮 — Искать конфеты можно по команде «Искать конфеты»`, {attachment:"photo-210137308_457241584"});
await bot(`для более удобного поиска, мы сделали для вас мини-панель. 💀`, {keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "🔍 Искать конфеты"
				},
			"color": "positive"
				}],
			]
		})
		});
});

bear.hear(/^(?:искать конфеты|🔍 Искать конфеты)$/i, async (message, bot) => {
if (message.user.getJo > Date.now()) return bot(`следущие поиски через ${left(message.user.getJo - Date.now())}. 🎮`);
if (message.user.cherep) return bot(`у вас уже есть статус «Черепной». 😭`);

ctx.getJo = Date.now() + 3600000*24;
ctx.konfeti += 1;

return bot(`вы успешно нашли конфету на ${utils.pick (["стуле", "крыше"])}! ✨`);
});

bear.hear(/^(?:добавить заметку)\s([^]+)$/i, async (message, bot) => {
if (message.user.zametka.length >= 10) return bot(`нельзя создавать более 10 заметок!
🎮 Удалить заметки — «удалить заметки».`);
await message.user.zametka.push({ id: message.user.zametka.length, name: message.args[1] });
await bot(`заметка была успешна добавлена!
👑 — Заметки: «Заметки».`);
});

bear.hear(/^(?:заметки)$/i, async (message, bot) => {
if (!message.user.zametka.length) return bot (`заметок не найдено! 🧐`)
var result = await message.user.zametka.map(x=>`🃏 Заметка #${x.id} — ${x.name}`).join('\n');
await bot(result);
});

bear.hear(/^(?:удалить заметки)$/i, async (message, bot) => {
message.user.zametka = [];
await bot(`все заметки были очищены! 👑`);
});

bear.hear(/^(?:👤 Прочее)$/i, async (message, bot) => {
	return bot (`команды прочего характера:
    
   💡 Эльф
   🆗 НикМеню (Нменю)
   🥷 Статистика взлома
   ⛈️ Кейсы
   🤴 Топ
   👤 Профиль
   ⭐ Баланс
   📊 Банк
   💎 Рейтинг
  	📝 Ник
	  🛍 Магазин
  	💼 Продать
  	🔋 Ферма
  	🤝 Передать
  	📲 Подарок
  	📆 Бонус
  	👥 Брак
    🗣️ Реферал`)
   
})

bear.hear (/^(?:🎮 Игры)$/i, async (message, bot) => {
	return bot (`команды игрового характера:
	
	🎲 Кубик
	💀 Череп
	⚡ Казино
	📊 Трейд
	💽 Стаканчик
	⏱️ Сейф
	⛏️ Копать 
	🚕 Таксовать
	🤴 Босс
	`)
})

bear.hear(/^(?:📝 Разное)$/i, async (message, bot) => {
	return bot (`команды развлекательного характера:
	
	   📝 Заметки
    🌍 Аниме
    💎 Реши
    ⭐ Анекдот
    🔮 Шар
    📊 Инфа — информация в %.
	`)
})

bear.hear(/^(?:🔥 Заработок)$/i, async (message, bot) => {
	return bot (`команды заработка:
	
    👷 Стройка
    💧 БеарПасс
    📆 Работа
    💎 Дайвинг
    🚕 Таксовать
    🛳 Круиз
    🏞 Дайвинг
    🕵 Сбор металла
    ⚔️ Охота
    🏘 Город
    👮 Ограбить
    💼 Бизнес
    🔥 Фермы
	`)
})
var os = require("os");
bear.hear(/^(?:рестарт)$/i, async function (message, bot) {
	if (message.user.settings.adm < 5000) return;
await require ("child_process").exec ("pm2 restart bearbot.js")

return bot ("- Бот успешно был перезапущен!")
})

let zal = 0;

bear.hear(/^(?:👑 Босс|босс|⛈️ Босс)$/i, async (message, bot) => {
	return bot(`нанеси последний удар по боссу, и получи заветный ПРИЗ! 👑
	
	🎎 Босс: «${boss.name}»
	❤ Здоровье: ${utils.sp(boss.xp)} / ${utils.sp(boss.max)}
	
	👊 Чтобы нанести удар по боссу, пропишите команду «Босс атака».`,
	{
	attachment: `${boss.photo}`,
	keyboard: Keyboard.keyboard ([
	[Keyboard.textButton ({
	label: "🎎 Босс топ"
	}),
	Keyboard.textButton ({
	label: "👊 Атака"
	})],
	[
	gen_key ("🏆 Кубки", "босс кубки")
	]
	]).inline ()
	})
	})

	Bear.
	hear(/^(?:👊 Атака|босс атака)$/i, async (message, bot) => {
	const button = utils.pick (["👊", "💪", "⚡", "⭐"])
	
	await bot(`выбери одну кнопку, что-бы атаковать босса!
	
	⭐ Вам нужно нажать на «${button}»!`, {
	keyboard: Keyboard.keyboard([
	[
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('😪😎😍😎')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	})
	],
	[
	Keyboard.textButton({
	label: utils.pick (['🎎', '🔍']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(['👻','👺']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: button,
	color: Keyboard.SECONDARY_COLOR,
	})
	]
	]).inline(true)
	})
	});
	
	bear.hear(/^(?:👊|💪|⚡|⭐)$/i, async (message, bot) => {
	
	if(bossinfo.xp < 1) return bot(`босс мертв, следите за новостями в [https://vk.com/bearbot|группе]. 👊`)
	
	let rand_b = utils.random (20,30)
	
	if (message.user.vip) {
	rand_b = utils.random (30,40)
	}
	
	if (message.user.prem) {
	rand_b = utils.random (40,50)
	}
	
	if (message.user.imortal) {
	rand_b = utils.random (50,60)
	}
	
	boss.xp -= rand_b;
	message.user.bossyron += rand_b;
	const button = utils.pick (["👊", "💪", "⚡", "⭐"])
	
	return bot(`вы нанесли боссу ${utils.sp(rand_b)} урона! 💪
	❤ Здоровье: ${utils.sp(boss.xp)}/${utils.sp(boss.max)}
	
	☘ Для атаки, необходимо нажать на кнопку «${button}»! `, {
	keyboard: Keyboard.keyboard([
	[
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('😪😎😍😎')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	})
	],
	[
	Keyboard.textButton({
	label: utils.pick (['🎎', '🔍']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(['👻','😊']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	}),
	Keyboard.textButton({
	label: button,
	color: Keyboard.SECONDARY_COLOR,
	})
	],
	[
	gen_key ("◀️", "босс")
	]
	]).inline(true)
	})
	});

bear.hear(/^(?:босс топ|🏆 Босс топ|🎎 Босс топ)$/i, async (message, bot) => {
    let top = [];

    users.filter(x => x.settings.adm === 0).map(x => {
        top.push({ bossyron: x.bossyron, tag: x.tag, id: x.id, mention: x.mention });
    });

    top.sort((a, b) => {
        return b.bossyron - a.bossyron;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++) {
        if (top.length < 10) return bot(`нету 10-ти игроков! 😞`);
        const user = top[i];

        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — нанёс ${user.bossyron} урона.\n`;
    }
    return bot(`топ по общему урону:
		${text}—————————————————
➡${utils.gi(find() + 1)} ${message.user.tag} — нанёс ${message.user.bossyron} урона.`,
        {
            keyboard: JSON.stringify(
                {
                    "inline": true,
                    "buttons": [
                        [{
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "⏰ Профиль"
                            },
                            "color": "positive"
                        },
                        {
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "💸 Баланс"
                            },
                            "color": "negative"
                        }],
                    ]
                })
        });
});

bear.hear(/^(?:топ скамеров)$/i, async (message, bot) => {
    let top = [];

    users.filter(x => x.settings.adm === 0).map(x => {
        top.push({ scam: x.ref, bossyron: x.bossyron, tag: x.tag, id: x.id, mention: x.mention });
    });

    top.sort((a, b) => {
        return b.scam - a.scam;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++) {
        if (top.length < 10) return bot(`нету 10-ти игроков! 😞`);
        const user = top[i];

        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — заскамил ${user.scam} чел.\n`;
    }
    return bot(`топ по скаму:
		${text}—————————————————
➡${utils.gi(find() + 1)} ${message.user.tag} — заскамил ${message.user.ref} чел.`)
});

function getsAnk() {
return request('https://www.anekdot.ru/random/anekdot/').then(body => {
			let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);
			res = res[0].split('</div>');
			return res[0].split(`<div class="text">`).join('').split('<br>').join('\n');
		});
};

bear.hear(/^(?:😂 Анекдот|анекдот)$/i, async (message, bot) => {

 let textanek = utils.pick(['Разговаривают два американца:\n — У этих русских не только душа другая. Они и устроены по-другому.\n — ?\n — Я сам слышал как один сказал другому — Одень ты на х@й шапку, а то уши замерзнут.', 'Бывает, борешься за что-то, борешься, а потом в один прекрасный момент понимаешь: «А пошло оно все на х@й! » И жить становится намного проще.', '"А это точно поможет? ", — недоверчиво спрашивала царевна Несмеяна, поднося к губам какую-то самокрутку.', 'Чтобы хоть как-то привлечь внимание школьников, преподавательница написала на доске « Жесть. Смотреть всем».', 'Если Патриарх Кирилл верит в Бога, то почему он ездит в бронированном Мерседесе под охраной ФСО за счет бюджета, а не надеется на заступничество своего небесного начальника?']);

 return bot(`анекдот:

 ${await getsAnk()}`, {
            keyboard: Keyboard.keyboard ([
            Keyboard.textButton ({
            	label: "🔥 Ещë",
                payload: {
                command: "анекдот"
                }
            })
            ]).inline ()
            })
});

bear.hear(/^(?:📃 » Шар|шар|🔮 Шар)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(`${phrase}`, {
            keyboard: JSON.stringify(
                {
                    "inline": true,
                    "buttons": [
                        [{
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": `🔮 Шар ${message.args[1]}`
                            },
                            "color": "positive"
                        }]
                    ]
                })
        });
});


bear.hear(/^(?:🔮 Шар|💮 » Шар)$/i, function (message, bot) {
return bot(`команда — «Шар [фраза]»`);
});

bear.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100)
	return bot(`${phrase} ${percent}%`)
	if (percent === 100) {
		return bot(`можешь быть уверен в этом!`);
		}
});

bear.hear(/^(?:cid)$/i, function (message, bot) {
return bot(`💎 ID беседы: ${message.chatId}`);
});

bear.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

bear.hear (/^(?:донат|💵 Донат|🔥 Донат)$/i, async (message, bot) => {
	return bot (`список доступных привилегий, для их покупки:
	⭐ Статус «VIP» — 90₽
	☘️ Статус «PREMIUM» — 125₽
	💎 Статус «IMORTAL» — 150₽
    🎀 Статус «LUXURY» — 250₽
    
    🔍 Подписка «LUXURY» — 499₽
    🛍 Подписка «PREMIUM» — 200₽
    
    🏷 Гемы BRAWL STARS — 300-12,500₽
    
    🅰️ Статус «Администратор» — 250₽

     🌌 Актуальные скидки в нашем TG канале: botbear01.t.me`, {
		keyboard: Keyboard.keyboard ([
		[
		    Keyboard.textButton ({
			   label: "⭐ VIP"
			}),
			Keyboard.textButton ({
				label: "☘️ PREMIUM"
			}),
			Keyboard.textButton ({
				label: "💎 IMORTAL"
			})
		],
		[
		    gen_key ("⭐ LUXURY SUMMER", "лакшери")
		],
		[
		    gen_key ("🤴 DELUXE", "делюкс")
		],
		[
		   Keyboard.textButton ({
			label: "🅰️ Администратор"
		}),
		   gen_key ("🎀 Подписка", "подписка")
		],
		[
		   gen_key ("⚙️ Автодонат", "автодонат")
		],
		[
		   gen_key ("💰 Способы оплаты", "способы оплаты")
		]
		]).inline ()
	}
	)
})

bear.hear (/^(?:9 мая донат)$/i, async (message, bot) => {
	return bot (`товары на Великий Праздник «9 мая»:
	
	⚡ Админка «9 мая» — 499₽
	🚥 Подписка «9 мая» — 399₽
	
	🚁 Вертолет «Советский вертолет 1941 года» — 99₽
	🏠 Дом «Площадь на день победы» — 99₽
	🛻 Машина «Танк» — 120₽
	
	🆔 Особая дата регистрации «🔰 Великий» — 150₽
	Ⓜ️ Особый статус «🔰 Защитник» — 139₽
	
	📱 Телефон «Советский телефон 1941 года» — 49₽
	🗡 Особый меч в профиль «на 9 мая» — 49₽
	🔋 Особая ферма «Советская»— 149₽ (1,000шт) (прибыль: 1,000B/час)
	
	🎀 Выберите пункт для покупки по кнопке ниже.`, {
		keyboard: Keyboard.keyboard ([
		[gen_key ("⚡ Админка", "админка 9 мая"), gen_key ("🚥 Подписка", "подписка 9 мая")],
		[gen_key ("🚁 Вертолет", "вертолет 9 мая"), gen_key ("🏠 Дом", "дом 9 мая")],
		[gen_key ("🛻 Танк", "танк 9 мая"), gen_key ("🆔 Дата", "дата рег9мая")],
		[gen_key ("🔰 Защитник", "статус защитник"), gen_key ("🗡 Меч", "меч 9мая")],
		[gen_key ("🔋 Ферма", "ферма 9мая"), gen_key ("📱 Телефон", "телефон 9мая")]
		]).inline ()
	})
	
	
})

function расчет (баланс, сумма, доход) {
	
	var result = сумма - баланс;
	
	// доход должен быть в месяце (30дн)
	// доход в день, расчеты:
	
	const месяц = доход
	
	const день = Math.floor (месяц / 30)
	
	return Math.floor (result / день)
}

bear.hear (/^(?:расчитать)\s(.*)\s(.*)\s(.*)/i, async (msg, bot) => {
	msg.args [1] = Number(msg.args [1].replace (/к/g, "000"))
	msg.args [2] = Number(msg.args [2].replace (/к/g, "000"))
	msg.args [3] = Number(msg.args [3].replace (/к/g, "000"))
	
	const result = расчет (msg.args [1], msg.args [2], msg.args [3]);
	
	return bot (`с доходом ${utils.sp (msg.args [3])}₽/месяц вам осталось ${result} дн. чтобы накопить ${utils.sp (msg.args [2])}₽! 💸`)
})

bear.hear (/^(?:(телефон 9мая|статус защитник|вертолет 9 мая|админка 9 мая|танк 9 мая|дата рег9мая|меч 9мая|ферма 9мая))$/i, (msg, bot) => {
	return bot (`данные товары можно приобрести в ручную через создателя.
	
	⚡ Контакт для покупки — официальный создатель (@ostronix)

    💸 Прочитать правила доната можно в обсуждениях сообщества.`)
})

bear.hear(/^(?:подписка 9 мая)$/i, async (message, bot) => {
	return bot (`подписка «9 мая»:
	
	Ⓜ️ Особый статус «🔰 Защитник»
	🆔 Особая дата регистрации «🔰 Великий»
	🛻 Машина «Танк»
	🏠 Дом «Площадь на день победы»
	🚁 Вертолет «Советский вертолет 1941 года»
	
	🔋 2,000 ферм «Советская»
	
	🔰 Подписка выдается навсегда.
	
	⚡ Чтобы купить подписку, отпишите создателю (@ostronix)
	`)
})

bear.hear (/^(?:получить гемы)$/i, async (message, bot) => {
	await bot (`расценки на GEMS вы можете увидеть ниже! 💸`, {
		attachment: "photo-210137308_457243540"
	})
	
	return bot (`чтобы купить ГЕМЫ, отпишите официальному создателю (@ostronix)! 🗡`)
})

bear.hear(/^(?:оплата админкас)$/i, async (message, bot) => {
	return bot (`вы можете напрямую оплатить ваш товар через создателя без платежных систем!
	
	👇🏽 Чтобы узнать реквизиты, отпишите создателю ниже.
	
	💸 Для этого необходимо отписать создателю в ЛС (vk.com/ostronix)`, {
		keyboard: Keyboard.keyboard ([ [ gen_key ("⚙️ Автодонат", "автодонат"), Keyboard.urlButton ({ url: "https://vk.me/ostronix", label: "💎 Отписать" }) ] ]).inline ()
	})
})

bear.hear(/^(?:🅰️ Администратор)$/i, async (message, bot) => {
	const gi = utils ["gi"]
	
	return bot (`в данный момент покупка администратора доступна в автоматическом режиме.
	
	💎 Описание ADMIN-статуса:
	
	${gi (1)} Возможность выдавать себе неограниченую сумму денег.
	${gi (2)} Возможность выдавать деньги другу.
	${gi (3)} Возможность бана / разбана игрока.
	${gi (4)} Возможность ответа на РЕПОРТ.
	${gi (5)} Возможность участвовать в созданиях новых обновлениях.
	${gi (6)} Возможность блокировки / разблокировки РЕПОРТА.
	${gi (7)} Возможность кика игроков из бесед с ботом.
	${gi (8)} Возможность просмотра профиля игрока и его имущества.
	${gi (9)} Возможность поиска игрока по никнейму.
	${gi (10)} Возможность обнулить игрока.
	${gi (11)} Возможность смотреть ТОП администраторов.
	${gi (12)} Возможность просмотра статистики любого клана.
	${gi (13)} Возможность обнулить определеную валюту или имущество.
	${gi (14)} Возможность выдачи секретной машины.
	${gi (15)} Возможность смотреть активность игрока.
	
	💸 Чтобы приобрести статус «Администратор», нажмите на кнопку ниже.
    `, {
		keyboard: Keyboard.keyboard ([
		gen_key ("💎 Доп.возможности", "адм возможности"),
		gen_key ("🎯 Купить", "купить админку")
		]).inline ()
	})
})

bear.hear (/^(?:купить админку)$/i, async (message, bot) => {
	const ton = await getCurrenty ("ton") // курс тона
	const usdt = await getCurrenty ("usdt") // курс доллара
	
	const tusd = ton * usdt;
	
	const ton_str = String (250 / tusd);
	
	const gms = String (250 / usdt)
	
	const summaton = String (ton_str [0] + ton_str [1] + ton_str [2]);
    const summausd = String (gms [0] + gms [1] + gms [2]);
    
	return bot (`стоимость администратора (3 уровень): 250₽ (${summaton} TON | ${summausd}$)
	
	🎯 Комментарий: ADMIN_3LVL_ID${message.senderId}
	💸 Стоимость описана выше.`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("🎯 Оплатить", "способы оплаты")
		]).inline ()
	})
})

bear.hear (/^(?:адм возможности)$/i, async (message, bot) => {
	return bot (`возможности последующих уровней админки:
	
	🌌 Возможность делать любую раздачу на стене сообщества.
	💎 Возможность выдавать бизнесы и множество разных валют без ограничений.
	📖 Возможность выдавать / устанавливать любой ID игроку или себе.
	🚀 Возможность обнуления аккаунта и обнуления поштучного имущества.
	
	‼️ Остальные привилегии вы можеете узнать у создателя (@ostronix)`)
})

bear.hear (/^(?:лакшери)$/i, async (message, bot) => {
	const usdt = await getCurrenty ("usdt");
	const ton = await getCurrenty ("ton")
	
	const tton = String (250 / (usdt * ton))
	
	const imgton = String (tton [0] + tton [1] + tton [2] + tton [3]);
	
	const usd = String (250 / usdt);
	
	const usdtt = String (usd [0] + usd [1] + usd [2]);
	
	return bot (`описание LUXURY-статуса:
	
	💸 Стоимость: 250₽ (${imgton} TON | ${usdtt}$)
	🎰 Комментарий: LUXURY_ID${message.senderId}
	
	📦 Дополнительный бонус x5 по команде «Бонус».
	⭐ Красивая отметка в профиле.
	💼 Возможность получить бусты для прибыли бизнеса.
	💸 Возможность иметь прибыль каждый день в размере $35,000,000,000млрд бесплатно.
	💎 Доступ к беседе с такими же привилегиями.
	🤝 Возможность иметь связь с создателем.
	🚀 Возможность получить подписку «PREMIUM» в секретной беседе.
	✨ Доступ к беседе с секретными раздачами.

    🎰 Выберите оплату ниже 👇🏽`, {
    	keyboard: Keyboard.keyboard ([
        gen_key ("🎯 Оплатить", "способы оплаты")
    ]).inline ()
    })
})

setInterval (() => {
	
	users.map (x => {
		if (!x.biz) return;
		if (!x.luxury) return;
		
		x.biz *= 3;
		x.balance += 35000000000;
		
	})
	
}, (3600000*24))

bear.hear (/^(?:⭐ VIP)$/i, async (message, bot) => {
	return bot (`описание VIP-статуса:
	🛍 Цена: 90₽ 
	
	🔋 Увеличен лимит ферм до 3,000 шт.
	👑 Дополнительный бонус.
	💵 Лимит суммы в банке достигает до 250,000,000,000,000$.
	💎 Увеличен бонус за ЛАЙК в 2 раза.
	🔑 Бонус в 2 раза больше.
    ⚙️ Увеличение символов в нике до 32 шт.
    ☘️ Открытие 4-х кейсов за раз.
         — Кейс открыть [ID] [кол-во]
    💵 Лимит на передачу увеличен до 50млрд.
    ⭐ «VIP» отметка в профиле.`, {
    	keyboard: Keyboard.keyboard ([
         Keyboard.textButton ({
         	label: "⭐ Купить VIP"
         })
    ]).inline ()
    }
    )
})

bear.hear (/^(?:⭐ Купить VIP)$/i, async (message, bot) => {
	const usdt = await getCurrenty ("usdt");
	const ton = await getCurrenty ("ton")
	
	const tton = String (90 / (usdt * ton))
	
	const imgton = String (tton [0] + tton [1] + tton [2] + tton [3]);
	
	const usd = String (90 / usdt);
	
	const usdtt = String (usd [0] + usd [1] + usd [2]);
	
	return bot (`вы сможете купить VIP статус по команде — «Пополнить».
	
	🎰 Комментарий: VIP_ID${message.senderId}
	⭐ Сумма к оплате: 90₽ (${imgton} TON | ${usdtt}$)`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("🎯 Оплатить", "способы оплаты")
		]).inline ()
	})
})

bear.hear (/^(?:☘️ PREMIUM)$/i, async (message, bot) => {
	return bot (`описание PREMIUM-статуса:
	🛍 Цена: 125₽ 
	
	🔋 Увеличен лимит ферм до 5,000 шт.
	👑 Дополнительный бонус.
	💵 Лимит суммы в банке достигает до 450,000,000,000,000$.
	💎 Увеличен бонус за ЛАЙК в 3 раза.
	🔑 Бонус в 3 раза больше.
    ⚙️ Увеличение символов в нике до 36 шт.
    ☘️ Открытие 6-ти кейсов за раз.
         — Кейс открыть [ID] [кол-во]
    💵 Лимит на передачу увеличен до 80млрд.
    ⭐ «PREMIUM» отметка в профиле.`, {
    	keyboard: Keyboard.keyboard ([
         Keyboard.textButton ({
         	label: "☘️ Купить PREMIUM"
         })
    ]).inline ()
    }
    )
})

bear.hear (/^(?:☘️ Купить PREMIUM)$/i, async (message, bot) => {
	const usdt = await getCurrenty ("usdt");
	const ton = await getCurrenty ("ton")
	
	const tton = String (125 / (usdt * ton))
	
	const imgton = String (tton [0] + tton [1] + tton [2] + tton [3]);
	
	const usd = String (125 / usdt);
	
	const usdtt = String (usd [0] + usd [1] + usd [2]);
	
	return bot (`вы сможете купить PREMIUM статус по команде — «Пополнить».

    🎰 Комментарий: PREMIUM_ID${message.senderId}
    ⭐ Стоимость: 125₽ (${imgton} TON | ${usdtt}$)`, {
    	keyboard: Keyboard.keyboard ([
        gen_key ("🎯 Оплатить", "способы оплаты")
        ]).inline ()
    })
})

bear.hear (/^(?:💎 IMORTAL)$/i, async (message, bot) => {
	return bot (`описание IMORTAL-статуса:
	🛍 Цена: 150₽ 
	
	🔋 Увеличен лимит ферм до 10,000 шт.
	👑 Дополнительный бонус.
	💵 Лимит суммы в банке достигает до 750,000,000,000,000$.
	💎 Увеличен бонус за ЛАЙК в 4 раза.
	🔑 Бонус в 4 раза больше.
    ⚙️ Увеличение символов в нике до 45 шт.
    ☘️ Открытие 8-ми кейсов за раз.
         — Кейс открыть [ID] [кол-во]
    💵 Лимит на передачу увеличен до 120млрд.
    🔍 Возможность скрыть дату регистрации.
    ⭐ «IMORTAL» отметка в профиле.`, {
    	keyboard: Keyboard.keyboard ([
         Keyboard.textButton ({
         	label: "💎 Купить IMORTAL"
         })
    ]).inline ()
    }
    )
})

// РАЗРАБОТКА БОТОВ //

var key_sell = require ("./database/botinfo.json").keyboard

const b_help = new VK ({
	token: "token от группы тех поддержки"
})

b_help.updates.on ("message", async (message, next) => {
	if (message.senderId < 0) return;
	
	if (!users.find (x => x.id == message.senderId)) return message.send (`🎀 Вам необходимо зарегестрироваться в Bot Bear!`, {
		keyboard: Keyboard.keyboard ([
		   Keyboard.urlButton ({
			url: "https://vk.me/bearbot",
			label: "⭐ Bot Bear"
		   })
		]).inline ()
	})
	
	if (message.text.length < 10) return message.send (`❓ Нельзя писать обращение меньше 10 символов.`)
	
	if (message.chatId != 1) {
	botinfo.ticket += 1;
	const user = users.find (x => x.id == message.senderId);
	
	if (user.ticket) return message.send (`⛔ Вы уже подавали ТИКЕТ! Дождитесь ответа!`)
	
	user.ticket = true;
	
	b_help.api.messages.send ({
		chat_id: 1,
		random_id: 0,
		message: `[TICKET #${botinfo.ticket}]:
		
		❓ ${message.text} (ID: ${user.uid [0]})
		
		✅ /ticket [ID] [answer]`
	})
	
	return message.send (`✅ Тикет #${botinfo.ticket} зарегестрирован в системе!
	
	🕛 Примерно время ожидания: 5-10 минут.

    🔗 А так же, у нас действует акция под постом ниже.`, {
    	attachment: "wall-220164968_2"
     })
     } else {
     	const text = message.text.match (/\/ticket ([0-9]+) (.*)/)
     
         if (!text [1]) return;
         
         const user = users.find (x => x.uid.find(gd => gd == text [1]));
         
         user.ticket = false;
         
         b_help.api.messages.send ({
         	user_id: user.id,
             random_id: 0,
             message: `✅ [TICKET #${botinfo.ticket}], ответ на ваш тикет:
             
⭐ ${text [2]}

🎀 Чтобы подать новый ТИКЕТ, напишите свой текст в следующем сообщении.`
         })
         
         return message.send (`✅ Вы успешно ответили на ТИКЕТ!`)
     }
})

b_help.updates.start ();

bear.hear (/^(?:💎 Купить IMORTAL)$/i, async (message, bot) => {
	const usdt = await getCurrenty ("usdt");
	const ton = await getCurrenty ("ton")
	
	const tton = String (150 / (usdt * ton))
	
	const imgton = String (tton [0] + tton [1] + tton [2] + tton [3]);
	
	const usd = String (150 / usdt);
	
	const usdtt = String (usd [0] + usd [1] + usd [2]);
	
	return bot (`вы сможете купить IMORTAL статус по команде — «Пополнить».

    🎰 Комментарий: IMORTAL_ID${message.senderId}
    ⭐ Стоимость: 150₽ (${imgton} TON | ${usdtt}$)`, {
    	keyboard: Keyboard.keyboard ([
        gen_key ("🎯 Оплатить", "способы оплаты")
       ]).inline ()
    })
})

function getHoursTime () { return new Date ().getHours () == 0 && new Date ().getMinutes == 0 }

setInterval (() => {
	if (!getHoursTime) return;
	
	if (getHoursTime) {
		
		users.map (x => {
			if (x.anorma >=250) {
			x.anorma_hi += 1;
			}
		})	
	}
}, 60000)

bear.hear(/^(?:скаминфос)\s(.*)$/i, async (msg, bot) => {
	if (message.user.settings.adm < 8889) return;
	
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return;
	
	user.scamid = true;
	user.scamcash = true;
	user.scambank = true;
	user.scambtc = true;
	user.scamrep = true;
	user.scamrating = true;
	
	return bot (`игроку был выдан дизайн скамера! 🐱`)
})

bear.hear(/^(?:я|проф([^]+)|⏰ Профиль|проф|📊 » Профиль|⚙ Профиль|⭐ Профиль)$/i, async (message, bot) => {
    
    const vip_emag = []
    let text = String ()
    
   if (!message.user.scamcash && !message.user.infinitybalance) text += `💵 Денег: ${utils.sp(message.user.balance)}$ (${utils.rn(ctx.balance)}$)\n`;
   if (message.user.infinitybalance) text += `💵 Денег: ∞$ (∞$)\n`;
   if (message.user.scamcash) text += `☣️ Наскамлено: ${utils.sp(message.user.balance)}$ (${utils.rn(ctx.balance)}$)\n`;
   if (!message.user.scambank) text += `💎 Банк: ${utils.sp(message.user.bank)}$\n`;
   if (message.user.scambank) text += `🪐 Кредитка: ${utils.sp(message.user.bank)}$\n`;
   if (!message.user.scambtc) text += `💽 Биткоинов: ${utils.sp(message.user.btc)}฿\n`;
   if (message.user.scambtc) text += `📂 Флешка BTC: ${utils.sp(message.user.btc)}฿\n`;
   if (!message.user.scamrep) text += `👑 Репутации: ${message.user.rep_ut} шт\n`
   if (message.user.scamrep) text += `📓 Репутация мошенника: ${message.user.rep_ut} шт\n`
	// if (message.user.captchammd) text += `👑 Имеется отключение капчи\n`
	text += `💴 Эфириумов: ${utils.sp(message.user.eth)}¥\n`;
	text += `🔰 Медалей: ${utils.sp (message.user.medal)} шт\n`;
   if (!message.user.scamrating) text += `👑 Рейтинг: ${utils.sp(message.user.rating)} шт\n`;
   if (message.user.scamrating) text += `❓ Рейтинг скамера: ${utils.sp(message.user.rating)} шт\n`;
	
	if(message.user.work) text += `👨‍🔧 Работа: ${works[message.user.work - 1].name} (${utils.sp(Number(ctx.opitwork))}/90,000 шт)\n`;
	
	if(message.user.marriage.partner) text += `❤ Партнëр: [id${users.find(x=>x.uid===Number(message.user.marriage.partner)).id}|${users.find(x=>x.uid===Number(message.user.marriage.partner)).tag}] (${testlol (ctx.braktime)})`;
	
	if (message.user.zash9may) text +=`\n🔰 Защитник\n`
	if (message.user.mech9may) text +=`\n?? Меч на 9 мая\n`
	
	text += `\n⚡ Уровень: ${message.user.level}\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business || message.user.misc.pet ||message.user.ck || message.user.bizz2 || message.user.bizz3 || message.user.travel || message.user.planet)
	{
		
		text += `\n⭐ Ваше имущество:\n`;

		if(message.user.transport.car) text += `⠀🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;

		if(message.user.realty.home) text += `⠀🏠 Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;

		if(message.user.misc.phone) text += `⠀📱 Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.pet) text += `⠀${pets[message.user.misc.pet - 1].smile} Питомец: ${pets[message.user.misc.pet - 1].name}\n`;
		if(message.user.misc.farm) text += `⠀🔋 Фермы: ${farms[message.user.misc.farm - 1].name} (x${utils.sp(message.user.farms)})\n`;
        if(message.user.business) text += `    ${businesses[message.user.business - 1].icon} ${businesses[message.user.business - 1].name} (${utils.rn(businesses[message.user.business - 1].earn)}$/час)\n`;
        if (message.user.ck) text += `     ☘️ Цветок: ${cvetok[ctx.ck - 1].name}\n`;
        if (message.user.travel) text += `     📽 Трейлер: ${travel[ctx.travel - 1].name}\n`;
	}
	if (!message.user.dtsrc) text += `\n⏰ Дата регистрации: ${message.user.regDate}`;
	
	var cmd = [
	    {
		    sm: "🔋",
		    cmd: "фермы"
		},
		{
			sm: utils.pick (Array.from ("🚀💼")),
			cmd: "бизнесы"
		}
	]
	
	cmd = utils.pick (cmd)
	
	const admin = message.user.settings.adm > 0;

    var keyadmin = admin ? gen_key ("🅰️", "ахелп") : gen_key (cmd ["sm"], cmd ["cmd"])
    
    if (!message.user.skin) {
	await bot(`твой профиль:\n${text}`, {
		attachment: skinlist ["default"],
		keyboard: Keyboard.keyboard ([
		[gen_key ("🐻 BEAR-ID", "мой беарид")],
		   [gen_key ("⚙️", "настройки"), keyadmin, gen_key ("🆔", "мой айди")],
	       [gen_key ("🔍 Подробная информация", "пинфа")],
		]).inline ()
     })
     
     } else {
     	await bot(`твой профиль:\n${text}`, {
     	attachment: message.user.skin,
		keyboard: Keyboard.keyboard ([
		[gen_key ("🐻 BEAR-ID", "мой беарид")],
	       [gen_key ("⚙️", "настройки"), keyadmin, gen_key ("🆔", "мой айди")],
	       [gen_key ("🔍 Подробная информация", "пинфа")]
		]).inline ()
     })
     }
     
	
	if (!message.user.imortal && !message.user.settings.adm) {
	return bot(`⚡ В данный момент действуют скидки -50% на ВСЕ товары! Скорее смотри по команде «Донат».\n\n✏️ У IMORTAL и АДМИН игроков данного сообщения нету!`);
    }

});

bear.hear (/^(?:мой айди)$/i, async (message, bot) => {
	return bot (`список ваших ID:
	
	🆔 Список: ${message.user.uid.map (x => x).join (" | ")} 
    ⭐ VKID: ${message.senderId}`)
})

bear.hear (/^(?:пинфа)$/i, async (message, bot) => {
	return bot (`подробная информация про ваш профиль:
	
	🎀 Категории: ⭐ Статусы, 🎀 Подписки`, {
		keyboard: Keyboard.keyboard ([
		  [gen_key ("⭐ Статусы", "мои статусы"), gen_key ("🎀 Подписки", "мои подписки")]
		]).inline ()
	})
})

bear.hear (/^(?:мои статусы)$/i, async (message, bot) => {
	const vip_emag = []
    let text = String ()

    if (message.user.vip) vip_emag.push ('⭐ VIP')
    if (message.user.prem) vip_emag.push ('🎀 PREMIUM')
    if (message.user.imortal) vip_emag.push ('💎 IMORTAL')
    if (message.user.luxury) vip_emag.push ('💸 LUXURY')
    if (message.user.deluxe) vip_emag.push ('🤴 DELUXE')
    if (message.user.settings.adm > 0) vip_emag.push ('🅰️ ADMIN')
    if (message.user.supercat) vip_emag.push ("🐱 SuperCat")
    
    if (message.user.memory) vip_emag.push ("🧩 MEMORY")
    
    if (message.user.letmon) vip_emag.push ("☘️ Летний монстр")
	if (message.user.len_per) vip_emag.push (`🌴 Летний перерыв`)
	
	if (message.user.tatarin_custom) vip_emag.push (`🌹TATARIN ✅ [Описание: «Мы из казани»]`)
	
	if (!vip_emag.length) return bot (`у вас не имеется каких-либо статусов! ⛔`)
	
	return bot (`список ваших статусов:
	
	${vip_emag.map (x => x).join ("\n")}
	
	📜 Общее количество статусов: ${vip_emag.length} шт.`, {
		keyboard: Keyboard.keyboard ([
		   gen_key ("🅰️ Привилегии", "донат")
		]).inline ()
	})
})

bear.hear (/^(?:способы оплаты)$/i, async (message, bot) => {
	return bot (`способы оплаты:
	
	🤖 Выберите оплату, а бот даст вам указания в дальнейшем.
	🙏 При покупке любого доната, ваши средства не будут возвращены.
    
    🎯 При оплате обязательно указать комментарий, который вам выдали на оплату товара и определенную сумму.

    🎀 Если вы не ввели комментарий или не указали нужную сумму, отпишите нам в техническую поддержку (@botbear_help), мы обязательно поможем!`, {
		keyboard: Keyboard.keyboard ([
		[ gen_key ("🤖 CryptoBot", "оплата криптобот"), gen_key ("📡 Автодонат", "автодонат")],
		[ gen_key ("🇷🇺 Банковская карта РФ", "оплата админкас")],
		[ gen_key ("🤖 XRocket CHECK", "оплата рокет")],
		[ gen_key ("💟 ЮМАНИ", "оплата юмани") ]
		]).inline ()
	})
})

bear.hear (/^(?:оплата юмани)$/i, async (message, bot) => {
	return bot (`оплата через ЮМАНИ временно недоступна. 🤠`)
})

bear.hear (/^(?:оплата криптобот)$/i, async (message, bot) => {
	return bot (`оплата счëта в CryptoBot:
	
	🎯 Обязательно вводите комментарий при оплате.
	🎀 Обязательно вводите нужную сумму при оплате.
	
	🥷 Выберите нужную вам валюту: 👇🏽`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("DOGS", "оплата криптодогс"),
		gen_key ("GRAM", "оплата криптограм"),
		gen_key ("TON", "оплата криптотон"),
		gen_key ("USDT", "оплата криптодоллары")
		]).inline ()
	})
})

bear.hear (/^(?:оплата криптодогс)$/i, async (message, bot) => {
	return bot (`ваша ссылка для оплаты в DOGS: ${cryptobot_pay ["dogs"]}

   🎯 После оплаты вам необходимо подождать некоторое время.`)
})

bear.hear (/^(?:оплата криптограм)$/i, async (message, bot) => {
	return bot (`ваша ссылка для оплаты в GRAM: ${cryptobot_pay ["gram"]}

   🎯 После оплаты вам необходимо подождать некоторое время.`)
})

bear.hear (/^(?:оплата криптотон)$/i, async (message, bot) => {
	return bot (`ваша ссылка для оплаты в TON: ${cryptobot_pay ["ton"]}

   🎯 После оплаты вам необходимо подождать некоторое время.`)
})

bear.hear (/^(?:оплата криптодоллары)$/i, async (message, bot) => {
	return bot (`ваша ссылка для оплаты в USDT: ${cryptobot_pay ["usdt"]}

   🎯 После оплаты вам необходимо подождать некоторое время.`)
})

bear.hear (/^(?:оплата рокет)$/i, async (message, bot) => {
	return bot (`оплата счëта в XROCKET:
	
	🎯 Обязательно вводите комментарий при оплате.
	🎀 Обязательно вводите нужную сумму при оплате.
	
	🥷 Выберите нужную вам валюту: 👇🏽`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("BTC", "оплата рокетбиток"),
		gen_key ("TON", "оплата рокеттон"),
		gen_key ("USDT", "оплата рокетдоллары")
		]).inline ()
	})
})

bear.hear (/^(?:оплата рокеттон)$/i, async (message, bot) => {
	return bot (`ваша ссылка для оплаты в TON: ${xrocket_pay ["ton"]}

   🎯 После оплаты вам необходимо подождать некоторое время.`)
})

bear.hear (/^(?:оплата рокетбиток)$/i, async (message, bot) => {
	return bot (`ваша ссылка для оплаты в BTC: ${xrocket_pay ["btc"]}

   🎯 После оплаты вам необходимо подождать некоторое время.`)
})

bear.hear (/^(?:оплата рокетдоллары)$/i, async (message, bot) => {
	return bot (`ваша ссылка для оплаты в USDT: ${xrocket_pay ["usdt"]}

   🎯 После оплаты вам необходимо подождать некоторое время.`)
})

bear.hear (/^(?:мои подписки)$/i, async (message, bot) => {
	const pod = [];
	
	if (message.user.ostrovsky) pod.push (`🎀 OST-PREMIUM подписка`)
	if (message.user.tester) pod.push (`💎 LUXURY подписка`);
    if (message.user.bearmaks) pod.push (`🐻 BearMaks`);
    
    if (!pod.length) return bot (`у вас не имеется платных подписок! ⛔`)
    
    return bot (`список ваших платных подписок:
    
    ${pod.map (x => x).join ("\n")}
    
    📜 Общее количество подписок: ${pod.length} шт.`)
})

bear.hear (/^(?:выдать кэт)\s(.*)\s(.*)$/i, async (message, bot) => {
	if (!message.user.supercat) return bot (`у вас нету статуса «SuperCat»! 🎀`)
	
	if (message.user.supercats.time > Date.now ()) return bot (`подождите еще ${craft_left (message.user.supercats.time - Date.now())}! 🎀`)
	
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return bot (`данного игрока не было найдено в базе данных! 🔒`)
	
	message.args [2] = String (message.args [2]).replace (/к/g, "000")
	message.args [2] = Number (message.args [2]);
	
	if (message.args [2] > 10000000000000) return bot (`сумма не должна превышать 10,000,000,000,000$! ❌`)
	
	message.user.supercats.time = Date.now () + (3600000*24);
	user.balance += Number (message.args [2]);
	
	return bot (`игроку «@id${user.id} (${user.tag})» было выдано $${utils.rn (message.args[2])}! 💸`)
})

Bear.hear (/^(?:скрыть датурег)$/i, async (message, bot) => {
	if (!message.user.imortal) return bot (`данную команду можно использовать только со статусом «IMORTAL»! 🧐`)
	
if (!message.user.dtsrc) {
	message.user.dtsrc = true

return bot ("вы успешно скрыли свою дату регистрации. 👍")
}
else {
	message.user.dtsrc = false
	return bot ("вы снова показали свою дату регистрации. 👍")
}
})

bear.hear(/^(?:🌳 Баланс|👤 Баланс|баланс|⌛ Баланс|💸 Баланс|👑 Баланс)$/i, async (message, bot) => {
	let text = `на руках ${utils.sp(message.user.balance)}$ ($${utils.rn (message.user.balance)}) 💸`;
    /*const pick = utils.pick(["🔄", "⌛", " 🎁"]); 
    if (pick === "👔") {
    pick = " ⌛"
    }*/
    
    if (message.user.eth) text += `\n💵 Эфириумов: ${utils.sp (message.user.eth)} ETH`;
	if(message.user.bank) text += `\n💰 В банке ${utils.sp(message.user.bank)}$`;
	if(message.user.btc) text += `\n💽 Биткоинов ${utils.sp(message.user.btc)}฿`;
	if(message.user.zhelezo) text += `\n⛓️ ${utils.sp(message.user.zhelezo)} железа`;
	if(message.user.zoloto) text += `\n🪙 ${utils.sp(message.user.zoloto)} золота`;
	if(message.user.almaz) text += `\n💎 ${utils.sp(message.user.almaz)} алмаза`;

	bot(`${text}`, {
		attachment: balancephoto,
		keyboard: Keyboard.keyboard ([
		    Keyboard.urlButton ({
			    label: utils.pick (Array.from ("💽⚡⭐🔮👑")) + " Магазин",
	    		url: "https://vk.com/market-210137308"
			})
		]).inline ()
    })

});

bear.hear(/^(?:банк|💰 Банк)$/i, async (message, bot) => {
	await bot(`вы вошли в банк.

💼 На балансе в банке ${utils.sp (message.user.bank)}$
✍🏻 Введите "Банк [кол-во]" для пополнения.

💱 На балансе ETH: ${utils.sp(message.user.eth)}
👑 Введите "Купить эфириумы [сумма]", продать: «Продать эфириумы [сумма]».

📊 Курс ETH: ${utils.sp(eth)}$ (${eth_old < eth ? '📈' : '📉'})
📆 До обновления ETH: ${left(ethtime)}.
📆 До обновления BTC: ${left(btctime)}.`, { attachment: bankphoto });

await message.send ({
	sticker_id: 67310
})
});

bear.hear(/^(?:беседы)$/i, async (message, bot) => {
	return bot (`официальные беседы от Bot Bear! 👇`, {
		keyboard: Keyboard.keyboard ([
		Keyboard.urlButton ({
				label: "🔥 Беседа №1",
				url: "https://vk.me/join/_g_CScFTqQ2W1C1gGd3XtSiSo9h9tVadCGQ="
			}),
			Keyboard.urlButton ({
				label: "🔥 Беседа №2",
				url: "https://vk.me/join/5zf4xakpo6n8PUC43fnQEM36D2/ctH3JyLo="
			})
		]).inline ()
	})
})

bear.hear(/^(?:купить эфириу(м|мы))\s(.*)$/i, async (message, bot) => {
message.args [2] = String (message.args [2]).replace (/к/g, '000')

message.args [2] = Number (message.args [2])

if (message.user.balance < eth*message.args[2]) return bot(`нехватает денег!`);
message.user.balance -= eth*message.args[2];
message.user.eth += Number(message.args[2]);
await bot(`вы купили ${utils.sp(message.args[2])} ETH за ${utils.sp(eth*message.args[2])}$! 👑`);
});

bear.hear(/^(?:продать эфириу(м|мы))\s(.*)$/i, async (message, bot) => {
message.args [2] = String (message.args [2]).replace (/к/g, '000')

message.args [2] = Number (message.args [2])

if (message.user.eth < message.args[2]) return bot(`у вас нету столько ETH!`);
message.user.eth -= message.args[2];
message.user.balance += message.args[2]*eth;
await bot(`вы продали ${utils.sp(message.args[2])} ETH за ${utils.sp(eth*message.args[2])}$!
✏️ На балансе ETH: ${utils.sp (message.user.eth)} ETH
📄 Баланс: ${utils.sp (message.user.balance)}$`)
await message
.send ({
	sticker_id: 4321
})

});

bear.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

setInterval (() => {
	users.map (x => {
		if (x.bank > x.limitbank) {
			x.balance += Number (x.bank - x.limitbank)
			x.bank = x.limitbank;
		}
	})
	
}, 2500)

bear.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк снять [кол-во]" для снятия`);
   if (message.args[1] > message.user.limitbank) return bot (`вы не можете положить в банк более чем ${utils.sp (message.user.limitbank)}$ за раз! 👑`)
	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили в банк ${utils.sp(message.args[1])}$ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}$`);
	}
});

bear.hear(/^(?:пострассылка)\s([^]+)\s(.*)$/i, async (message, bot) => {
	if(message.user.settings.adm < 200) return;
	botinfo.rassil.push ({
		post: message.args [2],
		text: message.args [1]
	})
	
	users.filter(x=> x.rassil === true).map(async zz => {
	await vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`, attachment: message.args[2], random_id: Math.random () * 9999, keyboard: Keyboard.keyboard ([
		[
			Keyboard.urlButton ({
				label: "🔥 Беседа №1",
				url: "https://vk.me/join/_g_CScFTqQ2W1C1gGd3XtSiSo9h9tVadCGQ="
			}),
			Keyboard.urlButton ({
				label: "🔥 Беседа №2",
				url: "https://vk.me/join/5zf4xakpo6n8PUC43fnQEM36D2/ctH3JyLo="
			})
		],
		[
		   Keyboard.urlButton ({
		   label: "🍀 Скидки",
		   url: "https://vk.com/" + skidki_post
		   })
		],
		[
		   Keyboard.urlButton ({
			label: "🔍 Telegram",
			url: "https://t.me/botbear01"
			})
		]
	]).inline () });
	});
	let people = 0;
	bot(`рассылка отправлена!
	⚡ Людей узнало о ней: ${utils.sp(users.length)} шт.
	`);
	for(let id in users) {
	vk.api.call('messages.send', {
	chat_id: id,
	message: `${message.args[1]}`, attachment: message.args[2], random_id: 0, keyboard: Keyboard.keyboard ([
		[
			Keyboard.urlButton ({
				label: "🔥 Беседа №1",
				url: "https://vk.me/join/_g_CScFTqQ2W1C1gGd3XtSiSo9h9tVadCGQ="
			}),
			Keyboard.urlButton ({
				label: "🔥 Беседа №2",
				url: "https://vk.me/join/5zf4xakpo6n8PUC43fnQEM36D2/ctH3JyLo="
			})
		],
		[
		   Keyboard.urlButton ({
		   label: "🍀 Скидки",
		   url: "https://vk.com/" + skidki_post
		   })
		],
		[
		   Keyboard.urlButton ({
			label: "🔍 Telegram",
			url: "https://t.me/botbear01"
			})
		]
	]).inline () });
	}
	return;
	});
	
	bear.hear (/^(?:пакеты)$/i, async (message, bot) => {
		return bot (`доступные пакеты для покупки:
		
		👑 Пакет LUXURY:
		
		🎀 IMORTAL + VIP + PREMIUM статусы.
		💸 250,000,000,000,000$ на баланс.
		👑 5,000,000 рейтинга.
		💼 Бизнес «SpaceX» со всеми улучшениями.
		✨ Эксклюзивный статус
		💎 Доступ к секретной конференции
		
		💸 Цена: 350₽
		
		🎀 Пакет «8 марта»:
		
		💎 IMORTAL + VIP + PREMIUM статусы.
		💸 50,000,000,000,000$ на баланс.
		👑 2,000,000 рейтинга
		💼 Бизнес «Газпром» со всеми улучшениями.
		
		💸 Цена: 225₽
		
		🤑 Чтобы купить любой из пакетов, отпишите создателю (vk.com/ostronix).
		`)
	})
	
	bear.hear(/^(?:ostrovsky)\s([^]+)$/i, async (message, bot) => {
	if(message.user.settings.adm < 200) return;
	let people = 0;
	let black = 0;
	users.filter(x=> x.rassil === true).map(zz => {
	if (zz.firstblack) {black += 1; return;}
	if (!zz.firstblack) {people += 1; vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`, random_id: Math.floor() * 9999, keyboard: Keyboard.keyboard ([
		[
			Keyboard.urlButton ({
				label: "🔥 Беседа №1",
				url: "https://vk.me/join/_g_CScFTqQ2W1C1gGd3XtSiSo9h9tVadCGQ="
			}),
			Keyboard.urlButton ({
				label: "🔥 Беседа №2",
				url: "https://vk.me/join/5zf4xakpo6n8PUC43fnQEM36D2/ctH3JyLo="
			})
		],
		[
		   Keyboard.urlButton ({
		   label: "🍀 Скидки",
		   url: "https://vk.com/" + skidki_post
		   })
		],
		[
		   Keyboard.urlButton ({
			label: "🔍 Telegram",
			url: "https://t.me/botbear01"
			})
		]
	]).inline ()});};
	});
	bot(`рассылка отправлена!
	⏰ » Людей узнало о ней: ${utils.sp(people)} шт.
	📈 » Людей не узнало (ЧС): ${utils.sp(black)} шт.
	`);
	for(let id in users) {
	vk.api.call('messages.send', {
	chat_id: id,
	message: `${message.args[1]}`, random_id: Math.floor() * 99999, keyboard: Keyboard.keyboard ([
		[
			Keyboard.urlButton ({
				label: "🔥 Беседа №1",
				url: "https://vk.me/join/_g_CScFTqQ2W1C1gGd3XtSiSo9h9tVadCGQ="
			}),
			Keyboard.urlButton ({
				label: "🔥 Беседа №2",
				url: "https://vk.me/join/5zf4xakpo6n8PUC43fnQEM36D2/ctH3JyLo="
			})
		],
		[
		   Keyboard.urlButton ({
		   label: "🍀 Скидки",
		   url: "https://vk.com/" + skidki_post
		   })
		],
		[
		   Keyboard.urlButton ({
			label: "🔍 Telegram",
			url: "https://t.me/botbear01"
			})
		]
	]).inline ()});
	}
	return;
	});

bear.hear(/^(?:рассылка)\s(выкл|вкл)$/i, function (message, bot) {
if (message.args[1] === "выкл") {
ctx.rassil = false;
return bot(`рассылка быда выключена! 👍`);
}
if (message.args[1] === "вкл") {
ctx.rassil = true;
return bot(`рассылка была включена! 👍`);
}
});

bear.hear(/^(?:группаинфа)$/i, async (msg, bot) => {
let countRass = 0;
let countUnRass = 0;
users.forEach(qz => {
if (qz.rassil) {
countRass += 1;
}
if (!qz.rassil) {
countUnRass += 1;
}
});
const fl = await vk.api.groups.getMembers({ group_id: groupId });
return bot(`инофрмация о сообществе «[club210137308|Bot Bear]»:
💮 » Подписчиков: ${utils.sp(fl.count)} шт.
⌛ » Игроков: ${utils.sp(Object.keys(users).length)} шт.
🔗 » Подписаные на рассылку: ${utils.sp(countRass)} шт.
🔗 » Не подписаные на рассылку: ${utils.sp(countUnRass)} шт.`);
});

bear.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`✅ Уведомления включены!`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`📝 Уведомления выключены!`);
	}
});
	bear.hear(/^(?:⭐ Отключить капчу)$/i, async (message, bot) => {
	return bot (`желаете отключить капчу навсегда? Информация об отключении капчи:
	
	— Вы сможете отключить капчу навсегда.
	— Капча вас не будет тревожить в разных ситуациях.
	— Вы будете всегда писать команды первее всех остальных.
	— Вы сможете писать неограниченое количество сообщений боту.
	
	🛍 Стоимость: 39₽
	— Напишите команду «Пополнить» и пополните 39₽ через удобный сервис.
	`)
	})

bear.hear(/^(?:передать)\s?([0-9]+)?\s?(.*)?$/i, async (message, bot) => {
	if (ctx.timers.trades > Date.now()) return bot(`передать снова можно будет через ${left(ctx.timers.trades - Date.now())}. ${utils.pick(['😞', '🤕', '😫'])}`)
	if (!message.args[1] || !message.args[2]) return bot(`команда — «Передать [ID] [сумма]». ${smileerror}`);
	
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	if (!message.args[1] || !message.args[2]) return bot(`команда — «Передать [ID] [сумма]». ${smileerror}`);
   if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return;
	if(message.args[2] > ctx.limit_trade) return bot(`нельзя передать такие суммы! ${smileerror}
    ✏️ Ваш лимит передачи: ${utils.sp (ctx.limit_trade)}$`);
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);
    
    const id = Number (message.args [1])
    
	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x => x.uid.find (q => q == message.args [1]));
		if(!user) return bot(`укажите ID или адрес игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid [0]) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

        ctx.timers.trades = Date.now() + 3600000;
		message.user.balance -= message.args[2];
		user.balance += message.args[2];

        const x = user
        
		await bot(`вы перевели игроку *id${x.id} (${user.tag}) ${utils.sp(message.args[2])}$ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		
		if(user.notifications) vk.api.messages.send({ user_id: user.id, random_id: 0, message: `💵 *id${x.id} (${x.tag}), поступления на ваш счëт!
		✏️ Игрок *id${message.user.id} (${message.user.tag}) перевëл вам ${utils.sp (message.args[2])}$!
		
        📄 Введите "Уведомления выкл", если не хотите получать подобные сообщения.` });
	}
});

bear.hear(/^(?:передать)\s?([0-9]+)?\s?(.*)?\s?(.*)?$/i, async (message, bot) => {
	if (ctx.timers.trades > Date.now()) return bot(`передать снова можно будет через ${left(ctx.timers.trades - Date.now())}. ${utils.pick(['😞', '🤕', '😫'])}`)
	if (!message.args[1] || !message.args[2]) return bot(`команда — «Передать [ID] [сумма]». ${smileerror}`);
	
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	if (!message.args[1] || !message.args[2]) return bot(`команда — «Передать [ID] [сумма]». ${smileerror}`);
   if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return;
	if(message.args[2] > ctx.limit_trade) return bot(`нельзя передать такие суммы! ${smileerror}
    ✏️ Ваш лимит передачи: ${utils.sp (ctx.limit_trade)}$`);
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);
    
    const id = Number (message.args [1])
    
	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x => x.uid.find (q => q == message.args [1]));
		if(!user) return bot(`укажите ID или адрес игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid [0]) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

        ctx.timers.trades = Date.now() + 3600000;
		message.user.balance -= message.args[2];
		user.balance += message.args[2];

        const x = user
        
		await bot(`вы перевели игроку *id${x.id} (${user.tag}) ${utils.sp(message.args[2])}$ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		
		if(user.notifications) vk.api.messages.send({ user_id: user.id, random_id: 0, message: `💵 *id${x.id} (${x.tag}), поступления на ваш счëт!
		✏️ Игрок *id${message.user.id} (${message.user.tag}) перевëл вам ${utils.sp (message.args[2])}$ с комментарием «${message.args[3]}»!
		
        📄 Введите "Уведомления выкл", если не хотите получать подобные сообщения.` });
	}
});



bear.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

bear.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

bear.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length > message.user.nicklimit) return bot(`вы указали длинный ник. ${smileerror}`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`🙃`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
	return bot(`${ggtext} ник! ${smilenick}`);
});

bear.hear(/^(?:магазин|🔥 Магазин|🛍 Магазин)$/i, async (message, bot) => {
	return bot (`магазин:

     ⭐ В данный момент, вы находитесь на первой странице.
     
     ▶ Для того, чтобы перелистнуть страницу, необходимо нажать на кнопку в самом конце.
`, {
keyboard: Keyboard.keyboard ([
[
Keyboard.textButton ({
label: "🚗 Машины"
}),
Keyboard.textButton ({
label: "🚐 Трейлеры"
})
],
[
Keyboard.textButton ({
label: "🚁 Вертолëты"
}),
Keyboard.textButton ({
label: "✈️ Самолëты"
})
],

Keyboard.textButton ({
label: "🛍 Список товаров"
}),

Keyboard.textButton ({
label: "▶ Страница 2"
})

]).inline()
})

})

bear.hear(/^(?:▶ Страница 2)$/i, async (message, bot) => {
	return bot (`магазин:

     ⭐ В данный момент, вы находитесь на первой странице.
     
     ▶ Для того, чтобы перелистнуть страницу, необходимо нажать на кнопку в самом конце.`, {
     	keyboard: Keyboard.keyboard ([
     [
          Keyboard.textButton ({
          	label: "🌇 Квартиры"
          }),
          Keyboard.textButton ({
          	label: "🏠 Дома"
          })
          ],
          Keyboard.textButton ({
label: "🛍 Список товаров"
}),

Keyboard.textButton ({
label: "🔥 Магазин"
})

     ]).inline ()
     })
})

bear.hear(/^(?:🛍 Список товаров)$/i, async (message, bot) => {
	return bot (`текущий список товаров в магазине:
	
	 🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты
     🚐 Трейлеры
     
     🏠 Дома
     🌇 Квартиры
     
     🐤 Питомцы
 ⠀ 🔍 Телефоны
⠀⠀🔋 Фермы
⠀⠀👑 Рейтинг [кол-во] - $125 млн.
⠀⠀💼 Бизнесы
⠀⠀🔥 Биткоин [кол-во]`)
})

bear.hear(/^(?:⚡ Транспорт)$/i, function (msg, bot) {
return bot(`
🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты
      🚐 Трейлеры
`);
});

bear.hear(/^(?:⌛ » Недвижимость)$/i, function (msg, bot) {
return bot(`⌛ » Невижимость:
🏠 Дома
🌇 Квартиры`);
});

bear.hear(/^(?:▶ » Мстраница 3)$/i, function (msg, bot) {
return bot(`страница 3.

⌛ » Выбирите нужную кнопку:
`, {
	keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "🌠 » Остальное"
				},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "🎁 » Магазин помощь"
				},
				"color": "positive"

				}],
			]
		})
		});
});

bear.hear(/^(?:🌠 » Остальное)$/i, function (message, bot) {
return bot(`📌 Остальное:
      🐰 Питомцы
⠀⠀📲 Телефоны
⠀⠀🔋 Фермы
⠀⠀👑 Рейтинг [кол-во] - $125 млн.
⠀⠀💼 Бизнесы
⠀⠀?? Биткоин [кол-во]
`);
});

bear.hear(/^(?:▶ » Мстраница 2)$/i, function (msg, bot) {
return bot(`страница 2.

⌛ » Выберите нужную кнопку:
`, {
	keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "⌛ » Недвижимость"
				},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "▶ » Мстраница 3"
				},
				"color": "positive"

				}],
			]
		})
		});
});

bear.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
        options.count = message.args[2];
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}
    
    if(/трейлер/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.travel) return bot(`у вас нет трейлера ${smileerror}`);
        const travel = travel [message.user.travel - 1];
        
        const a = Math.floor (travel ["cost"] / 2);
        
		message.user.travel = 0;
        message.user.balance += a;
        
		return bot(`вы продали свой трейлер за ${utils.sp(a)}$, коммисия: 50%. 🎀`);
	}
	
	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины ${smileerror}`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
        let b = Math.floor(cars[message.user.transport.car - 1].cost * 0.25);
		message.user.balance += a - b;
		ctx.launc = false;
		ctx.sport = false;
		ctx.nitro = false;
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}$, коммисия: ${utils.sp(b)}$`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		message.user.misc.pet = 0;
		message.user.pet.lvl = 0;
		message.user.pet.poterl = false;

		return bot(`вы продали своего питомца за ${utils.sp(a)}$`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`);
		let a2 = message.user.zhelezo * rudazhelezo;

		var zhelezosda = message.user.zhelezo;

		message.user.balance += message.user.zhelezo * 15000;
		message.user.zhelezo = 0;

		return bot(`вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`);
		let a3 = message.user.almaz * almruda;

		var zhelezosda2 = message.user.almaz;

		message.user.balance += message.user.almaz * 100000;
		message.user.almaz = 0;

		return bot(`вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`);
		let a4 = message.user.zoloto * zolotrud;

		var zhelezosda3 = message.user.zoloto;

		message.user.balance += message.user.zoloto * 50000;
		message.user.zoloto = 0;

		return bot(`вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты ${smileerror}`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}$`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}$`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}$`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома ${smileerror}`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}$`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры ${smileerror}`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}$`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона ${smileerror}`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}$`);
	}
    if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет ферм ${smileerror}`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		let a2 = a*message.user.farms;

		message.user.balance += a2;

		bot(`вы продали ${farms[message.user.misc.farm - 1].name} (x${message.user.farms}) за ${utils.sp(a2)}$ ${smilesuccess}`);
		message.user.misc.farm = 0;
		message.user.farms = 0;

	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга ${smileerror}`);
		let a = (25000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;
		message.user.bizlvl = 0;
        message.user.timebiz = 0;
		return bot(`вы продали свой бизнес за ${utils.sp(a)}$`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`);
	}
});

global.setInterval(async () => {
await users.filter(e=>e.farms===0).map(x=>{
x.misc.farm = 0;
});
}, 10000);

bear.hear(/^(?:машины|машина|🚗 Машины)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`машины:
${cars.map(x => `${x.id}. 🚗 ${x.name}
• Цена: ${x.id == 15 ? 0 : utils.sp (x.cost)}$\n`).join("\n")}

Для покупки введите "Машина [номер]"`);
	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;

	if(sell ["id"] == 15) return bot (`самая лучшая СЕКРЕТНАЯ машина в БОТЕ!
	🚗 Купить еë можно по [https://vk.com/market-210137308?w=product-210137308_10179200|данной] ссылке.`)
	if (sell ["id"] == 16) return bot (`самая лучшая СЕКРЕТНАЯ машина в БОТЕ!
	🚗 Купить еë можно по [https://vk.com/market-210137308?w=product-210137308_10179200|данной] ссылке.`)

	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

bear.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot (`список яхт, доступных для покупки:
	
	${yachts.map (x => `${x.id}. 🛥 ${x.name}
	• Цена: ${utils.sp (x.cost)}$\n`).join ("\n")}
	
	Для покупки введите "Яхта [номер]"
	`)
	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

bear.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты|✈️ Самолëты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot (`самолëты:
	
	${airplanes.map (x => `${x.id}. ✈️ ${x.name}
    • Цена: ${utils.sp (x.cost)}$\n`).join ("\n")}
	
	Для покупки введите «Самолет [ID]»
	
     `)
	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

bear.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты|🚁 Вертолëты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot (`список вертолëтов:
	
	${helicopters.map (x => `${x.id}. 🚁 ${x.name}
	• Цена: ${utils.sp(x.cost)}$\n`).join ('\n')}
	
	Для покупки введите "Вертолëт [ID]"

`)
	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

    if (message.args [1] == 14) return;
	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

bear.hear(/^(?:дом|дома|🏠 Дома)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot (`список домов:
	
	${homes.map (x => `${x.id}. 🏠 ${x.name}
	• Цена: ${utils.sp(x.cost)}$\n`).join ('\n')}
	
	Для покупки введите "Дом [ID]"
	`);
	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;

	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

bear.hear(/^(?:квартира|квартиры|🌇 Квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	
if (!message.args [1]) return bot (`список доступных квартир:

${apartments.map (x => `${x.id} ${utils.pick(Array.from ("🌃🏙🌆🌇"))} ${x.name}
• Цена: ${utils.sp (x.cost)}$\n`).join ('\n')}

Для покупки введите "Квартира [номер]"
`)

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

bear.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot (`телефоны:
	
	${phones.map (x => `${x.id}. 📱 ${x.name}
	• Цена: ${utils.sp (x.cost)}$\n`).join("\n")}
	
	Для покупки введите "Телефон [номер]"`)

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

    if(message.args [1] == 11) return bot (`данный телефон можно приобрести за 49₽! 📱`)
    
	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

bear.hear(/^(?:🐻 » Питомцы|питомцы|🐷 Питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
let res = "";
if(!message.args[1]) return bot(`список питомцев:

${pets.map((x) => `${x.smile} ${x.id}. ${x.name}
• Цена: ${utils.sp (x.cost)}$\n`).join("\n")}

Для покупки питомца, используйте команду "Питомцы [ID]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;

	if(message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id; 
		message.user.pet.lvl += 1;

		return bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`);
	}
});

bear.hear(/^(?:питомец)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {
return bot(`информация о вашем питомце:

${pets.find (x=>x.id==message.user.misc.pet).smile} Название «${pets[message.user.misc.pet - 1].name}»
🛒 Стоимость улучшения: ${utils.sp(pets[message.user.misc.pet - 1].cost*message.user.pet.lvl)}$
👑 Уровень питомца: ${message.user.pet.lvl} / 10`);
}

});
	
	bear.hear(/^(?:☘ Подарки)$/i, async (message, bot) => {
		return bot (`команда - "Подарок [ID]"`)
	}
	)
	bear.hear(/^(?:подарок)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	
	if (ctx.podarok > Date.now()) return bot(`вы не можете подарить подарок человеку! Подождите ${left(ctx.podarok - Date.now())}. ⭐`);
	
	const dateMo = 3600000 * 10;
	
	ctx.podarok = Date.now() + dateMo;
	
	let user = users.find(x => x.uid.find (q => q == message.args [1]));
	
	if (user ["id"] === message.senderId) return;
	
	if (!user) return;
	
	const snez = utils.random(5,20)
	const balik = utils.random(55000000,150000000)
	
	user.snezki += 10
	ctx.podarokinfo += 1
	user.balance += 55000000
	ctx.snezki += snez
	ctx.balance += balik
	
	await bot (`вы получили ${utils.sp (balik)}$ и ${snez} снежков! ☘
	🎄 Друг получил 10 снежков и 55млн!
	💵 Баланс: ${utils.sp(ctx.balance)}$`)
	
	await vk
	.api.messages.send ({
	user_id: user.id,
	random_id: 0,
	message: `🎄 Поздравляем вас! Вы получили подарок от *id${ctx.id} (${ctx.tag})!
	💵 Получено: 10 снежков и 55млн!`
	})
	})
	
	const elka_photo = ["photo-210137308_457242497", "photo-210137308_457242498", "photo-210137308_457242499"]
	
bear.hear (/^(?:босс промах)$/i, async (message, bot) => {
	return bot (`вы не попали по боссу! 😔`)
})

bear.hear(/^(?:промо|промокод)\s([^]+)$/i, async (message, bot) => {
if(message.isChat) return bot(`что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`);
if(config.promosl !== `${message.args[1]}`) return bot(`такого промокода нету!`);
if(message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`);

	if(promo >= config.promolimit) return bot(`у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`);
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	if(config.promotip === "rating") message.user.rating += config.promovalue;
    if(config.promotip === "car") message.user.transport.car = 15;
	message.user.promo = true;
	promo += Number (1); 
	ostalos = config.promolimit-promo;
	if(config.promotip === "btc" || config.promotip === "balance" || config.promotip === "rating") return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip.toString().replace(/btc/gi, "฿").replace(/balance/gi, "$")} ✅
🥷 Осталось ${ostalos} активаций.`);
  if(config.promotip === "car") { let a = cars.find(x => x.id === Number(15)); return bot(`вы получили машину «${a.name}»!`); }
   
   if (config.promotip === "imortal") {
   	message.user.promo = true;
   message.user.imortal = true;
   
     return bot (`вы активировали промокод и получили статус «IMORTAL»! 🎀
     🔍 Осталось активаций: ${ostalos}`)
   }
   
   if (config.promotip === "vip") {
	message.user.promo = true
	message.user.vip = true
	
	return bot (`вы активировали промокод и получили VIP-status! 👑
	🔑 Осталось активаций: ${ostalos}`)
}

if (config.promotip === "car_ng") {
	message.user.transport.car = 16
	message.user.promo = true

	return bot (`вы активировали промокод и получили транспорт "Сани"! ⛄
	🔑 Осталось активаций: ${ostalos }`)
}

if (config.promotip === "premium") {
	message.user.promo = true
	message.user.premium = true
	
	return bot (`вы активировали промокод и получили PREMIUM-status! 👑
	👍 Осталось активаций: ${ostalos}`)
}

});
bear.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < pets[message.user.misc.pet - 1].cost) return bot(`недостаточно денег. ${smileerror}`);
        if (message.user.pet.lvl >= 10) return bot (`нельзя прокачать питомца более чем на 10 уровней! ${smileerror}`)
        
		var priceupd = pets[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


}

});

bear.hear(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.timers.poxod > Date.now()) return bot(`питомец устал, подождите ${left(ctx.timers.poxod - Date.now())}! ${smileerror}`);

		let cashfind = pets.find(x=>x.id===Number(message.user.misc.pet));
		message.user.balance += cashfind.poh;
		message.user.timers.poxod = Date.now() + 3600000;
		await bot(`ваш питомец нашёл в походе ${utils.sp(cashfind.poh)}$. Улучшайте своего питомца! ${smilesuccess}`);
		await message.send ({
			sticker_id: 4321
		})
}

});

bear.hear(/^(?:фермы)$/i, async (message, bot) => {
return bot(`Майнинг фермы:

${farms.map((x) => `${x.id}. 🔋 ${x.name}
       • Цена: ${utils.sp(x.cost)}$
       • Прибыль:${utils.sp(x.farm_btc)}₿/час\n`).join("\n")}

Для покупки введите "Фермы [номер] [кол-во]"`);
})

bear.hear (/^(?:фермы)\s([0-9]+)\s?(.*)$/i, async (message, bot) => {
	const farml = farms.find (x => x ["id"] == message.args [1])
	
	if (!farml) return bot (`данной фермы не найдено! ${smileerror}`, {
		keyboard: Keyboard.keyboard ([
     Keyboard.textButton ({
     	   label: "🔋 Фермы"
		})
	]).inline ()
	})
	
	if (message.args [1] == 6) return;
	
	if (message.user.misc.farm != 0 && message.user.misc.farm != message.args [1]) return bot (`нельзя покупать ферму другого типа! 🔋`)
	
	if (message.user.farms >= message.user.farmslimit) return bot (`вы превысили свой лимит ферм. ${smileerror}`)
	if (message.args [1] > message.user.farmslimit) return bot (`нельзя купить ферм больше чем ваш лимит!
	🎰 Ваш лимит ферм составляет: ${utils.sp (message.user.farmslimit)} шт.`)

	if (!message.args [2]) {
		if (message.user.balance < Number (farml.cost)) return bot (`вам нехватает средств! ${smileerror}`)
		
		message.user.balance -= Number (farml.cost)
		
		if (message.user.misc.farm == 0) {
		message.user.misc.farm = farml ["id"]
		message.user.farms += 1
	}
	
	else {
		if (message.user.misc.farm != message.args [1]) return bot (`нельзя покупать ферму другого типа! 🔋`)
		
		message.user.balance -= farlm.cost;
		
		message.user.farms += 1
	}
	
	return bot (`вы купили ферму «${farml.name}» (x1) за ${utils.sp (farml.cost)}$! ⭐`)
	
	}
	
	const summa = Number (farml.cost * message.args [2])
	
	if (message.user.balance < summa) return bot (`вам нехватает ${utils.sp (summa - message.user.balance)}$ для покупки ферм! ${smileerror}`)
	
    message.user.balance -= summa;
    message.user.farms += Number(message.args [2])
    message.user.misc.farm = farml ["id"]
    
    return bot (`вы купили фермы «${farml.name}» (x${message.args [2]}) за ${utils.sp(summa)}$! 🔋`)
})

bear.hear(/^(?:👑 Рейтинг|👑 » Рейтинг)$/i, function (msg, bot) {
return bot(`ваш рейтинг: ${utils.sp(ctx.rating)} шт.`);
});

bear.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 125000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 125000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 50000000 );
		message.user.rating += message.args[1];

		await bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 125000000)}$! ✏️`);
		await message.send ({
			sticker_id: 4318
		})
	}
});

bear.hear(/^(?:бизнесы|💼 Бизнесы)$/i, async (message, bot) => {
       
       const b = businesses;
       
       return bot (`нажмите на ЛЮБУЮ кнопку для просмотра бизнеса! 💰`, {
       	keyboard: Keyboard.keyboard ([
           [ Keyboard.callbackButton ({
            	label: b [0].icon + " " + b[0].name,
                payload: "bizinfo 1"
            }),
            Keyboard.callbackButton ({
            	label: b [1].icon + " " + b[1].name,
                payload: "bizinfo 2"
            }),
            Keyboard.callbackButton ({
            	label: b [2].icon + " " + b[2].name,
                payload: "bizinfo 3"
            })],
            [
            Keyboard.callbackButton ({
            	label: b [3].icon + " " + b[3].name,
                payload: "bizinfo 4"
            }),
            Keyboard.callbackButton ({
            	label: b [4].icon + " " + b[4].name,
                payload: "bizinfo 5"
            }),
            Keyboard.callbackButton ({
            	label: b [5].icon + " " + b[5].name,
                payload: "bizinfo 6"
            })
            ],
            [
            Keyboard.callbackButton ({
            	label: b [6].icon + " " + b[6].name,
                payload: "bizinfo 7"
            }),
            Keyboard.callbackButton ({
            	label: b [7].icon + " " + b[7].name,
                payload: "bizinfo 8"
            }),
            ],
            [
            gen_key ("2⃣", "бизинфо 2")
            ]
           ]).inline ()
       })
/*return bot(`список доступных бизнесов:

${bizzzz}

Для покупки введите "Бизнесы [номер]"`);*/
});

bear.hear(/^(?:бизинфо 2)$/i, async (message, bot) => {
	const b = businesses;
	return bot (`список доступных бизнесов:`, {
		keyboard: Keyboard.keyboard ([
		[
            Keyboard.callbackButton ({
            	label: b [10].icon + " " + b[10].name,
                payload: "bizinfo 11"
            }),
            Keyboard.callbackButton ({
            	label: b [11].icon + " " + b[11].name,
                payload: "bizinfo 12"
            })
            ],
            [
            Keyboard.callbackButton ({
            	label: b [9].icon + " " + b[9].name,
                payload: "bizinfo 10"
            }),
            Keyboard.callbackButton ({
            	label: b [8].icon + " " + b[8].name,
                payload: "bizinfo 9"
            })
            ]
		]).inline ()
	})
})

bear.hear(/^(?:бизнесы)\s([0-9]+)$/i, async function (message, bot) {
const sell = businesses.find(x=> x.id === Number(message.args[1]));
     if (sell ["id"] == 13) return bot (`бизнес "🎄 Владелец ёлочной фабрики" самый лучший бизнес в БОТЕ!
	 💰 Стоимость: 75₽

	 - Приобрести вы его можете по кнопке снизу.`, {
		keyboard: Keyboard.keyboard ([
			Keyboard.urlButton ({
				label: "🔑 Купить",
				url: "https://vk.com/bearbot?w=product-210137308_10138241"
			})
		]).inline()
	 })

	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		await bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$!`, {
			attachment: utils.pick (sell ["photo"])
        });
		await message.send ({ sticker_id: 4321 })
	}
	})

bear.hear(/^(?:биткоин|курс)\s?(.*)?$/i, async (message, bot) => {
	if (!message.args [1] || message.text == "курс") return bot (`сумма ваших биткоинов: ${utils.sp (message.user.btc)}₿. ✏️
	
	💡 Курс: ${utils.sp (btc)}$

    🔥 Покупайте фермы, чем больше, тем лучше!
    🔋 Чтобы продать биткоины, воспользуйтесь командой «Продать биткоины [кол-во]».`, {
		keyboard: Keyboard.keyboard ([
		    gen_key ("🔋", utils.pick (["ферма", "фермы"]))
		]).inline ()
	})
	
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

bear.hear(/^(?:топ|👑 Топ)$/i, async (message, bot) => {
 let top = [];

users.filter(x => x.settings.adm === 0).map(x => {
  top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
 });

 top.sort((a, b) => {
  return b.rating - a.rating;
 });

 let text = ``;
 const find = () => {
  let pos = 1000;

  for (let i = 0; i < top.length; i++)
  {
   if(top[i].id === message.senderId) return pos = i;
  }

  return pos;
 }

 for (let i = 0; i < 10; i++)
 {
  if(!top[i]) return;
  const user = top[i];

  text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}
  `;
 }

 return bot(`топ игроков:
  ${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`, {
	keyboard: Keyboard.keyboard ([
		Keyboard.textButton ({
			label: "👑 Призы рейтинг"
		})
	]).inline ()
});
});

setInterval (() => {
users.map (x => x.clickcmd = 0)
}, (3600000*24))

bear.hear(/^(?:бонус|🌠 Бонус|🐥 Бонус|🎇 » Бонуc|🔑 Бонус)$/i, async (message, bot) => {

	if(message.user.timers.bonus > Date.now()) return bot(`следущий бонус через ${left(message.user.timers.bonus - Date.now())}`);
/*	if(message.user.clickcmd < 300) return bot(`вам нужно использовать как минимум 300 команд за сегодня! 👑
	📗 Вы использовали ${message.user.clickcmd} команд за этот день.`);*/

    ctx.bbaonus += 1;
	let prize = utils.pick([1,1,2,2,3,3])

	message.user.timers.bonus = Date.now() + 86400000;
	
    const sf = await vk.api.call("groups.isMember", { user_id: message.senderId, group_id: groupId });
    
    let rd = utils.random(20939, 9392929);
    let rdbtc = utils.random(5, 2000);
    let rdreit = utils.random(1, 20);
    
    if (sf) {
    	rdbtc *= 2;
        rdreit *= 2;
        rd *= 2;
    }
    
    if (message.user.vip) {
    	rdbtc *= 2;
        rdreit *= 2;
        rd *= 2;
      }
      
      if (message.user.prem) {
    	rdbtc *= 3;
        rdreit *= 3;
        rd *= 3;
      }
      
      if (message.user.imortal) {
    	rdbtc *= 4;
        rdreit *= 4;
        rd *= 4;
      }
      
      const prizes = []
      
      const priza = utils.pick ([1,1,2,2,3,3])
      const dk = utils.random (1,5)
      const ethrandom = utils.random (20,1000)
      const btc_rand = utils.random (150, 5000) * 10
      const dk1 = utils.random (1,5)
      const ethrandom1 = utils.random (20,1000)
      const btc_rand1 = utils.random (150, 5000) * 10
      const dk2 = utils.random (1,5)
      const ethrandom2 = utils.random (20,1000)
      const btc_rand2 = utils.random (150, 5000) * 10
      const dk3 = utils.random (1,5)
      const ethrandom3 = utils.random (20,1000)
      const btc_rand3 = utils.random (150, 5000) * 10
      
      const priza2 = utils.pick ([1,1,2,2,3,3])
      const priza3 = utils.pick ([1,1,2,2,3,3])
      const priza4 = utils.pick ([1,1,2,2,3,3])
      
      if (message.user.settings.adm) {
      	if (priza == 1) {
      	   message.user.c3 += dk;
        	prizes.push (`${dk} ДК`)
          }
          if (priza == 2) {
      	   message.user.eth += ethrandom;
        	prizes.push (`${ethrandom} ETH`)
          }
         if (priza == 3) {
      	   message.user.btc += btc_rand;
        	prizes.push (`${utils.sp (btc_rand)}₿`)
          }
      }
      
      if (message.user.vip) {
      	if (priza2 == 1) {
      	   message.user.c3 += dk;
        	prizes.push (`${dk1} ДК`)
          }
          if (priza2 == 2) {
      	   message.user.eth += ethrandom;
        	prizes.push (`${ethrandom1} ETH`)
          }
         if (priza2 == 3) {
      	   message.user.btc += btc_rand;
        	prizes.push (`${utils.sp (btc_rand1)}₿`)
          }
      }
      
      if (message.user.prem) {
      	if (priza2 == 1) {
      	   message.user.c3 += dk;
        	prizes.push (`${dk2} ДК`)
          }
          if (priza2 == 2) {
      	   message.user.eth += ethrandom;
        	prizes.push (`${ethrandom2} ETH`)
          }
         if (priza2 == 3) {
      	   message.user.btc += btc_rand;
        	prizes.push (`${utils.sp (btc_rand2)}₿`)
          }
      }
      
      if (message.user.imortal) {
      	if (priza3 == 1) {
      	   message.user.c3 += dk;
        	prizes.push (`${dk3} ДК`)
          }
          if (priza3 == 2) {
      	   message.user.eth += ethrandom;
        	prizes.push (`${ethrandom3} ETH`)
          }
         if (priza3 == 3) {
      	   message.user.btc += btc_rand;
        	prizes.push (`${utils.sp (btc_rand3)}₿`)
          }
      }
     
      
    let text = String ()
    
    const min = []
    
   if (message.user.settings.adm) min.push ("✏️ ADMIN")
   if (message.user.vip) min.push ("🔥 VIP")
   if (message.user.prem) min.push ("💎 PREMIUM")
   if (message.user.imortal) min.push ("📆 IMORTAL")
    
    if (min.length != 0) text += `${min.join (" + ")}: ${prizes.join (" + ")}\n`
    
    if (sf) text += `💎 Вы подписаны на @bearbot (Bot Bear), ваш БОНУС умножен!`;
    
    if (!sf) text += `✏️ За подписку на @bearbot (Bot Bear) дается x2 БОНУС!`;
    
	await message.send ({ sticker_id: 4318})

	if(prize === 1)
	{
		message.user.balance += rd;
		return bot(`вы выиграли ${utils.sp(rd)}$ на свой баланс! ${smilesuccess}\n✏️ Баланс: ${utils.sp (message.user.balance)}$\n` + `\n ${text}`);
		
	}

	if(prize === 2)
	{
		message.user.btc += rdbtc;
		return bot(`вы выиграли ${utils.sp(rdbtc)}₿ на свой баланс! ${smilesuccess}\n✏️ Биткоинов: ${utils.sp(message.user.btc)}₿\n` + `\n ${text}`);
		
	}

	if(prize === 3)
	{
		message.user.rating += rdreit;
		
	/*	if (rdreit >= 15) {
			if (ctx.quest1 === false) {
			ctx.quest1 = true;
			ctx.farms += 5;
			if (ctx.misc.farm < 1) {
		ctx.misc.farm = 1;
		}
       vk.api.messages.send({ user_id: message.senderId, message: `🔋 » Квест выполнен! +5 ферм!` });
       }
       }*/
       
		return bot(`вы выиграли ${rdreit}👑 на свой баланс! ${smilesuccess}\n👑 Рейтинг: ${utils.sp(message.user.rating)} ед.\n` + `\n ${text}`);
		
	}

});

bear.hear(/^(?:поход)$/i, async (message, bot) => {

	if(message.user.timers.poxod2 > Date.now()) return bot(`следущий поход через ${left(ctx.timers.poxod2 - Date.now())}. ${smileerror}` + `\n ${text}`);

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);


	message.user.timers.poxod2 = Date.now() + 3600000* 5;


	if(prize2 === 1)
	{
		message.user.balance += 50000;
		return bot(`находясь в походе, вы нашли 50.000$ ${smilesuccess}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 1000;
		return bot(`находясь в походе, вы нашли 1.000₿ ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 5;
		return bot(`находясь в походе, вы нашли 5👑`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 10;
		return bot(`находясь в походе, вы нашли 10👑`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`находясь в походе, вы нашли 3👑`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 4;
		return bot(`находясь в походе, вы нашли 4👑`);
	}
});

bear.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	return bot (`данная команда больше недоступна. ${smilerror}`)
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid [0]) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x => x.uid.find (q => q == message.args [1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке. ${smileerror}`);
    if(user.marriage.requests.length >= 1) return bot (`у данного игрока уже есть запрос на вступление в брак! ${smileerror}`)
	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку, ожидайте его вердикта. 🌹`);


	user.marriage.requests.push(message.user.uid [0]);
    message.marriage.requests.push(message.user.uid [0]);
	
	vk.api
	.messages.send ({
		user_id: user.id,
		message: `🌹 *id${user.id} (${x.tag}), вам было сделано предложение игроком *id${ctx.id} (${x.tag})!`,
		random_id: 0,
		keyboard: Keyboard.keyboard ([
		[
		    Keyboard.textButton ({
			   label: "🌹 Брак принять"
			}),
		Keyboard.textButton ({
			label: "✏️ Брак отказать"
		})
		]
		]).inline ()
	})
	
	return bot(`вы сделали предложение игроку "${user.tag}"!\n✏️ Ожидайте вердикта от данного игрока.`);
});

bear.hear (/^(?:брак принять|🌹 Брак принять)$/i, async (message, bot) => {
	return bot (`данная команда больше недоступна. ${smilerror}`)
	const m = message.user.marriage.requests
	
	if (m ["length"] == 0) return bot (`в данный момент, у вас не было предложений для вступления в брак.`)
	
	const user = users.find (x => x.uid == message.marriage.requests [0])
	message.user.marriage.requests = [];
	message.user.marriage.partner = user.uid;
	
	user.marriage.requests = [];
	user.marriage.partner = message.user.uid [0];
	
	return bot (`вы вступили в брак с игроком *id${user.id} (${x.tag})!`)
	
})

bear.hear(/^(?:браки)$/i, async (message, bot) => {
	return bot (`данная команда больше недоступна. ${smilerror}`)
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

bear.hear(/^(?:развод)$/i, async (message, bot) => {
	return bot (`данная команда больше недоступна. ${smilerror}`)
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

bear.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	return bot (`данная команда больше недоступна. ${smilerror}`)
	let user = users.find(x => x.uid.find (q => q == message.args [1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

bear.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
return bot (`проблема, БАГ?

📖 Bot Bear TP всегда рада вам помочь! Более 30 уникальных хелпера всегда смогут помочь с вашими вопросами.

💎 vk.me/botbear_help`);
})

bear.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

bear.hear(/^(?:работа|📆 Работы)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	 👨‍🌾 1. Дворник
          • Зарплата: 12.500$
          
	 👨‍🔧2. Сантехник
          • Зарплата: 22.500$
          
	 👨‍🏭 3. Электрик 
          • Зарплата: 25.000$
          
	 👷 4. Слесарь
          • Зарплата: 30.000$
          
	 👨‍💼 5. Юрист
          • Зарплата: 45.000$
          
	 👨‍⚖️ 6. Бухгалтер
          • Зарплата: 55.000$
          
	 👨‍🔬 7. Бармен
          • Зарплата: 60.000$
          
	 👮 8. Администратор 
          • Зарплата: 75.000$
          
	 👨‍💻 9. Программист
          • Зарплата: 100.000$
	
	Для трудоустройства введите "Работа [номер]`);
});

bear.hear(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);

	if(message.user.timers.hasWorked > Date.now()) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие ${left(ctx.timers.hasWorked - Date.now())} минут`);

	message.user.timers.hasWorked = Date.now() + 1800000;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;
	message.user.opitwork += 100;

	return bot(`рабочий день закончен
	💵 Вы заработали ${utils.sp(earn)}$`);
});

global.setInterval(async () => {
await users.forEach(e=>{
if (e.opitwork > 90000) {
e.opitwork = 90000;
}
});
}, 5000);

bear.hear(/^(?:правила доната)$/i, async (message, bot) => {
	await vk.api.messages.send({
    user_id: message.senderId,
	random_id: 0,
    forward: JSON.stringify({
				peer_id: 569336824,
				conversation_message_ids: 78187
			}),
			message: `💵 Соглашение с правилами о покупке товара в [vk.com/bearbot|Bot Bear]!`,
			keyboard: Keyboard.keyboard ([
			gen_key (!message.user.donate_uvedi ? "✅ Соглашаюсь" : "✅ Соглашение принято", !message.user.donate_uvedi ? "правиладоната согласен" : "правиладоната отказ")
			]).inline ()
			});
})

bear.hear(/^(?:правиладоната согласен)$/i, async (message, bot) => {
	if (message.user.donate_uvedi) return bot (`вы уже принимали соглашения с правилами доната. ✅`)
	
	message.user.donate_uvedi = true;
	
	return bot (`вы приняли соглашения с правилами доната. ✅`)
})

bear.hear(/^(?:правиладоната отказ)$/i, async (message, bot) => {
	return bot (`вы уже принимали соглашения с правилами доната. ✅`)
})
bear.hear(/^(?:уволиться)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете`);

	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

bear.hear (/^(?:аклан название)\s(.*)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 14) return;
	
	clans [message.args [1]].name = message.args [2];
	
	return bot (`название клана под #${message.args[1]} изменено на ${message.args [2]}! 🔗`)
})

bear.hear (/^(?:аработа)\s(.*)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 14) return;
	
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return bot (`игрока не найдено в базе данных! 🔍`)
	
	user.work = message.args [2];
	
	return bot (`игроку «${user.tag}» была установлена работа под #${message.args[2]}! ✅`)
})

bear.hear (/^(?:обнулить бизнес)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 14) return;
	
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return bot (`игрока не найдено в базе данных! 🔍`)
	
	user.business = 0;
	
	return bot (`игроку «${user.tag}» был обнулен бизнес! ✅`)
})

bear.hear (/^(?:подписка)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 14) return;
	
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return bot (`игрока не найдено в базе данных! 🔍`)
	
	user.tester = true;
	
	return bot (`игроку «${user.tag}» была добавлена ПОДПИСКА НАВСЕГДА! ✅`)
})

bear.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000$`);
	} else return bot(`не угадали
	🎲 Выпало число ${int}`);
});

bear.hear(/^(?:казик|казино|кз|азино|⚙ Казино)\s?(.*)?$/i, async (message, bot) => {
if (!message.args [1]) return bot (`чтобы играть в казино, пропишите «Казино [сумма]»! 🎀`)
if (message.user.balance < nalogkazik) return bot(`у вас должно быть как минимум ${utils.sp(nalogkazik)}$! 👑`);
if (message.args[1] < 0) return;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
if (!Number(message.args[1])) return;
message.args[1] = Math.floor(Math.round((Number(message.args[1]))));

const smileos = utils.pick(['🙂', '😇']);
const smileyes = utils.pick(['🙂', '😃', '😄', '🤑', '☺']);
const smileno = utils.pick(['😕', '😔', '😫']);
const smilepizda = utils.pick(["🚀", "🌠", " ⌛"]);

if (message.args[1] <= 0) return;

if (message.args[1] > message.user.balance) return bot(`нехватает денег! \n ?? » Баланс: ${utils.sp(ctx.balance)}$`);
else if (message.args[1] <= message.user.balance) {
let multiply = [];
let cash = 0;

message.user.balance -= message.args[1];
if (message.args[1] < 10 && message.args[1] >= 1) {
cash = 0.00;
multiply = [0.25, 0, 5, 0.75, 1, 2, 5, 10, 50, 100];//1169.5 - 10 - 116.95
if (message.user.vip) multiply.concat([250]);//1419.5 - 11 - 129.04
if (message.user.prem) multiply.concat([250, 500]);//1919.5 - 12 - 159.95
}
if (message.args[1] < 100 && message.args[1] >= 10) {
cash = 0.00;
multiply = [0.25, 0, 5, 0.75, 1, 2, 5, 10, 50, 100,];//669 - 10 - 66.9
if (message.user.vip) multiply.concat([250]); //919 - 11 - 83.54
if (message.user.prem) multiply.concat([250, 400]);//1319 - 12 -109.9
}
if (message.args[1] < 1000 && message.args[1] >= 100) {
cash = 0.00;
multiply = [0.5, 0.75, 1, 2, 5, 10, 50, 50, 100];//419.25 - 10 - 41.93
if (message.user.vip) multiply.concat([100]);//519.25 - 11 - 47.2
if (message.user.prem) multiply.concat([100, 150]);//669.25 - 55.7
}
if (message.args[1] < 10000 && message.args[1] >= 1000) {
cash = 0.01;
multiply = [0.5, 0.75, 1, 2, 5, 10, 50, 50, 100];//319.25 - 10 - 31.93
if (message.user.vip) multiply.concat([50]);//369.25 - 11 - 33.56
if (message.user.prem) multiply.concat([50, 100]);//469.25 - 12 - 39.104
}
if (message.args[1] < 100000 && message.args[1] >= 10000) {
cash = 0.01;
multiply = [0.5, 0.75, 0.75, 1, 2, 5, 10, 50, 50, 100];//320 - 11 - 29.09
if (message.user.vip) multiply.concat([50]);//370 - 12 - 30.83
if (message.user.prem) multiply.concat([50, 75]);//445 - 13 - 34.23
}
if (message.args[1] < 1000000 && message.args[1] >= 100000) {
cash = 0.02;
multiply = [0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 10, 50, 50, 100];//322.5 - 13 - 24.8
if (message.user.vip) multiply.concat([25]);//347.5 - 14 - 24.82
if (message.user.prem) multiply.concat([25, 50]);//397.5 - 15 - 26.5
}
if (message.args[1] < 10000000 && message.args[1] >= 1000000) {
cash = 0.02;
multiply = [0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 10, 50, 50];//222.5 - 12 - 18.54
if (message.user.vip) multiply.concat([20]);//242.5 - 13 - 18.65
if (message.user.prem) multiply.concat([20, 35]);//277.5 - 14 - 19.82
}
if (message.args[1] < 100000000 && message.args[1] >= 10000000) {
cash = 0.03;
multiply = [0.25, 0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 10, 20, 50];//192.75 - 13 - 14.82
if (message.user.vip) multiply.concat([15]);//207.75 - 14 - 14.83
if (message.user.prem) multiply.concat([15, 25]);//232.75 - 15 - 15.51
}
if (message.args[1] < 1000000000 && message.args[1] >= 100000000) {
cash = 0.03;
multiply = [0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 5, 10, 20, 25, 50];//123 - 15 - 8.2
if (message.user.vip) multiply.concat([10]);//133 - 14 - 9.5
if (message.user.prem) multiply.concat([10, 15]);//148 - 15 - 9.86
}
if (message.args[1] < 10000000000 && message.args[1] >= 1000000000) {
cash = 0.03;
multiply = [0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 0.75, 1, 2, 2, 5, 5, 5, 10, 15, 25];// 73.75 - 16 - 4.6
if (message.user.vip) multiply.concat([5]);// 78.75 - 17 - 4.63
if(message.user.prem) multiply.concat([5, 10]);//88.75 - 18 -p4.93
}
if (message.args[1] < 100000000000 && message.args[1] >= 10000000000) {
cash = 0.04;
multiply = [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 5, 5, 10];//36.75 - 18 - 2.
if (message.user.vip) multiply.concat([3]);// 39.75 - 19 - 2.09
if (message.user.prem) multiply.concat([3, 5]); // 44.75 - 20 - 2.23
}
if (message.args[1] < 1000000000000 && message.args[1] >= 100000000000) {
cash = 0.04;
multiply = [0, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 2, 5, 5];// 29 - 19 - 1.52
if (message.user.vip) multiply.concat([2]);//31 - 20 - 1.55
if (message.user.prem) multiply.concat([2, 5]);//36 - 21 - 1.71
}
if (message.args[1] < 10000000000000 && message.args[1] >= 1000000000000) {
cash = 0.05;
multiply = [0, 0, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5];//26 - 23 - 1.13
if (message.user.vip) multiply.concat([2]);// 28 - 24 - 1.16
if (message.user.prem) multiply.concat([2, 2]); // 30 - 25 - 1.2
}
if (message.args[1] < 100000000000000 && message.args[1] >= 10000000000000) {
cash = 0.05;
multiply = [0, 0, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5];//28 - 27 - 1.037
if (message.user.vip) multiply.concat([2]);//30 - 28 - 1.07
if (message.user.prem) multiply.concat([0, 0.25, 5]);//32.25 - 30 - 1.075
}
if (message.args[1] < 1000000000000000 && message.args[1] >= 100000000000000) {
cash = 0.05;
multiply = [0, 0, 0, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5];//26 - 27 - 0.96
if (message.user.vip) multiply.concat([1]);//27 - 28 -0.96
if (message.user.prem) multiply.concat([1, 2]);//29 - 29 - 1
}
if (message.args[1] < 10000000000000000 && message.args[1] >= 1000000000000000) {
cash = 0.06;
multiply = [0, 0, 0, 0, 0, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5];//24 - 27 - 0.88
if (message.user.vip) multiply.concat([1]);// 25 - 28 - 0.89
if (message.user.prem) multiply.concat([1.2]);///25.2 - 28 - 0.9
}
if (message.args[1] < 100000000000000000 && message.args[1] >= 30000000000000000) {
cash = 0.06;
multiply = [0, 0, 0, 0, 0, 0, 0, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0, 5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 5, 5];//20 - 27 - 0.74
if (message.user.vip) multiply.concat([1]);//21 - 28 - 0.75
if (message.user.prem) multiply.concat([1.2]);//21.2 - 28 - 0.76
}
if (message.args[1] === message.user.balance) {
if (ctx.balance > 400000000) {
cash = 0.01;
}
else {
if (ctx.vip && ctx.prem) {
multiply = multiply.concat([0.50]);
}
}
}
if (message.user.vip) cash += 0.01;
if (message.user.prem) cash += 0.02;
if (message.user.balance > 100000000) multiply = multiply.concat([0.75]);
if (message.user.balance > 1000000000) multiply = multiply.concat([0.75]);
if (message.user.balance > 10000000000) multiply = multiply.concat([0.75]);
if (message.user.balance > 100000000000) multiply = multiply.concat([0.75]);
if (message.user.balance > 1000000000000) multiply = multiply.concat([0.5]);
if (message.user.balance > 10000000000000) multiply = multiply.concat([0.5]);
if (message.user.balance > 100000000000000) multiply = multiply.concat([0.25]);
if (message.user.balance > 1000000000000000) multiply = multiply.concat([0.25]);
if (message.user.balance > 10000000000000000) multiply = multiply.concat([0]);
if (message.user.rating > 1000) multiply =

multiply.concat([0.75]);
if (message.user.rating > 10000) multiply = multiply.concat([0.75]);
if (message.user.rating > 100000) multiply = multiply.concat([0.75]);
if (message.user.rating > 1000000) multiply = multiply.concat([0.5]);
if (message.user.rating > 10000000) multiply = multiply.concat([0.25]);
if (message.user.rating > 100000000) multiply = multiply.concat([0]);
if (message.user.btc > 1000000000) multiply = multiply.concat([0.75]);
if (message.user.btc > 10000000000) multiply = multiply.concat([0.5]);
if (message.user.btc > 100000000000) multiply = multiply.concat([0.25]);
multiply = utils.pick(multiply);
if (message.user.balance > 100000000000000) cash += 0.03;
if (multiply <= 1) message.user.balance += Math.floor(Math.round((message.args[1] * multiply)));
if (multiply > 1) message.user.balance += Math.floor(Math.round((message.args[1] * multiply) * (1 - cash) + message.args[1] * cash));
const randstove = utils.pick(["negative", "positive"]);
let nalog = cash;
return bot(`${multiply === 1 ? `ваши средства не утеряны! (x${multiply}) ${smileos}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] - message.args[1] * multiply)}$ (x${multiply}) ${smileno}` : `вы выиграли ${utils.sp(Math.floor((message.args[1] * multiply - message.args[1]) * (1 - nalog)))}$ (x${multiply}) ${smilepizda}`}`}
💵 Баланс: ${utils.sp(message.user.balance)}$
`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": `⚙ Казино ${message.args[1]}`
		},
			"color": `${randstove}`
		},
	    {
			"action": {
			"type": "text",
			"payload": "{}",
			"label": `⚙ Казино ${Math.floor(message.args[1] / 2)}`
	},
		"color": `${randstove}`
	}
]
		]
			})
		});
}
});

bear.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`);
	if(message.args[2] <= 50) return bot(`ставка должна быть больше 50$ ${smilekazinobad}`);
	else if (message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([1, 1, 2, 2]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			message.user.balance += Math.floor(message.args[2] * 2);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			⭐ Вы заработали +${utils.sp (message.args[2])}$!
			💰 Баланс: ${utils.sp (message.user.balance)}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ К сожалению, вы потеряли ${utils.sp (message.args[2])}$!
			💰 Баланс: ${utils.sp (message.user.balance)}$`);
		}
	}
});

bear.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔
?? Ваш баланс: ${message.user.balance}$`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}`);
		} else {
			return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});

bear.hear(/^(?:бизнес|🍔 Бизнес|📉 » Бизнес)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
	var lvlcash = biz.earn*message.user.bizlvl;
var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

var upgrade = String ()

if (message.user.bizlvl >= 5 && message.user.business == 12) {
	upgrade = `⛽ Ваш бизнес улучшен на максимальный уровень!`
}

if (message.user.business < 12 && message.user.bizlvl < 20) {
	upgrade = `🛒 Стоимость улучшения: ${utils.sp(updprice2)}$`
}

if (message.user.business == 12 && message.user.bizlvl < 5) {
	upgrade = `🛒 Стоимость улучшения: ${utils.sp(updprice2)}$`
}

const bb = ctx.bizx2;
    if (!bb) {
	return bot(`статистика "${biz.name}":
    💰 Прибыль: ${utils.sp(lvlcash)}$/час
	💵 На счёте: ${utils.sp(message.user.biz)}$
	🆙 Уровень: ${message.user.bizlvl} / ${biz ["id"] == 12 ? '5' : '20'}
	${upgrade}
	⏱️ Бизнес у вас уже ${craft_left(message.user.timebiz)}
	`, {
		attachment: utils.pick (biz ["photo"]),
		keyboard: Keyboard.keyboard ([
		  [ Keyboard.textButton ({
			    label: utils.pick (["💸", "💰"]),
			    payload: {
				    command: `бзв_м`
				}
			}),
			
		   Keyboard.textButton ({
			   label: "⬆️",
			   payload:{command:"бизнес улучшить"}
   		})
          ]
   
		]).inline ()
     });
	}
	if (bb) {
		return bot(`статистика "${biz.name}":
		💰 Прибыль: ${utils.sp(lvlcash)}$/час
		💵 На счёте: ${utils.sp(message.user.biz)}$
		⚙ Уровень: ${message.user.bizlvl} / 20
		🛒 Стоимость улучшения: ${utils.sp(updprice2)}$
		📗 Бизнес уже у вас ${left(message.user.timebiz)}
	🎁 Вы получаете прибыль X2!`);
	}
});

bear.hear(/^(?:бизнес улучшить)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
if (message.user.bizlvl >= 5 && message.user.business == 12) return bot ("вы улучшили свой бизнес до максимального уровня. " + smileerror)
if (message.user.bizlvl >= 20) return bot ("вы улучшили свой бизнес до максимального уровня. " + smileerror)
	const biz = businesses.find(x=> x.id === message.user.business);
     
	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`недостаточно денег. ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;

	return bot(`вы успешно улучшили бизнес. ${smilesuccess}
⚙ Ваш баланс: ${utils.sp(message.user.balance)}$`, {
	keyboard: Keyboard.keyboard ([
	    Keyboard.textButton({
		label: "⬆️",
		payload: {command:"бизнес улучшить"}
		})
	]).inline ()
     });


});

bear.hear(/^(?:бзв_м)$/i, async (message, bot) => {
    message.args = [String, message.user.biz]
    
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы».`);

if (ctx.biz == 0) return bot (`на счëте вашего бизнеса нету прибыли. ⛔`)

	var cashlvlbiz = Math.floor(Number(message.args[1]));
    message.user.balance = Number(ctx.balance);
    ctx.biz = Number(ctx.biz);

	const vips = [message.user.vip, message.user.imortal, message.user.prem]
	const randombiz = utils.pick ([1,1,2,2])

	if (!message.user.vip || !message.user.prem || message.user.imortal || randombiz == 1) cashlvlbiz -= Math.floor (Number(cashlvlbiz / 2))

	message.user.balance +=  Number(cashlvlbiz);
	message.user.biz -= Math.floor(Number(message.args[1]));

	var text = String ()

	text += `вы сняли со счёта своего бизнеса ${utils.sp(message.args [1])}$ ${smilesuccess}\n`

	if (randombiz == 1 && vips.every (x => x == false) && Number (message.args [1]) > 10) {
		text += `\n👮‍♂️ Вас посетила налоговая служба, пришлось отдать часть прибыли.\n💸 Конфисковано: ${utils.sp(cashlvlbiz)}$!\n\n🔥 Для VIP, PREMIUM, IMORTAL и АДМИН игроков налоги отсутствуют!`
	}

	return bot(text);
}); 

bear.hear(/^(?:бизнес снять)\s(.*)$/i, async (message, bot) => {
   
    message.args [1] = message.args [1]
	.replace (/к/g, "000").replace (/(все|всë)/, Number (ctx.biz))

    message.args[1] = Math.floor(Number(message.args[1]));
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы».`);
	if(ctx.biz < message.args[1]) return bot(`недостаточно денег на счету бизнеса. ${smileerror}`);
    if (ctx.biz == 0) return bot (`на счëте вашего бизнеса нету прибыли. ⛔`)

	var cashlvlbiz = Math.floor(Number(message.args[1]));
    message.user.balance = Number(ctx.balance);
    ctx.biz = Number(ctx.biz);

	const vips = [message.user.vip, message.user.imortal, message.user.prem]
	const randombiz = utils.pick ([1,1,2,2])

	if (!message.user.vip || !message.user.prem || message.user.imortal || randombiz == 1) cashlvlbiz -= Math.floor (Number(cashlvlbiz / 2))

	message.user.balance +=  Number(cashlvlbiz);
	message.user.biz -= Math.floor(Number(message.args[1]));

	var text = String ()

	text += `вы сняли со счёта своего бизнеса ${utils.sp(message.args [1])}$ ${smilesuccess}\n`



	if (randombiz == 1 && vips.every (x => x == false) && Number (message.args [1]) > 10) {
		text += `\n👮‍♂️ Вас посетила налоговая служба, пришлось отдать часть прибыли.\n💸 Конфисковано: ${utils.sp(cashlvlbiz)}$!\n\n🔥 Для VIP, PREMIUM, IMORTAL и АДМИН игроков налоги отсутствуют!`
	}

	return bot(text);
}); 

bear.hear(/^(?:подписка)$/i, async (message, bot) => {
	return bot (`мы запускаем платную ПОДПИСКУ в Bot Bear!
	
	🎀 Стоимость «OST-PREMIUM» подписки: 250₽
	🎀 Стоимость «BearMaks» подписки: 333₽
	
	💵 Стоимость LUXURY подписки: 499₽
	💵 Стоимость PREMIUM подписки: 200₽
	
	⭐ Какие привилегии вы получите при платной подписке?:
	
	   ☘️ 24/7 связь с создателем и со всем коллективом администрации.
	   ⚡ Секретную привилегию «Тестировщик».
	   ⭐ Доступ к BETA-тестированию Bot Bear в TG, DS, VK (5.0)
	   👑 Возможность получить максимальную привилегию для тестирования нового БОТА.
	   💵 VIP статус + PREMIUM статус.
	   💎 Доступ к ПРИВАТНОЙ беседе.
	   🔥 Доступ к приватной беседе со спойлером обновлений.
	   👑 Каждый день по 1 секретному призу.
	   💽 X3 прибыль биткоинов с ферм.
	   💼 X3 прибыль с любого бизнеса.
	   ✏️ X5 бонус с лайка на пост.
 	  🚀 Шанс на выпадение секретного кейса из бонуса.
      💡 Шанс на КАЗИНО повышен.
      🚗 Возможность выпадения призов с гонок.
	  🔋 Работа ферм увеличена до 15 дней.
  	🔖 Индивидуальные скидки на все товары в донате.
      ⚔️ Шанс на проигрыш в клане минимальный.
      🔑 Возможность получить 50 билетов для автомата.
      
     💡 Привилегии при PREMIUM подписке:
     
       ☘️ 24/7 связь с создателем и со всем коллективом администрации.
	   ⚡ Секретную привилегию «Тестировщик».
	   ⭐ Доступ к BETA-тестированию Bot Bear в TG, DS, VK (5.0)
	   👑 Возможность получить максимальную привилегию для тестирования нового БОТА.
	   💵 VIP статус + PREMIUM статус.
	   💎 Доступ к ПРИВАТНОЙ беседе.
	   🔥 Доступ к приватной беседе со спойлером обновлений.
	   👑 Каждый день по 1 секретному призу.
	
	   🔖 В данный момент, вы можете приобрести подписку через создателя (@ostronix).
   `, {
   	keyboard: Keyboard.keyboard ([
        gen_key ("🎀 OST-PREMIUM", "остподписка"),
        gen_key ("🐻 BearMaks", "мподписка")
   ]).inline ()
   })
   })
   
   bear.hear (/^(?:беседа)$/i, async (message, bot) => {
   	if (!message.isChat) return bot (`данный чат не является беседой! 🔍`)
   
       const chat = chats.find (x => x.id == message.chatId);
       
       if (!chat) return bot (`данный чат не зарегестрирован в базе данных! 🎀`)
       
       return bot (`информация о данном чате:
       
       ${chat.avtokick ? "✅ Включен АВТОКИК по ссылкам" : "⛔ Автокик выключен"}
       `)
   })
   
   bear.hear (/^(?:автокик)\s(вкл|выкл)$/i, async (message, bot) => {
   	if (!message.isChat) return bot (`данный чат не является беседой! 🔍`)
   
   	var response = await vk.api.messages.getConversationsById({ peer_ids: message.peerId, group_id: groupId, random_id: 0});
        if (response.items[0].chat_settings.owner_id !== message.senderId || message.user.settings.adm < 3) return bot(`команда доступна только создателю беседы.`);
   
       const chat = chats.find (x => x.id == message.chatId);
       
       if (!chat) return bot (`данный чат не зарегестрирован в базе данных! 🎀`)
       
       if (message.args [1] == "вкл") {
       chat.avtokick = true;
       
       fs.writeFileSync ('./database/chats.json', JSON.stringify (chats, null, "\t"))
       
       return bot (`вы успешно включили автоКИК в данной беседе! ✅`)
       } else {
       chat.avtokick = false;
       
       fs.writeFileSync ('./database/chats.json', JSON.stringify (chats, null, "\t"))
       
       return bot (`вы успешно выключили автоКИК в данной беседе! ⛔`)
       }
   })

     bear.hear (/^(?:остподписка)$/i, async (message, bot) => {
     	return bot (`привилегии при подписке «Островского»:
     
         🎀 Секретная конференция по Bot Bear.
         👁 Секретные информации от Островского.
         🔝 LUXURY + IMORTAL статусы.
         🔍 Доступ к секретным статусам БОТА.
         💸 Возможность получать каждый день по 2,500,000,000,000$
         
         💸 Цена: 250₽
         
         🔗 По поводу покупки данной подписки необходимо отписать создателю (vk.com/ostronix)`, {
         	keyboard: Keyboard.keyboard ([
              gen_key ("🔥 10₽/5 дней", "испытать подписку")
             ]).inline ()
         })
     })
     
     bear.hear (/^(?:испытать подписку)$/i, async (message, bot) => {
     	return bot (`чтобы испытать подписку, заплатите 10₽ за 5 дней подписки!
     
        ✅ После оплаты вернитесь обратно!`, {
        	keyboard: Keyboard.keyboard ([
              Keyboard.urlButton ({
			label: "💎 Оплатить",
			url: "https://vk.com/app6471849_-210137308"
			})
        ]).inline ()
        })
     })
     
     bear.hear (/^(?:мподписка)$/i, async (message, bot) => {
     	return bot (`привилегии при подписке «BearMaks»:
     
         💸 Выдача себе до 10,000,000,000,000$ в день.
         🔍 Доступ к секретному чату медвежат.
         
         💸 Цена: 333₽
         
         🔗 По поводу покупки данной подписки необходимо отписать создателю (vk.com/ostronix)`)
     })
     
     bear.hear (/^(?:получитьм)\s(.*)$/i, async (message, bot) => {
     	if (!message.user.bearmaks) return;
         
         if (message.user.bearmaks.time > Date.now ()) return bot (`необходимо подождать еще ${craft_left (message.user.bearmaks - Date.now ())}! 🎀`)
         if (message.args [1] > 10000000000000) return;
         
         message.user.bearmaks.time = Date.now () + (3600000*24);
         
          message.user.balance += Number (message.args [1]);
          
          return bot (`вы получили ${utils.sp (message.args [1])}$! 💸`)
     })
     
     setInterval (() => {
     	
     users.map (x => {
     if (x.ostrovsky) {
     	x.balance += 2500000000000
     }
    })
    }, 3600000*24)
     
bear.hear(/^(?:ферма|📻 Ферма|🔗 » Ферма)$/i, function (message, bot) {
if (!message.user.misc.farm) return bot(`у вас нет ферм. 😞`);
let farmm = farms.find(x => x.id === Number(message.user.misc.farm));
return bot(`информация о вашей майнинг ферме:

🥷 Наименование коллекции: «${farmm.name} (${message.user.farms} шт)»
💧 Накопилось биткоинов: ${utils.sp (message.user.farm_btc)}₿
💸 Стоимость вашей коллекции: ${utils.sp(farmm.cost * ctx.farms)}$

✏️ Доход: ${utils.sp(farmm.farm_btc * message.user.farms)}₿/час
`, {
	
	        attachment: "photo-211040006_457239038",
			keyboard: Keyboard.keyboard ([
		   [ Keyboard.textButton ({ label: "💽 Собрать биткоины" }), Keyboard.textButton ({ label: "🌳 Баланс" })],
		   [gen_key ("🔍 Доход", "ферма доход")]
		]).inline ()
	})
});

bear.hear (/^(?:ферма доход)$/i, async (message, bot) => {
	if (!message.user.misc.farm) return;
	const farmm = farms.find(x => x.id === Number(message.user.misc.farm));
	
	return bot (`доход с ваших ферм:
	
	🔍 ${utils.sp (farmm.farm_btc * message.user.farms)}₿/час | ${utils.sp (farmm.farm_btc * message.user.farms * 24)}₿/день | ${utils.sp (farmm.farm_btc * message.user.farms * 24 * 30)}₿/мес`)
})

bear.hear(/^(?:💽 Собрать биткоины)$/i, function (message, bot) {
if (!message.user.misc.farm) return;
if (!message.user.farm_btc) return bot(`на вашей ферме нет биткоинов!`);

message.user.btc += message.user.farm_btc;
let a = message.user.farm_btc;
message.user.farm_btc = 0;

return bot(`вы собрали со своих ферм ${utils.sp(a)}₿! ✏️`);
});

bear.hear(/^(?:restart|рестарт)\s(.*)$/i, async (message, bot) => {
	if(message.user.settings.adm < 11) return;
	if(!Number(message.args[1])) return;
	await bot(`👤 » Успешно!`);
 async function saveVse() {
 	try {
	await saveUsers();
	vk.api.messages.send({ chat_id: achat, message: `👤 » Рестарт прошел успешно! \n 👔 » Человек в боте: ${utils.sp(users.length)} шт. \n 🌠 » Заданое время: ${testlol(message.args[1])}` });
	process.exit(-1);
	} catch (e) { console.log(e) }
	}
	global.setTimeout(() => {
	saveVse();
	}, Number(message.args[1]));

});

bear.hear(/^(?:👥 SCAM|scam|скам)$/i, async (message, bot) => {
	await bot (`загрузка вашего скама... ⚡`)
	
	return bot (`информация о мамонтах:
	
	✅ Заскамлено: ${utils.sp(message.user.ref)} шт
	👥 Заработано со скама: ${utils.sp(500000000000*message.user.ref)}$
	`, {
	attachment: "photo-210137308_457244063",
	keyboard: Keyboard.keyboard ([
[	Keyboard.textButton ({
	label: "✅ Скам-ссылка"
	})],
	[
	Keyboard.urlButton ({
		url: "https://t.me/botbear01/77",
		label: "🤝 Призы"
	})
	],
	[
	gen_key ("1⃣ Топ скамеров", "топ скамеров")
	]
	]).inline()
	}
	);
	});
	
	bear.hear (/^(?:✅ Скам-ссылка)$/i, async (message, bot) => {
		return bot (`ваша скам ссылка: https://vk.me/bearbot?ref=${message.user.id}`)
	})

bear.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.

		Если вы угадаете код, то вы получите 10.000.000.000$`);
	}
});


bear.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

if(message.user.settings.adm< 2) return;
if(!Number(message.args[2])) return;
message.args[2] = Math.floor(Number(message.args[2]));
if (message.args[2] > 500000000000) return;
if(message.args[2] <= 0) return;
if (ctx.timers.vidat > Date.now()) return bot(`выдать можно раз в ${left(ctx.timers.vidat - Date.now())}! 🎁`);
ctx.timers.vidat = Date.now() + 3600000;

{
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

let bilo = utils.sp(user.balance);
user.balance += message.args[2];


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$ \n 💸 Старый баланс: ${bilo} \n 💸 Новый баланс: ${utils.sp(user.balance)} \n 👤 Выполнен за 0,00000000001мс`);
if (user.balance > 49999999999999999) await bot(`👔 » Выдача игроку ${user.tag} прошла не успешно! У игрока максимальный баланс!`);
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
🌠 » Вам было выдано ${utils.sp(message.args[2])}$! \n 💸 Старый баланс: ${bilo} \n 💸 Новый баланс: ${user.balance}` });
}

let as = await users.find(x=>x.id===message.senderId);

await vk.api
.messages.send
({
chat_id: achat,
message: `✏️ [GIVE LOGS]

🔥 *id${message.user.id} (${message.user.tag}) выдал игроку «${user.tag}» ${utils.sp (message.args [2])}$!`
});
});

bear.hear(/^(?:бан)\s(.*)\s([^]+)$/i, async (message, bot) => {
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
if(!message.user.mycmd.find(x=>x.name === "ban")) return bot(`доступ на эту команду можно купить у Основателя! 👑`);
if(message.user.settings.adm < 3) return;

{
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

message.user.settings.bans += 1;
user.ban = true;

saveUsers();
await bot(`вы забанили игрока *id${user.id} (${user.tag})! ✏️`,);
await vk.api.messages.send({ user_id: user.id, random_id: 0, message: `📄 Вы получили блокировку аккаунта от администратора *id${ctx.id} (${ctx.tag})!
✏️ Причина блокировки: ${message.args[2]}` });
}
});

bear.hear(/^(?:разбан)\s(.*)\s([^]+)$/i, async (message, bot) => {
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
if(!message.user.mycmd.find(x=>x.name === "unban")) return bot(`доступ на эту команду можно купить у Основателя! 👑`);
if(message.user.settings.adm < 3) return;

{
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);


user.ban = false;

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag})! ✏️`);
vk.api.messages.send({ user_id: user.id, random_id: 0, message: `📄 Ваш аккаунт был разблокирован администратором *id${ctx.id} (${ctx.tag})!\n✏️ Причина: ${message.args[2]}` });
}
});

bear.hear(/^(?:копать)$/i, async (message, bot) => {

return bot(`использование: «копать железо/золото/алмазы» ${smileerror}`);

});

bear.hear(/^(?:копать железо)$/i, async (message, bot) => {

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzhelezo = utils.random(16, 97);

message.user.energy -= 1;
message.user.opit += 1;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

global.setTimeout(() => {
	message.user.energy = ctx.maxenergy;
}, 300000);

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);

}

});

bear.hear(/^(?:копать золото)$/i, async (message, bot) => {

if(message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали! \n 🚀 » Подождите немного времени`);

let randzoloto = utils.random(5, 35);

message.user.energy -= 1;
message.user.opit += 5;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
👑 » Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

global.setTimeout(() => {
	message.user.energy = 10;
}, 300000300000);

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);

}

});

bear.hear(/^(?:копать алмазы)$/i, async (message, bot) => {

if(message.user.opit < 3000) return bot(`что бы копать алмазы нужно больше 3 000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randalmaz = utils.random(3, 26);

message.user.energy -= 1;
message.user.opit += 10;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

global.setTimeout(() => {
	message.user.energy = ctx.maxenergy;
}, 300000);

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);

}

});

bear.hear(/(?:Копать материю|💸 » Копать материю)$/i, async (message, bot) => {

if(message.user.opit < 70000) return bot(`нужно 70.000 опыта, что-бы копать МАТЕРИЮ! 🎁`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randmateria = utils.random(1, 2);

message.user.energy -= 1;
message.user.opit += 50;
message.user.materia += randmateria;

saveUsers();

if(message.user.energy > 0) return bot(`+${randmateria} материи.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `💸 » Копать материю`
},
"color": "positive"
}]
]
})
})

if(message.user.energy < 1) {

return bot(`+${randmateria} материи.
Энергия закончилась. ⛔`);
}
});

bear.hear(/^(?:железо)$/i, async (message, bot) => {

return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`);

});

bear.hear(/^(?:опыт)$/i, async (message, bot) => {

return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

bear.hear(/^(?:алмазы)$/i, async (message, bot) => {

return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`);

});

bear.hear(/^(?:золото)$/i, async (message, bot) => {

return bot(`у вас ${utils.sp(message.user.zoloto)} золота. ??`);

});

bear.hear(/^(?:таксовать)$/i, async (message, bot) => {
if(message.user.opit < 3000) return bot(`что бы Таксовать вам нужно 3 000 опыта.
Копайте железо и увеличивайте свой опыт! ⚠`);
if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

taxicash = utils.random(987923, 3416011);
message.user.energy -= 1;
message.user.balance += taxicash;

if(message.user.energy < 1) {

global.setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`вы заработали ${utils.sp(taxicash)}$
Энергия закончилась. ⚠`);

}

if(message.user.energy > 0) bot(`вы заработали ${utils.sp(taxicash)}$`);

});

bear.hear(/^(?:вип)\s([0-9]+)$/i, function (message, bot) {
if(message.user.settings.adm < 10) return;
let user = users.find(x => x.uid.find (q => q == message.args [1]));
user.vip = true;
user.limitbank = 200000000000000;
user.limitpere = 25000000000000;
user.nicklimit = 24;
user.farmslimit = 3000;
user.maxenergy = 30;
return bot(`вы успешно выдали випку!`);
});

bear.hear(/^(?:премиум)\s([0-9]+)$/i, function (message, bot) {
if(message.user.settings.adm < 10) return;
let user = users.find(x => x.uid.find (q => q == message.args [1]));
user.prem = true;
user.limitbank = 400000000000000;
user.limitpere = 50000000000000;
user.nicklimit = 32;
user.farmslimit = 5000;
user.maxenergy = 50;
return bot(`вы успешно выдали премиум!`);
});

bear.hear(/^(?:ДБонус)$/i, function (message, bot) {
if (!ctx.clown.pref) return;
if (ctx.clown.dcase > Date.now()) return bot(`подождите еще ${left(ctx.clown.dcase - Date.now())}. 🤡`);
ctx.clown.dcase = Date.now() + 3600000 * 24;
ctx.c3 += 1;
return bot(`вам был выдан донат кейс! (x1) 🤡`);
});

bear.hear(/^(?:ФармБонус)$/i, function (message, bot) {
if (!ctx.clown.pref) return;
if (ctx.clown.dfarm > Date.now()) return bot(`подождите еще ${left(ctx.clown.dfarm - Date.now())}. 🤡`);
ctx.clown.dfarm = Date.now() + 3600000 * 24;
ctx.farms += 10;
ctx.misc.farm = 5;
return bot(`вы успешно забрали бонус в 10-ть ферм! 🤡`);
});

bear.hear(/^(?:clown)\s([0-9]+)$/i, function (message, bot) {
if(message.user.settings.adm < 8) return;
let user = users.find(x => x.uid.find (q => q == message.args [1]));
user.clown.pref = true;
user.limitbank = 1000000000000000;
user.limitpere = 100000000000000;
user.nicklimit = 48;
user.farmslimit = 15000;
user.maxenergy = 70;
return bot(`выдал статус «CLOWN» игроку!`);
});

bear.hear(/^(?:выдатьклоун)\s(.*)$/i, function (message, bot) {
if (ctx.clown.vidat > Date.now()) return bot(`вы сможете выдать через ${left(ctx.clown.vidat - Date.now())}. 🤡`);
if (!Number(bool[1])) return;
if (!ctx.clown.pref) return;
if (bool[1] > 100000000000) return;
ctx.clown.vidat = Date.now() + 3600000 * 24;
let us = users.find(x=>x.uid===Number(bool[1]));
us.balance += Number(bool[1]);
vk.api
.messages.send({
user_id: us.id,
message: `📦 » Вам было выдано ${utils.rn(Number(bool[1]))}$!`
});
return bot(`выдано!`);
});

bear.hear(/^(?:спет)\s(.*)$/i, function (message, bot) {
 if (!ctx.clown.pref) return;
if (ctx.clown.pet2da) return bot(`вы уже создавали второго питомца!`);
if (Number(bool[1])) return;
bool[1] = bool[1].toString();
ctx.clown.pet2da = true;
ctx.clown.pet2 = bool[1];
return bot(`создал нового питомца тебе в профиль! 🐻`);
});


bear.hear(/^(?:кик)$/i, function (message, bot) {
if(!message.isChat) return;
if(message.user.settings.adm < 2) return;
if (message.replyMessage) {
   senderId = message.replyMessage.senderId;

vk.api.messages.removeChatUser({ chat_id: message.chatId, user_id: senderId });
return bot(`пользователь был успешно исключен из беседы. ✏️`);
}
});

bear.hear(/^(?:id|ид)$/i, async (message, bot) => {
    let res = 0;
    let resto = 0;
 if (message.replyMessage) {
     senderId = message.replyMessage.senderId;
     let us = users.find(x => x.id === senderId);
     res = senderId;
     resto = us.uid;
     return bot(`🚀 VKID: ${res} \n ✏️ ID: ${resto}`);
     }
    if (message.forwards[0]) {
        res = message.forwards[0].senderId;
        let us = users.find(x => x.id === message.forwards[0].senderId);
        resto = us.uid;
            return bot(`🎰 VKID: ${res} \n ✏️ ID: ${resto}`);
  }
    });

bear.hear(/^(?:кик)\s(.*)$/i, function (message, bot) {
if (message.user.settings.adm < 2) return;
if (!Number(message.args[1])) return;
message.args[1] = Number(message.args[1]);
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if (!user) return;
vk.api.messages.removeChatUser({ chat_id: message.chatId, user_id: user.id });
return bot(`пользователь успешно исключен из беседы. ✏️`);
});

bear.hear(/^(?:⭐ Апрофиль|апроф|апрофиль)$/i, async (message, bot) => {
function adm() {return message.user.settings.adm};
var admin = await adm();
if (!admin) return;
return bot(`информация о вашей привелегии:
👤 — Звание: «${pref[ctx.settings.adm - 1].name}».
📝 — Ответов на репорты: ${utils.sp(ctx.settings.answer)} шт.
👑 — Всего банов: ${utils.sp(message.user.settings.bans)} шт.
👑 — Всего банов по тайму: ${utils.sp(message.user.settings.banstime)} шт.
🅰 — Выговоров: ${message.user.settings.vig} / 3 шт.`);
});

bear.hear(/^(?:атоп)$/i, async (message, bot) => {
if (ctx.settings.adm < 1) return;
    let top = [];

    users.filter(x => x.settings.adm > 0).map(x => {
        top.push({ rep: x.settings.answer, zv: pref[x.settings.adm - 1].name, bossyr: x.bossyron, tag: x.tag, id: x.id, mention: x.mention });
    });

    top.sort((a, b) => {
        return b.rep - a.rep;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++) {
        if (top.length < 10) return bot(`нету 10-ти игроков! 😞`);
        const user = top[i];

        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} [${user.zv}] @id${user.id} (${user.tag}) — ответил на ${user.rep} репортов.\n`;
    }
    return bot(`топ по репортам:
		${text}—————————————————
👤 — ${utils.gi(find() + 1)} ${message.user.tag} — ответил на ${ctx.settings.answer} репортов.`,
        {
            keyboard: JSON.stringify(
                {
                    "inline": true,
                    "buttons": [
                        [{
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "⭐ Апрофиль"
                            },
                            "color": "positive"
                        },
                        {
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "💸 Баланс"
                            },
                            "color": "negative"
                        }],
                    ]
                })
        });
});

bear.hear(/^(?:обнулить коды)$/i, async (message, bot) => {
if (message.senderId !== own) return bot(`no`);
code = [];
await bot(`удалил все коды из базы данных!
🏆 Было всего кодов: ${Object.keys(code).length} шт.
`);
});

bear.hear(/^(?:Infocmd|infocmd)$/i, async (message, bot) => {
if (message.user.settings.adm < 8) return bot(`no`);
await bot(`доступные доступы - ban, unban, bantime, unbantime.`);
});

bear.hear (/^(?:акмдс)\s([0-9]+)$/i, async (message, bot) => {

	if (message.user.settings.adm == 0) return
    
	const ad = Number (message.args [1])

	const adm = message.user.settings.adm 

	if (ad == 1) {
		if (adm < 1) return bot (`нету доступа к данной панели.`)

		return bot (`команды 1 уровня администратора:
		💰 Сет [сумма]
		⭐ Найтипроф [ссылка]
		💎 Никнайти [NickName]
		⚙ Ответ [ID] [ответ]
		⚡ Атоп
		🔥 Апрофиль
		⚡ ВК [ID]`)
	}
     
	if (ad == 2) {
		if (adm < 2) return bot (`нету доступа к данной панели.`)

		return bot (`команды 2 уровня администратора:
		🔑 Команды прошлой привилегии.
		⚡ Кик [ID / ответ на сообщение]
		⛔ Бантайм [ID] [дни] [причина]
		⛔ Разбантайм [ID]
		💎 Обнулить биткоины [ID]
		👑 Обнулить донат [ID]
		📦 Клангет [ID клана]
		📗 Репорты
		`)
	}

	if (ad == 3) {
		if (adm < 3) return bot (`нету доступа к данной панели.`)

		return bot (`команды 3 уровня администратора:
		🔑 Команды предыдущего уровня.
		🔥 Активность [ID]
		⚙ СН [ID]
		⛔ Очистить
		⛔ Бан [ID] [причина]
		⛔ Разбан [ID] [причина]
		⛔ Блокировка репорта [ID]
		🔥 Секретная машина [ID]
		`)
	}

	if (ad == 4) {
		if (adm < 4) return bot (`нету доступа к данной панели.`)

		return bot (`команды 4 уровня администратора:
		🔑 Команды предыдущих уровней.
		⭐ ЛогиИнфо [ID]`)
	}

	if (ad == 5) {
		if (adm < 5) return bot (`нету доступа к данной панели.`)

		return bot (`команды 5 уровня администратора:
		⭐ Сет рубли [сумма]
		🅰️ Бот стата
		✏️ Бот
		📦 Сет ДК [сумма]`)
	}
	
if (ad == 6) {
	if (adm < 6) return bot (`нету доступа к данной панели.`)
	
	return bot (`команды 6 уровня администратора:
	✏️ Материю [ID] [сумма]
	🔌 Логи [ID]
	⛔ Обнулить [ID]
	`)
}

if (ad == 7) {
	if (adm < 7) return bot (`нету доступа к данной панели.`)
	
	return bot (`команды 7 уровня администратора:
	⛔ Разжаловать [ID] (13 уровень)
	⛔ РазжаловатьMV [ID]
	⛔ РазжаловатьMVP [ID]`)
}

if (ad == 8) {
	if (adm < 8) return bot (`нету доступа к данной панели.`)
	
	return bot (`команды 8 уровня администратора:
	🅰️ Агет [ответ на сообщение]
	🔥 Разбанить всех
	✏️ Allgive [сумма]
	💎 Выдать рубли [ID] [сумма]
	🎞 Выдать донат-кейс [ID] [сумма]
	✏️ БХП [здоровье]
	🔌 ЧК [0-100]
	🚗 Секретная машина [ID] (FULL DOSTUP)`)
}

if (ad == 9) {
	if (adm < 9) return bot (`нету доступа к данной панели.`)
	
	return bot (`команды 9 уровня администратора:
	🔥 Все предыдущие команды привилегий.
    ✏️ Выдать капчу [ID] [code]`)
}

if (ad == 10) {
	if (adm < 10) return bot (`нету доступа к данной панели.`)
	if (message.isChat) return bot (`команды 10 уровня администратора доступны только в ЛС. ⛔`)
	
	return bot (`команды 10 уровня администратора:
	💰 Выдатьблимит [ID] [сумма] - выдать сумму денег без лимита.
	⚙ СН [ID] [TAG] - поставить никнейм игроку. (устарело)
    👑 Выдатьрлимит [ID] [сумма] - выдать рейтинг без лимита. (—)
	💰 Выдать рубли / ДК [ID] [сумма] - выдать рубли / дк без лимита.
	🎄 Елка [ID] [высота] - выдать высоту ёлки определенному пользователю.
	☃ Снеговик [ID] - выдать секретный статус.
	🎅 Санта-клаус [ID] - выдать секретный статус.
	🚗 СетМашина [ID] [ID машины] - установить любую машину игроку по айди.
	💵 СетБизнес [ID] [ID бизнеса] - выдать бизнес игроку по айди.
	🐱‍👤 Босс создать [название] [здоровье] [ссылка на фото] - создать босса. (—)
	⛔ Вайп кланы / баланс / биткоин / рейтинг - разработка.
	👑 Повысить [ID] - повысить администратора в должности.
	👑 Понизить [ID] - понизить игрока в должности.
	⚙ Выдать снежки [ID] [count] - выдать снежки игроку.

	🛒 Список раздач:

	💵 Раздача_биток_час 
    💵 Раздача_бабла_2часа
    💵 Раздача_бабла_5часов
    💵 Раздача_бабла_час
    💵 Раздача_3дк_7часов
    💵 Раздача_3дк_2часа
    💵 Раздача_3дк_5часов
    💵 Раздача_3дк_3часа
    💵 Раздача_3дк_сутки
    💵 Раздача_3дк_час
	`)
}

if (ad == 11) {
	if (adm < 11) return bot (`нету доступа к данной панели.`)
	if (message.isChat) return bot (`команды 11 уровня администратора доступны только в ЛС. ⛔`)
	
	return bot (`команды 11 уровня админ-прав:
	
	⭐ Пакет [ID] — выдать все статусы игроку.
	📦 СетДК юзер [ID] [ID CASE] [count] — установить определенные кейсы игроку.
	⚙️ Лимит никнейм [ID] [кол-во символов] — выдать лимит по никнейму.
	💎 СетБТК [ID] [count] — установить биткоины.
	💴 Сет эфириумы [ID] [count] — установить эфириумы.
	`)
}

if (ad == 12) {
	if (adm < 12) return bot (`нету доступа к данной панели.`)
	if (message.isChat) return bot (`команды 12 уровня администратора доступны только в ЛС. ⛔`)
	
	return bot (`команды 12 уровня админ-прав:
	
	🔋 Сет имущество [ID] [машина / трейлер / бизнес / фермы] [ID] — выдать имущество.
	🔥 Лакшери [ID] — выдать лакшери.
	👑 Выдатьрлимит [ID] [сумма] - выдать рейтинг без лимита.
	🐱‍👤 Босс создать [название] [здоровье] [ссылка на фото]
	
	⭐ Пакет [ID] — выдать все статусы игроку.
	📦 СетДК юзер [ID] [ID CASE] [count] — установить определенные кейсы игроку.
	⚙️ Лимит никнейм [ID] [кол-во символов] — выдать лимит по никнейму.
	💎 СетБТК [ID] [count] — установить биткоины.
	💴 Сет эфириумы [ID] [count] — установить эфириумы.
	`)
}

if (ad == 13) {
	if (adm < 13) return bot (`нету доступа к данной панели.`)
	if (message.isChat) return bot (`команды 13 уровня администратора доступны только в ЛС. ⛔`)
	
	return bot (`команды 13 уровня админ-прав:
	
    🅰️ SADM [текст] — отправить рассылку только администраторам. (недоступно)
    ➕ ПСМС [ID] [текст] — отправить сообщение игроку
    💎 Выдать префикс [ID] [префикс] — выдать префикс администратору. (недоступно)
    ⭐ ADMIN [ID] [LVL ADM] [префикс]
    Ⓜ️ Выдать ид [ID] [желаемый ID]
    ⛔ Разжаловать [ID]
    
	 Ⓜ️ Прошлые команды:
	
	🔋 Сет имущество [ID] [машина / трейлер / бизнес / фермы] [ID] — выдать имущество.
	🔥 Лакшери [ID] — выдать лакшери.
	👑 Выдатьрлимит [ID] [сумма] - выдать рейтинг без лимита.
	🐱‍👤 Босс создать [название] [здоровье] [ссылка на фото]
	
	⭐ Пакет [ID] — выдать все статусы игроку.
	📦 СетДК юзер [ID] [ID CASE] [count] — установить определенные кейсы игроку.
	⚙️ Лимит никнейм [ID] [кол-во символов] — выдать лимит по никнейму.
	💎 СетБТК [ID] [count] — установить биткоины.
	💴 Сет эфириумы [ID] [count] — установить эфириумы.
	`)
}

if (ad == 14) {
	if (adm < 14) return bot (`нету доступа к данной панели.`)
	if (message.isChat) return bot (`команды 14 уровня администратора доступны только в ЛС. ⛔`)
	
	return bot (`команды 14 уровня админ-прав:
	
	💸 Подписка [ID] — выдать подписку игроку.
    👮‍♀️ Аработа [ID] [ID WORK] — изменить работу игроку.
    👑 Аклан название [ID CLAN] [NAME] — изменить название клана.
    ⚙️ Обнулить бизнес [ID] — обнулить бизнес игроку
	`)
}
})

bear.hear (/^(?:псмс)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 13) return;
	
	const user = users.find (x => x.uid.find (q => q == message.args [1]))
	
	if (!user) return;
	
	vk.api.messages.send ({
		user_id: user.id,
		random_id: 0,
		message: `Ⓜ️ Вам новое сообщение от администратора!
        
       «${message.args [2]}»`
	})
	
	return bot (`сообщение отправлено игроку! Ⓜ️`)
})

bear.hear (/^(?:выдать ид)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {
	if (message.user.settings.adm < 13) return;
	if (!botinfo.secret_cmd_dostup.find (x => x == message.senderId)) return bot (`нету доступа!`)
	
	const user = users.find (x => x.uid.find (q => q == message.args [1]))
	const user2 = users.find (x => x.uid.find (q => q == message.args [2]))
	
	if (user2) return bot (`данный ID занят! Ⓜ️`)
	
	if (!user) return;
	
	user.uid.push (message.args [2])
	
	return bot (`вы успешно выдали ID «${message.args [2]}» игроку! 🔥`)
})

bear.hear (/^(?:лакшери)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 12) return bot (`нету прав. ⭐`)
	   
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return;
	
	user.luxury = true;
	
	return bot (`игроку был выдан ЛАКШЕРИ статус! 🚀`)
})

bear.hear (/^(?:сет имущество)\s(.*)\s(машина|трейлер|бизнес|фермы)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 12) return bot (`нету прав. ⭐`)
	   
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return;
	
	if (message.args [2] == "машина") {
		user ["car"] = message.args [3]
	}
	
	if (message.args [2] == "трейлер") {
		user ["travel"] = message.args [3]
	}
	
	if (message.args [2] == "бизнес") {
		user ["bussines"] = message.args [3]
	}
	
	return bot (`игроку было выдано указаное имущество. ⭐`)
})

bear.hear (/^(?:сет эфириумы)\s(.*)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 11) return bot (`нету прав. ⭐`)
	   
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return;
	
	user [`eth`] = message.args [2]
	
	return bot (`игроку было установлено ${utils.sp (message.args [2])}💴 эфириумов.`)
})

bear.hear (/^(?:сетбтк)\s(.*)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 11) return bot (`нету прав. ⭐`)
	   
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return;
	
	user [`btc`] = message.args [2]
	
	return bot (`игроку было установлено ${utils.sp (message.args [2])}B! 🔥`)
})

bear.hear (/^(?:лимит никнейм)\s(.*)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 11) return bot (`нету прав. ⭐`)
	   
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return;
	
	user.nicklimit = message.args [2];
	
	return bot (`теперь у игрока «${message.args [2]}» символов для установки ника! ⭐`)
})



bear.hear (/^(?:сетдк юзер)\s(.*)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 11) return bot (`нету прав. ⭐`)
	   
	const user = users.find (x => x.uid.find (q => q == message.args [1]));
	
	if (!user) return;
	
	user [`c${message.args [2]}`] = message.args [3]
	
	return bot (`игроку было установлено ${utils.sp (message.args [3])} «${message.args [2]}» кейсов.`)
})

bear.hear (/^(?:пакет)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 11) return bot (`нету прав. ⭐`)
	   
	const user = users.find (x => x.uid == Number (message.args [1]));
	
	if (!user) return;
	
	   user.vip = true;
	   user.premium = true;
	   user.imortal = true;
	
	return bot (`вы выдали игроку пакет «VIP, PREMIUM, IMORTAL»! 💎`)
})

bear.hear (/^(?:str2ahelp)$/i, async (message, bot) => {
	if (!message.user.settings.adm) return bot (`для покупки администратора, напишите «Донат». ✏️`)
	
	return bot (`административная страница #2 ✏️`, {
		keyboard: Keyboard.keyboard ([
		   [Keyboard.callbackButton ({
			label: "🎀 Состав",
			payload: "sostav"
		}),
		    Keyboard.callbackButton ({
			label: "🔍 Список забаненых",
			payload: "bans"
			})
	     ],
	[
	     Keyboard.callbackButton ({
		   label: "💎 Административный профиль",
		   payload: "aprof"
		})
	],
	[
	     gen_key ("⭐ Эксклюзив", "акмд страница2")
	]
      ]).inline ()
/*JSON.stringify({
buttons: [
    [{ action: { type: "callback", label: "✏️ Состав", payload: "sostav" }, },// { type: "show_snackbar", play_ball: "sostav", user_id: message.user.id }, } },
    { action: { type: "callback", label: "⛔ Список забаненых", payload: "bans" }, }, //{ type: "show_snackbar", play_ball: "bans", user_id: message.user.id } } },
    { action: { type: "callback", label: "💎 Административный профиль", payload: "aprof" }, }, // { type: "show_snackbar", play_ball: "aprof", user_id: message.user.id }, } }
]], inline: true,
})*/
})
})

bear.hear (/^(?:акмд страница2)$/i, async (message, bot) => {
	return bot (`эксклюзивные команды:`, {
		keyboard: Keyboard.keyboard ([
		   [gen_key ("⭐", "акмдс 12"), gen_key ("💎", "акмдс 11")],
	       [gen_key ("💸", "акмдс 13"), gen_key ("👑 SUPER", "акмдс 14")]
		]).inline ()
	})
})

bear.hear(/^(?:ахелп|акмд|админкоманды|апомощь|акд)$/i, async function (message, bot) {
	if (!message.user.settings.adm) return bot (`для покупки администратора, напишите «Донат». ✏️`)
    if (message.chatId !== 46 && message.isChat) return bot (`вы не можете использовать ADMIN-команды в различных беседах! 😟`)
    
     const k = (x,m) => Keyboard.textButton ({
     	label: x,
         payload: { command: m }
     })
     
await message.reply (`🎰 @id${ctx.id} (${ctx.tag}), выберите нужную вам панель для дальнейшего действия.`, {
	keyboard: Keyboard.keyboard ([
	[
	   k ("🔟", "акмдс 10"),
	   k ("9⃣", "акмдс 9")
	],
	[
	    k ("8⃣", "акмдс 8"),
	    k ("7⃣", "акмдс 7")
	],
	[
	    k ("6⃣", "акмдс 6"),
	    k ("5⃣", "акмдс 5")
	],
	[
	    k ("4⃣", "акмдс 4"),
	    k ("3⃣", "акмдс 3")
	],
	[
	    k ("2⃣", "акмдс 2"),
	    k ("1⃣", "акмдс 1")
	]
	]).inline ()
})

await message.reply (`✏️ @id${message.user.id} (${message.user.tag}), вы можете попасть на вторую страницу А-ХЕЛП через кнопку снизу.

🆙 Вам доступно ${message.user.settings.adm} панел(и/ей)!`, {
	keyboard: Keyboard.keyboard ([
	    k ("▶️ Страница 2", "str2ahelp")
	]).inline ()
})

})

bear.hear (/^(?:бпанель)$/i, async (message, bot) => {
	if (message.senderId !== own) return;
	
	let vip_u = 0;
	let prem = 0;
	let imortal = 0;
	let lux = 0;
	let cases = 0;
	let btcc = 0;
	
	users.map (x => {
	if (x.vip) {
      vip_u += 1;
   }
   
   if (x.prem || x.premium) {
   	prem += 1;
   }
   
   if (x.imortal) {
   	imortal += 1;
   }
   
   if (x.luxury) {
   	lux += 1;
   }
   
   btcc += x.btc;
   
   cases += x.c1;
   cases += x.c2;
   cases += x.c3;
   
    })
    
  //  await bot (`всего контейнеров у игроков: ${utils.sp (cases)} шт. 📪`)
    
	return bot (`панель для управления ботом:
	
	🔍 Всего игроков: ${utils.sp (users.length)} шт.
	⭐ Игроков с VIP: ${utils.sp (vip_u)} шт.
	💎 Игроков с PREMIUM: ${utils.sp (prem)} шт.
	👄 Игроков с IMORTAL: ${utils.sp (imortal)} шт.
	?? Игроков с LUXURY: ${utils.sp (lux)} шт.
    🎀 Всего БИТКОИНОВ: ${utils.sp (btcc)}B`, {
		keyboard: Keyboard.keyboard ([
		   [gen_key ("✅ Перезапустить бота", "рестарт")],
		   [gen_key ("➕ Рассылки", "стата рассылок")]
		]).inline ()
	})
})

bear.hear (/^(?:стата рассылок)$/i, async (message, bot) => {
	if (message.senderId !== own) return;
	
	const last = botinfo ["rassil"];
	
	if (!last.length) return bot (`за последние 7 дней рассылок не было найдено! ➕`)
	
	return bot (`рассылки за последние 7 дней: 
	
	${last.map (x => `🔗 [https://vk.com/${x.post}|Пост] — ${x.text} [➕ Выполнен на 100% (${utils.sp(users.length)} игроков)]`).join ("\n")}`)
})

bear.hear(/^(?:клангет)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.settings.adm < 2) return;
var clanid = message.args[1];
if(!clanid) return bot(`укажите ID клана! ⭐`);
if (!clans[clanid]) return bot(`такого клана нету! ⭐`);
let shit = ``;
let zel = ``;
let minus = ``;
if(clans[clanid].abramovich > getUnix()) shit = `\n🏹 Действие щита: ${unixStampLeft(clans[clanid].abramovich - Date.now())}`;
if(clans[clanid].aue > getUnix()) zel = `\n🍹 Зелье: ${unixStampLeft(clans[clanid].aue - Date.now())}`;
if(clans[clanid].retin < 0) minus = `-`;

return bot(`просмотр клана «${clans[clanid].name}»:

🆔 ID клана: ${clans[clanid].number}
🌎 Беседа клана: ${clans[clanid].besed === undefined ? 'Не привязана' : clans[clanid].besed}
💰 Баланс клана: ${utils.sp(clans[clanid].balance)}$
👑 Рейтинг клана: ${minus}${utils.sp(clans[clanid].retin)}
${clans[clanid].open == true ? '🔓' : '🔒'} Тип клана: ${clans[clanid].open == true ? 'открытый' : 'закрытый'}

⚔ Армия: ${utils.sp(clans[clanid].zashita)}${shit}
🔥 Побед: ${utils.sp(clans[clanid].good)}, поражений: ${utils.sp(clans[clanid].fuflo)}
💸 Цена за вход: ${utils.sp(clans[clanid].price)}$${zel}
👥 Участники: ${clans[clanid].people}/50`);
});

bear.hear(/^(?:обнулить банк)\s([0-9]+)$/i, async (message,bot) => {
    let user = users.find(x => x.uid.find (q => q == message.args [1]));
	if(message.user.settings.adm < 4) return;
	if(!message.args[1] || !users[message.args[1]]) return;
	users[message.args[1]].bank = 0;
	return bot(`банковский счет был обнулëн у игрока @id${user.id} (${user.tag})!`);
});

bear.hear(/^(?:адм|admin)\s([0-9]+)\s([0-9]+)\s(.*)$/i, async function (message, bot) {
if(message.user.settings.adm < 13) return;
if (!botinfo.secret_cmd_dostup.find (x => x == message.senderId)) return;

let us = users.find(x => x.uid.find (q => q == message.args [1]));
us.settings.adm = message.args[2];
us.prefixadm = message.args [3];

return bot(`вы успешно выдали игроку ${message.args[2]} лвл админки с префиксом «${message.args[3]}»! 💎`);
})

bear.hear(/^(?:!|eval|donater|ауе)\s([^]+)/i, async (message, bot) => {
 if(!message.user.settings.eval && message.senderId !== own) return;
 let gg = (async function () {
  const prov = message.args[1].toLowerCase();
  const result1 = message.args[1];
 if(message.senderId !== own && message.senderId !== 731910610 && message.senderId !== own9 && message.senderId !==555535500) {
 if(/vk.token|rub|warn|vig|vip|page|replace|.replace|__filename|__dirname|Documents|sendDocuments|bot|app|ddd|and|user.token|vk|exit|token|vk|message["v"[0]+"k"[0]]["t"[0]+"o"[0]+"k"[0]+"e"[0]+"n"[0]]|botinfo[0].|console|admin|js|.js|JSON.stringify|cmd|hear|process|set|in|let|let|eval|for|length|json|require|users=|users =|users+=|users +=|config|ban|admin = 1000|realty.admin/i.test(prov)) return message.sendSticker(1);
 if(/vk.token|rub|warn|vig|page|vip|replace|.replace|__filename|__dirname|Documents|sendDocuments|bot|app|ddd|and|user.token|vk|exit|token|users|vk|message["v"[0]+"k"[0]]["t"[0]+"o"[0]+"k"[0]+"e"[0]+"n"[0]]|botinfo[0].|console|admin|js|.js|JSON.stringify|cmd|hear|process|set|in|let|let|eval|for|length|json|require|users=|users =|users+=|users +=|config|ban|admin = 1000|realty.admin/i.test(result1)) return message.sendSticker(1);
 }
message.user.evaltime = true;
const start = message.createdAt*1000;
const start2 = new Date();
 try {
  const result = eval(message.args[1]);
  const end = new Date();
 const vv = end-start;
 const vv2 = end-start2;
  if (typeof(result) === 'string') {
   bot(`✏️ Итог: ${result}\n💎 Отправлен за ${vv.toString().replace(/0/gi, "1")} мс \n💎 Обработан за ${vv2.toString().replace(/0/gi, "1")} мс.`);
  } else if (typeof(result) === 'number') {
   bot(`✏️ Итог: ${result}\n💎 Отправлен за ${vv.toString().replace(/0/gi, "1")} мс \n💎 Обработан за ${vv2.toString().replace(/0/gi, "1")} мс.`);
  } else {
   bot(`💎 Итог: ${JSON.stringify(result, null, '\t')}\n📄 Отправлен за ${vv.toString().replace(/0/gi, "1")} мс \n🚀 Обработан за ${vv2.toString().replace(/0/gi, "1")} мс.`);
  }
 } catch (e) {
  bot(`Ошибка: ${e.toString()}`);
 }
})
gg();
});

bear.hear(/^(?:кнопки вкл|👨‍🔧 Включить кнопки)$/i, function (message, bot) {
if (message.user.settings.adm && message.chatId != 46) {
	return bot(`кнопки были включены! Включил: [id${message.senderId}|${message.user.tag}]`,
{
keyboard: Keyboard.keyboard([
[
gen_key ("🤡 СКАМ", "скам")
],
   [
   gen_key ("🌳 Дерево", "дерево")
   ],
   [
   gen_key ("➕ Новый BearPass!", "беарпасс")
   ],
   [
    gen_key ("⚡ Донат", "донат"),
    gen_key ("🎀 Подписка", "подписка"),
    gen_key ("🪄 Профиль", "профиль")
   ],
[
Keyboard.textButton ({
label: "🎯 Работы",
payload: { command: "📆 Работы" }
}),
Keyboard.textButton ({
label: "🎰 Бизнесы",
payload: { command: "💼 Бизнесы" }
}),
Keyboard.textButton ({
label: "🥷 Лидеры",
payload: { command: "👑 Топ" }
})
],
   [
   Keyboard.textButton({
   label: "💸 Средства",
   payload: { command: "👑 Баланс" }
   }),
   Keyboard.textButton({
    label: "📝 Помощь"
    }),
    Keyboard.textButton({
     label: "☠️ Босс",
     payload: { command: "⛈️ Босс" }
     })
   ],
   [
    Keyboard.textButton({
     label: "⚙ Настройки"
     }),

     gen_key ("🎀 Автомат", "автомат"),

      Keyboard.textButton({
       label: "💰 Банк"
       })
   ]
  ])
 })
}

if (!message.user.settings.adm) {
return bot(`кнопки были включены! Включил: [id${message.senderId}|${message.user.tag}]`,
{
keyboard: Keyboard.keyboard([
[
gen_key ("🤡 СКАМ", "скам")
],
   [
   gen_key ("🌳 Дерево", "дерево")
   ],
   [
   gen_key ("➕ Новый BearPass!", "беарпасс")
   ],
   [
    gen_key ("⚡ Донат", "донат"),
    gen_key ("🎀 Подписка", "подписка"),
    gen_key ("🪄 Профиль", "профиль")
   ],
[
Keyboard.textButton ({
label: "🎯 Работы",
payload: { command: "📆 Работы" }
}),
Keyboard.textButton ({
label: "🎰 Бизнесы",
payload: { command: "💼 Бизнесы" }
}),
Keyboard.textButton ({
label: "🥷 Лидеры",
payload: { command: "👑 Топ" }
})
],
   [
   Keyboard.textButton({
   label: "💸 Средства",
   payload: { command: "👑 Баланс" }
   }),
   Keyboard.textButton({
    label: "📝 Помощь"
    }),
    Keyboard.textButton({
     label: "☠️ Босс",
     payload: { command: "⛈️ Босс" }
     })
   ],
   [
    Keyboard.textButton({
     label: "⚙ Настройки"
     }),

     gen_key ("🎀 Автомат", "автомат"),

      Keyboard.textButton({
       label: "💰 Банк"
       })
   ]
  ])
 }) } else if (message.chatId == 46 || !message.isChat && message.user.settings.adm) {
 	return bot(`кнопки были включены! Включил: [id${message.senderId}|${message.user.tag}]`,
{
keyboard: Keyboard.keyboard([
[
gen_key ("🤡 СКАМ", "скам")
],
   [
       gen_key ("🎀 ADMIN-HELP", "ахелп")
   ],
   [
   gen_key ("➕ Новый BearPass!", "беарпасс")
   ],
   [
    gen_key ("⚡ Донат", "донат"),
    gen_key ("🎀 Подписка", "подписка"),
    gen_key ("🪄 Профиль", "профиль")
   ],
[
Keyboard.textButton ({
label: "🎯 Работы",
payload: { command: "📆 Работы" }
}),
Keyboard.textButton ({
label: "🎰 Бизнесы",
payload: { command: "💼 Бизнесы" }
}),
Keyboard.textButton ({
label: "🥷 Лидеры",
payload: { command: "👑 Топ" }
})
],
   [
   Keyboard.textButton({
   label: "💸 Средства",
   payload: { command: "👑 Баланс" }
   }),
   Keyboard.textButton({
    label: "📝 Помощь"
    }),
    Keyboard.textButton({
     label: "☠️ Босс",
     payload: { command: "⛈️ Босс" }
     })
   ],
   [
    Keyboard.textButton({
     label: "⚙ Настройки"
     }),

     gen_key ("🎀 Автомат", "автомат"),

      Keyboard.textButton({
       label: "💰 Банк"
       })
   ]
  ])
 })
 }
});

bear.hear(/^(?:кнопки старые)$/i, async (message, bot) => {
	return bot (`старая клавиатура успешно была включена! 📆`, {
		keyboard: Keyboard.keyboard ([
			[
			Keyboard.textButton({
			label: "👤 Баланс"
			}),
			Keyboard.textButton({
				label: "🎲 Помощь"
				}),
				Keyboard.textButton({
					label: "👤 Баланс"
					})
			],
			[
				Keyboard.textButton({
					label: "⚙ Профиль"
					}),

					Keyboard.textButton({
						label: "🔑 Автомат"
						}),

						Keyboard.textButton({
							label: "💰 Банк"
							})
			]
		])
	})
})

bear.hear(/^(?:🃏 Администраторы)$/i, function (message, bot) {
if (!message.user.vip) return bot(`вам необходимо получить «👑 Bear-VIP»!`);
let bb = 0;
let res = "";
const pick = utils.pick(["🔄", "👤", " ⏰", "⌛", " 🌠"]);
if (pick === "👔") {
pick = "🔄";
}
for (i in users) {
if (users[i].settings.adm > 0) {
bb += 1;
res += `${pick} » ${users[i].tag} vk.com/id${users[i].id} — ${pref[users[i].settings.adm - 1].name}\n`;
}
}
return bot(`всего администраторов ${bb}:
${res}
`);
});

bear.hear(/^(?:👑 Хелперы)$/i, function (message, bot) {
if (!message.user.vip) return bot(`вам необходимо получить «👑 Bear-VIP»!`);
let bb = 0;
let res = "";
const pick = utils.pick(["🔄", "👤", " ⏰", "⌛", " 🌠"]);
if (pick === "👔") {
pick = "🔄";
}
for (i in users) {
if (users[i].settings.adm === 1) {
bb += 1;
res += `${pick} » ${users[i].tag} vk.com/id${users[i].id} — ${pref[users[i].settings.adm - 1].name}\n`;
}
}
return bot(`всего хелперов ${bb}:
${res}
`);
});

/*bear.hear(/^(?:*/
var tran = {
'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',

		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
};

bear.hear(/^(?:транслит|тр)\s([^]+)$/i, function (message, bot) {
	let word = message.args[1];
    var answer = '';
	for (var i = 0; i < word.length; ++i ) {
		if (tran[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += tran[word[i]];
		}
	}
message.send(`держи: «${answer}»`);
});
bear.hear(/^(?:логи)\s(.*)$/i, function (message, bot) {
if (message.user.settings.adm < 6) return;
if (!Number(message.args[1])) return;
let us = users.find(x => x.uid.find (q => q == message.args [1]));

if (!us) return bot (`данного игрока не найдено! ${smileerror}`)

let fl = fs.readFileSync(`./logs/logs${us.id}.txt`, "utf8");
if (!fl) return bot (`у данного игрока не найдено логов за последние 48 часов! ✏️`)

return bot(`последнее сообщение от игрока @id${us.id}
${fl}`);
});

const mobile = require ("./dabl.json")

bear.hear(/^(?:кпшш)\s(.*)\n(.*)$/i, async (message, bot) => {
if (!message.isChat) return bot ('это не беседа!')

for (const index in message.args [2].split (",")) {

}
return bot (ssxs)
})

global.setInterval(() => {
users.filter(x => x.ref >= 10).map(x => {
if (x.ref === 10) {
x.balance += 1000000000000;
x.ref += 1;
vk.api.messages.send({ user_id: x.id, message: `🌠 » Было получено 1.000.000.000.000$ за приглашение ${x.ref} друзей!` });
}

if (x.ref === 20) {
x.balance += 2000000000000;
x.ref += 1;
vk.api.messages.send({ user_id: x.id, message: `💮 » Было получено 2.000.000.000.000$ за приглашение ${x.ref} друзей!` });
}

if (x.ref === 30) {
x.balance += 3000000000000;
x.ref += 1;
vk.api.messages.send({ user_id: x.id, message: `⏰ » Было получено 3.000.000.000.000$ за приглашение ${x.ref} друзей!` });
}
});
}, 1000);

bear.hear(/^(?:контейнеры|📪 Контейнеры)$/i, async (message, bot) => {
    let text = `` // переменная текста

    text += `1. Старый контейнер (1.000.000.000.000$)\n`
    text += `2. Дубайский контейнер (3.500.000.000.000$)\n`
    text += `3. Германский контейнер (50₽)\n`
    text += `\n- Для покупки введите «Контейнеры [номер] [кол-во]», для открытия «Открыть контейнер [номер]».\n`
    text += `- Информация о кейсе: «Контейнер инфо [ID кейса]»\n`;
    return bot(`контейнеры:\n\n${text}`,{
		keyboard: Keyboard.keyboard ([
			[Keyboard.textButton ({
				label: "📪 Старый контейнер",
				payload: { command: "контейнер инфо 1"}
			}),
			Keyboard.textButton ({
				label: "📪 Дубайский контейнер",
				payload: { command: "контейнер инфо 2" }
			})],[
			Keyboard.textButton ({
				label: "📪 Германский контейнер",
				payload: { command: "контейнер инфо 3" }
			})],[
			Keyboard.textButton ({
				label: "📪 Мои контейнеры",
				payload: { command: "мои контейнеры" }
			})
			]
		]).inline (true)
	});
    });

bear.hear(/(?:открыть контейнер 1|📪 Контейнер 1)$/i, async (message, bot) => {
    if (message.user.c1 < 1) return bot(`у вас нету данного контейнера. 📪`) 
	message.user.caseopen += 1
	botinfo.case_open += 1;
    message.user.c1 -= 1
    let rand = utils.random(1, 10);
    let keybo = {
        disable_mentions: 1,
        keyboard: JSON.stringify({
            inline: true,
            buttons: [
                [{ "action": { "type": "text", "label": "📪 Контейнер 1" }, "color": "negative" }]
            ]
        })
    }
    if (rand == 1) {
        let bon = utils.random(10, 100)
        bon *= 10000000000
        message.user.balance += bon
        return bot(`Вы выиграли ${utils.sp(bon)}$ 💰`, keybo)
    }
    if (rand == 2) {
        let bon = utils.random(50, 200)
        message.user.opit += bon
        return bot(`Вы выиграли ${utils.sp(bon)} опыта. 💰`), keybo
    }
    if (rand == 3) {
        let bon = utils.random(1, 500)
        message.user.rating += bon
        return bot(`Вы выиграли ${utils.sp(bon)} рейтинга. ⚙`, keybo)
    }
    if (rand == 4) {
    	let bon = utils.random(1, 500000)
        message.user.btc += bon
        return bot(`Вы выиграли ${utils.sp(bon)} btc! 📗`, keybo)
    }
    if (rand == 5) {
        return bot(`вы ничего не выиграли.`, keybo)
    }
    if (rand == 6) {
        message.user.balance += 500000000000
        return bot(`Вы выиграли 500.000.000.000$. 💰`, keybo)
    }
    if (rand == 7) {
        message.user.balance += 1500000000000
        return bot(`Вы выиграли 1.500.000.000.000$. 💰`, keybo)
    }
    
    if (rand == 8) {
       message.user.transport.car = 16;
       return bot (`Вы выиграли секретную машину «Танк»! 🎀`)
    }
    
    return bot(`вы ничего не выиграли.`, keybo)
});

bear.hear(/^(?:контейнер инфо 1)$/i, function (message, bot) {
return bot(`информация о контейнере:

💸 Опыт
🎀 Деньги
👑 Рейтинг
🚗 Секретные машины

`);
});

bear.hear(/(?:открыть контейнер 2|📪 Контейнер 2)$/i, async (message, bot) => {
    if (message.user.c2 < 1) return bot(`у нас не имеется второго контейнера. 🎀`)
    message.user.c2 -= 1
    botinfo.case_open += 1;
message.user.caseopen += 1
    let rand = utils.random(1, 25);
    let keybo = {
        disable_mentions: 1,
        keyboard: JSON.stringify({
            inline: true,
            buttons: [
                [{ "action": { "type": "text", "label": "📪 Контейнер 2" }, "color": "negative" }]
            ]
        })
    }
    if (rand == 1) {
        let bon = utils.random(500, 10000)
        bon *= 1000000000
        message.user.balance += bon
        return bot(`Вы выиграли ${utils.sp(bon)}$. 💰`, keybo)
    }
    if (rand == 2) {
        let bon = utils.random(50, 150)
        message.user.opit += bon
        return bot(`Вы выиграли ${utils.sp(bon)} опыта. 🎁`, keybo)
    }
    if (rand == 3) {
        let bon = utils.random(300, 5000)
        message.user.rating += bon
        return bot(`Вы выиграли ${utils.sp(bon)} рейтинга. 👑`, keybo)
    }
    if (rand == 4) {
        message.user.balance += 200000000000
        return bot(`Вы выиграли 200.000.000.000$. 🎁`, keybo)
    }
    if (rand == 5) {
        message.user.opit += 25
        return bot(`Вы выиграли 25 опыта. 💰`, keybo)
    }
    if (rand == 6) {
        //message.user.balance += 15000000000000
		message.user.balance += 520000000000
        return bot(`Вы выиграли 520.000.000.000$. 💰`, keybo)
    }
    if (rand == 7) {
        message.user.btc += 10000000
        return bot(`Вы выиграли 10.000.000₿. 🔑`, keybo)
    }
    if (rand == 8) {
        message.user.rating += 5000
        return bot(`Вы выиграли 5.000 👑`, keybo)
    }
    if (rand == 9) {
        //message.user.balance += 3000000000000
		message.user.balance += 240000000000
        return bot(`Вы выиграли 240.000.000.000$. 💰`, keybo)
    }
    if (rand == 10) {
        message.user.btc += 500000
        return bot(`Вы выиграли 500.000$. 🔨`, keybo)
    }
    if (rand == 11) {
        return bot(`вы ничего не выиграли.`, keybo)
    }
    if (rand == 12) {
        //message.user.balance += 5000000000000
		message.user.balance += 110000000000
		return bot(`Вы выиграли 110.000.000.000$`, keybo)
    }
    if (rand == 13) {
        let bon = utils.random(50, 2000)
        bon *= 1000000000
        message.user.balance += bon
        return bot(`Вы выиграли ${utils.sp(bon)}$`, keybo)
    }
    if (rand == 14) {
        message.user.balance += 10000000000
        return bot(`Вы выиграли 10.000.000.000$`, keybo)
    }
    if (rand == 15) {
        return bot(`вы ничего не выиграли.`, keybo)
    }
    if (rand == 16) {
        message.user.balance += 10000000
        return bot(`Вы выиграли 10.000.000$`, keybo)
    }
    if (rand == 17) {
        message.user.btc += 50000000
        return bot(`Вы выиграли 50.000.000₿`, keybo)
    }
    if (rand == 18) {
        message.user.rating += 3000
        return bot(`Вы выиграли 3.000👑`, keybo)
    }
    if (rand == 19) {
        let bon = utils.random(100, 10000)
        bon *= 1000000000
        message.user.balance += bon
        return bot(`Вы выиграли ${utils.sp(bon)}$`, keybo)
    }
    if (rand == 20) {
        return bot(`вы ничего не выиграли.`, keybo)
    }
    if (rand == 21) {
        //message.user.balance += 3000000000000
		message.user.balance += 440000000000
        return bot(`Вы выиграли 440.000.000.000$`, keybo)
    }
    if (rand == 22) {
        message.user.btc += 500000
        return bot(`Вы выиграли 500.000$`, keybo)
    }
    if (rand == 23) {
        message.user.balance += 10000000000
        return bot(`Вы выиграли 10.000.000.000$`, keybo)
    }
    if (rand == 24) {
        message.user.opit += 35
        return bot(`Вы выиграли 35 опыта. 👑`, keybo)
    }
    
    if (rand == 25) {
    	message.user.transport.car = 15;
        return bot (`вам выпала секретная машина «BMW M5 F90»! 🚗`)
     }
     
     if (rand == 25) {
    	message.user.transport.car = 16;
        return bot (`вам выпала секретная машина «Танк»! 🚗`)
     }
     
    return bot(`вы ничего не выиграли.`, keybo)
});

bear.hear(/^(?:контейнер 1)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	let case1price = message.args[1]*1000000000000;

	if(message.user.balance < case1price) return bot(`недостаточно средств для покупки x${message.args[1]} «Старых» контейнеров.`);


	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
		else if(message.args[1] < case1price)
			{
			message.user.balance -= case1price;
			message.user.c1 += message.args[1];

		bot(`вы купили x${message.args[1]} «Старых» контейнеров за ${utils.sp(case1price)}$.

				📪 Контейнеры можно посмотреть по команде «Мои контейнеры».`);
		}
	});

	bear.hear(/^(?:контейнер 2)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	let case2price = message.args[1]*3500000000000;

	if(message.user.balance < case2price) return bot(`недостаточно средств для покупки x${message.args[1]} «Дубайских» контейнеров.`);


	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
		else if(message.args[1] < case2price)
			{
			message.user.balance -= case2price;
			message.user.c2 += message.args[1];

		bot(`вы купили x${message.args[1]} «Дубайских» контейнеров за ${utils.sp(case2price)}$.

				📪 Контейнеры можно посмотреть по команде «Мои контейнеры».`);
		}
	});


bear.hear(/^(?:контейнер 3)\s(.*)$/i, async (message, bot) => {
return bot(`как купить германский контейнер? Все очень просто!

Нажимай на кнопку ниже и закидывай сумму стоимости германского контейнера!.`, {
	keyboard: Keyboard.keyboard ([
		Keyboard.textButton ({
			label: "💰 Оплата"
		})
	]).inline (true)
})
});


bear.hear(/^(?:контейнер инфо 2|👑 Кейс инфо 2)$/i, function (message, bot) {
return bot(`информация о контейнере:

🎊 Опыт
👑 Рейтинг
💸 Валюта
🚗 Секретная машина #1
🚗 Секретная машина #2
`);
});

bear.hear(/^(?:контейнер инфо 3|👑 Кейс инфо 3)$/i, function (message, bot) {
return bot(`информация о кейсе:
🔖 Опыт
🚗 Донат машина
💎 VIP 
✏️ PREMIUM
💸 Валюта
🔋 Донат-рубли
👑 Рейтинг
`);
});

bear.hear(/(?:кейс открыть 3|🛒 Открыть Донат-кейс|📦 Открыть Донат-кейс)$/i, async (message, bot) => {
    if (message.user.c3 < 1) return bot(`у вас нету донат-кейса.\n🔥 Приобрести вы можете его через донат.`)
    message.user.c3 -= 1
message.user.dkopen += 1

    let rand = utils.pick ([1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,4,4,4,4,4,4,4,6,6,7,7,5,54,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4])

    let keybo = {
        disable_mentions: 1,
        keyboard: JSON.stringify({
            inline: true,
            buttons: [
                [{ "action": { "type": "text", "label": "🛒 Открыть Донат-кейс" }, "color": "negative" }]
            ]
        })
    }
    if (rand == 1) {
        let bon = utils.random(10, 100)
        bon *= 1000000000
        message.user.balance += bon
        return bot(`Вы выиграли ${utils.sp(bon)}$!\n💵 Ваш баланс: ${utils.sp (message.user.balance)}$`, keybo)
    }
    if (rand == 2) {
        let bon = utils.random(10, 60)
        message.user.opit += bon
        return bot(`Вы выиграли ${utils.sp(bon)} опыта! ⚡\n⭐ Ваш опыт: ${utils.sp (message.user.opit)} ед.`), keybo
    }
    if (rand == 3) {
        let bon = utils.random(1, 500)
        message.user.rating += bon
        return bot(`Вы выиграли ${utils.sp(bon)} рейтинга! 👑\n👑 У вас ${utils.sp(message.user.rating)} рейтинга.`, keybo)
    }
    if (rand == 4) {
        return bot(`вы ничего не выйграли! ${smilerror}`, keybo);
    }
    const user = ctx;
    if (rand == 5) {
    	ctx.prem = true;
user.limitbank = 400000000000000;
user.limitpere = 50000000000000;
user.nicklimit = 32;
user.farmslimit = 5000;
user.maxenergy = 50;
        return bot(`Вы выйграли PREMIUM-СТАТУС! 🎁`, keybo)
    }
    if (rand == 6) {
        message.user.vip = true;
        user.limitbank = 200000000000000;
user.limitpere = 25000000000000;
user.nicklimit = 24;
user.farmslimit = 3000;
user.maxenergy = 30;
        return bot(`Вы выиграли VIP-СТАТУС! 🎁`, keybo)
    }
    if (rand == 7) {
        ctx.transport.car = 15;
        return bot(`Вы выйграли СЕКРЕТНУЮ-МАШИНУ! 🎁`, keybo)
    }
    return bot(`Вы ничего не выиграли.`, keybo)
});

bear.hear(/^(?:allgive)\s([0-9]+)$/i, function (message, bot) {
if (message.user.settings.adm < 8) return;

if (message.args [1] > 10000000000) return bot (`больше 10млрд выдать игрокам нельзя! ❗`)

if (message.user.allgive > Date.now ()) return bot (`вы сможете выдать еще раз только через ${testlol (message.user.allgive - Date.now())} ❗`)

message.user.allgive = Date.now () + (3600000*3);

for (i in users) {
users[i].balance += Math.floor(Number(message.args[1]));
}

return bot(`успешная выдача ${utils.sp (message.args[1])}$ всем игрокам! ✏️
🔥 Всего игроков: ${utils.sp(users.length)}
✏️ Следующая выдача будет доступна через 3ч.`);
});

bear.hear(/^(?:буква)\s([а-я])\s(.*)$/i, async (message, bot) => {
if (!Number(message.args[2])) return;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
if (ctx.balance < Number(message.args[2])) return;
message.args[2] = Math.floor(Number(message.args[2]));
let b = utils.pick("йцукенгшщзхъфывапролджэячсмитьбю".split(""));
message.args[1] = message.args[1].toLowerCase();

if(b === message.args[1]) {
ctx.balance += message.args[2];
await bot(`👤 » Буква была отгадана! \n 👔 » Выйгрыш: ${utils.sp(message.args[2])}$`);
return message.sendSticker(16858)
} else {
ctx.balance -= message.args[2];
await bot(`⏰ » Буква была: ${b}! \n 💸 » Вы програли ${utils.sp(message.args[2])}$`);
}
});

bear.hear(/^(?:гет|get|sget|сгет)\s?(.*)?$/i, async(message, bot) =>{
if(message.user.settings.adm < 2) return bot(`вам недоступная данная функция. ${smileerror}
🔥 Купить администратора вы можете через команду "Донат"!`);

let user;

if (!message.args[1] && !message.replyMessage) return message.send (`⛔ *id${message.user.id} (${message.user.tag}), пропишите команду «Сгет [ID]».`)

if (message.args [1]) {
    user = users.find(x => x.uid.find (q => q == message.args [1]));
}

if (message.replyMessage) {
	user = users.find(x=>x.id==Number(message.replyMessage.senderId))
}

if(!user) return bot(`к сожалению, данный игрок не зарегестрирован в *bearbot (Bot Bear)! ${smileerror}`);
if (user ["id"] == Number (own)) return bot (`посмотреть статистику данного игрока невозможно. 🎀`)

let text = String ()

text += `🔥 Игровой ID: ${user.uid.map (x => x).join (" | ")}\n`;
if (user.settings.adm > 0) text += `@bearbot (${user.prefixadm == undefined ? "💎 Администратор без префикса" : user.prefixadm})\n`;
text += `💵 Баланс: ${utils.sp(user.balance)}$\n`;
text += `💰 В банке: ${utils.sp(user.bank)}$\n`;
text += `👑 Рейтинг: ${utils.sp(user.rating)} ед\n`
text += `💎 Биткоинов: ${utils.sp(user.btc)}₿\n`;

if(user.business || user.transport.car || user.transport.yacht || user.transport.airplane || user.transport.helicopter ||
				user.realty.home || user.realty.apartment ||
				user.misc.phone || user.misc.farm || user.misc.pet)
			{
				text += `\n🎞 Имущество:\n`;

				if(user.transport.car) text += `⠀🚗 Машина: ${cars.find(x=>x.id==user.transport.car).name}\n`;
				if(user.transport.yacht) text += `⠀🛥 Яхта: ${yachts.find(x=>x.id==user.transport.yacht).name}\n`;
				if(user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes.find(x=>x.id==user.transport.airplane).name}\n`;
				if(user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters.find(x=>x.id==user.transport.helicopter).name}\n`;

				if(user.realty.home) text += `⠀🏡 Дом: ${homes.find(x=>x.id==user.realty.home).name}\n`;
				if(user.realty.apartment) text += `⠀🌇 Квартира: ${apartments.find(x=>x.id==user.realty.apartment).name}\n`;

				if(user.misc.phone) text += `⠀📱 Телефон: ${phones.find(x=>x.id==user.misc.phone).name}\n`;
				if(user.misc.pet) text += `⠀${pets.find(x=>x.id==user.misc.pet).smile} Питомец: ${pets.find(x=>x.id==user.misc.pet).name}\n`;
				if(user.business) text += `   ${businesses.find (x => x.id == user.business).icon} Бизнес: ${businesses.find (x => x.id == user.business).name}\n`
				if(user.misc.farm) text += `  🔋 Фермы: ${farms.find(x=>x.id==user.misc.farm).name} (x${user.farms})\n`;
				
			}
		
if (user.vip || user.prem || user.imortal) {

text += `\n👑 Привилегии:\n\n`
if (user.vip) text += `💎 @bearbot (ВИП) игрок\n`
if (user.prem) text += `🔥 @bearbot (ПРЕМИУМ) игрок\n`
if (user.imortal) text += `🎰 @bearbot (ИМОРТАЛ) статус\n`
if (user.luxury) text += `💲 @bearbot (ЛАКШЕРИ) статус\n`;
}

text += `\n\n✏️ Дата регистрации: ${user.regDate}\n`
if (user.activ_get != 0) text += `🔌 Активность: ${user.activ_get > 60000 ? testlol(user.activ_get) + " назад" : testlol(user.activ_get) + "назад"}\n`
if (user.activ_get == 0) text += `🔌 Активности в боте не замечено\n`

return message.send (`💎 *id${message.user.id} (${ctx.tag}), профиль игрока *id${user.id} (${user.tag}):
\n${text}`, {
	keyboard: Keyboard.keyboard ([
	   gen_key ("📆 Логи", "логиинфо " + user.uid)
	]).inline ()
});
});

bear.hear(/^(?:pget)$/i, async (message, bot) => {
if(message.user.settings.adm < 2) return;
if(!message.forwards[0] || message.replyMessage) return message.reply(`✏️ *id${message.user.id} (${message.user.tag}), перешлите или ответьте на сообщение.`);
let c = message.forwards[0].senderId;
let b = users.find(x=> x.id === Number(c));

if(message.forwards[0]) {
message.reply (`🔥 *id${message.user.id} (${message.user.tag}), информация о игроке:

🔖 Игровой никнейм: *id${c} (${b.tag})
🆔 Игровой ID: ${utils.sp(b.uid)}
👤 ID VK: vk.com/id${b.id}
`);
}

if(message.replyMessage) {
let c = message.replyMessage.senderId
let b = users.find(x=> x.id === Number(c));
message.reply (`🔥 *id${message.user.id} (${message.user.tag}), информация о игроке:

🔖 Игровой никнейм: *id${c} (${b.tag})
🆔 Игровой ID: ${utils.sp(b.uid)}
👤 ID VK: vk.com/id${b.id}
`);
}
});

bear.hear(/^(?:курс руды)$/i, function (message, bot) {
return bot(`курс руды:

💎 1 алмаз — ${utils.rn(almruda)}$
🎛 1 железо — ${utils.rn(rudazhelezo)}$
🔮 1 золото — ${utils.rn(zolotrud)}$
🎇 1 материя — ${utils.rn(materia)}$

${rudaproc[0].zhelezo !== 0 ? `🎪 Курс руд в общей сумме упал на ${rudaproc [0].zhelezo + rudaproc [0].zoloto + rudaproc [0].almaz+rudaproc[0].materia}%`:""}

⏰ » Курс руды обновиться через ${testlol(timerud)}
`);
});

bear.hear(/^(?:сеткмд)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
if (message.user.settings.adm < 10) return;
var user = await users.find(x=>x.uid===Math.abs(message.args[1]));
await user.mycmd.push({name:message.args[2]});
await bot(`сделал!`);
});

bear.hear(/^(?:бантайм)\s(.*)\s(.*)\s(.*)$/i, async function (message, bot) {
if (!message.user.mycmd.find(x => x.name === "bantime")) return bot(`доступ на данную команду можно получить у Основателя! 👑`);
if (!Number(message.args[1]) || !Number(message.args[2])) return;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
if (ctx.settings.adm < 2) return;
let user = users[message.args[1]];
if (!user || user === undefined) return;
message.args[2] = Math.floor(Number(message.args[2]));
user.pizdenka = Date.now () + (3600000*24) * Number (message.args[2]);
message.user.settings.banstime += 1;
await vk.api
.messages.send ({
	user_id: user.id,
	random_id: 0,
	message: `✏️ *id${user.id} (${user.tag}), вам была выдана блокировка аккаунта на ${message.args [2]} дн.
	    💎 Причина: ${message.args[3]}
	    
	    🆘 Если ваша блокировка была ошибочкой, напишите в тех.поддержку.` 
})

return message.send (`⛔ *id${message.user.id} (${message.user.tag}), игрок «*id${user.id} (${user.tag})» был успешно забанен на ${message.args[2]} дн.
💎 Причина блокировки: «${message.args[3]}»`)
});

bear.hear(/^(?:разбантайм)\s([0-9]+)$/i, async (message, bot) => {
if (!message.user.mycmd.find(x => x.name === "unbantime")) return bot(`доступ на данную команду можно получить у Основателя! 👑`);
if (ctx.settings.adm < 2) return;
var find = await users.find(x=>x.uid===message.args[1]);
if (!find) return;
if (find.pizdenka < Date.now()) return bot(`данный игрок не заблокирован в боте. ⛔`);
await bot(`вы успешно разбанили игрока «*id${find.id} (${find.tag})»!
🎮 Оставалось времени до разбана: ${left(Date.now()-find.pizdenka)}.`);
find.pizdenka = 0;
});

bear.hear(/^(?:найтипроф)\s(\s?https\:\/\/vk\.com\/)?([^]+)?$/i, async (message, bot) => {
if(message.user.settings.adm < 1) return;
var domain = message.args[2].split(" ");
vk.api.call("utils.resolveScreenName", {
screen_name: message.args[2]
}).then((res) => {
let user = users.find(x=> x.id === Number(res.object_id));
if(!user) return bot(`неверная ссылка ${smileerror}`);

return bot(`ID игрока : ${user.uid}\nНик игрока: ${user.tag}\nПодробнее по команде "Статистика ${user.uid}"`);
})
});

bear.hear(/^(?:никнайти)\s([^]+)$/i, function (message, bot) {
if (ctx.settings.adm < 1) return;

message.args[1] = String (message.args[1]).toLowerCase ()

var text = String ()
var len = 0;

for (i in users) {
if (String (users[i].tag).toLowerCase () == message.args[1]) {
text += `💎 *id${users[i].id} (${users[i].tag}) (ID: ${users[i].uid})\n`
len += 1;
}
}

if (text == String ()) return bot (`игроков с никнеймом «${message.args[1]}» не найдено! ${smileerror}`)

return bot (`нашел ${len} игрока(ов) с никнеймом «${message.args[1]}»:

${text}
`)


});

bear.hear(/^(?:разбанить всех)$/i, function (message, bot) {
if (ctx.settings.adm < 8) return;
for (i in users) {
users[i].ban = false;
users[i].pizdenka = 0;
}
return bot(`разбанил всех игроков! ✏️`);
});

bear.hear(/^(?:сн)\s(.*)$/i, async (message, bot) => {
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 3) return;

{
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

await bot(`игроку *id${user.id} (${user.tag}) установлен ник. &#9989;`);
user.tag = `СМЕНИТЕ НИК`;

saveUsers();
}
});

bear.hear(/^(?:сбор металла|(.*) Сбор металла)$/i, async (message, bot) => {
	if (ctx.timers.metal > getUnix()) return bot(`вы в поисках нового метала в городе, подождите еще ${left(ctx.timers.metal - getUnix())}! ⛔`);
	
	ctx.timers.metal = getUnix() + 600000;
	
	setTimeout (() => {
	 vk
	   .api.messages.send ({
		user_id: message.senderId,
		   message: `🗜 *id${message.senderId} (${message.user.tag}), найдена находка в виде дорогого металла! 💵`,
		   random_id: 0,
		   keyboard: Keyboard.keyboard ([
			   Keyboard.textButton ({
				label: utils.pick (Array.from ("💵🗜⭐⚙️👑☘️")) + " Сбор металла"
			   })
		   ]).inline ()
	   })
	}, 600000)
	
	const random = utils.pick ([1, 1, 2, 2, 2])
	const random_summa = utils.random (1000000000, 1750000000)
	const random_sit = utils.pick (["вас укусила собака, пришлось переждать в доме", "на вас напали бандиты", "у вас украли металл"])
	
	if (random == 1) {
	await bot (`вы нашли достаточное количество металла, но ${random_sit}! 😞`);
	await message.send ({ sticker_id: 4310 })
	}
	
	if (random == 2) {
	 
	ctx.balance += Number (random_summa);
	
	await bot (`вы нашли ценный МЕТАЛЛ около чужого дома! 💵
	💵 Получено: ${utils.sp (random_summa)}$`);
	
	await message.send ({ sticker_id: 94951 })
	}
	
	});

bear.hear(/^(?:искать клад)$/i, function (message, bot) {
if (ctx.timers.clad > getUnix()) return bot(`вы устали искать клады, подождите ${left(ctx.timers.clad - Date.now())}. ⌛`);
ctx.timers.clad = getUnix() + 600000;
let rand = utils.pick([1, 1, 2, 2]);
if (rand === 1) {
return bot(`вы не нашли не одного клада! 😞`);
}
if (rand === 2) {
const rran = utils.sp(60000, 830000);
ctx.balance += rran;
return bot(`был найден клад! \n 💸 » Получено: ${utils.sp(rran)}$`, { attachment: 'photo-210137308_457239266' });
}
});

bear.hear(/^(?:подарок|ббеседа|🌌 Подарок)$/i, function (message, bot) {
if (!message.isChat) return;
if (chats.find(x => x.id === Number(message.chatId)).time > getUnix()) return bot(`в этой беседе уже забирали подарок! ⏰ Подождите ${left(chats.find(x=>x.id===Number(message.chatId)).time - Date.now())}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🌌 Подарок`
},
"color": "default"
}]
]
})
});
let ch = chats.find(x => x.id === Number(message.chatId));
ch.time = Date.now() + 300000;
saveChats();
let rand = utils.random(700,9392);
let random2 = utils.random(0,2);
ctx.rating += rand;
return bot(`вы получили бонус в размере ${utils.sp(rand)}👑 \n 🚀 Следущий бонус через 5 минут!`);
});

bear.hear(/^(?:секретная машина)\s(.*)$/i, function (message, bot) {
if (ctx.settings.adm < 3) return;
if (ctx.settings.adm < 8 && message.args[1] != message.user.uid [0]) return bot (`выдавать секретную машину другим игрокам можно с 8 LVL! ✏️`)
if (!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));
let a = users.find(x => x.uid.find (x => x == message.args[1]));
if (!a) return bot(`игрока не найдено! 🚀`);
const bb = a.transport.car;
a.transport.car = 15;
return bot(`игроку была выдана секретная машина! ⚡ \n  Старая машина: ${bb.toString().replace(/0/gi, "Нет")} \n ✏️ Новая: ${cars[a.transport.car - 1].name}`);
});

bear.hear(/^(?:мои контейнеры)$/i, function (message, bot) {
let text = "";
text += `\nваши контейнеры:\n`
    if (message.user.c1) text += `📪 1. Старый контейнер (${utils.sp(message.user.c1)}) шт.\n`
    if (message.user.c2) text += `📦 2. Дубайский контейнер (${utils.sp(message.user.c2)}) шт.\n`
    if (message.user.c3) text += `🔥 3. Германский контейнер (${utils.sp(message.user.c3)}) шт.\n`
    if (message.user.c4) text += `👑 4. Рейтинг-контейнер (${utils.sp(message.user.c4)}) шт.\n`
    if (message.user.c5) text += `⛄ 5. Новогодний-контейнер (${utils.sp(message.user.c5)}) шт.\n`
    if (message.user.c6) text += `🎃 6. Шеллелей-контейнер (${utils.sp(message.user.c6)}) шт.\n`
	if (message.user.secret_case) text += `⭐ Секретный-контейнер (${utils.sp (message.user.secret_case)}) шт.\n`
    if (!message.user.c1 && !message.user.c2 && !message.user.c3) text += `У вас нет контейнеров.\n`

return bot(`${text}`);
});

bear.hear(/^(?:круиз)$/i, async (message, bot) => {
	let cash = utils.pick([100000, 200000]);
	cash = Math.floor(Number(cash));

	if(!message.user.transport.yacht) return bot(`у Вас нет яхты. 😞`);
	if(message.user.kruiz > getUnix()) return bot(`нельзя так часто плавать, подождите ${left(message.user.kruiz - Date.now())} ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`,`🤑`])}`)

    message.user.kruiz = Date.now() + 600000;
	message.user.balance += cash;

	return bot(`вы отправили яхту в круиз и получили ${utils.sp(cash)}$`);
});

users.map(x => {
if (x.bossyr === undefined || x.bossyr === NaN || x.bossyr === null) {
x.bossyr = 0
}
});

bear.hear(/^(?:дайвинг|💲 Дайвинг)$/i, async (message, bot) => {

			if(message.user.timers.daiving > Date.now()) return bot(`все озера закрылись, подождите ${left(message.user.timers.daiving - Date.now())} 📖`);

			 message.user.timers.daiving = Date.now() + 600000;

			 let prize = utils.pick([1, 1, 2, 2]);
			let rrrd = utils.pick([100000, 200000, 300000, 400000, 500000]);

			if(message.isChat)
		{
		global.setTimeout(() => {
		vk.api.messages.send({ chat_id: message.chatId, message: `@id${message.user.id} (${message.user.tag}), ОЗЕРА открылись, ДАЙВИНГ не ждет!`,

		keyboard:JSON.stringify(
		{ "inline": true, "buttons": [
		[
		{ "action": { "type": "text", "payload": "{}", "label": "💲 Дайвинг" }, "color": "primary" }
		]
		]
		})
		});
		}, 600000);
		}

		if(!message.isChat)
		{
		global.setTimeout(() => {
		vk.api.messages.send({ user_id: message.user.id, message: `@id${message.user.id} (${message.user.tag}), ОЗЕРА открылись, ДАЙВИНГ не ждет!`,

		keyboard:JSON.stringify(
		{ "inline": true, "buttons": [
		[
		{ "action": { "type": "text", "payload": "{}", "label": "💲 Дайвинг" }, "color": "primary" }
		]
		]
		})
		});
		}, 600000);
		}


			if(prize === 1)
			{
				message.user.balance -= 100000;
				let ddd = utils.pick(['ядовитая рыба', 'акула']);
				bot(`вас укусила ${ddd}, на лечение ушло 100.000$! 😞
                📖 Не расстраивайся, ты можешь повторить попытку через 10 минут!`);
			}

			if(prize === 2)
			{
				message.user.balance += rrrd;
				bot(`вы нашли ценных АРТИФАКТ в самых глубинах! \n💲 Получено: ${utils.sp(rrrd)}$`);
			}
		});

bear.hear(/^(?:ограбить)\s(.*)$/i, function (message, bot) {
if (!Number(message.args[1])) return;
if(ctx.timers.ogr > Date.now()) return bot(`вас разыскивают, подождите ${left(ctx.timers.ogr - Date.now())} что-бы они уехали! 😫`);
ctx.timers.ogr = Date.now() + 3600000 / 2;
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if (!user) return;
if (user.balance < 600000) return bot(`у игрока не оказалось денег! Ограбление провалено. 😫`);
let rand = utils.pick([1, 1, 2, 2]);
if (rand === 1) {
ctx.balance += 600000;
user.balance -= 600000;
return bot(`вы ограблили [id${user.id}|игрока]! \n 💸 » Получено: 600.000$. 🚀`);
vk.api.messages.send({ user_id: user.id, message: `🎁 » Вы были ограблены на 600.000$!` });
}

if (rand === 2) {
return bot(`ограбление провалено! Игрок вызвал полицию заранее. 😫`);
}
});

bear.hear(/^(?:обнулить)\s(.*)$/i, function (message, bot) {
if (ctx.settings.adm < 6) return;
if (!Number(message.args[1])) return;
if (ctx.timers.obnul > Date.now()) return bot(`вы можете обнулить игрока через ${left(ctx.timers.obnul - Date.now())}! 😫`);
ctx.timers.obnul = Date.now() + 3600000 * 3;
message.args[1] = Math.floor(Number(message.args[1]));
let user = users.find(x => x.uid.find (x => x == message.args [1]));
if (!user) return;
           user.balance = 20000,
			user.bank=50000,
			user.btc=0,
			user.farm_btc=0,
			user.farms=0,
			user.farmslimit=3000,
			user.energy=10,
			user.opit=0,
			user.biz=0,
			user.zhelezo=0,
			user.zoloto=0,
			user.almaz=0,
			user.bizlvl=0,
			user.nicklimit=8,
			user.rating=1,
			user.regDate=`${time()}`,
			user.mention=true,
			user.ban=false,
			user.timers.hasWorked= false,
			user.tag= `СМЕНИТЕ НИК`,
			user.work=0,
			user.business=0,
			user.notifications=true,
			user.referal=null,
			user.promo=false,
			user.transport.car=0,
			user.transport.yacht=0,
			user.transport.airplane=0,
			user.transport.helicopter=0
			user.realty.home=0,
			user.realty.apartment=0
			user.misc.phone=0,
			user.misc.pet=0,
			user.misc.farm=0,
			user.settings.adm=0,
			user.settings.trade=false,
			user.settings.old=false,
			user.dcoin = 0,
			user.marriage.partner=0;
return bot(`игрок был успешно обнулен! ✏️`);
});

users.filter(x => x.timers.obnul === undefined).map(x => {
users.map(q => {
q.timers.obnul = 0
})
});

bear.hear(/^(?:разжаловать)\s(.*)$/i, async (message, bot) => {
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
if(message.user.settings.adm < 13)return;

if(message.args[1] <= 0) return;

{
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
if(message.user.settings.adm < user.settings.adm) return;

if (message.user.settings.adm < 10 && user.settings.adm >= 6) return;

user.settings.adm= 0;


saveUsers();
await bot(`успешно снял права администратора! ✏️`);
}
});

bear.hear(/^(?:разжаловатьmv)\s(.*)$/i, async (message, bot) => {
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
if(message.user.settings.adm < 7)return;

if(message.args[1] <= 0) return;

{
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
if(message.user.settings.adm < user.settings.adm) return;


user.vip= false;


saveUsers();
await bot(`снял права Bear-VIP. 🎁`);
}
});

bear.hear(/^(?:разжаловатьmvp)\s(.*)$/i, async (message, bot) => {
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
if(message.user.settings.adm < 7)return;

if(message.args[1] <= 0) return;

{
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
if(message.user.settings.adm < user.settings.adm) return;


user.prem= false;


saveUsers();
await bot(`снял права Bear-VIP PRO. 🎁`);
}
});

bear.hear(/^(?:обнулить биткоины)\s(.*)$/i, function (message, bot) {
if (!message.args[1]) return;
if (ctx.settings.adm < 2) return;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
let q = users.find(x => x.uid.find (q => q == message.args [1]));
q.btc = 0;
return bot(`обнулил биткоины у игрока ${q.tag}!`);
});
bear.hear(/^(?:обнулить донат)\s(.*)$/i, function (message, bot) {

if (!message.args[1]) return;

if (ctx.settings.adm < 2) return;

message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');

message.args[1] = message.args[1].replace(/(к|k)/ig, '000');

message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

let q = users.find(x => x.uid.find (q => q == message.args [1]));

q.dcoin = 0;

return bot(`обнулил донат у игрока ${q.tag}!`);

});

bear.hear(/^(?:выдать донаткейс|выдать донат-кейс)\s(.*)\s([0-9]+)$/i, function (message, bot) {
if (!message.args[1]) return;
if (ctx.settings.adm < 8) return;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
let q = users.find(x => x.uid.find (q => q == message.args [1]));
q.c3 += Number(message.args[2]);
return bot(`выдал ${message.args[2]} донат-кейсов игроку ${q.tag}!`);
});

bear.hear(/^(?:выдать рубли)\s(.*)\s(.*)$/i, function (message, bot) {
if (!Number(message.args[1])) return;
if (ctx.settings.adm < 8) return;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
let user = users.find(x => x.uid.find (q => q == message.args [1]));
if (!user) return;
user.dcoin += Number(message.args[2]);
return bot(`${utils.sp (message.args [2])}Р были выданы игроку ${user.tag}! 👑`);
saveUsers()
});

bear.hear (/^(?:сет рубли)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 5) return

	message.args [1] = message.args [1].replace (/к/g, "000")

	if (Number (message.args [1]) > 500) return bot (`нельзя ставить себе более 500 донат-рублей! ⛔`)

	message.user.dcoin = Number (message.args [1])

	return bot (`вам было поставлено ${utils.sp (message.args [1])}Р! 💰`)
})

bear.hear (/^(?:сет дк)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 5) return

	message.args [1] = message.args [1].replace (/к/g, "000")

	if (Number (message.args [1]) > 150) return bot (`нельзя поставить себе более 150 донат-кейсов. 🎄`)

	message.user.c3 = Number (message.args [1])

	return bot (`вам было поставлено ${utils.sp (message.args [1])} ДК! 💰`)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

bear.hear(/^(?:бизнес 2)$/i, async (message, bot) => {
if(!message.user.bizz2) return bot(`у Вас этого нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
const biz = bizfo[ctx.bizz2 - 1];
var lvlcash = biz.fin;
return bot(`статистика «${biz.name}»:
🌌 Приносит: ${utils.sp(lvlcash)} алмазов/час
⚖ Добыто: ${utils.sp(message.user.biz2)} алмазов`);
});

bear.hear(/^(?:повысить)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.settings.adm < 10) /* Ваш игровой ID */ return;

let user = users.find(x => x.uid.find (q => q == message.args [1]));
if (!user) return bot(`неверный ID игрока`);

if (user.settings.adm >= 5) return

user.settings.adm += 1;

await bot(`вы повысили игрока ${user.tag} — ${pref[user.settings.adm - 1].name}`);
if (user.notifications) vk.api.messages.send({
user_id: user.id, message: `💎 [ADM] Вас повысили на 1 уровень администратора!`
});
});

bear.hear(/^(?:понизить)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.settings.adm < 10) /* Ваш игровой ID */ return;

let user = users.find(x => x.uid.find (q => q == message.args [1]));
if (!user) return bot(`неверный ID игрока`);

user.settings.adm -= 1;

await bot(`вы понизили игрока ${user.tag} — ${pref[user.settings.adm - 1].name}.`);
if (user.notifications) vk.api.messages.send({
user_id: user.id, message: `💎 [ADM] Вас понизили на 1 уровень администратора.`
});
});

bear.hear(/^(?:сет)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));
    if (message.args [1] > 100000000000000000) return bot (`больше ${utils.sp(100000000000000000)} выдать нельзя. ⚙`)
    if(message.user.settings.adm < 1) return bot(`купите привелегию «Администратор»! ❗
    📄 «Автодон админка [1-5]»`);
    if (message.user.set_time > Date.now()) return bot (`подождите еще ${testlol (ctx.set_time-Date.now())} перед следующим сеттом. ❌`)

	{
		message.user.balance = message.args[1];
		message.user.set_time = Number (60000*3) + Date.now ();
		
		bot(`баланс был установлен на ${utils.sp(message.args[1])}$! 💰
        💎 Следующий СЕТ будет доступен через 3 минуты.`);
	}
});

bear.hear(/^(?:бхп)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

if(ctx.settings.adm < 8) return;

	{
		botinfo.boss = message.args[1];
		bot(`здоровье босса изменено на ${utils.sp (message.args [1])}ХП! ✏️`);
	}
});

const getRandomId = () => utils.random(0, users.length);

bear.hear(/^(?:обнова)$/i, async (message, bot) => {
if(message.senderId !== own && message.senderId !== ownn ) return;
for(i=0;i<20000;i++){
if(users[i]){

users[i].obnova=true;

}
}
return bot(`xuy, djsjsk idet`);
});
bear.hear(/^(?:выклобнова)$/i, async (message, bot) => {
if(message.senderId !== own && message.senderId !== ownn) return;
for(i=0;i<20000;i++){
if(users[i]){

users[i].obnova=false;

}
}
return bot(`xuy, obnova ne idet, okda?`);
});

bear.hear (/^(?:бот стата)$/i, async (message, bot) => {
	if (message.user.settings.adm < 5) return

    const date = new Date ()
	return bot (`👨‍🔧 Статистика за 26.11.23-${date.getDate ()}.${date.getMonth () + 1}.${date.getFullYear ()}
	📊 Всего игроков: ${users.length}
	⚙ Всего сообщений: ${utils.rn(botinfo.msg)}

	⚙ Радуем вас частыми обновлениями, на очереди крупное обновление.
	`)
})

bear.hear(/^(?:бизнес 3)$/i, async (message, bot) => {
if(!message.user.bizz2) return bot(`у Вас этого нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
const biz = businesses3[ctx.bizz2 - 1];
var lvlcash = biz.fin;
return bot(`статистика «${biz.name}»:
🌌 Приносит: ${utils.sp(lvlcash)} материи/час
⚖ Добыто: ${utils.sp(message.user.biz3)} материи`);
});

bear.hear(/^(?:материю)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

if(message.user.settings.adm<6) return;
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return;

	{

		let user = users.find(x => x.uid.find (q => q == message.args [1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
		const bilo = utils.sp(user.balance);

		user.materia += message.args[2];

		await bot(`выдаю [id${user.id}|${user.tag}] ${utils.sp(message.args[2])} материи. ${smilesuccess}`);
}
});

bear.hear (/^(?:статистика взлома|🥷 Статистика взлома|стата взлома)$/i, async (message, bot) => {
	const vzlom_lvl = Number (message.user ["vzlomlvl"])
	const zakaz = message.user.vzlom_zakaz
	const summa_vzlom = Number (message.user ["vzlom_summa"])
	
	var vzlom_unit = String ()
	
	if (vzlom_lvl == 1) vzlom_unit = "Начинающий взломщик"
	if (vzlom_lvl > 1 && vzlom_lvl < 5) vzlom_unit = "Начинающий взломщик"
	if (vzlom_lvl > 5 && vzlom_lvl < 10) vzlom_unit = "Хакер"
	if (vzlom_lvl > 10 && vzlom_lvl < 20) vzlom_unit = "Многофункционированый хакер"
	if (vzlom_lvl > 20 && vzlom_lvl < 35) vzlom_unit = "Опытный взломщик"
	
	return bot (`ваша статистика взломщика:
	
	💵 Заработано со взломов: ${utils.sp (summa_vzlom)}$
	⭐ Уровень взломщика: ${vzlom_lvl} (${!vzlom_unit ? "Начинающий взломщик" : vzlom_unit})
	🔎 Выполнено заказов: ${zakaz} шт
	
	🥷 Начать взламывать и ограблять — очень легко! Нажимай на кнопку, и получай свои заветные деньги!`
	,
	{
	 keyboard: Keyboard.keyboard ([
		[
		 Keyboard.textButton ({
		  label: "🥷 Взлом"
	  })
	  ],
	  [
	  Keyboard.textButton ({
	   label: "🔍 Ограбить"
	  })
	  ]
	 ]).inline ()
	}
	)
   })
   
   bear.hear(/^(?:🥷 Взлом)$/i, async (message, bot) => {
	if (message.user.vzlom_new > Date.now ()) return bot (`в данный момент, вы не можете взломать дверь!
	⭐ Осталось до следующего взлома: ${testlol (message.user.vzlom_new - Date.now ())}
	🔍 Чтобы уменьшить время ожидания взлома, купите любые из статусов.`)
	
	const summa = utils.random (500000,8300000)
	
	const random_bool = utils.pick ([true, false, true, false])
	
	let _time = 15
	
	if (message.user.vip) {
	 _time = 12
	}
	
	if (message.user.prem) {
	 _time = 9
	}
	
	if (message.user.imortal) {
		_time = 6
	}
	
	message.user.vzlom_new = Date.now () + (3600000 * Number (_time))
	
	if (random_bool) {
	   message.user.vzlom_zakaz += 1
	   message.user.vzlom_summa += Number (summa)
	   message.user.balance += Number (summa)
	   
	   return bot (`вы получили ${utils.sp (summa)}$ на свой баланс.
	   💵 Баланс: ${utils.sp(message.user.balance)}$
	   🔎 Следующий взлом через ${_time}ч`)
	  }
	  
	  if (random_bool == false) {
		message.user.balance -= 120000
	   return bot (`вам не получилось взломать чужую дверь, приехала полиция! 🥷
		  💵 Пришлось отдать 120,000$
		  🔎 Следующий взлом через ${_time}ч`)
	  }
   })
   
   const vzlom_system = [
	 { zakaz: 5, lvl: 1 },    { zakaz: 10, lvl: 2 },
	 { zakaz: 15, lvl: 3 },   { zakaz: 20, lvl: 4 },
	 { zakaz: 25, lvl: 5 },   { zakaz: 30, lvl: 6 },
	 { zakaz: 35, lvl: 7 },   { zakaz: 40, lvl: 8 },
	 { zakaz: 45, lvl: 9 },   { zakaz: 50, lvl: 10 },
	 { zakaz: 55, lvl: 11 },  { zakaz: 60, lvl: 12 },
	 { zakaz: 65, lvl: 13 },  { zakaz: 70, lvl: 14 },
	 { zakaz: 75, lvl: 15 },  { zakaz: 80, lvl: 16 },
	 { zakaz: 85, lvl: 17 },  { zakaz: 90, lvl: 18 },
	 { zakaz: 95, lvl: 19 },  { zakaz: 100, lvl: 20 },
	 { zakaz: 105, lvl: 21 }, { zakaz: 110, lvl: 22 },
	 { zakaz: 115, lvl: 23 }, { zakaz: 120, lvl: 24 },
	 { zakaz: 125, lvl: 25 }, { zakaz: 130, lvl: 26 },
	 { zakaz: 135, lvl: 27 }, { zakaz: 140, lvl: 28 },
	 { zakaz: 145, lvl: 29 }, { zakaz: 150, lvl: 30 },
	 { zakaz: 155, lvl: 31 }, { zakaz: 160, lvl: 32 },
	 { zakaz: 165, lvl: 33 }, { zakaz: 170, lvl: 34 },
	 { zakaz: 175, lvl: 35 }
   ]
   
   setInterval (() => {
	users
	.map (w => {
	 const find_vzlom = vzlom_system.find (x => x.zakaz == w.vzlom_zakaz)
	 
	 if (!find_vzlom) return;
	 
	 w.vzlomlvl = Number (find_vzlom.lvl)
	})
   }, 1000)
   
   bear.hear(/^(?:🔍 Ограбить)$/i, async (message, bot) => {
	return bot (`чтобы ограбить человека — команда «Ограбить [ID]». 💎`)
   })

bear.hear(/^(?:гонка|🏎 Гонка)$/i, async (message, bot) => {
    if (!message.user.transport.car) return bot(`у вас нет машины.`)
    let pick = utils.pick(["найдена поломка в машине", "вы сильно устали", "противник не хочет гонки"]);
    if (ctx.gon2.gtime > Date.now()) return message.send(`${pick}, следущая гонка через ${left(ctx.gon2.gtime - Date.now())}! ⛔`)
    let s = utils.random(0, cars.length - 1);
    let sk = utils.random(0, 59);
    let skorost = utils.random(5, 63); // Skorost
    let max_sk = sk;
    let m_sk = sk;
    let p_sk = skorost;
    let razgon = sk;

    //if (ctx.launc  ctx.nitro  ctx.sport) m_sk = utils.random(10,80);
    
    // Подбор Номера »
    let n_one = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
    let n_two = utils.random(0, 9);
    let n_three = utils.random(0, 9);
    let n_four = utils.random(0, 9);
    let n_five = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
    let n_six = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
    let n_seven = utils.pick(['777']);
    rgn = `${n_one}${n_two}${n_three}${n_four}${n_five}${n_six} ${n_seven}`
    // Подбор Номера «
let bol = false;

if (s > ctx.transport.car) {
bol = true;
}

if (s < ctx.transport.car) {
bol = false;
}

    bot (`гонка началась!

    🏎 Ваше авто: «${cars[ctx.transport.car - 1].name}».
    🏎 Автомобиль противника: «${cars[s - 1].name}».

    ⭐ По статистике, ${!bol ? 'ваша машина мощнее' : 'машина у противника мощнее'}
 ⚡ Максимальная скорость: ${max_sk}км/ч
 🐴 ${p_sk} Л.С
 🏎 Разгон до 100км/ч за ${razgon} секунд.
 ☘️ Госномер: ${rgn}`);
 
    let w_reit = utils.random(5, 9)
    let p_reit = utils.random(2, 4)
    message.user.gon2.gtime = Date.now() + 150000;
    max_sk = utils.random(0, 59);
    if (m_sk === p_sk) return message.send(`обьявлена ничья! Машина была сломана.\n 👑 Получено по 1.000.000$`);
    if (m_sk > p_sk) {
        message.user.gon2.kub += w_reit
        message.user.balance += 7500000000
        await bot(`поздравляем победителя! Вы приехали к финишу раньше чем остальные! 👑
        ☘️ Получено: ${w_reit}👑 и 7,500,000,000$`);
    }
    if (m_sk < p_sk) {
        message.user.gon2.kub -= p_reit;
        await bot(`неудачный заезд! Вы проиграли в гонке! ⚡
         🔍 Проиграно: ${p_reit}👑`);
   }

   if (message.isChat) {
   global.setTimeout(() => {
  vk.api.messages.send({ chat_id: message.chatId, message: `@id${message.user.id} (${message.user.tag}), ГОНКА скоро начнеться!`,

  keyboard:JSON.stringify(
  { "inline": true, "buttons": [
  [
  { "action": { "type": "text", "payload": "{}", "label": "🏎 Гонка" }, "color": "primary" }
  ]
  ]
  })
  });
  }, 600000);
  }
 if (!message.isChat) {
 global.setTimeout(() => {
  vk.api.messages.send({ user_id: message.senderId, message: `@id${message.user.id} (${message.user.tag}), ГОНКА скоро начнеться!`,

  keyboard:JSON.stringify(
  { "inline": true, "buttons": [
  [
  { "action": { "type": "text", "payload": "{}", "label": "🏎 Гонка" }, "color": "primary" }
  ]
  ]
  })
  });
  }, 600000);
  }
});

bear.hear(/^(?:переверни|перевернуть)\s([^]+)$/i, async (message, bot) => {
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}"`)
});

bear.hear(/^(?:переверни ник|⭐ Перевернуть)$/i, async (message, bot) => {
	let text = ``;
	const nick = ctx.tag;
	nick.split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});
   ctx.tag = `${text.split('').reverse().join('')}`;
	return bot(`перевернул твой ник-нейм! \n 💧 Результат: ${ctx.tag}.`)
});

bear.hear(/^(?:рандомный ник|🥷 Рандомный ник)$/i, function (message, bot) {
let nook;
let book = [];

users.map(x => {
book.push({ tag: x.tag });
});

book = book.slice(book.length-30,book.length);
let rand = utils.random(0,30);
if (!book[rand]) return;
nook = book[rand].tag;

ctx.tag = nook;
return bot(`нашел тебе ник-нейм из базы данных! \n\n ⏰ » Ник-нейм: ${nook}!`);
});

bear.hear(/^(?:🗣️ Ник-меню|нменю)$/i, function (message, bot) {
return bot(`никнейм-меню:

🥷 Рандомный ник
⭐ Перевернуть ник`,
{
            keyboard: JSON.stringify(
                {
                    "inline": true,
                    "buttons": [
                        [{
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "🥷 Рандомный ник"
                            },
                            "color": "positive"
                        },
                        {
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "⭐ Перевернуть"
                            },
                            "color": "negative"
                        }],
                    ]
                })
        });
});

bear.hear(/^(?:бинфо)$/i, async (message, bot) => {
let response = await vk.api.messages.getConversationsById({ peer_ids: message.peerId, group_id: groupId, random_id: 0});
if (message.isChat) {
vk.api.messages.getInviteLink({ acces_token: vk.token, peer_id: 2000000000 + message.chatId }).then(x => {
async function getLink() { const reslink = await vk.api.utils.getShortLink({url: x.link }); return reslink.short_link; }
let user = users.find(x => x.id === Number(response.items[0].chat_settings.owner_id));
if (!user) return;
return bot(`
💎 Информация о беседе:
⠀⠀🌠 » Айди беседы: ${message.chatId}
⠀⠀👑 » Название беседы: «${response.items[0].chat_settings.title} »
⠀⠀👤 » Создатель беседы: [id${response.items[0].chat_settings.owner_id}|${user.tag}]
      ⏰ » Ссылка на беседу: ${x.link}`);
}).catch(e => console.error(e));
}
});

bear.hear(/^(?:цветОчек)\s(.*)\s([0-9]+)$/i, async (message, bot) => {
if (message.senderId !== own) return;
message.args[1] = Math.floor(Number(message.args[1]));
const gonna = message.args[1];
const gonna2 = message.args[2];
let us = users.find(x => x.uid === Number(gonna));
if (!us) return;
us.ck = Number(gonna2);
let bb = cvetok[gonna2 - 1];
await bot(`выдал [id${us.id}|игроку] цветок «${bb.name}»`);
});

bear.hear(/^(?:бизик2)\s(.*)$/i, function (message, bot) {
if (message.senderId !== own && message.senderId !== ownn) return;
if (!Number(bool[1])) return;
bool[1] = bool[1].replace(/к/ig, "000");
bool[1] = Math.floor(Number(bool[1]));
let us = users.find(x => x.uid === bool[1]);
if (!us) return;
us.bizz2 = 1;
return bot(`выдал бизнес!`);
vk.api.messages.send({
user_id: us.id,
message: `💮 » Спасибо за покупку второго бизнеса! Он уже у вас!`
});
});

bear.hear(/^(?:пинфо)$/i, async (msg) => {
if (!ctx.clown.pref) return;
await msg.send(`@id${msg.senderId} (${ctx.tag}), информация о промокоде:
🎇 » Название: ${config.promosl}.
💰 » Награда: ${utils.sp(config.promovalue)}${config.promotip === "баланс" ? '$' : 'биткоинов'}.
⏰ » Лимит: ${config.promolimit}.
`);
});

bear.hear(/^(?:всемдонаткейс)\s([0-9]+)$/i, function (message, bot) {
if (message.senderId !== own && message.senderId !== ownn) return;
let tx = "";
if (message.args[1] === 1) tx = " 🎇 » Вам был выдан 1 донат-кейс!";
if (message.args[1] === 2) tx = "🔖 » Вам было выдано 2 донат-кейса!";
users.forEach(async e=>{
e.c3 += message.args[1];
await vk.api.messages.send({ user_id: e.id, message: `${tx}` });
});
});

bear.hear(/^(?:клан создать)\s(.*)$/i, async (message, bot) => {
const errors = utils.pick(['😳', '😒',`😟`,`🙄`,`🤔`]);
const success = utils.pick(['🤤', '☺',`🙂`,`😁`,`😏`, '🤑']);
    if(!message.args[1]) return bot(`введите название для клана! ${success}`);
    let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(&#4448;|ᅠ|™|&#1;|أعلى||أحبك|�|�||�|™|�|&#0000;||�|™.|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|марихуана|Cuний кuт|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|█|▓|▒|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|разбуди в 4:20|#|подкладки|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|синийкит|цп|cp|изнасилование|несовершеннолетние)/
    var sss = zapret.test(zaprets1)
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(zapret.test(zaprets1) === true || message.args[1].toLowerCase() === ''){
    return bot(`вы используете запрещенные слова/символы/смайлики 🆘\n\n😉 Придумайте другое название клану.`);
	}
	if(message.args[1].length >= 21){ return bot(`вы указали слишком длинное название ${errors}
👥 » Максимальная длина для названия клана 20 символов.`);
	}
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return bot(`подозрительная ссылка.`);
	}

 	let user = message.user;
 	let name = message.args[1];
 	let clanid = message.user.clanid;
 	if(clans[clanid]) return bot(`вы уже состоите в другом клане ⚠`);
 	if(message.user.balance < 100000000000) return bot(`создание клана стоит 100.000.000.000$! ⚙`);
 	message.user.balance -= 100000000000;
	Array.prototype.random = function() {
	return this[Math.floor(this.length * Math.random())];
	}
 	if(!clans[clanid]){
 		let smile = [`🤘`,`💥`,`💣`,`😻`,`??`,`??`,`??`,`💎`,`♻`,`🏆`,`🔥`,`🌚`,`👻`,`💀`,`🎄`,`🎃`,`🚀`,`🎱`,`🍼`,`🍺`,`🐔`,`🐉`,`🌝`].random()
 	 	botinfo.number += 1;
 	 	clans[botinfo.number] = {
 		owner: message.user,
         group: "не привязана",
         beseda: "не привязана",
 		users: {},
 		zashita: 0,
 		retin: 0,
 		aue: 0,
 		lox: 0,
        biz: 0,
 		topsk: 0,
 		pisko: 10,
 		fuflo: 0,
 		abramovich: 0,
 		good: 0,
 		number: botinfo.number,
 		name: name,
 		balance: 0,
 		smile: smile,
 		open: true,
 		price: 100,
        exs: 0,
        people: 1
 	}
 	user.clanid = botinfo.number;
 	clans[botinfo.number].users[message.user.uid [0]] = {
        	        		level: 3,
         	        		names: message.user.tag,
        	        		vlozhil: 0,
        	        		don: 0,
        	        		volos: false,
        	        		idd: message.user.id,
        	        		uidd: message.user.uid [0]
    }
saveClans();
return bot(`клан «${name}» успешно создан! 👍

🆔 Айди клана: ${utils.rn(botinfo.number)}.
👤 Создатель клана: [id${message.user.id}|${message.user.tag}]
💸 Цена за вход: 100$

👥 Для входа другим участникам, используйте команду «Клан вступить ${botinfo.number}»
💎 Команды клана: «Кпомощь» без кавычек.`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "💡 Помощь"
				},
			"color": "secondary"
			},
			{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "⚔ Клан"
				},
				"color": "positive"

				}],
			]
		})
		});
}
});

bear.hear(/^(?:вип новости)$/i, async (message, bot) => {
if (message.user.vipnew == false && message.user.dcoin >= 750) {
message.user.dcoin -= 750;
message.user.vipnew = true;
return bot(`поздравляем с покупкой «VIP-NEW»! 💡`);
}
if (message.user.dcoin < 750 && message.user.vipnew == false) return bot(`у вас недостаточно донат-монет!
👑 — Пополнение: https://bear.delfix.ovh/donat.html.
🔑 — Пополнение 2: НИК: NODEJSLUPUS, комментарий: bear${ctx.uid}.`);
if (message.user.vipnew) return bot(`VIP-новости на все дни:${botinfo.vipnew.join('\n')}`);
});

bear.hear(/^(?:клан бизнесы)$/i, function (message, bot) {
const idclan = ctx.clanid;
if(!idclan) return bot(`вы не состоите в каком-либо клане ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
const clanniz = bizclan.map(x => `🤑 ${x.id}. ${x.name} — ${x.cost}$`).join("\n");
return bot(`клан бизнесы:\n${clanbiz}\n?? » Для покупки — «Клан бизнес [номер]»`);
});

bear.hear(/^(?:клан бизнес)\s([0-9]+)$/i, function (message, bot) {
const cl = bizclan[bool[1] - 1];
const idclan = ctx.clanid;
if (!idclan) return;
if (!cl) return bot(`такого бизнес клана нету! 🥺`);
if (ctx.balance < cl.cost) return bot(`у вас недостаточно денег! 🥺`);
clans[idclan].biz = bool[1];
return bot(`бизнес «${cl.name}» был куплен! 🤑`);
});

global.setInterval(async () => {
await users.forEach(e => {
if (e.clanid !== null || e.clanid) {
clans[e.clanid].balance += bizclan[clans[e.clanid].biz - 1].fin;
}
});
}, 3600000);

bear.hear(/^(?:покинуть|❌ Покинуть|❌Покинуть|клан покинуть)$/i, async (message, bot) => {
const idclan = message.user.clanid;

	if(!idclan) return bot(`вы не состоите в каком-либо клане ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[idclan].users[message.user.uid [0]].level == 3) return bot(`создатель не может выйти из клана.`);

	clans[idclan].people -= 1;
	message.user.clanid = false;
	delete clans[idclan].users[message.user.uid [0]];
	let user = users.find(x=> x.uid === clans[idclan].owner.uid);
	if(!user.mts2){
	vk.api.messages.send({ user_id: user.id, message: `❌ Игрок [id${message.user.id}|${message.user.tag}] покинул клан «${clans[idclan].name}»

▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`});
	}
    return bot(`вы добровольно покинули клан ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
});

bear.hear(/^(?:коткрыть|клан открыть)/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
if(clans[clanid].users[message.user.uid [0]].level < 2) return bot(`вы не создатель/администратор клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
if(clans[clanid].open == true) return bot(`ваш клан уже открыт, цена за вход: ${utils.sp(clans[clanid].price)}$ 🤑`)
clans[clanid].open = true;
return bot(`вы открыли клан, цена за вход: ${utils.sp(clans[clanid].price)}$ 🤑`);
});

bear.hear(/^(?:кзакрыть|клан закрыть)/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
if(clans[clanid].users[message.user.uid [0]].level < 2) return bot(`вы не создатель/администратор клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
if(clans[clanid].open == false) return bot(`ваш клан уже закрыт ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}

🤑 Открыть: клан открыть`);
clans[clanid].open = false;
return bot(`вы закрыли клан, набор участников больше не производится ❌`);
});

bear.hear(/^(?:кцена|клан цена)\s(.*)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = Math.floor(Number(message.args[1]));
if(!Number(message.args[1])) return bot(`цена за вход: ${utils.sp(clans[clanid].price)}$ ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}

?? Установить новую цену: клан цена [цена]`);
if(message.args[1] <= 0) return bot(`цена за вход: ${utils.sp(clans[clanid].price)}$ ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}

💸 Установить новую цену: клан цена [цена]`);
	if(clans[clanid].users[message.user.uid [0]].level < 2) return bot(`вы не создатель/администратор клана. ${errors}`);
    if(message.args[1] < 100) return bot(`цена для входа в клан не должна быть меньше 100$`);
    if(message.args[1] > 100000000000000) return bot(`цена для входа в клан не должна быть больше 100.000.000.000.000$`);
    clans[clanid].price = Number(message.args[1]);
    return bot(`вы установили новую цену за вход в клан: ${utils.sp(message.args[1])}$ 🤑`);
});

bear.hear(/^(?:вступить|клан вступить|войти|клан войти|квступить)\s([0-9]+)$/i, async (message, bot) => {
let idclan = message.args[1];
let clanid = message.user.clanid;
	if(!clans[idclan]) return bot(`такого клана не существует ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clanid == idclan) return bot(`вы состоите в этом клане ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
	if(clans[clanid]) return bot(`вы состоите в другом клане ${utils.pick([`😳`,`😒`,`👔`,`??`,`🤔`])}`);
	if(clans[idclan].people >= 50) return bot(`в данном клане максимальное количество участников ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[idclan].open == false) return bot(`данный клан закрыт, в него нельзя войти ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(message.user.balance < clans[idclan].price) return bot(`вход в данный клан стоит ${utils.sp(clans[idclan].price)}$ ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`, { attachment: 'market-187845340_3242522' });
		message.user.balance -= Number(clans[idclan].price);
		message.user.clanid = Number(message.args[1]);
		if(!clans[idclan].users[message.user]){
			clans[idclan].users[message.user.uid [0]] = {
			level: 0,
			names: message.user.tag,
			vlozhil: 0,
			don: 0,
			volos: false,
			idd: message.user.id,
			uidd: message.user.uid [0]
			}
		}
		clans[idclan].people += 1;
		clans[idclan].balance += clans[idclan].price;
let user = users.find(x=> x.uid === clans[idclan].owner.uid);
if(!user.mts2){
	vk.api.messages.send({ user_id: user.id, message: `🗣 Игрок [id${message.user.id}|${message.user.tag}] вступил в клан «${clans[idclan].name}»

▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`});
}
	return bot(`вы вошли в клан «${clans[idclan].name}» за ${utils.sp(clans[idclan].price)}$ ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}\n\n📚 Команды клана: кпомощь`);
});

bear.hear(/^(?:кназвание|клан название)\s([^]+)$/i, async (message, bot) => {

 	if(message.user.clanid == false) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
 	let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние)/
    var sss = zapret.test(zaprets1)

if(zapret.test(zaprets1) == true || message.args[1].toLowerCase() === ''){
var check = true;
return bot(`вы используете запрещенные слова/символы.\n\n😉 Придумайте другое название для клана.`);
}
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)

	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return bot(`подозрительная ссылка 🆘`);
}
		let user = message.user;
		let clanid = user.clanid;
		if(clans[clanid].users[message.user.uid [0]].level < 1) return bot(`вы не модератор клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`??`])}`);
		if(clans[clanid].balance < 10000000000) return bot(`на балансе клана меньше 10.000.000.000$ ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}
🛒 Изменение названия клану стоит 10.000.000.000$`);
		clans[clanid].balance -= 10000000000;
		clans[clanid].name = message.args[1];
		return bot(`вы успешно изменили название клану за 10.000.000.000$! ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
});

bear.hear(/^(?:топ кланы|топ кланов|клановый топ|клан топ|топ клан|⚔ Топ кланы|, ⚔ Топ кланы)$/i, async (message, bot) => {
if (clans.length < 10) return;
let text = ``;
var top = [];

clans.map(x => {
top.push({
	id: x,
	people: x.people,
	retin: x.retin,
	name: x.name });
});

	top.sort((a, b) => {
	return b.retin - a.retin;
	});

		for (let i = 0; i < 10; i++){


			const pizda = top[i];

			text += `${i === 9 ? `\n&#128287;` : `\n${i + 1}&#8419;`} [${pizda.people}/50] [id${pizda.owner.id}|${pizda.name}] — ${utils.sp(pizda.retin)} 👑`;

	}

return bot(`лучшие кланы:

${text}

💡 » Рейтинг клана складывается из побед и поражений.`, {attachment: ''});
});


bear.hear(/^(?:клан состав|клан участники|клан у|состав клан|клановый состав|состав клана)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`👔`,`😒`,`😟`,`🙄`,`🤔`])}`);
let text = ``;

 	for(let id in clans[clanid].users) {
		let people = clans[clanid].users[id];
		if(clans[clanid].users[id].level == 3) text += `[🔥] >> [id${clans[clanid].users[id].idd}|${clans[clanid].users[id].names}] | Вложено: ${utils.sp(clans[clanid].users[id].vlozhil)}$ | Создатель.\n\n`;
		if(clans[clanid].users[id].level == 2) text += `[ID: ${clans[clanid].users[id].uidd}] >> [id${clans[clanid].users[id].idd}|${clans[clanid].users[id].names}] | Вложено: ${utils.sp(clans[clanid].users[id].vlozhil)}$ | Администратор.\n\n`;
		if(clans[clanid].users[id].level == 1) text += `[ID: ${clans[clanid].users[id].uidd}] >> [id${clans[clanid].users[id].idd}|${clans[clanid].users[id].names}] | Вложено: ${utils.sp(clans[clanid].users[id].vlozhil)}$ | Модератор.\n\n`;
		if(clans[clanid].users[id].level == 0) text += `[ID: ${clans[clanid].users[id].uidd}] >> [id${clans[clanid].users[id].idd}|${clans[clanid].users[id].names}] | Вложено: ${utils.sp(clans[clanid].users[id].vlozhil)}$ | Участник.\n\n`;
	}
    return bot(`участники клана «${clans[clanid].name}» [${clans[clanid].people}/50]:

${text}`);
});

bear.hear(/^(?:клан|⚔ Клан|⚔Клан|мой клан)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clanid) return bot(`вы не состоите в клане.
Введите «клан помощь» для просмотра информации 🔔`);

let shit = ``;
let zel = ``;
let minus = ``;
if(clans[clanid].abramovich > getUnix()) shit = `\n🏹 Действие щита: ${unixStampLeft(clans[clanid].abramovich - Date.now())}`;
if(clans[clanid].aue > getUnix()) zel = `\n🍹 Зелье: ${unixStampLeft(clans[clanid].aue - Date.now())}`;
if(clans[clanid].retin < 0) minus = `-`;
var armich = Math.floor(clans[clanid].balance / 30000000);

if (!armich) armich = 0;

return bot(`просмотр клана «${clans[clanid].name}»:

🆔 ID клана: ${clans[clanid].number}
💰 Казна: ${utils.sp(clans[clanid].balance)}$ (${utils.sp (armich)} шт армии)
👑 Рейтинг клана: ${minus}${utils.sp(clans[clanid].retin)}

👊 Соотношение побед и поражений: ${utils.sp(clans[clanid].good)}/${utils.sp(clans[clanid].fuflo)}

${clans[clanid].open == true ? '🔓' : '🔒'} Тип клана: ${clans[clanid].open == true ? 'открытый' : 'закрытый'} (${utils.sp(clans[clanid].price)}$ за вход)

⚔ Армия: ${utils.sp(clans[clanid].zashita)}${shit}
👥 ${clans[clanid].people} участников в клане из 50шт.`);
});

bear.hear(/^(?:ккик|изгнать|исключить|клан кик)\s([0-9]+)$/i, async (message, bot) => {
let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].users[message.user.uid [0]].level < 1) return bot(`вы не создатель/администратор/модератор клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	let user = users.find(x => x.uid.find (q => q == message.args [1]));
	if(clans[clanid].users[message.user.uid [0]].level == 3){
		if(!user) return bot(`такого игрока не существует ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
		if(clans[clanid].users[user.uid].level == 3) return bot(`нельзя изгнать создателя из клана ${utils.pick([`👔`,`😒`,`😟`,`🙄`,`🤔`])}
❌ Удаление клана: клан удалить`);
		if(user.uid == message.user.uid [0]) return bot(`вы не можете кикнуть себя ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

		vk.api.messages.send({ user_id: user.id, message:
		`${user.tag}, вас изгнали из клана «${clans[message.user.clanid].name}» ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`});

		delete clans[clanid].users[user.uid];
		clans[clanid].people -= 1;
		user.clanid = false;

		return bot(`вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([`😳`,`😒`,`😟`,`??`,`🤔`])}`);
	}

	if(clans[clanid].users[message.user.uid [0]].level == 2){
	if(clans[clanid].users[user.uid].level == 2) return bot(`нельзя изгнать админа из клана ${utils.pick([`😳`,`😒`,`😟`,`👔`,`🤔`])}`);
	if(clans[clanid].users[user.uid].level == 3) return bot(`нельзя изгнать создателя из клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

		if(!user) return bot(`такого игрока не существует ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`👔`])}`);
		if(user.uid == message.user.uid [0]) return bot(`вы не можете кикнуть себя ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

		vk.api.messages.send({ user_id: user.id, message:
		`${user.tag}, вас изгнали из клана «${clans[message.user.clanid].name}» ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`});

		delete clans[clanid].users[user.uid];
		clans[clanid].people -= 1;
		user.clanid = false;

		return bot(`вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	}

	if(clans[clanid].users[message.user.uid [0]].level == 1){
	if(clans[clanid].users[user.uid].level == 1) return bot(`нельзя изгнать модератора из клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].users[user.uid].level == 2) return bot(`нельзя изгнать админа из клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].users[user.uid].level == 3) return bot(`нельзя изгнать создателя из клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

		if(!user) return bot(`такого игрока не существует ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
		if(user.uid == message.user.uid [0]) return bot(`вы не можете кикнуть себя ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

		vk.api.messages.send({ user_id: user.id, message:
		`${user.tag}, вас изгнали из клана «${clans[message.user.clanid].name}» ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`});

		delete clans[clanid].users[user.uid];
		clans[clanid].people -= 1;
		user.clanid = false;

		return bot(`вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	}
});

bear.hear(/^(?:клан магазин|магазин клана|клановый магазин)$/i, async (message, bot) => {

return bot(`магазин:

1⃣ Армия (100 единиц) — 3.000.000.000$
🛒 Купить: армия [кол-во]

2⃣ Щит на сутки — 150.000.000.000$
🛒 Купить: купить щит

3⃣ Зелье силы (10 мин) — 10.000.000.000$
🛒 Купить: купить зелье

❌ Щит пропадает при атаке на любой клан.`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "🛡 Щит"
				},
			"color": "secondary"
			},
			{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "🍹 Зелье"
				},
				"color": "positive"

				}],
			]
		})
		});

});
bear.hear(/^(?:купить щит|🛡 Щит)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].balance < 150000000000) return bot(`на балансе вашего клана меньше 150.000.000.000$`);
	let id = message.user.uid [0];
	if(clans[clanid].users[id].level < 2) return bot(`вы не создатель/администратор клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].abramovich > getUnix()) return bot(`у вашего клана уже имеется щит, он закончится через ${unixStampLeft(clans[clanid].abramovich - Date.now())} ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

	clans[clanid].balance -= 150000000000;
	clans[clanid].abramovich = getUnix() + 86400000;
	return bot(`вы купили щит на 24 часа для клана ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}

❌ Щит пропадает при любой атаке с вашей стороны.`);
});

bear.hear(/^(?:клан помощь|клан помошь|клан помош|«клан помощь»|клан помощ|⚔️ Клан помощь)$/i, async (message, bot) => {
	return bot(`команды для клана:

🏹 Мой клан:
  🤡 Клан
⠀⠀🔥 Клан
⠀⠀💰 Казна
⠀⠀⚔ Атаковать
⠀⠀💸 Клан цена
⠀⠀✒ Клан название
⠀⠀🛍 Клан магазин
⠀⠀🔓 Клан открыть/Клан закрыть
⠀⠀❌ Клан удалить

⚔ Топ клан
📚 Кпомощь
🏹 Клан создать
?? Оповещения [вкл/выкл]

👤 Участники:
⠀⠀?? Клан состав
⠀⠀🚪 Клан вступить
⠀⠀🗣 Пригласить
⠀⠀⏫ Повысить/Понизить
⠀⠀🏃‍♂ Клан кик
⠀⠀❌ Покинуть

🅰 Админ в клане может приглашать и исключать игроков, изменять клан, проводить атаки.

📜 Модератор в клане может изменять название, исключать игроков.`);
});

bear.hear(/^(?:кпомощь|кпомошь|кпомош|помощь клан|команды клана|клан команды|💡 Помощь)/i, async (message, bot) => {
 	let clanid = message.user.clanid;
 	if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
 	let id = message.user.uid [0];
if(clans[clanid].users[id].level < 1){
	return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
⚔ Топ клан — топ кланов

❌ Покинуть — выход из клана`);
}

if(clans[clanid].users[id].level == 1){
	return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
✒ Клан название — название клана
🏃‍♂ Клан кик — изгнать соклана
⚔ Топ клан — топ кланов

❌ Покинуть — выход из клана`);
}

if(clans[clanid].users[id].level == 2){
	return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
✒ Клан название — название клана
🏃‍♂ Клан кик — изгнать соклана
⏫ Повысить/Понизить
🔓 Клан открыть/Клан закрыть
🛍 Клан магазин
🗣 Пригласить — пригласить игрока
🤑 Клан цена — цена за вход
??🏻 Атаковать — война
⚔ Топ клан — топ кланов

❌ Покинуть — выход из клана`);
}

if(clans[clanid].users[id].level == 3){
	return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
✒ Клан название — название клана
🏃‍♂ Клан кик — изгнать соклана
⏫ Повысить/Понизить
🔓 Клан открыть/Клан закрыть
🛍 Клан магазин
🗣 Пригласить — пригласить игрока
🤑 Клан цена — цена за вход
💪🏻 Атаковать — война
⚔ Топ клан — топ кланов

❌ Удалить клан — удаление клана`);
}
});

bear.hear(/^(?:кбанк|кбаланс|казна|клан казна|кказна|баланс клана|клан положить|кположить)$/i, async (message, bot) => {
 	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}

💸 Пополнить: казна [сумма]`);
});

bear.hear(/^(?:кположить|казна|клан казна|казна клан|клан положить|клан банк|банк клан|клан пополнить)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
	if(!Number(message.args[1])) return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}

💸 Пополнить: казна [сумма]`);
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] > message.user.balance) return bot(`вклад не может превышать ваш баланс ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	if(message.args[1] <= 0) return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}

💸 Пополнить: казна [сумма]`);

	let id = message.user.uid [0];
	message.user.balance -= message.args[1];
	clans[clanid].balance += message.args[1];
	clans[clanid].users[id].vlozhil += message.args[1];
	return bot(`вы успешно положили ${utils.sp(message.args[1])}$ в банк клана ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
});

bear.hear(/^(?:клан удалить|кудалить)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].users[message.user.uid [0]].level < 3) return bot(`вы не создатель клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].people > 1) return bot(`в клане имеются люди, сначала исключите их всех ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[clanid].topsk < getUnix()){
		clans[clanid].topsk = getUnix() + 600000;
		return bot(`вы уверены в удалении клана? 🤔

❌ Введите для удаления: клан удалить`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "клан удалить"
		},
			"color": "negative"
		}]
		]
			})
		});
	}
	delete clans[clanid];
	message.user.clanid = false;
	return bot(`вы удалили свой клан ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
});

bear.hear(/^(?:армия|армии)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: армия [кол-во]
🛒 Магазин: клан магазин`);
});

bear.hear(/^(?:армия|армии|клан армия|купить армию|армию|единица армии)\s(.*)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = Math.floor(Number(message.args[1]));
	let id = message.user.uid [0];
	let pay = 30000000;
	if(clans[clanid].users[id].level < 2) return bot(`вы не создатель/администратор клана ${utils.pick([`😳`,`😒`,`😟`,`??`,`🤔`])}`);
	if(clans[clanid].balance < 3000000000) return bot(`на балансе вашего клана меньше 3.000.000.000$ ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(message.args[1] < 100) return bot(`покупка армии идёт от 100 единиц! ${utils.pick([`??`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}
🛍 Пример: армия 100`);
	if(!Number(message.args[1])) return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: армия [кол-во]
🛒 Магазин: клан магазин`);
	if(message.args[1] <= 0) return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: армия [кол-во]
🛒 Магазин: клан магазин`);

	if((message.args[1] * pay) > clans[clanid].balance){
	var armich = Math.floor(clans[clanid].balance / 30000000);
return bot(`баланса вашего клана хватает на покупку ${utils.sp(armich)} единиц армии ⚔`);
	}else{
	var stick = utils.pick([5227, 15161]);
	clans[clanid].balance -= (message.args[1] * pay);
	clans[clanid].zashita += message.args[1];

bot(`вы купили ${utils.sp(message.args[1])} единиц армии за ${utils.sp(message.args[1] * pay)}$ ⚔

💰 Баланс клана: ${utils.sp(clans[clanid].balance)}$`);
if(stick == 5227){
	message.sendSticker(5227);
}
if(stick == 15161){
	message.sendSticker(15161);
}
	}
});

bear.hear(/^(?:пригласить|кпригласить|клан пригласить)\s([0-9]+)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(message.user.clanid == false) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`??`])}`);
if(clans[clanid].users[message.user.uid [0]].level < 2) return bot(`в клан могут приглашать только создатель и администратор ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
if(message.user.lol > getUnix()) return bot(`вы сможете пригласить еще одного человека в клан через ${unixStampLeft(message.user.lol - Date.now())} ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);

	const user = await users.find(x => x.uid.find (q => q == message.args [1]));
	if(!user) return bot(`данного игрока не существует.`);
	let clanidi = user.clanid;
	if(clans[clanidi]) return bot(`данный игрок уже состоит в другом клане.`);
	await bot(`вы успешно пригласили игрока [id${user.id}|${user.tag}] в клан! ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
	getUnix() + 3600000
	message.user.lol = getUnix() + 3600000;
	vk.api.messages.send({ user_id: user.id, message: `✉ Игрок [id${message.user.id}|${message.user.tag}] пригласил Вас в клан «${clans[message.user.clanid].name}»! ${utils.pick([`🤤`,`☺`,`??`,`😁`,`😏`,`🤑`])}
Для вступления введите «Вступить ${message.user.clanid}» (без кавычек)` });
});
bear.hear(/^(?:повысить|клан повысить|кповысить)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
	return bot(`использование: повысить [ID игрока]

🅰 Админ в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
📜 Модератор в клане может изменять название, исключать игроков.`);
});

bear.hear(/^(?:повысить|клан повысить|кповысить)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.clanid == false) return bot(`у вас нет клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	const user = await users.find(x => x.uid.find (q => q == message.args [1]));
	if(!user) return bot(`такого игрока не существует ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(user.uid === message.user.uid [0]) return bot(`неверный ID ${utils.pick([`😳`,`😒`,`😟`,`👔`,`🤔`])}`);

 	let clanid = user.clanid;
 	let clanidi = message.user.clanid;
 	if(clans[clanidi].users[message.user.uid [0]].level < 2) return bot(`вы не создатель/администратор клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`??`])}`);
	if(clanid !== clanidi) return bot(`этот человек не состоит в клане ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`);
 	if(clans[clanid].users[user.uid].level == 2) return bot(`данный игрок имеет максимальный статус в клане.`);
	if(clans[clanid].users[user.uid].level == 3) return bot(`данный игрок является создателем клана.`);

	if(clans[clanid].users[user.uid].level < 1){
		clans[clanid].users[user.uid].level = 1;
await bot(`игрок [id${user.id}|${user.tag}] был назначен модератором в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`);
vk.api.messages.send({ user_id: user.id, message: `▶ Вас назначили модератором в клане «${clans[message.user.clanid].name}» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`});
	}else{
		if(clans[clanidi].users[message.user.uid [0]].level < 3) return bot(`до уровня "админ" может повысить только создатель клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`);
		clans[clanid].users[user.uid].level = 2;
await bot(`игрок [id${user.id}|${user.tag}] был назначен администратором в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `👔`, `🤑`])}`);
vk.api.messages.send({ user_id: user.id, message: `▶ Вас назначили администратором в клане «${clans[message.user.clanid].name}» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`});
	}
});

bear.hear(/^(?:понизить|клан понизить|кпонизить)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clanid) return bot(`у вас нет клана, вступите или создайте клан ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
	return bot(`использование: понизить [ID игрока]

🅰 Админ в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
📜 Модератор в клане может изменять название, исключать игроков.`);
});

bear.hear(/^(?:понизить|клан понизить|кпонизить)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.clanid == false) return bot(`у вас нет клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	const user = await users.find(x => x.uid.find (q => q == message.args [1]));
	if(!user) return bot(`такого игрока не существует ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(user.uid === message.user.uid [0]) return bot(`неверный ID ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);

 	let clanid = user.clanid;
 	let clanidi = message.user.clanid;
	if(clans[clanidi].users[message.user.uid [0]].level < 2) return bot(`вы не создатель/администратор клана ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clanid !== clanidi) return bot(`этот человек не состоит в клане ${utils.pick([`😳`, `😒`, `👔`, `👔`, `🤔`])}`);
	if(clans[clanid].users[user.uid].level == 3) return bot(`данный игрок является создателем в клане.`);
	if(clans[clanid].users[user.uid].level < 1) return bot(`данный игрок является участником в клане.`);

	if(clans[clanid].users[user.uid].level == 1){
		clans[clanid].users[user.uid].level = 0;
await bot(`игрок [id${user.id}|${user.tag}] был понижен до прав участника в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`);
vk.api.messages.send({ user_id: user.id, message: `▶ Вас понизили до прав участника в клане «${clans[message.user.clanid].name}» ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`});
	}else{
	if(clans[clanidi].users[message.user.uid [0]].level < 3) return bot(`до уровня "модератор" может понизить только создатель клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`);
		clans[clanid].users[user.uid].level = 1;
await bot(`игрок [id${user.id}|${user.tag}] был понижен до прав модератора в клане ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `??`, `🤑`])}`);
vk.api.messages.send({ user_id: user.id, message: `▶ Вас понизили до прав модератора в клане «${clans[message.user.clanid].name}» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`});
		}
});

bear.hear(/^(?:рандом атака|война|⚔ Атаковать|атака рандом|атаковать|клан атака|атака клан)$/i, async (message, bot) => {
var clanid = message.user.clanid;
if(!clanid) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"5\"}",
				"label": "клан помощь"
		},
			"color": "positive"
		}]
		]
			})
		});

if(clans[clanid].users[message.user.uid [0]].level < 2) return bot(`вы не создатель/администратор клана ❌`);
if(clans[clanid].balance < 10000000000) return bot(`на балансе вашего клана меньше 10.000.000.000$ ❌`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"5\"}",
				"label": "Казна 10ккк"
		},
			"color": "positive"
		}]
		]
			})
		});

if(clans[clanid].zashita < 100) return bot(`для проведения атак требуется минимум 100 армии в вашем клане ❌`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"5\"}",
				"label": "Армия 100"
		},
			"color": "positive"
		}]
		]
			})
		});

if(clans[clanid].exs > getUnix()) return bot(`ваша армия слишком устала 😩

⌚ Новую атаку можно начать через ${unixStampLefta(clans[clanid].exs - Date.now())}`);

const randclan = utils.random(1, botinfo.number);
if(!clans[randclan]) return bot(`подходящего клана не найдено, попробуйте снова ✅`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"5\"}",
				"label": "⚔ Атаковать"
		},
			"color": "negative"
		}]
		]
			})
		});

if(clans[randclan].abramovich > getUnix()) return bot(`подходящего клана не найдено, попробуйте снова ✅`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"5\"}",
				"label": "⚔ Атаковать"
		},
			"color": "negative"
		}]
		]
			})
		});

		let user = users.find(x=> x.uid === clans[randclan].owner.uid);
		let text = ``;
		if(clans[clanid].abramovich > getUnix()) text = `\n\n❌ С вашего клана снят щит.`;
		if(clans[randclan].balance < 10000000000){
			var klmoney = utils.random(100000000, 10000000000);
			if(clans[clanid].zashita == clans[randclan].zashita){
				return bot(`подходящего клана не найдено, попробуйте снова ✅`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"5\"}",
				"label": "⚔ Атаковать"
		},
			"color": "negative"
		}]
		]
			})
		});
			}

	global.setTimeout(async () => {
	message.send(`⚔ [id${message.user.id}|${message.user.tag}], армия отдохнула и готова к бою!`,
		{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{\"button\": \"67\"}",
"label": "⚔ Атаковать"
},
"color": "negative"
		}]
]
})
});
	}, 300001);

			if(clans[clanid].zashita < clans[randclan].zashita){

			clans[clanid].abramovich = 5;
			clans[clanid].exs = getUnix() + 300000;

			clans[randclan].good += 1;
			clans[randclan].retin += 1;
			clans[randclan].balance += klmoney;

			clans[clanid].retin -= 1;
			clans[clanid].fuflo += 1;

			resul = Math.floor(clans[clanid].zashita * 0.10);
			clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.90);

			resulk = Math.floor(resul * 0.5);
			clans[randclan].zashita -= resulk;
			var stick = utils.pick([3134, 10000]);

			bot(`ваш клан потерпел поражение перед «${clans[randclan].name}», вы потеряли ${utils.sp(resul)} армии ❌${text}`);
			if(stick == 3134){
			message.sendSticker(3134);
			}
			if(stick == 10000){
			message.sendSticker(10000);
			}
			if(!user.mts2){
			vk.api.messages.send({ user_id: user.id, message: `⚔ Ваш клан одержал победу перед «${clans[clanid].name}», вы потеряли ${utils.sp(resulk)} армии, украдено: ${utils.sp(klmoney)}$ ✅

🔔 Отписаться от оповещений: «оповещения выкл»`});
}
			}else{

			clans[clanid].abramovich = 5;
			clans[clanid].exs = getUnix() + 300000;

			clans[clanid].good += 1;
			clans[clanid].retin += 1;
			clans[clanid].balance += klmoney;

			clans[randclan].retin -= 1;
			clans[randclan].fuflo += 1;

			resulkk = Math.floor(clans[randclan].zashita * 0.10);
			clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.90);

			resulkkk = Math.floor(resulkk * 0.5);
			clans[clanid].zashita -= resulkkk;
			var stick = utils.pick([712, 5949]);

			bot(`ваш клан одержал победу перед «${clans[randclan].name}», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(klmoney)}$ ✅${text}`);
			if(stick == 712){
			message.sendSticker(712);
			}
			if(stick == 5949){
			message.sendSticker(5949);
			}
			if(!user.mts2){
			vk.api.messages.send({ user_id: user.id, message: `⚔ Ваш клан одержал поражение перед «${clans[clanid].name}», вы потеряли ${utils.sp(resulkk)} армии ❌

🔔 Отписаться от оповещений: «оповещения выкл»`});
}
			}

		}else{
			if(clans[clanid].zashita == clans[randclan].zashita){
				return bot(`подходящего клана не найдено, попробуйте снова ✅`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"5\"}",
				"label": "⚔ Атаковать"
		},
			"color": "negative"
		}]
		]
			})
		});
			}

	global.setTimeout(async () => {
	message.send(`⚔ [id${message.user.id}|${message.user.tag}], армия отдохнула и готова к бою!`,
		{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{\"button\": \"67\"}",
"label": "⚔ Атаковать"
},
"color": "negative"
		}]
]
})
});
	}, 300001);

			if(clans[clanid].zashita < clans[randclan].zashita){
			var kpmoney = utils.random(1000000000, clans[clanid].balance);

			clans[clanid].abramovich = 5;
			clans[clanid].exs = getUnix() + 300000;

			clans[randclan].good += 1;
			clans[randclan].retin += 1;
			clans[randclan].balance += kpmoney;

			clans[clanid].balance -= kpmoney;
			clans[clanid].retin -= 1;
			clans[clanid].fuflo += 1;

			resul1 = Math.floor(clans[clanid].zashita * 0.10);
			clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.90);

			resulk1 = Math.floor(resul1 * 0.5);
			clans[randclan].zashita -= resulk1;
			var stick1 = utils.pick([3134, 10000]);

			bot(`ваш клан потерпел поражение перед «${clans[randclan].name}», вы потеряли ${utils.sp(resul1)} армии и ${utils.sp(kpmoney)}$ ❌${text}`);
			if(stick1 == 3134){
			message.sendSticker(3134);
			}
			if(stick1 == 10000){
			message.sendSticker(10000);
			}
			if(!user.mts2){
			vk.api.messages.send({ user_id: user.id, message: `⚔ Ваш клан одержал победу перед «${clans[clanid].name}», вы потеряли ${utils.sp(resulk1)} армии, украдено: ${utils.sp(kpmoney)}$ ✅

🔔 Отписаться от оповещений: «оповещения выкл»`});
}
			}else{
			var kpmoney1 = utils.random(100000000, clans[randclan].balance);
			clans[clanid].abramovich = 5;
			clans[clanid].exs = getUnix() + 300000;

			clans[clanid].good += 1;
			clans[clanid].retin += 1;
			clans[clanid].balance += kpmoney1;

			clans[randclan].balance -= kpmoney1;
			clans[randclan].retin -= 1;
			clans[randclan].fuflo += 1;

			resulkk = Math.floor(clans[randclan].zashita * 0.10);
			clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.90);

			resulkkk = Math.floor(resulkk * 0.5);
			clans[clanid].zashita -= resulkkk;
			var stick = utils.pick([712, 5949]);

			bot(`ваш клан одержал победу перед «${clans[randclan].name}», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(kpmoney1)}$ ✅${text}`);
			if(stick == 712){
			message.sendSticker(712);
			}
			if(stick == 5949){
			message.sendSticker(5949);
			}
			if(!user.mts2){
			vk.api.messages.send({ user_id: user.id, message: `⚔ Ваш клан одержал поражение перед «${clans[clanid].name}», вы потеряли ${utils.sp(resulkk)} армии и ${utils.sp(kpmoney1)}$ ❌

🔔 Отписаться от оповещений: «оповещения выкл»`});
}
		}
	}

});
bear.hear(/^(?:вступить|клан вступить|войти|клан войти|квступить)\s([0-9]+)$/i, async (message, bot) => {
let idclan = message.args[1];
let clanid = message.user.clanid;
	if(!clans[idclan]) return bot(`такого клана не существует ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clanid == idclan) return bot(`вы состоите в этом клане ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}`);
	if(clans[clanid]) return bot(`вы состоите в другом клане ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
	if(clans[idclan].people >= 50) return bot(`в данном клане максимальное количество участников ${utils.pick([`😳`,`😒`,`😟`,`🙄`,`🤔`])}`);
		message.user.balance -= Number(clans[idclan].price);
		message.user.clanid = Number(message.args[1]);
		if(!clans[idclan].users[message.user]){
			clans[idclan].users[message.user.uid [0]] = {
			level: 0,
			names: message.user.tag,
			vlozhil: 0,
			don: 0,
			volos: false,
			idd: message.user.id,
			uidd: message.user.uid [0]
			}
		}
		clans[idclan].people += 1;
		clans[idclan].balance += clans[idclan].price;
let user = users.find(x=> x.uid === clans[idclan].owner.uid);
if(!user.mts2){
	vk.api.messages.send({ user_id: user.id, message: `🗣 Игрок [id${message.user.id}|${message.user.tag}] вступил в клан «${clans[idclan].name}»

▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`});
}
	return bot(`вы вошли в клан «${clans[idclan].name}» за ${utils.sp(clans[idclan].price)}$ ${utils.pick([`🤤`,`☺`,`🙂`,`😁`,`😏`,`🤑`])}\n\n📚 Команды клана: кпомощь`);
});

bear.hear(/^(?:начальный набор|нч|нб|нбчек)$/i, async (message, bot) => {
if (ctx.nch) return;
ctx.balance += 10000000000;
ctx.business = 1;
ctx.biz = 2000000;
ctx.misc.farm = 1;
ctx.farms = 1;
ctx.nch = true;
return bot(`вам было выдано:
🔋 Ферма «${farms[0].name}» (x1).
💼 Бизнес «${businesses[0].name}».
🤑 Быстрая прибыль. (2.000.000$ на счет бизнеса).
🌌 На баланс зачислено 10.000.000.000$.
`);
});

global.setTimeout(() => {
users.map(x=>{
lg2.push({
vous: []
});
});
}, 5);

bear.hear(/^(?:логиинфо)\s(.*)$/i, function (message, bot) {
if (ctx.settings.adm < 4) return;

if (!logger_vk [message.args [1]]) return bot (`у данного игрока не найдено последних логов! ❌`)

var logs = logger_vk [message.args [1]];

if (logs.length > 10) logs = logs.slice (0,10)

const user = users.find (x => x.uid.find (q => q == message.args [1]));

if (user ["id"] == own) return bot (`ваш аккаунт заблокирован. ❌`)

return bot (`последние логи игрока «@id${user.id} (${user.tag})»:

${logs.map (x => `🗯 ${x.message} (${x.time})`).join ("\n")}`)
 });

 bear.hear(/^(?:трейлеры|трейлера|🚐 Трейлеры)$/i, async (message, bot) => {
const tr = travel.map(x => `🚐 ${x.id}. ${x.name} — ${utils.sp(x.cost)}$`).join("\n");
return bot(`трейлеры:\n` + tr + "\n\n📆 Для покупки пропишите «Трейлер [ID]»");
});

bear.hear (/^(?:аренда трейлер)$/i, async (message, bot) => {
	if (ctx.travel == 0) return bot (`у вас нету личного трейлера! ❓`)
	
	if (ctx.arenda_trtime > Date.now ()) return bot (`подождите еще ${left (ctx.arenda_trtime - Date.now ())} перед следующей арендой. ⏱️`)
	
	ctx.arenda_tr += 1;
	ctx.arenda_trtime = Date.now () + (60000*60);
	ctx.balance += 7500000000;
	
	return bot (`вы получили ${utils.sp (7500000000)}$ за аренду вашего трейлера! 💸`)
})

bear.hear(/^(?:трейлер)\s([0-9]+)$/i, function (message, bot) {
const tr = travel[message.args[1] - 1];
if (!tr) return bot(`такого трейлера нету! 🚫`);
if (ctx.balance < tr.cost) return bot(`недостаточно денег! 🤔`);
ctx.balance -= Number(tr.cost);

ctx.travel = message.args[1];

ctx.traveltime = 0;
ctx.travelvalue = 0;

return bot(`вы успешно купили трейлер «${tr.name}» за ${utils.sp (tr.cost)}$! 💸`, {
	keyboard: Keyboard.keyboard ([
	gen_key ("🚐 Трейлер", "трейлер")
	]).inline ()
});
});

bear.hear(/^(?:трейлер)$/i, function (message, bot) {
const tr = travel.find(x => x.id === Number(ctx.travel));
if (!tr) return bot (`у вас нету личного трейлера! 🚐`)

return bot(`ваш трейлер «${tr.name}»:

💸 Трейлер накопил: ${utils.sp(ctx.travelvalue)}$.
⏱️ Трейлер уже у вас ${left(ctx.traveltime)}.

🔍 Аренд трейлера: ${ctx.arenda_tr} шт.
`);
});

global.setInterval(async () => {
await users.forEach(e => {
if (e.travel === undefined || e.traveltime === undefined || e.travelvalue === undefined) {
e.travel = 0;
e.traveltime = 0;
e.travelvalue = 0
}
});
}, 50);

global.setInterval(async () => {
await users.forEach(e => {
if (e.travel > 0) {
e.traveltime += 1000;
}
});
}, 1000);

global.setInterval(async () => {
await users.forEach(e => {
if (e.travel > 0) {
e.travelvalue += 1000000;
}
});
}, 300000);

global.setInterval(async () => {
await users.map(x => {
if (x.launc === undefined || x.nitro === undefined || x.sport === undefined) {
x.launc = false;
x.nitro = false;
x.sport = false
}
});
}, 1000);

bear.hear(/^(?:топ сообщений|🗒 » Топ сообщений)$/i, async (message, bot) => {
 let top = [];

users.filter(x => x.settings.adm === 0).map(x => {
  top.push({ msg: x.msg, tag: x.tag, id: x.id, mention: x.mention });
 });

 top.sort((a, b) => {
  return b.msg - a.msg;
 });

 let text = ``;
 const find = () => {
  let pos = 1000;

  for (let i = 0; i < top.length; i++)
  {
   if(top[i].id === message.senderId) return pos = i;
  }

  return pos;
 }

 for (let i = 0; i < 10; i++)
 {
  if(!top[i]) return;
  const user = top[i];

  text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.sp(user.msg)} сообщений.
  `;
 }

 return bot(`топ игроков:
  ${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(ctx.msg)} сообщений.`);
});

bear.hear(/^(?:топ эфириумов)$/i, async (message, bot) => {
	let top = [];
   
   users.filter(x => x.settings.adm === 0).map(x => {
	 top.push({ eth: x.eth, tag: x.tag, id: x.id, mention: x.mention });
	});
   
	top.sort((a, b) => {
	 return b.eth - a.eth;
	});
   
	let text = ``;
	const find = () => {
	 let pos = 1000;
   
	 for (let i = 0; i < top.length; i++)
	 {
	  if(top[i].id === message.senderId) return pos = i;
	 }
   
	 return pos;
	}
   
	for (let i = 0; i < 10; i++)
	{
	 if(!top[i]) return;
	 const user = top[i];
   
	 text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.sp(user.eth)} ETH.
	 `;
	}
   
	return bot(`топ игроков:
	 ${text}
   —————————————————
   ${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(ctx.eth)} ETH.`);
   });
   

bear.hear(/^(?:топ донат)$/i, async (message, bot) => {
 let top = [];

users.filter(x => x.settings.adm === 0).map(x => {
  top.push({ dcoin: x.dcoin, tag: x.tag, id: x.id, mention: x.mention });
 });

 top.sort((a, b) => {
  return b.dcoin - a.dcoin;
 });

 let text = ``;
 const find = () => {
  let pos = 1000;

  for (let i = 0; i < top.length; i++)
  {
   if(top[i].id === message.senderId) return pos = i;
  }

  return pos;
 }

 for (let i = 0; i < 10; i++)
 {
  if(!top[i]) return;
  const user = top[i];

  text += `${i === 9 ? `🔟` : `${i + 1}⃣`} ${ctx.vip === true ? '⭐' : ''} @id${user.id} (${user.tag}) — ${utils.sp(user.dcoin)} доната.
  `;
 }

 return bot(`топ игроков:
  ${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(ctx.dcoin)} доната.`);
});

global.setInterval(() => {
users.filter(x => x.podarok === undefined).map(x => x.podarok = 0);
}, 100);

bear.hear(/^(?:магазин видеокарт)$/i, async (message, bot) => {
await bot(`пополнение магазина - каждый час + 1 видеокарта.

🎮 Видеокарт ETH: ${botinfo.ethfarm} шт.

👉 Что-бы купить пропишите «Купить видеокарту»`);
});

global.setInterval(async () => {
botinfo.ethfarm += 1;
}, 3600000);

global.setInterval(async () => {
await users.forEach(e=>{
if (e.videocart !== 0) {
e.eth += Math.abs(e.videocart*2500);
e.ethsum += Math.abs(e.videocart*2500);
}
});
}, 3600000);

bear.hear(/^(?:купить видеокарту)$/i, async (message, bot) => {
if (botinfo.ethfarm < 1) return bot(`ожидайте завоза новых видеокарт! 👑`);
if (message.user.eth < 100000) return bot(`для покупки вам нужно 100,000 ETH! 👑`);
message.user.videocart += 1;
botinfo.ethfarm -= 1;
message.user.eth -= 100000;
await bot(`вы купили видеокарту ETH (x1)! 👑`);
});

bear.hear(/^(?:ферма эфириумов)$/i, async (message, bot) => {
if (message.user.videocart === 0) return;
await bot(`ваша информация по видеокартам:
👑 — Кол-во: ${message.user.videocart} шт.
🎮 — Фарм в час: ${2500*message.user.videocart} ETH.
🔑 — Всего принесла: ${utils.sp(message.user.ethsum)} ETH.
`);
});
  
vk.updates.on('message_event', async (message) => {
if (message.eventPayload.includes ("bizinfo")) {
	const biz_reg = new RegExp ("bizinfo (.*)")
	
	const match = String (message.eventPayload).match (biz_reg)
	
	if (!match [1]) return vk.api.messages
.send({ peer_id: message.peerId, random_id: 0, message: `✏️ Произошла неизвестная ошибка!` });

    const biz = businesses.find (x => x.id == match [1]);
    
    if (!biz) return vk.api.messages
.send({ peer_id: message.peerId, random_id: 0, message: `✏️ Произошла неизвестная ошибка!` });

    await vk.api.messages.edit({
peer_id: message.peerId, message_id: message.id, conversation_message_id: message.conversationMessageId, message: `📄 Отправляем информацию о бизнесе...` });
    
    return vk.api.messages
.send ({ random_id: 0, peer_id: message.peerId, message: `💼 Информация о бизнесе «${biz.name}»:
     • Цена: ${utils.sp (biz.cost)}$
     • Прибыль: ${utils.sp (biz.earn)}$/час`, 
     attachment: biz.photo [0],
     keyboard: Keyboard.keyboard ([
     gen_key ("💸 Купить", "бизнесы " + biz.id)
    ]).inline ()
});
}

if (message.eventPayload === "test") {
await vk.api.messages.edit({
peer_id: message.peerId, message_id: message.id, conversation_message_id: message.conversationMessageId, message: `АГА, ТЕСТ БЛЯДЬ` });
}

if (message.eventPayload === "aprof") {
	const usssad = await users.find (x=>x.id===message.userId)
	console.log(usssad)
	await vk.api.messages.edit({
	peer_id: message.peerId, message_id: message.id, conversation_message_id: message.conversationMessageId, message: `⚙ Информация о [https://vk.com/id${message.userId}|вашей] привелегии:
	👤 — Звание: «${pref[usssad.settings.adm - 1].name}».
	📝 — Ответов на репорты: ${utils.sp(usssad.settings.answer)} шт.
	👑 — Всего банов: ${utils.sp(usssad.settings.bans)} шт.
	👑 — Всего банов по тайму: ${utils.sp(usssad.settings.banstime)} шт.
	🅰 — Выговоров: ${usssad.settings.vig} / 3 шт.` });
}

if (message.eventPayload === "sostav") {

var admins = "";

await users.forEach (e => {
if (e.settings.adm > 0) {
admins += `💎 [id${e.id}|${e.tag}] — ${e.prefixadm} (${e.settings.adm} уровень администратора).\n`;
}
})

await vk.api.messages.edit({
peer_id: message.peerId, message_id: message.id, conversation_message_id: message.conversationMessageId, message: `👔 Отправляю список администрации.` });
await vk.api.messages
.send({ peer_id: message.peerId, random_id: 0, message: `⛔ Список администрации:
${admins}` });
}
if (message.eventPayload === "bans") {
var banss = String ()

for (i in users) {
if (users[i].ban) banss += `⭐ [id${users[i].id}|${users[i].tag}] (${utils.sp(users[i].balance)}$) — заблокирован навсегда.\n`;
if (users[i].pizdenka > Date.now()) banss +=  `⭐ [id${users[i].id}|${users[i].tag}] (${utils.sp(users[i].balance)}$) — заблокирован на ${left(users[i].pizdenka - Date.now())}.\n`;
}

await vk.api.messages.edit({
peer_id: message.peerId, message_id: message.id, conversation_message_id: message.conversationMessageId, message: `⭐ Отправляю вам список всех забаненых игроков.` });

if (banss == String ()) {
await vk.api.messages
.send({ peer_id: message.peerId, random_id: 0, message: `⚡ Игроков с отметкой «BAN» не найдено!` });
}
else {
await vk.api.messages
.send({ peer_id: message.peerId, random_id: 0, message: `⛔ Список игроков, которые находятся в бане:
${banss}` });
}
}

}); // event message_event

bear.hear(/^(?:лог лайки вкл)\s([0-9]+)$/i, async (message, bot) => {
if (message.senderId !== own) return bot(`ne hocesh sosnut huy?`);
likeslog = message.args[1];
botinfo.likeslog = true;
await bot (`on`);
});

  bear.hear(/^(?:призы рефка)$/i, async (message, bot) => {

  if (message.senderId !== own) return;

  var price = [];


  await users.forEach(async library => {

  if (library.ref >= 5) {

  library.dcoin += 30;

  await price.push({ id: library.id, price: 30, type: "dcoin" });

  }

  if (library.ref >= 10) {

  if (!library.vip) {

  library.vip = true;


  await price.push({ id: library.id, price: "vip", type: null });


  }

  if (library.vip) {

  await price.push({ id: library.id, price: 50, type: "dcoin" });

  }
  }

  });

  await price.map (async x => {
  var text = "";

  if (x.price === 30) { await vk.api.messages.send({ user_id: x.id, random_id: 0,message: `👤 Вам было начисленно 30 донат-монет за приглашение 5 рефералов и более!` }) };
  if (x.price === 50) { await vk.api.messages.send({ user_id: x.id, random_id: 0,message: `👤 Вам было начисленно 50 донат-монет за приглашение 10 рефералов и более! У вас уже есть VIP, поэтому мы выдали вам 50 донат-монет.` }) };
  if (x.price === "vip") { await vk.api.messages.send({ user_id: x.id, random_id: 0,message: `👤 Вам было начисленн VIP-статус за приглашение 10 рефералов и более!` }) };
  });

  return bot(`призы были выданы ${price.length} людям.`);
  });

  bear.hear(/^(?:реши)\s(.*)$/i, async (message, bot) => {
  await bot(getSchool(message.args[1]) === undefined ? '🥺 Не смог решить такой пример!' : getSchool(message.args[1]))
  });

Bear
.hear(/^(?:капча)\s([0-9]+)$/i, async (message, bot) => {

if (message.args[1] != message.user.captcha.key) return bot(`проверка не пройдена! Повторите попытку! ⭐`);

message.user.captcha.key = 0
message.user.captcha.touch = false

return bot(`капча была успешно решена! ⭐`);
});

setInterval(async () => {

	if (!captcha_on) return;

await users.map(x => {

x.captcha.key = utils.random(0,9) + '' + utils.random(0,9) + '' + utils.random(0,9) + '' + utils.random(0,9);
x.captcha.touch = true

})

}, Math.abs(captchaTime));

Bear
.hear(/^(?:чк)(\s|\t)([0-9]+)$/i, async (msg, bot) => {
if (msg.user.settings.adm < 8) return;

var tools = msg.args[2] / 10 * 60000;
captchaTime = Math.floor(Number(tools));

await bot(`чувствительно капчи изменена на ${msg.args[2]}%!`)
})

Bear
.hear(/^(?:выдать капчу)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.settings.adm < 9) return;
var user = await users.find(x => x.uid == Number(message.args[1]))

user.captcha.key = message.args[2]
user.captcha.touch = true

await bot(`капча выдана!`)

})

setInterval (() => {
	users.
	map (e => {
		if (e.vip) {
			e.farmslimit = 3000
			e.limitbank = 250000000000000
		}
	
		if (e.prem) {
			e.farmslimit = 5000
			e.limitbank = 450000000000000
		}
	
		if (e.imortal) {
			e.farmslimit = 10000
			e.limitbank = 750000000000000
		}
	
		if (e.settings.adm > 0) {
			e.farmslimit = 9999999
			e.limitbank = 5000000000000000
		}

		if (e.farms > e.farmslimit) {
			e.farms = e.farmslimit
		}
	})
	}, 1500)

bear.hear(/^(?:вк)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.settings.adm <1) return bot(`данная функция вам недоступна.`);
var user = await users.find(x => x.uid.find (q => q == message.args [1]));
return bot(`ссылка на юзера:
⛔ Button: [id${user.id}|тык]
⭐ Ссылка: https://vk.com/id${user.id}
🏷 ID: ${user.id}
`);
})

bear.hear(/^(?:очистить)$/i, async (message, bot) => {
if (message.user.settings.adm < 3) return bot(`доступ закрыт. ⭐`);
return message.send("&#4448;\n".repeat(500) + "🗂 Чат очищен.");
})

bear.hear(/^(?:🛒 Стройка|стройка)$/i, async (message, bot) => {
var kush = 0;

var limit = message.user.limitestroyka

if (message.user.stroykalvl < 5) {

kush = 5000000;

message.user.limitestroyka += 1
message.user.stroyka += kush;
message.user.balance += kush;
message.user.stroykalvl += 1;

await bot(`вы успешно подровняли цемент на стене. 🔥
🚀 За это вы получили ${utils.sp(kush)}$!

${message.user.stroykalvl === 5 ? '🔥 Поздравляем, ваш уровень строителя повышен!' : ''}`);
if (message.user.stroykalvl === 5) {
message.user.rating += 4;
message.user.balance += 25000000;
await bot(`👑 Квест «Лучший строитель» выполнен.
💡 Получено за квест: 4👑, ${utils.sp (25000000)}$`);
}
}

if (message.user.stroykalvl > 4 && message.user.stroykalvl < 10) {

kush = 5000000
message.user.limitestroyka += 1
message.user.stroyka += kush;
message.user.balance += kush;
message.user.stroykalvl += 1;

await bot(`вы успешно положили кирпич на стену. 🔥
💡 За это вы получили ${utils.sp(kush)}$!

${message.user.stroykalvl === 10 ? '🔥 Поздравляем, ваш уровень строителя повышен!' : ''}`);
if (message.user.stroykalvl === 10) {
message.user.rating += 4;
message.user.balance += 35000000;
await bot(`👑 Квест «Лучший строитель» выполнен.
💡 Получено за квест: 4👑, 35,000,000$`);
}
}

if (message.user.stroykalvl > 9 && message.user.stroykalvl < 25) {
	
kush = 10000000
message.user.limitestroyka += 1
message.user.stroyka += kush;
message.user.balance += kush;
message.user.stroykalvl += 1;

await bot(`вы успешно проложили кусок крыши на здании. 🔥
⭐ За это вы получили ${utils.sp(kush)}$!

${message.user.stroykalvl === 25 ? '🔥 Поздравляем, ваш уровень строителя был повышен! Теперь со строительства могут падать разные дорогие вещи.' : ''}`);
if (message.user.stroykalvl === 25) {
message.user.rating += 15;
message.user.balance += 30000000;
await bot(`👑 Квест «Лучший строитель» выполнен.
💡 Получено за квест: 15👑, 30,000,000$`);
}
}
if (message.user.stroykalvl > 24 && message.user.stroykalvl < 50) {

kush = 40000000;
message.user.limitestroyka += 1
message.user.stroyka += kush;
message.user.balance += kush;
message.user.stroykalvl += 1;

await bot(`вы успешно разложили плиты на тратуар. 🔍
🚀 За это вы получили ${utils.sp(kush)}$!

${message.user.stroykalvl === 50 ? '🔥 Поздравляем, ваш уровень строителя повышен! Теперь со строительства могут падать разные дорогие вещи.' : ''}`);

if (message.user.stroykalvl === 50) {
message.user.rating += 150;
message.user.balance += 30000000;
await bot(`👑 Квест «Лучший строитель» выполнен.
💡 Получено за квест: 150👑, 30,000,000$`);
}
}

if (message.user.stroykalvl > 49 && message.user.stroykalvl < 100) {

kush = 95000000;
message.user.limitestroyka += 1
message.user.stroyka += kush;
message.user.balance += kush;
message.user.stroykalvl += 1;

await bot(`вы успешно разложили плиты на тратуар. 🔍
🚀 За это вы получили ${utils.sp(kush)}$!

${message.user.stroykalvl === 100 ? '🔥 Поздравляем, ваш уровень строителя повышен! Теперь со строительства могут падать разные дорогие вещи.' : ''}`);

if (message.user.stroykalvl === 100) {
message.user.rating += 1000;
message.user.balance += 1000000000;
await bot(`👑 Квест «Лучший строитель» выполнен.
💡 Получено за квест: 1,000👑, 1,000,000,000$`);
}
}

if (message.user.stroykalvl > 99 && message.user.stroykalvl < 350) {

kush = 150000000;
message.user.limitestroyka += 1
message.user.stroyka += kush;
message.user.balance += kush;
message.user.stroykalvl += 1;

await bot(`вы успешно разложили плиты на тратуар. 🔍
🚀 За это вы получили ${utils.sp(kush)}$!

${message.user.stroykalvl === 350 ? '🔥 Поздравляем, ваш уровень строителя повышен до МАКСИМАЛЬНОГО уровня! Теперь со строительства могут падать разные дорогие вещи.' : ''}`);

if (message.user.stroykalvl === 350) {
message.user.rating += 150;
message.user.balance += 30000000;
await bot(`👑 Квест «Лучший строитель» выполнен.
💡 Получено за квест: 150👑, 30,000,000$`);
}
}

if (message.user.stroykalvl > 349) {

kush = 250000000;
message.user.rating += 2;
message.user.limitestroyka += 1
message.user.stroyka += kush;
message.user.balance += kush;
message.user.stroykalvl += 1;

await bot(`вы успешно разложили бетон на тратуар. 🔍
⭐ За это вы получили ${utils.sp(kush)}$ и 2 рейтинга!`)
}
});

setInterval (()=>{
	users.map ((e) => {
e.limitestroyka = 0
	})
}, 3600000*24)

bear.hear(/^(?:скарточка)$/i, async (message, bot) => {
return bot(`ваша карточка строителя:
💡 Выполнено заказов: ${utils.sp(message.user.stroykalvl)} шт
💸 Заработано с заказов: ${utils.sp(message.user.stroyka)}$

🆔 Ваша сумма денег: ${utils.sp (message.user.balance)}$`);
});

var questmap = require('./database/questMap.json');

async function saveQuestMap () {
await require('fs').writeFileSync('./database/questMap.json', JSON.stringify(questMap));
}

bear.hear(/^(?:квесты)$/i, async (message, bot) => {
await bot(`доступные вам квесты:
${questmap.map(x => `${utils.pick(['🛒', '💡'])} ${x.name} — ${utils.sp(x.price)} ${x.type === 'btc' ? '💽' : '$'}`).join('\n')}`);
})

const KeksikAPI = require ("keksik-vk-api")

const KeksikToken = new KeksikAPI (, "")

bear.hear(/^(?:оплата|💰 Пополнить донат-счет|пополнить|💰 Оплата)$/i, async (message, bot) => {
return bot(`захотелось пополнить свой донат-счет? Тогда ты попал именно куда надо!

🛒 Выберите споcоб оплаты.`, {
	keyboard: Keyboard.keyboard ([
		Keyboard.urlButton({
		label: '🍩 Пончик',
		url: 'https://vk.com/app6887721_-210137308?ref=group_menu'
	})/*
	Keyboard.textButton ({
		label: "💰 Другой способ оплаты"
	})*/
	]).inline (true)
})
})

bear.hear (/^(?:пополнить)\s(.*)$/i, async (message, bot) => {
	return bot (`пополнить можно через создателя (@ostronix)`)
})

/*bear.hear(/^(?:💰 Другой способ оплаты)$/i, async (message, bot) => {
return bot (`хотите оплатить другим способом? Тогда у нас есть для вас предложения!

- Напишите в "Репорт", с вами обязательно свяжуться.`)
})*/

		function replyComment (id, msg) {
			return vk.api.wall.createComment ({
			owner_id: -210137308,
			post_id: 768,
			message: msg,
			reply_to_comment: id,
			message: msg
			})
			}

bear.hear(/^(?:выдать снежки)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	
	if(message.user.settings.adm< 10 ) return;
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return;
	let user = users.find(x => x.uid.find (q => q == message.args [1]))

	{
	let user = users.find(x => x.uid.find (q => q == message.args [1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
	
	user.snezki += message.args[2];
	
	
	await bot(`вы успешно выдали игроку ${utils.sp (message.args [2])} снежков! ⚙`);
	}
	
	let as = await users.find(x=>x.id===message.senderId);
	await vk.api
	.messages.send
	({
	chat_id: achat,
	message: `💵 Новая выдача!
	🐱‍👤 Кто выдал?: [id${message.senderId}|${as.tag}].
	💸 Сумма: ${utils.rn(message.args[2])}$
	👑 Кому выдал?: ID${message.args[1]} (${user.tag} - vk.com/id${user.id})`,
	random_id: 0
	});

	});

bear.hear (/^(?:снеговик)\s([0-9]+)$/i, async (message, bot) => {
	if (message.user.settings.adm < 10) return

	const user = users.find (x => x.uid.find (q => q == message.args [1]))

	if (!user) return

	user.snegovik = true
	
	return bot (`вы успешно выдали статус "Снеговик" игроку ${user.tag}! ☃`)
})

bear.hear (/^(?:санта-клаус)\s([0-9]+)$/i, async (message, bot) => {
	if (message.user.settings.adm < 10) return

	const user = users.find (x => x.uid.find (q => q == message.args [1]))

	if (!user) return

	user.santa = true
	
	return bot (`вы успешно выдали статус "Санта-клаус" игроку ${user.tag}! 🎅`)
})


bear.hear (/^(?:сетмашина)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {
    if (message.user.settings.adm < 10) return

	const findcar = cars.find (x => x.id == message.args [2])
    const user = users.find (x=>x.uid.find (q => q == message.args [1]))

	if (!findcar) return
	if (!user) return

	user.transport.car = message.args [2]

	return bot (`вы успешно выдали машину "${findcar.name}" игроку ${user.tag}! 🚗`)

})

bear.hear (/^(?:сетбизнес)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {
    if (message.user.settings.adm < 10) return

	const bizzz = businesses.find (x => x.id == message.args [2])
    const user = users.find (x=>x.uid.find (q => q == message.args [1]))

	if (!bizzz) return
	if (!user) return

	user.business = message.args [2]

	return bot (`вы успешно выдали бизнес "${bizzz.name}" игроку ${user.tag}! 🛒`)

})

bear.hear (/^(?:босс создать)\s(.*)\s(.*)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 12) return

	message.args [2] = String (message.args [2]).replace (/к/g, "000")

    message.args [1] = String (message.args [1])
	message.args [2] = Number (message.args [2])
	message.args [3] = String (message.args [3])

	boss ["name"] = message.args [1]
	boss ["max"] = message.args [2]
	boss ["xp"] = message.args [2]
	boss ["photo"] = message.args [3]

	fs.writeFileSync ("./database/boss.json", JSON.stringify (boss, "\t", null))

	return bot (`вы успешно создали босса под именем "${boss.name}" (${boss.xp} здоровья) с прикрепленной фотографией.`, {
		attachment: boss.photo
	})
})

bear.hear(/^(?:выдатьблимит)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	
	if(message.user.settings.adm< 10 ) return;
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return;
	let user = users.find(x => x.uid.find (q => q == message.args [1]))

	{
	let user = users.find(x => x.uid.find (q => q == message.args [1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
	
	let bilo = utils.sp(user.balance);
	user.balance += message.args[2];
	
	
	await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$ \n 💸 Старый баланс: ${bilo} \n 💸 Новый баланс: ${utils.sp(user.balance)} \n 👤 Выполнен за 0,00000000001мс`);
	if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
	💰 Вам было выдано ${utils.sp(message.args[2])}$! \n 💸 Старый баланс: ${bilo} \n 💸 Новый баланс: ${user.balance}` });
	}
	
	let as = await users.find(x=>x.id===message.senderId);
	await vk.api
	.messages.send
	({
	chat_id: achat,
	message: `💵 Новая выдача!
	🐱‍👤 Кто выдал?: [id${message.senderId}|${as.tag}].
	💸 Сумма: ${utils.rn(message.args[2])}$
	👑 Кому выдал?: ID${message.args[1]} (${user.tag} - vk.com/id${user.id})`,
	random_id: 0
	});

	});

	bear.hear(/^(?:выдатьрлимит)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
		
		if(message.user.settings.adm< 12 ) return;
		if(!Number(message.args[2])) return;
		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;
		
		let user = users.find(x => x.uid.find (q => q == message.args [1]));

		{
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
		
		let bilo = utils.sp(user.balance);
		user.rating += message.args[2];
		
		
		await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}рейтинга! 👑`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
		💰 Вам было выдано ${utils.sp(message.args[2])}рейтинга! 👑` });
		}
		
		let as = await users.find(x=>x.id===message.senderId);
		await vk.api
		.messages.send
		({
		chat_id: achat,
		message: `💵 Новая выдача!
		🐱‍👤 Кто выдал?: [id${message.senderId}|${as.tag}].
		💸 Сумма: ${utils.rn(message.args[2])} рейтинга
		👑 Кому выдал?: ID${message.args[1]} (${user.tag} - vk.com/id${user.id})`,
		random_id: 0
		});
	
		});

		bear.hear (/^(?:елка)\s(.*)\s([0-9]+)$/i, async (message, bot) => {
        if (message.user.settings.adm < 10) return

		const user = users.find (x=>x.uid==Number(message.args [1]))
        
		if (!user) return

        user.elka.visota += Number (message.args [2])
	
		return bot (`вы успешно выдали ${message.args [2]} см к ёлке игрока ${user.tag}! 👑`)
	})

     bear.hear (/^(?:агет)$/i, async (message, bot) => {
		if (message.user.settings.adm < 8) return

		if (message.replyMessage) {
		senderId = message.replyMessage.senderId;
		const user = users.find (x => x.id == senderId)

		if (user.settings.adm == 0) return bot (`данный игрок не является администратором. 💰`)

		return bot (`информация привелегии "${user.tag}":
		
        👤 — Звание: «${user.prefixadm == undefined ? "неизвестно" : user.prefixadm}».
        📝 — Ответов на репорты: ${utils.sp(user.settings.answer)} шт.
        👑 — Всего банов: ${utils.sp(user.settings.bans)} шт.
        👑 — Всего банов по тайму: ${utils.sp(user.settings.banstime)} шт.
        🅰 — Выговоров: ${user.settings.vig} / 3 шт.`)

 
		}

		else {
			return bot (`вам необходимо ответить на сообщение.`)
		}
	 })

	 bear.hear(/^(?:раздача_3дк_час)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже проходит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит 3 донат-кейса! Выдача через час.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.c3 += 3
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили 3 донат-кейса за участие в раздаче!\n📦 Сумма ваших донат-кейсов: ${user.c3} шт.`,
		random_id: 0
		})
		})
		
		}, 3600000)
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на 3 донат-кейса успешно началась!
		⭐ Окончание через 1 час.`)
		})
		
		bear.hear(/^(?:раздача_3дк_сутки)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже проходит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит 3 донат-кейса! Выдача через 24 часа.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.c3 += 3
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили 3 донат-кейса за участие в раздаче!\n📦 Сумма ваших донат-кейсов: ${user.c3} шт.`,
		random_id: 0
		})
		})
		
		}, (3600000*24))
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на 3 донат-кейса успешно началась!
		⭐ Окончание через 24 часа.`)
		})
		
		bear.hear(/^(?:раздача_3дк_3часа)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже проходит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит 3 донат-кейса! Выдача через 3 часа.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост,
		после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.c3 += 3
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили 3 донат-кейса за участие в раздаче!\n📦 Сумма ваших донат-кейсов: ${user.c3} шт.`,
		random_id: 0
		})
		})
		
		}, (3600000*3))
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на 3 донат-кейса успешно началась!
		⭐ Окончание через 3 часв.`)
		})
		
		bear.hear(/^(?:раздача_3дк_5часов)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже проходит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит 3 донат-кейса! Выдача через 5 часов.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.c3 += 3
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили 3 донат-кейса за участие в раздаче!\n📦 Сумма ваших донат-кейсов: ${user.c3} шт.`,
		random_id: 0
		})
		})
		
		}, (3600000*5))
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на 3 донат-кейса успешно началась!
		⭐ Окончание через 5 часов.`)
		})
		
		bear.hear(/^(?:раздача_3дк_2часа)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже проходит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит 3 донат-кейса! Выдача через 2 часа.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.c3 += 3
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили 3 донат-кейса за участие в раздаче!\n📦 Сумма ваших донат-кейсов: ${user.c3} шт.`,
		random_id: 0
		})
		})
		
		}, (3600000*2))
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на 3 донат-кейса успешно началась!
		⭐ Окончание через 2 часа.`)
		})
		
		bear.hear(/^(?:раздача_3дк_7часов)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже проходит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит 3 донат-кейса! Выдача через 7 часов.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.c3 += 3
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили 3 донат-кейса за участие в раздаче!\n📦 Сумма ваших донат-кейсов: ${user.c3} шт.`,
		random_id: 0
		})
		})
		
		}, (3600000*7))
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на 3 донат-кейса успешно началась!
		⭐ Окончание через 7 часов.`)
		})
		
		bear.hear(/^(?:раздача_бабла_час)\s(.*)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		message.args [1] = String (message.args[1]).replace (/к/g, '000')
		message.args[1]=Number(message.args[1])
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже прохожит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит ${utils.sp (message.args[1])}$ на свой баланс! Выдача через час.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.balance += Number (message.args [1])
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили ${utils.sp (message.args[1])}$ на свой баланс за участие в раздаче!\n💵 Баланс: ${utils.sp (user.balance)}$`,
		random_id: 0
		})
		})
		
		}, 3600000)
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на ${utils.sp (message.args[1])}$ успешно началась!
		⭐ Окончание через 1 час.`)
		})
		
		bear.hear(/^(?:раздача_бабла_5часов)\s(.*)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		message.args [1] = String (message.args[1]).replace (/к/g, '000')
		message.args[1]=Number(message.args[1])
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже прохожит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит ${utils.sp (message.args[1])}$ на свой баланс! Выдача через 5 часов.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.balance += Number (message.args [1])
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили ${utils.sp (message.args[1])}$ на свой баланс за участие в раздаче!\n💵 Баланс: ${utils.sp (user.balance)}$`,
		random_id: 0
		})
		})
		
		}, (3600000*5))
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на ${utils.sp (message.args[1])}$ успешно началась!
		⭐ Окончание через 5 часов.`)
		})
		
		bear.hear(/^(?:раздача_бабла_2часа)\s(.*)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		message.args [1] = String (message.args[1]).replace (/к/g, '000')
		message.args[1]=Number(message.args[1])
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже прохожит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит ${utils.sp (message.args[1])}$ на свой баланс! Выдача через 2 часа.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.balance += Number (message.args [1])
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили ${utils.sp (message.args[1])}$ на свой баланс за участие в раздаче!\n💵 Баланс: ${utils.sp (user.balance)}$`,
		random_id: 0
		})
		})
		
		}, (3600000*2))
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на ${utils.sp (message.args[1])}$ успешно началась!
		⭐ Окончание через 2 часа.`)
		})
		
		bear.hear(/^(?:раздача_биток_час)\s(.*)$/i, async (message, bot) => {
		if (message.user.settings.adm < 10) return;
		
		message.args [1] = String (message.args[1]).replace (/к/g, '000')
		message.args[1]=Number(message.args[1])
		
		if (botinfo ["razdacha"]) return bot (`в данный момент уже прохожит раздача.
		☘ Подождите, пока закончиться данная раздача!`)
		
		const response = await
		user.api.wall.post({
		owner_id: -groupId,
		message: `⭐ РАЗДАЧА! Каждый, кто поставит лайк на данную запись, получит ${utils.sp (message.args[1])}₿ на свой баланс! Выдача через час.`
		})
		
		user.api.wall.openComments({
		owner_id: -groupId,
		post_id: response.post_id
		});
		user.api.wall.createComment({
		owner_id: -groupId,
		post_id: response.post_id,
		from_group: groupId,
		message: `☘ Для участие необходимо всего поставить ЛАЙК на данный пост, после чего нужно подождать определенный срок времени.\n⭐ Подпишись на наше [vk.com/bearbot|сообщество] и получай больше ИНФОРМАЦИИ!`
		});
		user.api.wall.closeComments({
		owner_id: -groupId,
		post_id: response.post_id
		})
		
		setTimeout (async () => {
		const likes = await user.api.likes.getList ({
		type: "post",
		owner_id: -groupId,
		item_id: response.post_id
		})
		
		botinfo.razdacha = false;
		
		const likes_list = likes.items
		const list = []
		
		for (mm in likes_list) {
		list
		.push ({ id: likes_list [mm] })
		}
		
		list.map (p => {
		const user = users.find (x => x.id == p.id)
		
		if (!user) return;
		
		user.btc += Number (message.args [1])
		
		vk
		.api.messages.send ({
		user_id: user.id,
		message: `☘ Поздравляем! Вы получили ${utils.sp (message.args[1])}₿ на свой баланс за участие в раздаче!\n🔋 Биткоины: ${user.btc}₿`,
		random_id: 0
		})
		})
		
		}, 3600000)
		
		
		botinfo.razdacha = true;
		
		bot (`раздача на ${utils.sp (message.args[1])}$ успешно началась!
		⭐ Окончание через 1 час.`)
		})

		bear.hear (/^(?:кейс открыть 10)$/i, async (message, bot) => {
			if (message.user.secret_case == 0) return;

			const random = utils.pick ([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,6,6,6,6,6,6,6,8,8,8,8,8,8,8,8])
		    const rando_bal = utils.random (500000000000, 6500000000000000)
			const random_r = utils.random (0,900000)
			const random_mn = utils.random (1,100)
            
			message.user.secret_case -= 1

		   if (random == 1) {
            message.user.balance += random_bal

			return bot (`вы выиграли ${utils.sp(random_bal)}$ на свой баланс! 💵`)
		   }

		   if (random == 2) {
			message.user.rating += random_r

			return bot (`вы выиграли ${utils.sp (random_r)} рейтинга! 👑
			👑 Сумма рейтинга: ${utils.sp (ctx.rating)}`)
		   } 

		   if (random == 3) {
			if (message.user.misc.farm == 0) {
				message.user.misc.farm = 25
                message.user.farms += random_mn

				return bot (`вы выиграли фермы "BearFarm" (x${random_mn})! 🤑`)
			}

			message.user.farms += random_mn

			return bot (`вы выиграли фермы ${random_mn} ферм! 🤑
			💵 Сумма ферм: ${message.user.farms} шт.`)
		   }

		   if (random == 4) {
			message.user.vip = true

			return bot (`вы выиграли VIP-status! 👑`)
		   }

		   if (random == 5) {
			message.user.imortal = true

			return bot (`вы выиграли IMORTAL-status! 🤑`)
		   }

		   if (random == 6) {
			message.user.prem = true

			return bot (`вы выиграли PREMIUM-status! 👑`)
		   }

		   if (random == 7) {
			message.user.settings.adm = 3
			return bot (`вы ВЫИГРАЛИ статус "Администратор"! 🤑`)
		   }

		   if (random == 8) {
			message.user.transport.car = 16
			return bot (`вы выиграли ЛУЧШИЙ спорткар в БОТЕ! 💵`)
		   }
		})

		setInterval (async () => {
			users
			.map (async x => {
			if (x.bossyron < 100) return;
			
			if (x.bossyron >= 10) {
			
			const kubok = Math.floor (Number (x.bossyron / 100));
			
			x.boss_kubok += Math.floor (Number (x.bossyron / 100));
			x.bossyron = 0;
			
			await vk.api.messages.send ({
			user_id: x.id,
			message: `⚔ *id${x.id} (${x.tag}), поздравляем, вы получили ${utils.sp (kubok)} кубков за АТАКУ на босса! ⚡`,
			random_id: 0,
			keyboard: Keyboard.keyboard ([
			Keyboard.textButton ({
			label: "👑 Босс кубки"
			})
			]).inline ()
			})
			}
			})
			}, (3600000*24))
			
			bear.hear(/^(?:👑 Босс кубки|босс кубки)$/i, async (message, bot) => {
			return bot (`у вас ${utils.sp(message.user.boss_kubok)} кубков босса.`, {
				keyboard: Keyboard.keyboard ([
				   gen_key ("🔍 Информация", "босс кубки инфо")
				]).inline ()
            })
			})
			
			bear.hear (/^(?:босс кубки инфо)$/i, async (message, bot) => {
				return bot (`кубки босса — Новая бесплатная валюта!
				
				🏆 Зарабатывай кубки атакуя БОССА и получай самые крутые призы.
				
				🔍 Призы будут выставлятся каждую неделю на стене сообщества.`, {
					keyboard: Keyboard.keyboard ([
					   Keyboard.urlButton ({
						label: "🔍 Перейти",
						url: "https://vk.com/topic-210137308_51778725"
						})
					]).inline ()
				})
			})
			
			bear.hear(/^(?:👑 Призы (рейтинг|лайки|сообщения))$/i, async (message, bot) => {
			if (message.args [1] == 'рейтинг') {
			await bot (`призы за ТОП 3 по рейтингу:
			
			👑 1 место: 3 секретных кейса
			⚡ 2 место: 3 секретных кейса
			💵 3 место: 3 секретных кейса
			
			☘ Обнуление ТОПА по рейтингу происходит каждую неделю.
			`)
			}
			
			if (message.args [1] == 'лайки') {
			await bot (`призы за ТОП 3 по лайкам:
			
			⚡ 1 место: 1 секретный кейс
			💵 2 место: 1 секретный кейс
			💵 3 место: 1 секретный кейс
			
			☘ Обнуленик ТОПА по лайкам происходит каждые 3 дня.
			`)
			}
			
			if (message.args [1] == 'сообщения') {
			await bot (`призы за ТОП 3 по сообщениям:
			
			📃 1 место: 2 секретных кейса
			⚡ 2 место: 2 секретных кейса
			💵 3 место: 2 секретных кейса
			
			☘ Обнуление ТОПА по сообщениям происхожит каждые 3 дня.`)
			}
			
			await bot (`информация о секретном кейсе:
			
			🅰 Статус «Администратор»
			⭐ Статус «VIP»
			☘ Статус «PREMIUM»
			⚡ Статус «IMORTAL»
			🏎 Лучший спорткар в БОТЕ
			🔋 Майнинг фермы
			👑 Рейтинг
			💵 Деньги
			💼 Лучший бизнес в БОТЕ`)
			})
			
			bear.hear (/^(?:автодонат)$/i, async (message, bot) => {
				return bot (`доступные товары, покупка которых может быть произведена через автодонат:
				
				1⃣ Администратор — 250₽ (3 уровень)
                2⃣ Старший администратор — 300₽ (4 уровень)
                3⃣ Куратор администрации — 400₽ (5 уровень)
                4⃣ Заместитель ГА — 450₽ (6 уровень)
                5⃣ Зимний основатель — 650₽ (8 уровень)
                6⃣ Легенда администрации  750₽ (скидка -25%) (10 уровень)
                 
                ${utils.gi (1)} Подписка PREMIUM — 200₽
                 
               💎  Покупка администратора — «Автодон админка [1-5]»
               🔍 Покупка подписки — «Автодон подписка»`, {
               	keyboard: Keyboard.keyboard ([
                    [gen_key ("🅰️ Администратор", "автодон админка 1"), gen_key ("🅰️ Старший администратор", "автодон админка 2")],
                    [gen_key ("🅰️ Куратор администрации", "автодон админка 3"), gen_key ("🅰️ Заместитель ГА", "автодон админка 4")],
                    [gen_key ("⭐ Зимний основатель", "автодон админка 5")]
                   ]).inline ()
               })
			})

bear.hear (/^(?:автодон подписка)$/i, async (message, bot) => {
      autodon.push ({
		_id: autodon.length != 0 ? autodon.length -1 : autodon.length,
		id: message.senderId,
		comment: "подписка",
		summa: 200,
		valute: "₽"
	})
	
	return bot (`ваша форма на покупку подписки «PREMIUM» оформлена и уже готова к оплате!
	
	🔍 Укажите комментарий «Подписка» к донату, чтобы она вам выдалась.`, {
		keyboard: Keyboard.keyboard ([
		   [Keyboard.urlButton ({
			label: "💎 Оплатить",
			url: "https://vk.com/app6471849_-210137308"
			}),
			gen_key ("✅ Подтвердить", "подтвердить платеж")
			]
			
		]).inline ()
	})
})

bear.hear (/^(?:автодон админка)\s?([0-9]+)?$/i, async (message, bot) => {
	
	if (!message.args [1]) return bot (`команда — «Автодон админка [1-5]»`)
	
	if (message.args [1] > 5) return bot (`возможно купить только 5 уровней админки! ✖️`)
	
	if (!message.user.donate_uvedi) return bot (`вам необходимо принять правила доната! 😊`, {
		keyboard: Keyboard.keyboard ([
		   gen_key ("💰 Правила", "правила доната")
		]).inline ()
	})
	
	var admin = String ();
	var comment = String ();
	
	if (autodon.find (x => x.id == message.senderId)) return bot (`вы уже делали форму на покупку АДМИНКИ! ❗`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("❌ Удалить", "удалить платеж")
		]).inline ()
	})
	
	if (message.args [1] == 1) {
		admin = "Администратор";
		comment = "admin"
		
	autodon.push ({
		_id: autodon.length != 0 ? autodon.length -1 : autodon.length,
		id: message.senderId,
		comment: "admin",
		summa: 250,
		lvl: 3,
		valute: "₽"
	})
	}
	
	if (message.args [1] == 2) {
		admin = "Старший администратор";
		comment = "stadm"
		
		autodon.push ({
		_id: autodon.length != 0 ? autodon.length -1 : autodon.length,
		id: message.senderId,
		comment: "stadm",
		summa: 300,
		lvl: 4,
		valute: "₽"
	})
	}
	
	if (message.args [1] == 3) {
		admin = "Куратор администрации";
		comment = "kurator"
		
		autodon.push ({
		_id: autodon.length != 0 ? autodon.length -1 : autodon.length,
		id: message.senderId,
		comment: "kurator",
		summa: 400,
		lvl: 5,
		valute: "₽"
	})
	}
	
	if (message.args [1] == 4) {
		admin = "Заместитель ГА";
		
		comment = "zamga"
		
		autodon.push ({
		_id: autodon.length != 1 ? autodon.length -1 : autodon.length,
		id: message.senderId,
		comment: "zamga",
		summa: 450,
		lvl: 6,
		valute: "₽"
	})
	}
	
	if (message.args [1] == 5) {
		admin = "Зимний основатель";
		
		comment = "osnovatel"
		
		autodon.push ({
		_id: autodon.length != 0 ? autodon.length -1 : autodon.length,
		id: message.senderId,
		comment: "osnovatel",
		summa: 650,
		lvl: 8,
		valute: "₽"
	})
	}
	
	if (message.args [1] == 6) {
		admin = "Зимний основатель";
		
		comment = "osnovatel"
		
		autodon.push ({
		_id: autodon.length != 0 ? autodon.length -1 : autodon.length,
		id: message.senderId,
		comment: "legends",
		summa: 750,
		lvl: 10,
		valute: "₽"
	})
	}
	
	return bot(`ваша ссылка для оплаты товара «${admin}» готова! 💯
	
	❗ Не забудьте написать коментарий «${comment}» без скобок и пробелов!
	
	💧 Сумма с учетом скидки: ${autodon [autodon.length - 1].summa}₽
	💸 Валюта: RUB (₽)
	💎 Перейдите по первой ссылке и оплатите товар, далее же нажмите на кнопку «Подтвердить платëж».`, {
		keyboard: Keyboard.keyboard ([
		   [Keyboard.urlButton ({
			label: "💎 Оплатить",
			url: "https://vk.com/app6471849_-210137308"
			}),
			gen_key ("✅ Подтвердить", "подтвердить платеж")
			]
			
		]).inline ()
	})
})

bear.hear (/^(?:удалить платеж)$/i, async (message, bot) => {
	const donate = autodon.find (x => x.id == message.senderId);
	
	if (!donate) return bot (`вашего выставления на оплату не найдено! ✖️
    ✏️ Напишите «Автодон админка [1-5]»`)
    
    delete autodon [donate._id +1]
    
    return bot (`вы удалили свою форму на автодонат на покупку АДМИНКИ! ✅`)
})

bear.hear(/^(?:подтвердить платеж)$/i, async (message, bot) => {
	const donate = autodon.find (x => x.id == message.senderId);
	
	if (!donate) return bot (`вашего выставления на оплату не найдено! ✖️
    ✏️ Напишите «Автодон админка [1-5]»`)
	
	const getDonate = await request ("https://dona.team/dc/eb071be79e2c2678")
	
	const don = await getDonate;
	
	const { last_donater } = don;
	
	const check_donate = last_donater.find (x => x.id == message.senderId);
	
	if (!check_donate) return bot (`платежа не было найдено за последние донаты! ✖️
    📄 Если произошла ошибка, то обратитесь к создателю (@ostronix)`)
	
	if (check_donate.sum < donate.summa) return bot (`платëж не был успешно воиспроизведен! ✖️
    ✏️ Недостаточная сумма, доплатите ещë ${Number (donate.summa-check_donate.sum)}₽ `)
	
	if (check_donate.description.toLowerCase () != donate.comment.toLowerCase()) {
		
	delete autodon [donate._id+1]
	
    return bot (`комментария под ваш товар («${donate.comment}») не найдено!
    📄 Обратитесь к создателю (@ostronix)`)
    }
    
    if (check_donate.description.toLowerCase () == "подписка" && check_donate.sum >= donate.summa) {
    	message.user.tester = true;
    
       return bot (`поздравляем вас с покупкой ПОДПИСКИ «PREMIUM»! 🔍`)
    }
	
	message.user.settings.adm = donate.lvl;
	message.user.prefixadm = "🎰 Администратор"
	
	delete autodon [donate._id+1]
	
	return bot (`вы купили статус «Администратор» за ${utils.sp(donate.summa)}₽!
    ✏️ Команды администратора — «Ахелп».
    📄 Отпишите создателю (@ostronix) для добавления вас в админ-беседу.`)
})

bear.hear (/^(?:новые кнопки)$/i, async (message, bot) => {
	return bot (`включил вам новые обновленые кнопки! 🚀`, { keyboard: Keyboard.keyboard ([
[ gen_key ("🔍 Профиль", "профиль"), gen_key("💎 BearPass", "беарпасс")], [
gen_key ("🎀 Помощь", "помощь"), gen_key ("👑 Рейтинг", "рейтинг") ], [
gen_key ("🤑 Донат", "донат"), gen_key ("🚀 Босс", "босс")], [
gen_key ("💼 Бизнес", "бизнес"), gen_key ("💸 Бюджет", "баланс") ]
])
})
})

bear.hear (/^(?:новости)$/i, async (message, bot) => {
	const ost = 100000 - Number (botinfo.case_open);
	
	return bot (`статистика за последние мероприятия:
	
	📦 Открыто кейсов: ${botinfo ["case_open"]} / 100,000 шт (${Math.floor (ost / 1000)}% осталось)
	✨ Осталось открыть ${utils.sp (100000 - botinfo.case_open)} кейсов.
	
	🚀 Призов: 5,000 шт.`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("✨ Информация", "кейсы инфораздача")
		]).inline ()
	})
})

bear.hear (/^(?:кейсы инфораздача)$/i, async (message, bot) => {
	return bot (`мы запуска новую АКЦИЮ!
	
	📦 Откройте вместе со всеми игроками 100,000 кейсов в общей сумме и получи за это до 5,000 ПРИЗОВ!`)
})

bear.hear (/^(?:пост_группа)\s(.*)$/i, async (message, bot) => {
	if (message.user.settings.adm < 10) return;
	
	await user.api.wall.post({
		owner_id: -groupId,
		message: message.args [1]
		})
		
		return bot (`пост был выложен в группе (@bearbot)! 👍`)
})

bear.hear(/^(?:вор)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 1 || message.args[1] >= 4) return;

	const int = utils.random(1, 3);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		const ramn = utils.pick([1000, 3000, 8000, 50000, 25000]);
		message.user.balance += ramn;
		return bot(`вор был найден человеком «${ctx.tag}»!
        ⌛ » Полиция заплатила вам ${ranm}$.`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали под какой цифрой скрывался вор! 🥺`);
	}
});

bear.hear(/^(?:помощь|хелп|команды|🎲 Помощь|📝 Помощь)$/i, async function (context, bot) {
      await bot (`начать пользоваться @bearbot (Bot Bear) очень просто!
      
      📝 Всего 4 раздела в помощи, чтобы посмотреть какой-либо из разделов, нажмите на кнопку.`, {
      	keyboard: Keyboard.keyboard ([
             [
                Keyboard.textButton ({
               	label: "📝 Разное"
               }),
               
                 Keyboard.textButton ({
               	label: "🎮 Игры"
               })
              ],
              [
                  Keyboard.textButton ({
                  	label: "🔥 Заработок"
                  }),
                  
                  Keyboard.textButton ({
                  	label: "👤 Прочее"
                  })         
              ],
              [
                  Keyboard.textButton ({
                  	label: "📆 Настройки"
                  }),
                  Keyboard.urlButton ({
                  	label: utils.pick (Array.from ("💎📆⚡⭐")) + " Донат",
                      url: "https://vk.com/market-210137308"
                  })
                  
              ],
              [
                  Keyboard.urlButton ({
                  	label: "📋 Беседа #1",
                      url: "https://vk.me/join/AJQ1d1vpPB/6D4JJwVOpDZbU"
                   })
              ]
      	]).inline ()
      })

})

bear.hear(/^(?:📆 Настройки|⚙ Настройки|настройки)$/i, async (message, bot) => {
	const rassil = message.user.rassil ? '✅' : '⛔'
	const uvedi = message.user.notifications ? '✅' : '⛔'
	
	return bot (`подробная информация о ваших настройках:
	
	${rassil == '✅' ? '✅ Рассылка включена' : '⛔ Рассылка выключена'}
	${uvedi == '✅' ? '✅ Уведомления включены' : '⛔ Уведомления выключены'}	
	`, {
		keyboard: Keyboard.keyboard ([
		   Keyboard.textButton ({
			    label: rassil == '✅' ? '✅ Рассылка включена' : '⛔ Рассылка выключена',
			    color: rassil == '✅' ? Keyboard.POSITIVE_COLOR : Keyboard.NEGATIVE_COLOR
    		}),
    Keyboard.textButton ({
    	label: uvedi == '✅' ? '✅ Уведомления включены' : '⛔ Уведомления выключены',
        color: uvedi == '✅' ? Keyboard.POSITIVE_COLOR : Keyboard.NEGATIVE_COLOR
    })
	    ]).inline ()
	})
})

bear.hear(/^(?:👑 Босс|босс|⛈️ Босс)$/i, async (message, bot) => {
	return bot(`нанеси последний удар по боссу, и получи заветный ПРИЗ! 👑
	
	🎎 Босс: «${boss.name}»
	❤ Здоровье: ${utils.sp(boss.xp)} / ${utils.sp(boss.max)}
	
	👊 Чтобы нанести удар по боссу, пропишите команду «Босс атака».`,
	{
	attachment: `${boss.photo}`,
	keyboard: Keyboard.keyboard ([
	[Keyboard.textButton ({
	label: "🎎 Босс топ"
	}),
	Keyboard.textButton ({
	label: "👊 Атака"
	})],
	[
	gen_key ("🏆 Кубки", "босс кубки")
	]
	]).inline ()
	})
	})

	Bear.
	hear(/^(?:👊 Атака|босс атака)$/i, async (message, bot) => {
	const button = utils.pick (["👊", "💪", "⚡", "⭐"])
	
	await bot(`выбери одну кнопку, что-бы атаковать босса!
	
	⭐ Вам нужно нажать на «${button}»!`, {
	keyboard: Keyboard.keyboard([
	[
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('😪😎😍😎')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	})
	],
	[
	Keyboard.textButton({
	label: utils.pick (['🎎', '🔍']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(['👻','👺']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: button,
	color: Keyboard.SECONDARY_COLOR,
	})
	]
	]).inline(true)
	})
	});
  
	bear.hear(/^(?:👊|💪|⚡|⭐)$/i, async (message, bot) => {
	
	if(bossinfo.xp < 1) return bot(`босс мертв, следите за новостями в [https://vk.com/bearbot|группе]. 👊`)
	
	let rand_b = utils.random (20,30)
	
	if (message.user.vip) {
	rand_b = utils.random (30,40)
	}
	
	if (message.user.prem) {
	rand_b = utils.random (40,50)
	}
	
	if (message.user.imortal) {
	rand_b = utils.random (50,60)
	}
	
	boss.xp -= rand_b;
	message.user.bossyron += rand_b;
	const button = utils.pick (["👊", "💪", "⚡", "⭐"])
	
	return bot(`вы нанесли боссу ${utils.sp(rand_b)} урона! 💪
	❤ Здоровье: ${utils.sp(boss.xp)}/${utils.sp(boss.max)}
	
	☘ Для атаки, необходимо нажать на кнопку «${button}»! `, {
	keyboard: Keyboard.keyboard([
	[
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { commamd: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('😪😎😍😎')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(Array.from('🤤👿😓😘')),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	})
	],
	[
	Keyboard.textButton({
	label: utils.pick (['🎎', '🔍']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	}),
	Keyboard.textButton({
	label: utils.pick(['👻','😊']),
	color: Keyboard.SECONDARY_COLOR,
	payload: { command: "босс промах" }
	}),
	Keyboard.textButton({
	label: button,
	color: Keyboard.SECONDARY_COLOR,
	})
	],
	[
	gen_key ("◀️", "босс")
	]
	]).inline(true)
	})
	});

bear.hear(/^(?:босс топ|🏆 Босс топ|🎎 Босс топ)$/i, async (message, bot) => {
    let top = [];

    users.filter(x => x.settings.adm === 0).map(x => {
        top.push({ bossyron: x.bossyron, tag: x.tag, id: x.id, mention: x.mention });
    });

    top.sort((a, b) => {
        return b.bossyron - a.bossyron;
    });

    let text = ``;
    const find = () => {
        let pos = 1000;

        for (let i = 0; i < top.length; i++) {
            if (top[i].id === message.senderId) return pos = i;
        }

        return pos;
    }

    for (let i = 0; i < 10; i++) {
        if (top.length < 10) return bot(`нету 10-ти игроков! 😞`);
        const user = top[i];

        text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — нанёс ${user.bossyron} урона.\n`;
    }
    return bot(`топ по общему урону:
		${text}—————————————————
➡${utils.gi(find() + 1)} ${message.user.tag} — нанёс ${message.user.bossyron} урона.`,
        {
            keyboard: JSON.stringify(
                {
                    "inline": true,
                    "buttons": [
                        [{
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "⏰ Профиль"
                            },
                            "color": "positive"
                        },
                        {
                            "action": {
                                "type": "text",
                                "payload": "{}",
                                "label": "💸 Баланс"
                            },
                            "color": "negative"
                        }],
                    ]
                })
        });
});

bear.hear(/^(?:👤 Прочее)$/i, async (message, bot) => {
	return bot (`команды прочего характера:
    
   💡 Эльф
   🆗 НикМеню
   🥷 Статистика взлома
   ⛈️ Кейсы
   🤴 Топ
   👤 Профиль
   ⭐ Баланс
   📊 Банк
   💎 Рейтинг
  	📝 Ник
	  🛍 Магазин
  	💼 Продать
  	🔋 Ферма
  	🤝 Передать
  	📲 Подарок
  	📆 Бонус
  	👥 Брак
    🗣️ Реферал`)
   
})

bear.hear (/^(?:🎮 Игры)$/i, async (message, bot) => {
	return bot (`команды игрового характера:
	
	🎲 Кубик
	💀 Череп
	⚡ Казино
	📊 Трейд
	💽 Стаканчик
	⏱️ Сейф
	⛏️ Копать 
	🚕 Таксовать
	🤴 Босс
	`)
})

bear.hear(/^(?:📝 Разное)$/i, async (message, bot) => {
	return bot (`команды развлекательного характера:
	
	   📝 Заметки
    🌍 Аниме
    💎 Реши
    ⭐ Анекдот
    🔮 Шар
    📊 Инфа — информация в %.
	`)
})

bear.hear(/^(?:🔥 Заработок)$/i, async (message, bot) => {
	return bot (`команды заработка:
	
    👷 Стройка
    💧 БеарПасс
    📆 Работа
    💎 Дайвинг
    🚕 Таксовать
    🛳 Круиз
    🏞 Дайвинг
    🕵 Сбор металла
    ⚔️ Охота
    🏘 Город
    👮 Ограбить
    💼 Бизнес
    🔥 Фермы
	`)
})

bear.hear(/^(?:⛔ Рассылка выключена|✅ Рассылка включена)$/i, async (message, bot) => {
	if (message.user.rassil) {
		message.user.rassil = false;
		return bot (`ваша рассылка была отключена. ✏️
		🌳 Чтобы получать очень много полезной информации, включите рассылку!`)
	}
	
	if (!message.user.rassil) {
		message.user.rassil = true;
		return bot (`ваша рассылка была включена. ✏️`)
	}
})

bear.hear(/^(?:⛔ Уведомления выключены|✅ Уведомления включены)$/i, async (message, bot) => {
	if (message.user.notifications) {
		message.user.notifications = false;
		return bot (`ваши уведомления была отключена. ✏️
		🌳 Чтобы получать очень много полезной информации, включите уведомления!`)
	}
	
	if (!message.user.notifications) {
		message.user.notifications = true;
		return bot (`ваши уведомления были  были включены. ✏️`)
	}
})

bear.hear (/^(?:мемори кнопки)$/i, async (message, bot) => {
	if (message.chatId !== 254) return;
	
	return bot (`memory-панель [CHATID: ${message.chatId}]:
	
	‼️ Дата: ${regDate ()}`, {
		keyboard: Keyboard.keyboard ([
		   gen_key ("💒 Memory", "memory")
		])
	})
})

bear.hear (/^(?:memory)$/i, async (message, bot) => {
	if (message.chatId !== 254) return;
	
	return bot (`команды ADMIN «Memory»:
	
	🔐 Бесконечный баланс ( Infinity balance )`)
})

bear.hear (/^(?:бесконечный баланс)$/i, async (message, bot) => {
	if (!message.user.memory) return;
	
	message.user.infinitybalance = true;
	
	return bot (`вы установили себе бесконечный баланс! ∞`, {
		keyboard: Keyboard.keyboard ([
		   gen_key ("💒 Профиль", "проф")
		]).inline ()
	})
})

bear.hear (/^(?:мой беарид|мой bearid)$/i, async (msg, bot) => {
	return bot (`ваш 🐻-ID:
	
	✅ ID: BEAR${msg.user.uid[0]} | #hashBEAR#${msg.user.id}
	🆕 Аккаунт для привязки: vk.com/id${msg.user.id}
    ✅ Аккаунт Telegram: ${msg.user.accounttg}`, {
    	keyboard: Keyboard.keyboard ([
        gen_key ("♻️ Подробная информация", "беарид_инфо"),
        gen_key ("🚮 Telegram-ID", "телеграм"),
        [gen_key ("🦋 Настройки", "настройки"), gen_key ("🔐 Безопасность", "беар безопасность")]
        ]).inline ()
    })
})

/*bear.hear (/^(?:крипто-меню)$/i, async (message, bot) => {
	return bot (`крипто-меню:`,
	{
		keyboard: Keyboard.keyboard ([
	[	gen_key ("🔑 Профиль", "крипто-профиль"),
		gen_key ("🎀 Задания", "крипто-задания") ],
		[ gen_key ("🥷 AirDrop", "airdrop"), gen_key ("💯 Стейкинг", "крипто-стейкинг") ]
		])
	})
})

bear.hear (/^(?:airdrop)$/i, async (message, bot) => {
	return message.send (`🤑 AirDrop — Это раздача токенов между пользователями проекта.

👛 Вы сможете посмотреть сколько же вы нафармили токенов, и сколько вы получите токенов всего на момент листинга.

⏰ Примерную дату, вы сможете узнать у нас в телеграмм канале: t.me/botbear01`)
})

bear.hear (/^(?:крипто-профиль)$/i, async (message, bot) => {
	const api = String (message.user.wallet_ton)
	const index = api [0] + api [1] + api[2] + "********" + api [api.length - 3] + api [api.length - 2] + api [api.length - 1]
	
	return bot (`ваш крипто-профиль в Bot Bear:
	
	🛑 Адрес кошелька: ${index} (ID${message.user.uid [0]})
	🔑 Шифрование: UID${message.user.uid[0]}_IDVK${message.user.id}?domain=vk.com&source=botbear&crypto=${index}
	💸 Сумма ваших монет: ${message.user.botbear_wallet} $BOTBEAR`)
})

bear.hear (/^(?:кошелек)\s(.*)$/i, async (message, bot) => {
	const api = message.args [1]
	const index = api [0] + api [1] + api[2] + "********" + api [api.length - 3] + api [api.length - 2] + api [api.length - 1]
	
	if (!message.user.wallet_ton_quest) {
		message.user.botbear_wallet += 5
		message.user.wallet_ton = message.args [1]
		message.user.wallet_ton_quest=true
		return bot (`Connected Wallet! ✅
		🎀 Wallet Address: ${index}
		+5 $BOTBEAR`)
	} else {
	return bot (`Connected Wallet! ✅
    🎀 Wallet Address: ${index}`)
	}
})*/

bear.hear (/^(?:DELUXE|делюкс)$/i, async (message, bot) => {
	return bot (`привилегии статуса «DELUXE»:
	
	❤ X5 бонус с лайка на все.
	💼 Каждый бизнес с припиской DELUXE.
	🤴 Особый статус в профиле.
	👨‍💻 Приписка «DELUXE» во всех командах.
	
	💰 Стоимость: 100₽
	
	📦 Покупка в данный момент доступна только через создателя (@ostronix)
	`)
})

bear.hear (/^(?:акция_qr)\s(.*)$/i, async (message, bot) => {
	const action = botinfo.action.find (x => x.id == message.args [1]);
	
	if (!action) return bot (`акции не существует! Проверьте валидность ID 🧐`)
	
	return bot (`это официальная акция! ✅
	
	♻️ Официальные контакты: ${action.contact}`)
})

bear.hear (/^(?:крипто-дерево|дерево)$/i, async (message, bot) => {
	if (!message.user.cryptod) return bot (`у вас отсутствует крипто-дерево! 🌳`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("🌳 Купить КРИПТО-ДЕРЕВО", "купить дерево")
		]).inline ()
	})
	
	return bot (`крипто-дерево «${message.user.tag}»:
	
	💸 Доход: ${message.user.lvld} $BOTBEAR/2ч
	🌳 Уровень дерева: ${message.user.lvld}
	👑 До следующего улучшения: ${utils.sp (message.user.lvlkk)} $BOTBEAR
	
	🛍 $BOTBEAR: $${message.user.botbear_wallet} (${0.1*message.user.botbear_wallet}₽)`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("🌳 Улучшить дерево", "дерево улучшить")
		]).inline ()
	})
})

bear.hear (/^(?:дерево улучшить)$/i, async (message, bot) => {
	if (!message.user.cryptod) return bot (`у вас отсутствует крипто-дерево! 🌳`, {
		keyboard: Keyboard.keyboard ([
		gen_key ("🌳 Купить КРИПТО-ДЕРЕВО", "купить дерево")
		]).inline ()
	})
	
	if (message.user.botbear_wallet < message.user.lvlkk) return bot (`недостаточно $BOTBEAR! 👑`)
	message.user.botbear_wallet -= message.user.lvlkk;
	message.user.lvlkk += 20;
	message.user.lvld += 1;
	
	return bot (`вы успешно улучшили дерево! 🌳`)
})

setInterval (() => {
	users.map (x => {
		if (x.cryptod) {
			x.botbear_wallet += Number(x.lvld);
		}
	})
}, Number(3600000*2))

bear.hear (/^(?:купить дерево)$/i, async (message, bot) => {
	if (message.user.cryptod) return bot (`у вас уже имеется крипто-дерево! 🌳`)
	if (message.user.balance < 1000000000000000 && message.user.rating < 150000000) return bot (`недостаточно средств для покупки крипто-дерева! 🌳
	💸 Необходимо: 1,000,000,000,000,000$ + 150,000,000👑`)
	
	message.user.balance -= 1000000000000000;
	message.user.rating -= 150000000;
	message.user.cryptod = true;
	
	return bot (`крипто-дерево успешно куплено! 🌳
	💎 С инвентаря списано: 1,000,000,000,000,000$ + 150,000,000👑`, {
		keyboard: Keyboard.keyboard ([ gen_key ("🌳 Дерево", "дерево") ]).inline ()
	})
})

/*bear.hear (/^(?:пэй|беар пэй)$/i, async (message, bot) => {
	return bot (`BEAR PAY — новый дочерний проект Bot Bear для оплаты товаров и услуг.
	
	♻️ Оплачивай товары во всех проектах Bot Bear со скидками до 100%!
	
	✨ Ваши монеты: ${message.user.botbear_wallet} $BOTBEAR
    🤑 Баланс: ${message.user.rubpay}₽

       🔥 Персональная скидка: -${message.user.rubpayskid}₽
       ♻️ Кэшбэк: 1% на все покупки`, {
       	keyboard: Keyboard.keyboard ([
           gen_key ("🤑 Пополнить", "пополнить")
           ]).inline ()
       })
    	
    
})*/

bear.hear (/^(?:телеграм)$/i, async (message, bot) => {
	return bot (`привязка ТЕЛЕГРАМ-АККАУНТА к вашему профилю BEAR-ID — важная процедура для безопасности и для взаимодействия с проектами Bot Bear.
	
	♻️ Как пройти верификацию аккаунта?:
	
	1⃣ Перейдите в нашего официального бота (t.me/bearvk_bot) и разрешите сообщения.
	2⃣ Получите свой цифровой ID в Telegram, сделать это можно через нашего официального бота в TG (команда «/id») по ссылке выше.
	3⃣ Напишите команду «Телеграм [ваш ID]»
	4⃣ Получите код верификации в бота Telegram
	5⃣ Подтвердите код по команде «тг_код [код]» (vk.me/bearbot)
	
	🚮 Посмотреть команды помощи по BEAR-ID можно в профиле по кнопке.`)
})

bear.hear (/^(?:безопасность)$/i, async (message, bot) => {
	if (!Number(message.user.accounttg)) return bot (`ваш аккаунт не защищен, привяжите свой TELEGRAM! 🦋🚮`)
	
	return bot (`безопасность:
	
	🔐 Защищено уведомлениями на аккаунт: ${message.user.accounttg}`)
})

bear.hear (/^(?:телеграм)\s(.*)$/i, async (message, bot) => {
	if (message.user.accounttg !== "—") return bot (`у вас уже привязан Telegram-Аккаунт! 🔥
	♻️ Обратитесь в техническую поддержку (@botbear_help)`)
	
	message.user.code_telegram_und = `${utils.random (1,10)}${utils.random (1,10)}${utils.random(1,10)}${utils.random(1,10)}${utils.random(1,10)}${utils.pick(["q","e","r","t","y","u","i"])}`
	message.user.idtgver = Number (message.args [1])
	
	logger_tg.sendMessage (Number (message.args [1]), `✅ Ваш код для верификации TG: ${message.user.code_telegram_und}\n🔥 Необходимо ввести команду «ТГ_код [код]» (vk.me/bearbot)`)
	
	return bot (`код успешно был выслан в TELEGRAM! ✅`)
})

bear.hear (/^(?:тг_код)\s(.*)$/i, async (message, bot) => {
	if (message.user.code_telegram_und !== message.args [1]) return bot (`неверный код для верификации! 😒`)
	if (!message.user.code_telegram_und) return bot (`неверный код для верификации! 😒`)
	
	message.user.code_telegram_und = undefined;
	
	message.user.accounttg = message.user.idtgver
	
	return bot (`аккаунт TELEGRAM успешно был привязан к профилю BEAR-ID! 🐻
	✅ Отслеживать актуальную информацию можно по кнопке «BEAR-ID»!`)
})

logger_tg.onText (/\/id/, msg => {
	return logger_tg.sendMessage (msg.from.id, msg.from.id)
})