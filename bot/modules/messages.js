let Discord = require("discord.js")

module.exports = function (message, msg){
  message.channel.send(msg)
}

module.exports.embed = function (message, msg, color){
  if(!msg) msg = "** **"
  if(!color) color = "RANDOM"
  if(!message) throw Error("Uzasadnij która wiadomość była wysłana, bo nie mogę wysłać wiadomości"), progress.exit()
  const Embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle(msg)
  
  message.channel.send(Embed)
}

module.exports.delete = function (message, time){
  if(!message) throw Error("Uzasadnij wysyłaną wiadomość"), process.exit()
  if(!time) time = 10
  if(!parseInt(time)) throw Error("Podaj timeout w liczbie"), time = 10
  
  message.delete({timeout: time})
}
