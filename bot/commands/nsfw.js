const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")
const ms = require("parse-ms")


module.exports = {
    name: 'nsfw',
    description: 'Pokazuje zdjęcie nsfw',
    aliases: [' '],
    usage: ['&nsfw'],
    cat: 'nsfw',
       execute(message, args) {
          let lang = db.get(`${message.guild.id}.lang`)
       if(lang === undefined){
         lang === "en"
       } 
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
        
           
               if (!message.channel.nsfw) return message.channel.send(l.noNSFW).then(message => {
              message.delete({timeout: 5000})
              
            })
 let lic;
         const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
// getting real images
DabiClient.nsfw.real.random().then(json => {
  let url = json.url
 const Embed = new MessageEmbed()
.setColor("#402d5c")
.setImage(url)
.setFooter(message.author.tag, message.author.displayAvatarURL())
    message.channel.send(Embed)
    })

}
}