const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'volume',
    description: 'description',
    cooldown: "0",
    aliases: ['setvolume', 'v'],
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
       if(server.playing !== 1) return message.channel.send("Najpierw puść piosenkę")
       if(server.dispatcher === undefined) return message.channel.send("Najpierw puść piosenkę")
       let volume = parseInt(args[0])
       let string = args[0]
       if(!string) return message.channel.send(`\`Głośność serwera ${server.volume}\``)
       
       if(!volume) return message.channel.send("Podaj głośność 1-100")
       if(volume < 1 || volume >= 101) return message.channel.send("Możesz ustawić głośność od 1 do 100")
       let vl = volume / 100
       
       server.dispatcher.setVolume(vl)
       server.volume = volume
       message.channel.send(`Ustawiono głośność ${volume}`)
       
          }
};
