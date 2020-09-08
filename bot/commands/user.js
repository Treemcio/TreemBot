const { MessageEmbed } = require("discord.js")
const moment = require('moment');

module.exports = {
    name: 'user',
    description: 'Informacje o kimś',
    aliases: ['userinfo'],
    usage: '&user <user>',
    cat: 'fun',
    execute(message) {
      const user = message.mentions.users.first() || message.author;
   
   let status = ""
   if(user.presence.status === "dnd"){
     status = "Nie przeszkadzać"
   }else if(user.presence.status === "online"){
   status = "Online"
    }else if(user.presence.status === "idle"){
      status = "Zaraz wracam"
    }else if(user.presence.status === "offline"){
    status = "Offline"
    }
   let bocik = ""
   if(user.bot){
     bocik = "Tak"
   }else{
     bocik = "Nie"
   }
   
  const Embed = new MessageEmbed() 
      .setColor("#00000f")
      .setAuthor(`Użytkownik ${user.tag}`)
      .setDescription("•")
      .addField(`ID:`, user.id)
      .addField(`Stworzony:`, user.createdAt.toLocaleString())
    
      .addField('Status:', status)
      .addField("Game:", `${user.presence.game ? user.presence.game.name : 'Brak'}`)
      .addField("Bot:", bocik)
      .setThumbnail(`${user.displayAvatarURL()}`)
      
      message.channel.send(Embed)
    }
};