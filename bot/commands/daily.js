const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'daily',
    description: 'Dzienne pieniążki',
     aliases: [' '],
     usage: ['&daily'],
     cooldown: '24h',
     cat: 'eco',
    execute(message, args) {
      
    

    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 8.64e+7; // 24 Hours in ms.
    let amount = 100; // How much user will get it in their dailies.

    let lastDaily = db.get(`lastDaily.${message.author.id}`);
    let buck = db.get(`account.${message.author.id}.balance`);

    try {
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
          let timeObj = ms(cooldown - (Date.now() - lastDaily));

            
            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `${hours}h:${mins}m:${secs}s`;
            
            const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`⏱️ Odebrałeś dzisiaj pieniążki\n Proszę poczekaj [•${finalTime}•].`)
.setFooter("(◔-◔)/")
         

      
            return message.channel.send(Embed);
        } else {
                const Embeds = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`${message.author.tag}, odebrałeś $250`)

            db.set(`lastDaily.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            return message.channel.send(Embeds);
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`Oopsie, Nieznany error:\n ${error}`);
    }
    }
}