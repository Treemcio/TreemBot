const { MessageEmbed } = require("discord.js");
const fs = require('fs');
const Discord = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")
const config = require("/home/runner/TreemBot-own/assets/settings/config.json")

module.exports = {
    name: 'help',
    description: 'Pokazuje komendy',
    aliases: ['commands'],
    usage: ['&help / &help <cmd>'],
    cat: 'pods',
    execute(message, args) {
  const { commands } = message.client;
  let guild = message.guild.id
     let prefix = db.get(`${guild}.prefix`)
     if(prefix === undefined) prefix = config.prefix
        let arg1 = args[0]
        
      
      let basic = []
      let nsfw = []
      let sys = []
      let mod = []
      let eco = []
      let fun = []
      let music = []
        
   let lang = db.get(`${guild}.lang`)
     
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
      
      fs.readdir("/home/runner/TreemBot-own/commands/", (err, files) => {
  
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    
  }
  
  jsfile.forEach((f, i) =>{
    let kmd = require(`/home/runner/TreemBot-own/commands/${f}`);
  
  let ni = `${prefix}${kmd.name}`
  if(kmd.showhelp !== false){
  if(kmd.cat === "nsfw") nsfw.push(`${ni}`)
  if(kmd.cat === "pods") basic.push(`${ni}`)
  if(kmd.cat === "sys") sys.push(`${ni}`)
  if(kmd.cat === "mod") mod.push(`${ni}`)
  if(kmd.cat === "eco") eco.push(`${ni}`)
  if(kmd.cat === "fun") fun.push(`${ni}`)
  if(kmd.cat === "music") music.push(`${ni}`)
  }
  })
      })
  
    
    setTimeout(lol, 500)
    function lol(){
      nsfw = nsfw.map(nsfw => `${nsfw}`).join(" ")
      mod = mod.map(mod => `${mod}`).join(" ")
      eco = eco.map(eco => `${eco}`).join(" ")
      sys = sys.map(sys => `${sys}`).join(" ")
      basic = basic.map(basic => `${basic}`).join(" ")
      fun = fun.map(fun => `${fun}`).join(" ")
      music = music.map(music => `${music}`).join(" ")
      
const Embed = new MessageEmbed()
	.setColor(`RANDOM`)
	.setTitle(l.help.helpmsg + `${prefix}help <command>` + l.help.helpmsg2)
	.addField("**```[👤] Basic```**", `*\`   ${basic}\`*\n** **`)
	.addField("**```[🛡️] Mods```**",  `*\`   ${mod}\`*\n** **`)
	.addField("**```[🔞] NSFW```**", ` *\`   ${nsfw}\`*\n** **`)
	.addField("**```[💸] Economy```**", ` *\`   ${eco}\`*\n** **`)
	.addField("**```[❄️] Fun```**", ` *\`   ${fun}\`*\n** **`)
	.addField("**```[🤖] System```**", ` *\`   ${sys}\`*\n** **`)
	.addField("**```[🎶] Music```**", ` *\`   ${music}\`*\n** ** `)
	.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  
  
  
  
  if(!arg1){
    
  return message.channel.send(Embed).then(msg => {
    msg.delete({ timeout: 15000 })
    message.delete({ timeout: 150})
  })
  
  
  }
  
if(arg1.startsWith(prefix)) return message.channel.send(l.help.noprefix)

if(arg1){
  const fs = require('fs')

const komend = `/home/runner/TreemBot-own/commands/${arg1}.js`

try {
  if (fs.existsSync(komend)) {
   
  }else{
  return message.channel.send(`${l.help.nocmd} ~ \`${prefix}${arg1}\``)
  }
} catch(err) {
  
}
}

if(arg1){
 let kmd = require(`./${arg1}.js`)
 let cat;
 let img;
 //usage🔹
 let usage = kmd.usage
 if(usage === "") usage = l.nodata
 if(usage === undefined) usage = l.nodata
  //nazwa🔹
 let nazwa = prefix + kmd.name
 if(kmd.cat === 'nsfw') nazwa = "[🔞] " + nazwa, cat = "NSFW", img = "https://www.emojimeaning.com/img/img-apple-160/1f51e.png"
 if(kmd.cat === 'mod') nazwa = "[🛡️]" + nazwa, cat = l.help.mod, img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb018zm_C0LNuDbBbuisQT3aM_R40aUQ2fPA&usqp=CAU"
 if(kmd.cat === 'eco') nazwa = "[💸] " + nazwa, cat = l.help.Eco, img = "https://www.photofunny.net/s/6080_funny-sticker-of-money-with-wings-to-paste-on-ur-photos.jpg"
 if(kmd.cat === 'own') nazwa = "[👑] " + nazwa, cat = l.help.Owner, img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQcARNkpFvkkvclcIl315I2FfyEsh5-LJxVg&usqp=CAU"
 if(kmd.cat === 'pods') nazwa = "[👤] " + nazwa, cat = l.help.basic, img = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/158/bust-in-silhouette_1f464.png"
 if(kmd.cat === 'sys') nazwa = "[🤖] " + nazwa, cat = l.help.system, img = "https://icon2.cleanpng.com/20180219/whw/kisspng-robot-cartoon-clip-art-robot-5a8b8347cb1455.0884954815190925518318.jpg"
 if(kmd.cat === "fun") nazwa = "[❄️] " + nazwa, cat = "Fun", img = "https://images.emojiterra.com/mozilla/512px/1f3ae.png"
 if(kmd.cat === "music") nazwa = "[🎶] " + nazwa, cat = "Music", img = "https://i.pinimg.com/originals/8f/16/99/8f1699fcf0df8d6b3179ff5faf59c920.png"
 //owner🔹
  let owner = l.help.no
  if(kmd.owner === true) owner = l.help.no
 //aliasy🔹
 let aliases = kmd.aliases
  if(kmd.aliases === undefined) aliases = " "
  if(!kmd.aliases) aliases = " "
  //description🔹
  
  let opis = l.desc[`${kmd.name}`]
  if(opis === "description") opis = l.nodata
  if(opis === "") opis = l.nodata
  if(opis === undefined) opis = l.nodata
  //cooldown🔹
  let cooldown = kmd.cooldown
  if(cooldown === undefined) cooldown = 0
  //categoria👑
  
  
  const Embedcmd = new MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${nazwa}`)
.setDescription(`Opis: \`[${opis}]\` \nAliasy: \`[${aliases}]\` \nTylko właściciel: \`[${owner}]\` \nUżycie: \`[${usage}]\` \nCooldown: \`[${cooldown}]\` \nKategoria: \`[${cat}]\``)
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setThumbnail(img)

if(lang === "pl"){
  return message.channel.send(Embedcmd).then(msg => {
    msg.delete({ timeout: 10000 })
    message.delete({ timeout: 500})
  })
}
if(lang === "en"){
const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`${nazwa}`)
.setDescription(`Description: \`[${opis}]\` \nAliases: \`[${aliases}]\` \nOnly owner: \`[${owner}]\` \nUsage: \`[${usage}]\` \n Cooldown: \`[${cooldown}]\` \nCategory: \`[${cat}]\``)
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
 return message.channel.send(Embed).then(msg => {
   msg.delete({ timeout: 10000})
   message.delete({ timeout: 500 })
 })
    
  }
 return
  

  
}
}
}
      
}


    
        

        
    