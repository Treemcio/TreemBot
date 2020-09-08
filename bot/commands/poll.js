const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'poll',
    description: 'Głosowanie',
    usage: ['&poll <tekst>'],
    cat: 'mod',
    execute(message, args) {
  
  let user = message.author
  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(` nie możesz tego zrobić`);
  }
      let gło = args.slice(0).join(" ");
 

   
      
      const Embed = new MessageEmbed()
      .setColor("#0000ff")
      .setAuthor(`\n${user.username} rozpoczął głosowanie`)
      .setTitle(" ")
      .setDescription(`${gło}`)
      
    
     
    
      
      
      message.delete()
      message.channel.send(Embed).then(message => {
      message.react(`✅`)
      message.react(`❌`)
      
      setInterval(nwm, 1000)
      
      
      });
    }
};