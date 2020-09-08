const { MessageEmbed } = require('discord.js');
const fs = require("fs");

 


module.exports = {
    name: 'ban',
    description: 'Zbanuj użytkowanika',
    usage: ['&ban <user> <reason>'],
    cat: 'mod',
     execute(message, args) {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  const member = message.guild.member(user);
  let guid = message.guild.id
  let lang = db.get(`${guild}.lang`)
       if(lang === undefined){
         lang === "en"
       } 
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
  
  const Embedbk = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(l.brak_permisji)
.setFooter("(◔-◔)/")

const Embedba = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(l.ban.not_ban)
.setFooter("(◔-◔)/")

const Embedg = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(l.podajuser)
.setFooter("(◔-◔)/")

const Embedsb = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(l.sam_siebie)
.setFooter("(◔-◔)/")

  if (message.mentions.users.size < 1) return message.channel.send(Embedg)
  if(message.author.id === user.id) return message.channel.send(Embedsb)
  
  if(member.hasPermission("BAN_MEMBERS")) return message.channel.send(Embedba)
  if(!message.member.hasPermission("BAN_MEMBERS")){
   return  message.channel.send(Embedbk)
     }else{
     
  
  
  if (reason.length < 1) reason = l.brak_reason



  const Embed = new MessageEmbed()
  .setTitle("Ban")
  .setColor("#402d5c")
  .setDescription(`Ban z serwera \`${message.guild.name}\``)
  .addField("Przez:", message.author.tag)
  .addField("Powód", reason);


  
  
 
const Embedg = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`${user.username} został zbanowany\nPowód: ${reason}`)

if(lang === "pl"){
  user.send(Embed)
message.channel.send(Embedg)
setTimeout(banowanie, 2500)
function banowanie(){
member.ban({ reason: `${reason}`});
}
if(lang === "en"){
  const Embeds = new MessageEmbed()
  .setTitle("Ban")
  .setColor("#402d5c")
  .setDescription(`Ban from \`${message.guild.name}\``)
  .addField(`By: `, message.author.tag)
  .addField("Reason: ", reason)
  
  const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`${user.username} has been banned\nReason: ${reason}`)

user.send(Embeds)
message.channel.send(Embed)
setTimeout(banowanieEn, 2500)
function banowanieEn(){
member.ban({ reason: `${reason}`});
}

}

}
}
   }
}
    