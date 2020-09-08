const Discord = require("discord.js")

module.exports = {
    name: 'rate',
    description: 'Bot wyceni użytkownika',
    usage: '&rate <user>',
    cat: 'fun',
    execute(message) {
      let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Napisz kogo!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

const Embed = new Discord.MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Daję użytkownikowi ${ratus.user.username} ocenę ${result}/10`)
.setFooter("(◔-◔)/")
message.channel.send(Embed);

    }
};