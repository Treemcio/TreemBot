const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")

module.exports = {
    name: 'slots',
    description: 'Automat losujący ',
     aliases: [''],
     usage: ['&slots / &slots info'],
     cooldown: '3s',
     cat: 'eco',
    execute(message, args) {
    let user = message.author
    
    
    
    let cooldown = 3000; // 5 Seconds.
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastSlot = db.get(`lastSlot.${message.author.id}`);

    if (lastSlot !== null && cooldown - (Date.now() - lastSlot) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastSlot));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        
        const Embedws = new Discord.MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Zaczekaj ${second} sekund, automat się przegrzał`)
.setFooter(`${user.username}`, user.displayAvatarURL())
        return message.channel.send(Embedws);
    }

     
      const Embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('SLOTS INFO 💸')
      .setTitle("\n")
      .setDescription(`Płatność za skorzystanie 25$\n🧸 - 5$\n💵 - 20$\n💸 - 50$\n💰 - 100$\n🏦 - 150$`)
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
      let help = args.slice(0).join(" ")
      if(help === "info") return message.channel.send(Embed)
      if(help === "help") return message.channel.send(Embed)
      
      const balance = db.get(`account.${message.author.id}.balance`);
   if (25 > balance || !balance || balance === 0) return message.channel.send("Nie masz $25.");
    
      
      
      
      let los = Math.floor(Math.random() * 21)
      let rzecz;
      let plus;
      if(los <= 4) rzecz = "💰", plus = 100
      if(los <= 7 && los >= 6) rzecz = "💸", plus = 50
    if(los === 5) rzecz = "🏦", plus = 150
     if(los < 11 && los >= 8) rzecz = "💵", plus = 20
      if(los >= 11) rzecz = "🧸", plus = 5
      
     
      let roznica = Math.floor(plus - 25)
      let xd;
      if(roznica > 0) xd = "+" + roznica
      if(roznica < 0) xd = roznica
      
      //🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱
      
      const Embed1 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('KASYNO 💸')
      .setTitle("\n")
      .setDescription(`-----------------------------------------\n] [🧸] [💰] [→${rzecz}←] [💵] [🏦] [`)
      .setFooter(`${xd}$`, user.displayAvatarURL())
      
      const Embed2 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('KASYNO 💸')
      .setTitle("\n")
      .setDescription(`-----------------------------------------\n] [🧸] [🏦] [→${rzecz}←] [💰] [🧸] [`)
      .setFooter(`${xd}$`, user.displayAvatarURL())
      
      const Embed3 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('KASYNO 💸')
      .setTitle("\n")
      .setDescription(`-----------------------------------------\n] [💰] [💸] [→${rzecz}←] [💵] [🧸] [`)
      .setFooter(`${xd}$`, user.displayAvatarURL())
      
      const Embed4 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('KASYNO 💸')
      .setTitle("\n")
      .setDescription(`-----------------------------------------\n] [💵]] [🧸] [→${rzecz}←] [💸] [💵] [`)
      .setFooter(`${xd}$`, user.displayAvatarURL())
      
      
      
      
      
      //🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱
      let embedy = Math.floor(Math.random() * 5)
  
      db.subtract(`account.${message.author.id}.balance`, 25);
      db.add(`account.${user.id}.balance`, plus)
      if(embedy <= 1) message.channel.send(Embed1),  db.set(`lastSlot.${message.author.id}`, Date.now());
      if(embedy === 2) message.channel.send(Embed2),  db.set(`lastSlot.${message.author.id}`, Date.now());
      if(embedy === 3) message.channel.send(Embed3),  db.set(`lastSlot.${message.author.id}`, Date.now());
      if(embedy >= 4) message.channel.send(Embed4),  db.set(`lastSlot.${message.author.id}`, Date.now());
    }
};