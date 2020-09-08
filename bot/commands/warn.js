const { MessageEmbed } = require('discord.js');
const fs = require("fs");
const db = require("quick.db")

module.exports = {
    name: 'warn',
    description: 'Ostrzeż kogoś',
    usage: ['&warn <user> <reason>'],
    cat: 'mod',
    execute(message, args) {
   let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  const member = message.guild.member(user);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz permisji!");
      if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie możesz go zwarnować")
  
  if (message.mentions.users.size < 1) return message.reply('Podaj kogo');
  if (reason.length < 1) reason = "Brak powodu"
let guild = message.guild.id
let warn = db.get(`${guild}.account.${user.id}.warn`)
if(warn === null) db.set(`${guild}.account.${user.id}.warn`, 0)
db.add(`${guild}.account.${user.id}.warn`, 1)

db.set(`${guild}.account.${user.id}.lastwarn`, reason)
let date = new Date()
let hour = date.getHours()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()
let minute = date.getMinutes()

if(day.length === 1) day = "0" + day
if(month.length === 1) month = "0" + month
if(minute.length === 1) minute = "0" + minute

let czas = `${day}.${month}.${year}r. Godzina: ${hour}:${minute}`

db.set(`${guild}.account.${user.id}.lastwarntime`, czas)

  const Embed = new MessageEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`Ostrzeżenie z serwera \`${message.guild.name}\``)
  .addField("Przez:", message.author.tag)
  .addField("Powód", reason);

  user.send(Embed);
  message.delete();
  
 
const Embedg = new MessageEmbed()
.setColor("#00ff00")
.setAuthor(`${user.tag} został ostrzeżony\nPowód: ${reason}`)



message.channel.send(Embedg)
}
    };  
    
    
    
    