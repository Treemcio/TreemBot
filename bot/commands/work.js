const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    name: 'work',
    description: 'Zapracuj co 10 minut',
     aliases: [' '],
     usage: ['&work'],
     cat: 'eco',
     cooldown: "10s",
    execute(message, args) {
     let tekst = "" 
      let numert = 0
      numert = Math.floor(Math.random() * 5) + 1  
      if(numert === 1) tekst = "Znalazłeś"
      if(numert === 2) tekst = "Złowiłeś rybę o wartości"
      if(numert === 3) tekst = "Ukradłeś ze sklepu rzecz o wartości"
      if(numert === 4) tekst = "Wypracowałeś sobie"
      if(numert === 5) tekst = "Dostałeś przelew"
      
      let cooldown = 600000; // 5 minut
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = db.get(`lastGamble.${message.author.id}`);

    if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastGamble));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        let minutes = pad_zero(timeObj.minutes).padStart(2, "0");
        if(minutes === 00){
        return message.channel.send(`⏱️Jesteś zbyt zmęczony, poczekaj jeszcze **${second}** sekund`);
        }else{
          return message.channel.send(`⏱️ Jesteś zbyt zmęczony, poczekaj jeszcze **${minutes}:${second}**`)
        }
    }else{
      let amount = (Math.floor(Math.random()*20+1))
        db.set(`lastGamble.${message.author.id}`, Date.now());
        db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`${tekst} **$${amount}**!`);
    }
    
}
};