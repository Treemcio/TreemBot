const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client()
module.exports = {
    name: 'rolecolor',
    description: 'Ustaw kolor roli',
    aliases: ['rc ', 'rcolor'],
    usage: '&rolecolor <role> <color>',
    cat: 'mod',
    execute(message, args) {
      let role = message.mentions.roles.first()
      let color = args.slice(1).join(" ");
     
    if(!role) return message.channel.send("Podaj rolę")  
      
    let botrole = message.guild.roles.cache.find(role => role.name === "TreemBot")
if(role.position > botrole.position){
    return message.channel.send(`Rola ${role} ma wyższą pozycję, niż ${botrole}, daj ${botrole} wyżej niż ${role}`)
}
     
     if(message.member.hasPermission("MANAGE_ROLES")){
      
      role.setColor(`#${color}`)
     
     const Embedg = new MessageEmbed()
.setColor(`#${color}`)
.setAuthor(`Wyznaczono kolor roli ${role.name} na \n#${color}\n<=`)

     const Embeduc = new MessageEmbed()
.setColor(`#${color}`)
.setAuthor(`Ustawiono #${color}!`)
.setFooter("(◔-◔)/")
     
     message.delete()
      message.channel.send(Embedg).then(message => {
        message.delete({ timeout: 2500})})
    setTimeout(rc, 2600)
    function rc(){
     role.setColor(`#${color}`).then(() => {
        message.channel.send(Embeduc)})
    }
     
     
     
     
     


 

}else{
  message.channel.send("Nie masz uprawnień 'MANAGE ROLES'")
}
    }
};