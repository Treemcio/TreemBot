const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'stop',
    description: 'Zatrzymuje i resetuje kolejkę serwera',
    cooldown: "0",
    aliases: [' '],
    usage: [' '],
    cat: 'music',
     execute(message, args, servers) {
     				
  
       let guild = message.guild.id;
   				
   				let lang = db.get(`${guild}.lang`)
       if(lang === undefined){
         lang === "en"
       } 
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
       
   				
   				
       //COMMAND
       if(!servers[guild]) servers[guild] = {
              queue: [],
              dispacher: undefined,
              playing: 0,
              volume: 50
      }
       
       
       let server = servers[guild]
     
       
       if(server.playing === 1){
         server.playing = 0
         server.queue = []
         if(server.dispatcher !== undefined) server.dispatcher.destroy()
        const Embed = new MessageEmbed()
.setColor("RANDOM")
.setTitle(`Zatrzymano i zresetowano całą kolejkę serwera`)
message.member.voice.channel.leave()
        return message.channel.send(Embed)
       }
       if(server.playing !== 1) return message.channel.send("Nie leci teraz muzyka, musisz ją włączyć, żeby móc ją zatrzymać")
       return
       
          }
};
