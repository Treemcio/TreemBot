const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'embed',
    description: 'Wyślij wiadomość',
    usage: '&embed <msg1> | <msg2> | <msg3> | <msg4>',
    cat: 'mod',
    execute(message, args) {
      
     let user = message.author 
      if(!message.member.hasPermission("MANAGE_MESSAGES")){ 
      return message.channel.send(`Nie masz uprawnień "MANAGE MESSAGES" ${user}`)
}else{
  let cmd = args.join(' ').split(' | ')


 

  let emb = new MessageEmbed()
  .setAuthor(cmd[0])
  .setColor("RANDOM")
  .setTitle(cmd[1] || "\n")
  .setDescription(cmd[2] || "\n")
  .setFooter(cmd[3] || "\n")

  message.channel.send(emb)

 
  message.delete();
    }
    }
};