const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invite',
    description: 'Wysyła link zaproszeniowy',
    usage: ['&invite'],
    cat: 'pods',
    execute(message) {
      const Embed = new MessageEmbed()
      .setColor("#ff0000")
      .setTitle("[Kliknij, żeby zaprosić]")
      .setURL('https://discordapp.com/oauth2/authorize?client_id=699723721006645389&scope=bot&permissions=997715167')
      .setFooter("(◔-◔)/")
      message.channel.send(Embed)
    }
};