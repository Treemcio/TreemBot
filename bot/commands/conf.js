const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("/home/runner/TreemBot-own/assets/settings/config.json");

module.exports = {
    name: 'conf',
    description: 'Pokazuje config',
    cooldown: "0",
    aliases: ['config'],
    usage: ['&conf'],
    cat: 'own',
     execute(message, args) {
   //PREFIX🦑
       let guild = message.guild.guild;
       let prefix = db.get(`${guild}.prefix`);
       if(prefix === undefined) prefix = config.prefix;
       
       //COMMAND
      let bperms = db.get(`${message.author.id}.upr`)
   if(bperms === undefined || null){
   		db.set(`${message.author.id}.upr`, 1)	
   		bperms = 1	
   				}
   				
       //COMMAND
       let cmdperms = 5
       if(bperms <= cmdperms) return message.channel.send(`Musisz mieć uprawnienia bota na poziomie ${cmdperms}`)
       
       let admins = config.admins
       if(admins === undefined) admins = "#"
      
       let token = config.token
       let tk = token.substr(0, 5) + "*******************"
       const Embed = new MessageEmbed()
.setColor("RANDOM")
.setAuthor(`./assets/config.json`)
.addField(`Prefix: [\`${config.prefix}\`]`, `TOKEN: [\`${tk}\`]`)
.addField(`Owner: [\`${config.owner}\`]`, `Admins: [\`${admins}\`]`)

message.delete()
message.channel.send(Embed).then(message => {
  message.delete({ timeout: 5000 })
})
       
       
          }
};
