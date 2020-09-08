const { MessageEmbed } = require("discord.js")

const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Brak uprawnień bota do przesuwania użytkownika po kanałach głosowaych`)
.setFooter("(◔-◔)/")

const Embedg = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Wyrzucono!`)
.setFooter("(◔-◔)/")

 const Embedd = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Wskaż osobę, <@user>`)
.setFooter("(◔-◔)/")

const Embedt = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Ta osoba nie jest na kanale głosowym`)
.setFooter("(◔-◔)/")

// Finally, pass some user respons

module.exports = {
    name: 'vkick',
    description: 'Wyrzuć kogoś z kanału głosowego',
    cat: 'mod',
    execute(message, args) {
      if (!message.guild.me.hasPermission('MOVE_MEMBERS')) return message.reply(Embed);

// Get the mentioned user/bot and check if they're in a voice channel:
const member = message.mentions.members.first();
if (!member) return message.channel.send(Embedd);
if (!member.voice.channel) return message.channel.send(Embedt);

// Now we set the member's voice channel to null, in other words disconnecting them from the voice channel.
member.voice.setChannel(null);

// Finally, pass some user response to show it all worked out:
message.channel.send(Embedg);
    }
};