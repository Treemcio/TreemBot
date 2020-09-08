const { MessageEmbed } = require('discord.js');
const fs = require("fs");

const Embedbk = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Brak uprawnień`)
.setFooter("(◔-◔)/")

const Embedba = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Nie możesz go wyrzucić`)
.setFooter("(◔-◔)/")


const Embedg = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Podaj kogo`)
.setFooter("(◔-◔)/")




module.exports = {
    name: 'kick',
    description: 'Wyrzuć użytkowanika',
    usage: ['&kick <user> <reason>'],
    cat: 'mod',
     execute(message, args) {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  const member = message.guild.member(user);
  
  if (message.mentions.users.size < 1) return message.channel.send(Embedg);
if(member.hasPermission("KICK_MEMBERS")) return message.channel.send(Embedba)
  if(!message.member.hasPermission("KICK_MEMBERS")){
   return  message.channel.send(Embedbk)
     }else{
     
     


  if (reason.length < 1) reason = "Brak powodu"



  const Embed = new MessageEmbed()
  .setTitle("Kick")
  .setColor("#402d5c")
  .setDescription(`Wyrzucenie z serwera \`${message.guild.name}\``)
  .addField("Przez:", message.author.tag)
  .addField("Powód", reason);


  
  
 
const Embedg = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`${user.tag} został wyrzucony\nPowód: ${reason}`)


  user.send(Embed)
message.channel.send(Embedg)
setTimeout(kickowanie, 2500)
function kickowanie(){
member.kick({ reason: `${reason}`});
}
  
}
   }
}
    