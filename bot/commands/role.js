const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client()

module.exports = {
    name: 'role',
    description: 'Sprawdź informacje o roli',
    aliases: ['roleinfo'],
    usage: '&role <role>',
    cat: 'fun',
    execute(message, args) {
      let inline = true

      let gRole = message.mentions.roles.first()
    if(!gRole) return message.reply("Wskaż rolę!");

    const status = {
        false: "Nie",
        true: "Tak"
      }

    let roleemebed = new MessageEmbed()
    .setAuthor("-------------------------------")
    .setColor("#00ff00")
    .addField("ID", gRole.id, inline )
    .addField("Nazwa", gRole.name, inline)
    .addField("Kolor", gRole.hexColor, inline)
    .addField("Użytkownicy", gRole.members.size, inline)
    .addField("Pozycja", gRole.position, inline)
    .addField("Odzielanie użytkowników", status[gRole.hoist], inline)
    .addField("Wzmianki", status[gRole.mentionable], inline)
    .setFooter(`Wysłał: ${message.author.tag}`)
    
    message.channel.send(roleemebed);
    }
};