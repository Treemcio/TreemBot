const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    name: 'clear',
    description: 'Usuwa [×] wiadomości',
    aliases: ['cc'],
    cat: 'mod',
    execute(message, args) {
       const amount = args.slice(0).join(' ');
     
     
       if(message.member.hasPermission("MANAGE_MESSAGES")) {
       
      

		if (isNaN(amount)) {
			return message.reply('Podaj numer');
		} else if (amount < 1 || amount > 100) {
			return message.reply('Można usunąć pomiędzy 1 a 100 wiadomości.');
		}
		
		const Embed = new MessageEmbed()
		.setColor("#134532")
		.setAuthor(`Usunięto ${amount} wiadomości`)
	
	const Embederr = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Nie można usunąć wiadomość, albo bot nie ma uprawnień, albo wiadomości do usunięcia są starsze niż 14 dni`)
	
	let nwm = 0
		
message.delete()
setTimeout(clear, 500)
function clear(){
  message.channel.bulkDelete(amount).then(() => {
    nwm = 1
  })
  
  
  }
setTimeout(wiad, 1500)
function wiad(){
  if(nwm !== 1){
    message.channel.send(Embederr).then(message => {
      return message.delete({ timeout: 10000})
    })
  }
  if(nwm === 1){
message.channel.send(Embed)
  .then(message => {
    message.delete({ timeout: 3000 }) 
  })
  }
}


  
		
      }else{
        message.reply("Brak uprawnień")
      }	
		}
	};