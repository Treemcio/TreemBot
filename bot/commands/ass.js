const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")
const ms = require("parse-ms")

module.exports = {
    name: 'ass',
    description: 'description',
    aliases: [' '],
    usage: ['&ass'],
    cat: 'nsfw',
                  execute(message, args) {
                    let guild = message.guild.id
                    let lang = db.get(`${guild}.lang`)
       if(lang === undefined){
         lang === "en"
       }
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
           message.delete() 
            if (!message.channel.nsfw) return message.channel.send(l.noNSFW).then(message => {
              message.delete({timeout: 5000})
              
            })


                    
                    const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
// getting real images
let lic = 0
DabiClient.nsfw.real.ass().then(json => {
  const Embed = new MessageEmbed()
.setColor("#402d5c")
.setImage(json.url)
.setFooter(message.author.tag, message.author.displayAvatarURL())
    message.channel.send(Embed)

    
   
})
          }
              };