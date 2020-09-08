const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

       

module.exports = {
    name: 'skip',
    description: 'description',
    cooldown: "0",
    aliases: ['s'],
    usage: [' '],
    cat: 'music',
    showhelp: false,
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
      
       let voiceChannel = message.member.voice.channel
       let ytdl = require("ytdl-core")
      server.queue.shift()
      let qupa = server.queue[0]
if(server.queue[0]){
       play(qupa.url)
}else{
  const Embed = new MessageEmbed()
.setColor("RANDOM")
.setTitle("`Zakończono granie ❄️`")

message.channel.send(Embed)
server.dispatcher.destroy()
voiceChannel.leave()
}
function play(song){
    let voiceChannel = message.member.voice.channel
    
    
     voiceChannel.join()
  .then(connection => {
let stream = ytdl(song, {filter: 'audioonly'})
server.dispatcher = connection.play(stream, { volume: server.volume / 100 })
let qe = server.queue[0]

   server.dispatcher.on('finish', () => {
      let q = server.queue[0]
	 server.playing = 0
      server.queue.shift()
   
  
	 if(server.queue[0]){
	play(q.url)
	 }else{
	   const Embedend = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`\`Zakończono granie ❄️\``)
       
     message.channel.send(Embedend)
	   voiceChannel.leave()
	   server.queue = []
	   
	 }
});
server.dispatcher.on('start', () => {
	server.playing = 1
	const Embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Gram teraz:\n\`${qe.title}\``)

message.channel.send(Embed)
});
})
       }
       
          }
};
