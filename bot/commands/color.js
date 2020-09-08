
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client()
module.exports = {
    name: 'color',
    description: 'Pokazuje kolor',
    aliases: [' '],
    cat: 'pods',
    execute(message, args) {
    
      let color = args.slice(0).join(" ");
      
      
    
     
     
      
      
     
     const Embedg = new MessageEmbed()
.setColor(`#${color}`)
.setAuthor(`Kolor: \n#${color}\n<=`)

     
     
      message.channel.send(Embedg).then(() => {
        message.delete({ timemout: 5000})})

     
     
     
     
    


    }
};