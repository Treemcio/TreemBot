const { MessageEmbed } = require("discord.js")

const Embedg = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Zatrzymywanie...`)
.setFooter("(◔-◔)/")
 
 




module.exports = {
    name: 'stopbot',
    description: 'Zatrzymuje bota',
    owner: true,
    cat: 'own',
    execute(message, args) {
      if(message.author.id === "349836977719214081"){
        message.channel.send(Embedg).then(() => {
        process.exit(1);
          })
        
      
      }else{
        message.channel.send("Nie jesteś właścicielem bota, i nie możesz użyć tej komendy")
      }
    }
};