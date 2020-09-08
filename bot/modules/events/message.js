const chalk = require("chalk")
const db = require("quick.db")
const config = require("/home/runner/TreemBot-own/assets/settings/config.json")
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const symbols = require("log-symbols")
var date = new Date();
var day = date.getDay()
var month = date.getMonth()
var year = date.getFullYear()
let hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()


module.exports = function(message, client, servers){
  
  if(message.channel.type === "dm"){

  if(message.author.tag === "TreemBot#7993"){
    return;
  }else{
   return console.log(chalk.blue(`${message.author.tag} napisał: ${message.content}`))
}
}
  if (message.author.bot) return;
  
  
    
      let guild = message.guild.id;
       let prefix = db.get(`${guild}.prefix`);
       if(prefix === undefined) prefix = config.prefix;
       if(prefix === null) prefix = config.prefix
	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
     const command = client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
   let lang = db.get(`${message.guild.id}.lang`)
 
   if(lang === null){
         db.set(`${message.guild.id}.lang`, "en")
       
       }
       if(lang === undefined){
         db.set(`${message.guild.id}.lang`, "en")
       }
       lang = db.get(`${message.guild.id}.lang`)
       let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
     
     const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Hej.`)
.addField(`${l.index.TreemBot} \`${prefix}help\``, `Language: \`${lang}\``)
     
     
     if(message.content === 'TreemBot'){
    message.channel.send(Embed);
     }    
         
     
         
let cooldown = 10000; // 5 Seconds.
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastxp = db.get(`lastxp.${message.author.id}`);

    if (lastxp !== null && cooldown - (Date.now() - lastxp) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastxp));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        
    }else{
db.add(`account.${message.author.id}.xp`, 1)
    } 
  let xp = db.get(`account.${message.author.id}.xp`)
  
  let lvl = db.get(`account.${message.author.id}.lvl`)
  
 let  nextxp = db.get(`account.${message.author.id}.nextxp`);
    if(!nextxp){
      nextxp = lvl * 250
    db.set(`account.${message.author.id}.nextxp`, nextxp);
    
    if(nextxp === null){
      if(lvl === 1) nextxp = lvl * 250;
      if(lvl !== 1) nextxp = Math.floor(lvl * 250 + lvl * 5 / 2)
    }
    
   } else db.set(`account.${message.author.id}.nextxp`, nextxp);
    
    if(xp >= nextxp){
  lvl = lvl + 1
  xp = 0
  let money = Math.floor(10 * lvl)
    db.add(`account.${message.author.id}.lvl`, 1)
    
    db.set(`account.${message.author.id}.xp`, 1)
    db.set(`account.${message.author.id}.nextxp`, Math.floor(lvl * 250 + lvl * 5 / 2))
    db.add(`account.${message.author.id}.balance`, money)
    
    const Embedlvlup = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`${message.author.tag} ${l.index.lvlup} • ${lvl}`)
.setDescription(`${l.index.lvlmoney} +${money}$`)
.setTimestamp(new Date)

    // Send the attachment in the message channel
    


message.author.send(Embedlvlup).then(message => {
  message.delete({ timeout: 15000 })
})
}
   
if(!message.guild.me.hasPermission("SEND_MESSAGES")){

  let owner = message.guild.owner
  return message.author.send(`\`${message.guild.name}\`\n${l.index.brak_send}`)
}
    if (!message.content.startsWith(prefix)) return;
    try {
    command.execute(message, args, servers);
} catch(error){
  if(error.message !== "Cannot read property 'execute' of undefined"){
    let ertime = `${symbols.error} ${hour}:${minute}:${second} [!]`
  console.log(chalk.bgRed(`${ertime}`) + chalk.bold.black.bgWhite(` ${error.stack}`))
  const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Error 🛠️`)
.setDescription(`\`${error.message}\``)
message.channel.send(Embed)
return
}
  
}
}