const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const client = new Discord.Client()

module.exports = {
    name: 'send',
    description: 'Wysyła wiadomość dm do kogoś',
    aliases: ['pv', 'dm'],
    usage: '&send <user> <msg>',
    cat: 'mod',
    execute(message, args) {
      if(message.member.hasPermission("MANAGE_MASSAGE")){
  let user = message.mentions.users.first()
  if(!args[0]) return message.channel.send("Wskaż osobę")
  if(!user){
  user = message.guild.members.cache.get(args[0]).user
  }
  if(!user) return message.channel.send("Podaj prawidłowego użytkownika")
const gowno = args.slice(1).join(" ")
if(user.id === 349836977719214081) return message.channel.send("Nie możesz napisać do właściciela bota, jeżeli masz jakiś problem z botem napisz &contact <msg>")

if(!gowno) return message.channel.send("Podaj wiadomość")

const Embed = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(gowno)
.setFooter(`Wysłał: ${message.author.tag} (◔-◔)/`)

const Embedd = new MessageEmbed()
.setColor("#402d5c")
.setAuthor(`Wysłano "${gowno}" do ${user.tag}`)
.setFooter("(◔-◔)/")

message.delete()
message.channel.send(Embedd).then(message => {
  message.delete({ timeout: 5000 })
setTimeout(msgedit, 1000)
function msgedit(){
user.send(Embed)


}

});
}
    }
};