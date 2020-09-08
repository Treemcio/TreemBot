const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: 'coin',
    description: 'Gra pieniężna',
     aliases: ['coinflip'],
     usage: ['&coin <kwota>'],
     cooldown: '5min',
     cat: 'eco',
    execute(message, args) {
      
    

    const amount = parseInt(args[0]);
    const result = Math.floor(Math.random() * 10);
    const balance = db.get(`account.${message.author.id}.balance`);

    if (!amount) return message.channel.send("Podaj ilość pieniążków.");
    if (isNaN(amount)) return message.channel.send("To jest jest numer.");
    if (amount > balance || !balance || balance === 0) return message.channel.send(`Nie masz tyle pieniądzy. Stan konta: **${balance}**`);
    
    // Optional:
    if (amount < 25){ return message.channel.send("Nie możesz zagrać. Minimum: **$25**.");
}else{
    let cooldown = 5000; // 10 Seconds.
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = db.get(`lastGamble.${message.author.id}`);

    if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastGamble));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        return message.channel.send(`⏱️ Poczekaj jeszcze **${second}** sekund`);
    }
let wygrana = (Math.floor(amount / 2 * 3))



    // 40:60
    if (result < 6) {
        db.set(`lastGamble.${message.author.id}`, Date.now());
        db.subtract(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`Ahh. Straciłeś **$${amount}**. Może następnym razem.`);
    } else if (result > 4) {
        db.set(`lastGamble.${message.author.id}`, Date.now());
        db.add(`account.${message.author.id}.balance`, wygrana);
        return message.channel.send(`Woohoo! Wygrałeś **$${wygrana}**! Gratuluję ${message.author.username}!`);
    }
    }
    }
}