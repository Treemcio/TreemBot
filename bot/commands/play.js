const Discord = require("discord.js")
const client = new Discord.Client()

module.exports = {
    name: 'play',
    description: 'Zagraj muzykę',
    cooldown: "0",
    aliases: ['p'],
    usage: [' '],
    cat: 'music',
   execute(message, args, servers) {
     				
   //PREFIX🦑
       let guild = message.guild.id;
       
   //perms💰🐬
   		let nmb = 0;
   		let songUrl;
   				
   			let song = args.join(" ")	
  message.delete({timeout: 250}) 				
if(!song) return message.channel.send(`You did not specify a query!`);
        if(!message.member.voice.channel) return message.channel.send(`You are not in a voice channel!`);
      
      
      let ytdl = require("ytdl-core")
      
      if(!servers[guild]) servers[guild] = {
              queue: [],
              dispacher: undefined,
              playing: 0,
              volume: 50
      }
       let server = servers[guild]
      
      let voiceChannel = message.member.voice.channel
      
      
      let m = message
       
       const ytsr = require("ytsr")
       ytsr.do_warn_deprecate = false
       
       //LINK ❌
       if(song.includes("https://")){
         let urls
         if(song.includes("https://youtu.be/")){
         urls = song.replace("https://youtu.be/", "https://www.youtube.com/watch?v=")
         }else if(song.includes("https://www.youtube.com/watch?v=")){
           urls = song
         }
         if(urls === undefined){
           return message.channel.send("Podaj prawidłowy link do filmu na Youtube")
           }
           
         
         
   let queue = server.queue
   ytdl.getInfo(urls, function(err, info) {
      

      
     if(!queue[0]){
       queue.push(song = {
         title: info.title,
          url: urls,
          repeat: false
       })
      play(urls)
     }else{
       const Embedplus = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Dodano \`${info.title}\` do kolejki`)

message.channel.send(Embedplus)
       queue.push(song = {
         
         title: info.title,
         url: urls,
         reapeat: false
       })
     
     }
     
      
      
      
      
}).catch(err => {
  
})
        //TEKST❌ 
       }else{
         var options = {
      limit: 10,
    }
       ytsr(song, options, function(e, res){
      if(e){
        return message.channel.send("Nie znaleziono piosenki")
      }
      
      
      
     
       
      let res1 = ""
      let res2 = ""
      let res3 = ""
      res1 = res.items.filter(i => i.type === "video")[0]
      res2 = res.items.filter(i => i.type === "video")[1]
      res3 = res.items.filter(i => i.type === "video")[2]
   
  let title1 = res1.title
 let title2 = res2.title
 let title3 = res3.title
   
      if(!res1) return message.channel.send(`Brak piosenki \`${song}\``)
     const Embed = new Discord.MessageEmbed()
.setColor("#402d5c")
.addField(`\`1#\` **\`${title1}\`**`, `\`2#\` **\`${title2}\`**`)
.addField(`\`3#\` **\`${title3}\`**`, `** **`)
.setFooter("Zaznacz reakcje w ciągu 30s")
message.channel.send(Embed).then(message => {
  Promise.all([
message.react('1️⃣'),
message.react('2️⃣'),
message.react('3️⃣'),
message.react('❌')
])
 


  const filter = (reaction, user) => {
	return ['3️⃣', '2️⃣', '1️⃣', '❌'].includes(reaction.emoji.name) && user.id === m.author.id
		};
 

message.awaitReactions(filter, {max: 1, time: 30000, errors: ['time']}).then(collected => {
        const reaction = collected.first();



        if (reaction.emoji.name === '1️⃣') {
            songUrl = res1.link
            nmb = 1
            message.delete({timeout: 100})
     
        }
        if (reaction.emoji.name === '2️⃣'){
            songUrl = res2.link
            nmb = 2
            message.delete({timeout: 100})
         
        }
        if (reaction.emoji.name === '3️⃣'){
         songUrl = res3.link 
         nmb = 3
         message.delete({timeout: 100})
        
        }
        if (reaction.emoji.name === '❌'){
          return message.delete({timeout: 500})
        
        }
        
        
     
        
   let queue = server.queue
   ytdl.getInfo(songUrl, function(err, info) {
      

      
     if(!queue[0]){
       queue.push(song = {
         title: info.title,
          url: songUrl
        
       })
      play(songUrl)
     }else{
       const Embedplus = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Dodano \`${info.title}\` do kolejki`)

message.channel.send(Embedplus)
       queue.push(song = {
         
         title: info.title,
         url: songUrl
        
       })
     
     }
     
      
      
      
      
}).catch(err => {
  
})
 })
 .catch(collected => {
      const Embed30 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`\`Nie zdążyłeś wybrać w ciągu 30 sekund, spróbuj ponownie\``)

       return message.edit(Embed30)
       message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
})
      
     

})


       })
       }
      
      
       //Koniec else
      function play(song){
    let voiceChannel = message.member.voice.channel
    
         
     
    
     voiceChannel.join()
  .then(connection => {
let stream = ytdl(song, {filter: 'audioonly'})
server.dispatcher = connection.play(stream, { volume: server.volume / 100 })
let qe = server.queue[0]

   server.dispatcher.on('finish', () => {
      
	 server.playing = 0
      server.queue.shift()
   let q = server.queue[0]
  
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
   
       }
       
       
          