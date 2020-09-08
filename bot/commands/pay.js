const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client()
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'pay',
    description: 'Przelej komuś pieniądze',
     aliases: [''],
     usage: ['&pay <user> <kwota>'],
     cat: 'eco',
    execute(message, args) {
      
    

    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.channel.send("Proszę oznacz osobę albo napisz ID użytkownika.");
    if (user.bot || user === client.user) return message.channel.send("To jest bot.");
    if (user.id === message.author.id || user === message.author) return message.channel.send("Czemu próbujesz wysłać pieniądze do siebie?");

    let amount = parseInt(args[1]);
    if (!amount) return message.channel.send("Podaj ilość pieniążków do przelania.");
    if (isNaN(amount)) return message.channel.send("To nie jest numer.");
    // isNaN = is Not a Number.

    if (!balance || balance == 0) return message.channel.send("Twój portfel jest pusty.");
    if (amount > balance) return message.channel.send(`Nie masz tyle pieniążków. Stan konta: **${balance}**`);
    if (amount === 0) return message.channel.send("Nie możesz nic przelać, daj minimum **$1**.");


    db.add(`account.${user.id}.balance`, amount);
    db.subtract(`account.${message.author.id}.balance`, amount);

const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Przelałeś $${amount} do (${user.tag})`)
.setTitle(`\n`)
.setDescription(`\n`)
.setFooter("\n")

    return message.channel.send(Embed);
    
}
};