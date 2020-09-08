const superagent = require("snekfetch");
const Discord = require('discord.js')

const rp = require('request-promise-native');

const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")
const ms = require("parse-ms")

module.exports = {
    name: 'boobs',
    description: 'Pokazuje zdjęcie',
    cat: 'nsfw',
     aliases: ['bb'],
     usage: ['&boobs'],
     execute(message, args) {
     let lang = db.get(`${message.guild.id}.lang`)
       if(lang === undefined){
         lang === "en"
       } 
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
       
     
        if (!message.channel.nsfw) return message.channel.send(l.noNSFW).then(message => {
              message.delete({timeout: 5000})
              
            })
        
        
  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const lewdembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
      .setFooter(message.author.tag, message.author.displayAvatarURL())


    message.channel.send(lewdembed);
});
          }
    };