const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'resetuser',
    description: 'Usuwa statystyki usera',
    cooldown: "0",
    aliases: ['reset'],
    usage: ['&resetuser @user'],
    cat: 'mod',
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
       let cmdperms = 5 //To zmień
let cmdperm = cmdperms - 1

       
       let arg2 = args[1]
if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        return message.channel.send("Podaj osobę w @<> lub <ID>")
       }
       
       if(!arg2){
         return message.channel.send("Podaj co mamy zresetować <all>/<warn>/<money>/<xp>")
       }
       if(arg2 !== "all" && arg2 !== "money" && arg2 !== "xp" && arg2 !== "warn" && arg2 !== "inv"){
         return message.channel.send(`Podaj <all>/<warn>/<money>/<xp>, a nie jakieś brednie takie jak "${arg2}"`)
       }
       let money = db.get(`account.${user.id}.balance`)
       let xp = db.get(`account.${user.id}.xp`)
       let lvl = db.get(`account.${user.id}.lvl`)
       
       
      if(arg2 === "all"){
      if(bperms <= cmdperm) return message.channel.send(`${l.bperms} ${cmdperms} ${l.bperms2}`)
       
       if(money !== 0 || money !== undefined){
         db.set(`account.${user.id}.balance`, 0)
       }
       if(xp !== 0 || xp !== undefined){
       db.set(`account.${user.id}.xp`, 0)
       }
       if(lvl !== 1 || lvl !== undefined){
       db.set(`account.${user.id}.lvl`, 1)
       
       db.set(`account.${user.id}.nextxp`, 250)
       }
      }
      if(arg2 === "money"){
        if(bperms <= cmdperm) return message.channel.send(`${l.bperms} ${cmdperms} ${l.bperms2}`)
       
        if(money !== 0 || money !== undefined){
         db.set(`account.${user.id}.balance`, 0)
       }
      }
      if(arg2 === "xp"){
        if(bperms <= cmdperm) return message.channel.send(`${l.bperms} ${cmdperms} ${l.bperms2}`)
       
        if(xp !== 0 || xp !== undefined){
         db.set(`account.${user.id}.xp`, 0)
       }
       if(lvl !== 1 || lvl !== undefined){
         db.set(`account.${user.id}.balance`, 1)
       }
      }
      if(arg2 === "warn"){
              
       if(message.member.hasPermission("MANAGE_MEMBERS")){
         db.set(`${guild}.account.${user.id}.warn`, 0)
         db.delete(`${guild}.account.${user.id}.lastwarn`)
         db.delete(`${guild}.account.${user.id}.lastwarntime`) 
       }else{
         return message.channel.send(l.brak_permisji)
       }  
      }
      if(arg2 === "inv"){
        db.delete(`${user.id}.inv`)
      }
       const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Zresetowano "${arg2}" dla <${user.tag}>`)
.setFooter("🌻")

message.channel.send(Embed)
          }
};
