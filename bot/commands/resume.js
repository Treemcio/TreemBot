const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'resume',
    description: 'description',
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
              //COMMAND
       if(!servers[guild]) servers[guild] = {
              queue: [],
              dispacher: undefined,
              playing: 0,
              volume: 50
      }

       let server = servers[guild]
       if(server.playing !== 1) return message.channel.send("Najpierw puść piosenkę")
       if(server.dispatcher === undefined) return message.channel.send("Najpierw puść piosenkę")
      
       
      let q = server.queue[0]
       
       server.dispatcher.resume()
       const Embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Odpauzowano \`${q.title}\``)
       
          message.channel.send(Embed)
       
       
       
       
          }
};
