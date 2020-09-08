const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'list',
    description: 'description',
    cooldown: "0",
    aliases: ['queue'],
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
const Embedbrak = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Nie ma nic w kolejce")



       let server = servers[guild]
let queue = server.queue
if(!queue[0]) return message.channel.send(Embedbrak)
      
    
      let q1 = queue[0]
      let q2 = queue[1]
      let q3 = queue[2]
      let q4 = queue[3]
      let q5 = queue[4]
      let m6
      if(queue[5]){
       m6 = "..."
      }else{
       m6 = "" 
      }
      let m2
let m3
console.log(q1)
      
       let m1 = "Teraz: " + q1.title
       if(q2){
        m2 = "`2. " + q2.title + "`"
       }else m2 = ""
       if(q3){
       m3 = "`3. " + q3.title + "`"
       }else m3 = ""
       if(q4){
       m3 = "`4. " + q4.title + "`"
       }else m4 = ""
       if(q5){
       m5 = "`5. " + q5.title + "`"
       }else m5 = ""
      
       
       const Embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Pierwsze -+5 muzyki w kolejce")
.setDescription(`\`${m1}\`\n${m2}\n${m3}\n${m4}\n${m5}\n${m6}`)

message.channel.send(Embed)

       
       
       
          }
};
