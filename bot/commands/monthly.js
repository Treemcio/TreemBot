const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'monthly',
    description: 'Miesięczne pieniążki',
     aliases: [' '],
     usage: ['&monthly'],
     cooldown: '30 dni',
     cat: 'eco',
    execute(message, args) {
      
    

    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 2592000000; // 24 Hours in ms.
    let amount = 1000; // How much user will get it in their dailies.

    let lastMonthly = db.get(`lastMonthly.${message.author.id}`);
    let buck = db.get(`account.${message.author.id}.balance`);

    try {
        
        if (lastMonthly !== null && cooldown - (Date.now() - lastMonthly) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastMonthly));

            let days = pad_zero(timeObj.days).padStart(2, "0")
                hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `${hours}h:${mins}m:${secs}s`;
            
            const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`⏱️ Odebrałeś dzisiaj pieniążki\n Proszę poczekaj [•${finalTime}•].`)
         
         const Embeddays = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Odebrałeś dzisiaj pieniążki\n Proszę poczekaj [•${days}dni•].`)
         
     const Embeder = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`**${message.author.tag}**, odebrałeś $1000`)
.setFooter("(◔-◔)/") 

      if(days === 00) return message.channel.send(Embed)
      if(days > 1) return message.channel.send(Embeddays)
        } else {
            db.set(`lastMonthly.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            return message.channel.send(Embeder);
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`Oopsie, Nieznany error:\n ${error}`);
    }
    }
}