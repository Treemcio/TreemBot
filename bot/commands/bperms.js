const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'bperms',
    description: 'Pokazuje stan permisji do bota',
    cooldown: "0",
    aliases: ['botperms', 'botrole'],
    usage: ['&bperms / &bperms <user>'],
    cat: 'sys',
     execute(message, args) {
   //PREFIX🦑
       let guild = message.guild.id;
       let prefix = db.get(`${guild}.prefix`);
       if(prefix === undefined) prefix = config.prefix;
       
       //COMMAND
       
       let user = message.mentions.users.first()
       if(!user) user = message.author
       
       let upr = db.get(`${user.id}.upr`)
       let pe;
       
   if(!user.bot){  
       if(upr === undefined){
       upr = 1 
       db.set(`${user.id}.upr`, 1)
       pe = "Zwykły użytkownik"
       }
       if(upr === null){
         upr = 1
         db.set(`${user.id}.upr`, 1)
         pe = "Zwykły użytkownik"
       }
       }
    if(user.bot){  
       if(upr === undefined){
       upr = 0 
       db.set(`${user.id}.upr`, 0)
       pe = "Bot"
       }
       if(upr === null){
         upr = 0
         db.set(`${user.id}.upr`, 0)
         pe = "Bot"
       }
       }
       setTimeout(clear, 100)
       function clear(){
       
       if(upr === "0"){
      pe = "Bot"
       }
       if(upr === "1"){
      pe = "Zwykły użytkownik"
         
       }
       if(upr === "2"){
      pe = "Wyróżniony użytkownik"
       }
       if(upr === "3"){
      pe = "VIP"
     }
       if(upr === "4"){
     pe = "Moderator"
}
       if(upr === "5"){ 
       pe = "Administrator"
       }
       if(upr === "6"){
      pe = "Prawa stopa Treemka"
       }
       if(upr === "7"){
       pe = "Treemek 👑"
       }
       
       if(pe === undefined){
         if(!user.bot){
           pe = "Zwykły użytkownik"
         }else if(user.bot){
           pe = "Bot"
         }
       }
       
       const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`${user.tag}`)
.addField(`Level permisji: [**\`${upr}\`**]`, `Stan permisji: [**\`${pe}\`**]`)
.setFooter("Permisje są do ogólne bota, nie do serwera!", `${user.displayAvatarURL()}`)

message.delete()
message.channel.send(Embed).then(message => {
  message.delete({ timeout: 10000 })
})
       
       }    
       
       
          }
};
