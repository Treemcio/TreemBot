const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")
const ms = require("parse-ms")

module.exports = {
    name: 'warnings',
    description: 'Pokaź warny',
    usage: '&warnings <user',
    cat: 'pods',
     aliases: ['warns', 'infractions'],
     execute(message, args) {
       let user = message.mentions.users.first()
       if(!user) user = message.author
      let guild = message.guild.id  
      let warn = db.get(`${guild}.account.${user.id}.warn`)
      let lang = db.get(`${guild}.lang`)
       if(lang === undefined){
         lang === "en"
       } 
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
       
   				
      if(warn === null) db.set(`${guild}.account.${user.id}.warn`, 0)
      
      let lastwarn = db.get(`${guild}.account.${user.id}.lastwarn`)
      if(lastwarn === undefined) lastwarn = "#3$2&5"
      let lwarn = db.get(`${guild}.account.${user.id}.lastwarntime`)
      if(lwarn === undefined) lwarn = "#3$2&5"
    
    if(lastwarn !== "#3$2&5"){
      const Embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Warny: ${user.tag}`)
      .setDescription(`Ilość: \`${warn}\`\n \nOstatni warn: \nCzas: \`${lwarn}\` \nPowód: \`"${lastwarn}"\``)
      message.channel.send(Embed)
      }else{
        
 
         const Embed = new MessageEmbed()
.setColor("RANDOM")
.setAuthor(`Warny: ${user.tag}`)
.setDescription(`Ilość \`${warn}\`\n \n[Brak ostatniego warna]`)
    message.channel.send(Embed)
        
        
        
        
        
      } 
          }
          
    };