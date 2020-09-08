const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'set',
    description: 'description',
    cooldown: "0",
    aliases: [' '],
    usage: ['&set <> <>'],
    cat: 'sys',
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
   				let lang = db.get(`${guild}.lang`)
       if(lang === undefined){
         lang === "en"
       } 
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
       
   				
   				
       //COMMAND
       let cmdperms = 0 //To zmień
       let cmdperm = cmdperms + 1
       if(bperms <= cmdperms) return message.channel.send(`Musisz mieć uprawnienia bota na poziomie ${cmdperm}`)
       
       if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(l.brak_permisji)
       
       
       let arg1 = args[0]
       if(!arg1) return message.channel.send(`${l.write}<lang> / <prefix> / <memberlog>`)
       
       //lang 👑
       
       if(arg1 === "lang"){
      
         let jenzyk = args[1]
       
       const Embedbj = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(l.podaj_wartosc)
.setDescription(`\`en ~ English \npl ~ Polski\``)
.setFooter("(◔-◔)/")
       if(!jenzyk) return message.channel.send(Embedbj)
       
       let coś;
       if(jenzyk === "en") coś = "en", db.set(`${guild}.lang`, coś)
       if(jenzyk === "pl") coś = "pl", db.set(`${guild}.lang`, coś)
       
       if(coś === undefined) return message.channel.send(l.setlang.brak_lang)
       
       message.channel.send("Ta funkcja jest jeszcze niedostępna we wszystkich komendach!")
       
       const Embed = new MessageEmbed()
.setColor("#402d5c")
.setDescription(`${l.setlang.ustawiono_lang} \`${coś}\``)
.setFooter(message.author.tag, message.author.displayAvatarURL())
          
          message.channel.send(Embed)
       }
       //prefix 👑
       
       if(arg1 === "prefix"){
         let guild = message.guild.id
       let prefix = args[1]
       if(!prefix) return message.channel.send("Podaj wartość nowego prefixu")
       
       db.set(`${guild}.prefix`, prefix)
       const Embedp = new MessageEmbed()
.setColor("#402d5c")
.setDescription(`Ustawiono prefix \`${prefix}\``)
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
     message.channel.send(Embedp)  
     
       }
       //welcome 👑
       if(arg1 === "memberlog"){
         let arg2 = args[1]
         
         if(arg2 !== "off"){
           let channel = message.mentions.channels.first()
         if(!channel) return message.channel.send(`${l.write}<welcome channel> / "off"`)
         db.set(`${guild}.welchannel`, channel.id)
         const Embed = new MessageEmbed()
.setColor("#402d5c")
.setDescription(`Memberlog ~ \`${channel.name}\``)

message.channel.send(Embed)
         }else{
           db.delete(`${guild}.welchannel`)
           const Embed = new MessageEmbed()
.setColor("#402d5c")
.setDescription(` MemberLog ~ off`)

message.channel.send(Embed)
         }
         }
         if(arg1 === "welcome"){
           let welmsg = args.slice(1).join(" ")
           
           if(!welmsg) return message.channel.send("Podaj wiadomość powitalną")
           if(welmsg === "off"){
             db.delete(`${guild}.msgwel`)
             message.channel.send("Wyłączono własną wiadomość")
           }else{
           db.set(`${guild}.msgwel`, welmsg)
           
           message.channel.send(`Ustawiono wiadomość powitalną - \`${welmsg} {user}`)
           }
         }
         if(arg1 === "goodbay"){
           let godbaymsg = args.slice(1).join(" ")
           
                      
           if(!godbaymsg) return message.channel.send("Podaj wiadomość pożegnalną")
           if(godbaymsg === "off"){
             db.delete(`${guild}.msgpa`)
             message.channel.send("Wyłączono własną wiadomość pożegnalną")
           }else{
           db.set(`${guild}.msgpa`, godbaymsg)
           
           message.channel.send(`Ustawiono wiadomość pożegnalną- \`${godbaymsg} {user}`)
           }
         }
         
         

       
       
       
       
       
          }
};
