const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'bset',
    description: 'Ustaw permisje bota',
    cooldown: "0",
    aliases: [' '],
    usage: [' '],
    cat: 'own',
     execute(message, args) {
   //PREFIX🦑
       let guild = message.guild.id;
       let prefix = db.get(`${guild}.prefix`);
       if(prefix === undefined) prefix = config.prefix;
       
//perms💰🐬
   let bperms = db.get(`${message.author.id}.upr`)
   if(bperms === undefined || null){
   		db.set(`${message.author.id}.upr`, 1)	
   		bperms = 1	
   				}
   				
       //COMMAND
       let cmdperms = 6
       if(bperms <= cmdperms) return message.channel.send(`Żeby dawać komuś uprawnienia sam musisz mieć uprawnienia na poziomie ${cmdperms} lub większym`)
       
       let user = message.mentions.users.first()
       if(!user) return message.channel.send("Podaj @<user>")
       
       
       
       const permisje = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Permisje:`)
.setDescription(`\`1 - Użytkownik\n2 - Wyróżniony\n3 - VIP\n4 - Moderator\n5 - Admin\n6 - Prawa stopa Treemka\n7 - Treemek\``)
       let perms = args[1]
       if(!perms) return message.channel.send(permisje)
       
       
       

       
     if(perms >= 8) return message.channel.send(`Podaj numer od 1-7`, permisje) 
     
     db.set(`${user.id}.upr`, perms)
     
     const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Ustawiono dla ${user.tag} ~ ${perms}`)
.setFooter("(◔-◔)/")
message.channel.send(Embed)
       
       
          }
};
