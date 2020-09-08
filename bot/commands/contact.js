const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client()
module.exports = {
    name: 'contact',
    description: 'Kontakt do właściciela bota',
    usage: ['&constact <msg>'],
    cat: 'pods',
    execute(msg, args) {
   
  const Embedg = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Podaj wiadomość`)
.setFooter("(◔-◔)/")



    
    let Sender = msg.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return msg.channel.send(Embedg).then(msg => {msg.delete({ timeout: 5000 })});

   let contact = new MessageEmbed()
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Wiadomość kontaktowa z [\`${msg.guild.name}\`]`)
   .setTitle("Wiadomość kontaktowa!")
   .addField("User", Sender, true)
   .addField("User ID: ", Sender.id, true)
   .addField("Message: ", `***${sayMessage}***`)
   .setTimestamp()

    let embed = new MessageEmbed()
    .setColor("#00ff00")
    .setTitle("Wysłano!")
    .setDescription("Twoja wiadomość została wysłana!")
    .addField("Wysłana przez: ", Sender)
    .addField("Wiadomość: ", sayMessage)
    .setFooter("Dziękujemy za wiadomość! ~Treemek#1535!")

    msg.channel.send(embed).then(msg => {msg.delete({ tiemout: 10000})})
const user = msg.guild.members.cache.get('349836977719214081')
 user.send(contact)
 


        msg.delete();
}
    };