const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")
const ms = require("parse-ms")

module.exports = {
    name: 'profil',
    description: 'Pokazuje profil',
     aliases: ['money', 'account', 'rank', 'profile'],
     usage: ['&profil / &profil <user>'],
     cat: 'pods',
     execute(message, args) {
       let guild = message.guild.id
       let lang = db.get(`${guild}.lang`)
       if(lang === undefined){
         lang === "en"
       } 
         let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
        let user;
        let arg = args[0]
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (arg) {
        user = message.guild.members.cache.get(arg).user
    } else {
        user = message.author;
    }

   
   
    let xp = db.get(`account.${user.id}.xp`);
    if (!xp) xp = 0;
    else{
      xp = xp
    }
    
    let lvl = db.get(`account.${user.id}.lvl`);
    if (!lvl) lvl = 1;
    
    
    let nextxp = db.get(`account.${user.id}.nextxp`)
    if(nextxp === null){
    if(lvl === 1) nextxp = lvl * 250
    if(lvl >= 2) nextxp = Math.floor(lvl * 250 + lvl * 5 / 2)
}
    
    if(nextxp === undefined){
    if(lvl === 1) nextxp = lvl * 250
    if(lvl >= 2) nextxp = Math.floor(lvl * 250 + lvl * 5 / 2)
}

if(xp >= nextxp){
  
  lvl = lvl + 1
  xp = 1
    db.add(`account.${user.id}.lvl`, 1)
    
    db.set(`account.${user.id}.xp`, 1)
    db.set(`account.${user.id}.nextxp`, Math.floor(lvl * 250 + lvl * 5 / 2))
    }else{
    
    
    
    
    
    let money = db.get(`account.${user.id}.balance`)
    if(!money) money = 25, db.set(`account.${user.id}.balance`, 25)
    
    
      const percentage = xp / nextxp; // Calculate the percentage of the bar
  let procent = Math.round(percentage * 100)
  
    
    
  if(!user.bot){
      const { createCanvas, loadImage } = require('canvas')
      const { Image } = require('canvas')
      const { registerFont } = require('canvas')
registerFont('comic.ttf', { family: 'Comic Sans' })
registerFont('Nasa21.ttf', { family: 'Nasa21' })
 
const canvas = createCanvas(500, 280)
const ctx = canvas.getContext('2d')
 

// Write "Awesome!"
const img = new Image()
img.onload = () => ctx.drawImage(img, 0, 0, 500, 280)
img.onerror = err => { throw err }
img.src = '/home/runner/TreemBot-own/tlo.jpg';




 

ctx.strokeStyle = '#fc0352';
	// Draw a rectangle with the dimensions of the entire canvas
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

let name = user.username
if(name.length >= 16){
 name = `${name.substr(0, 15)}...`
}
let namel = name.length;
let xd = 0;
if(name.length <= 10) xd = 20
if(name.length <= 15 && namel >= 11) xd = 17
if(name.length <= 16) xd = 15

ctx.font = `${xd}px "Comic Sans"`
ctx.fillText(`${name}`, canvas.width / 25.0, canvas.height / 1.07)
ctx.quality = "bilinear"

ctx.font = '19px "Nasa21"'
ctx.fillText(`#${user.discriminator}`, canvas.width / 3.15, canvas.height / 1.07)

ctx.font = '25px "Comic Sans"'
ctx.fillText(`Level:`, canvas.width / 2.7, canvas.height / 1.9)
ctx.quality = "bilinear"

ctx.font = '20px "Nasa21"'
ctx.fillText(`${lvl}`, canvas.width / 1.9, canvas.height / 1.9)
ctx.quality = "bilinear"


	
ctx.font = '25px "Comic Sans"'
ctx.fillText(`Money:`, canvas.width / 2.7, canvas.height / 3.5)
ctx.quality = "bilinear"

ctx.font = '20px "Nasa21"'
ctx.fillText(`$${money}`, canvas.width / 1.8, canvas.height / 3.5)
ctx.quality = "bilinear"


ctx.font = '25px "Comic Sans"'
ctx.fillText(`XP:`, canvas.width / 2.7, canvas.height / 1.35)
ctx.quality = "bilinear"

ctx.font = '20px "Nasa21"'
ctx.fillText(`${xp}/${nextxp} ~ ${procent}%`, canvas.width / 2.2, canvas.height / 1.35)
ctx.quality = "bilinear"



	message.delete()
	
	
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(86, 127, 70, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

var fs = require('fs');
var Request = require('pixl-request');
var Canvas = require('canvas');

var url = user.displayAvatarURL({format: "png", size: 128});

var request = new Request();
request.get( url, function(err, resp, data) {
	if (err) throw err;
	
	var img = new Image();
	img.src = data;
	
	
	ctx.drawImage(img, 12.0, 52.0, 150, 150);
	canvas.createPNGStream().pipe(fs.createWriteStream('profil.png'));
});
}else{
        const { createCanvas, loadImage } = require('canvas')
      const { Image } = require('canvas')
      const { registerFont } = require('canvas')
registerFont('comic.ttf', { family: 'Comic Sans' })
registerFont('Nasa21.ttf', { family: 'Nasa21' })
 
const canvas = createCanvas(500, 280)
const ctx = canvas.getContext('2d')
 

// Write "Awesome!"
const img = new Image()
img.onload = () => ctx.drawImage(img, 0, 0, 500, 280)
img.onerror = err => { throw err }
img.src = '/home/runner/TreemBot-own/tlo.jpg';




 

ctx.strokeStyle = '#fc0352';
	// Draw a rectangle with the dimensions of the entire canvas
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

let name = user.username
if(name.length >= 11){
 name = `${name.substr(0, 10)}...`
}
let namel = name.length;
let xd = 0;
if(name.length <= 10) xd = 16
if(name.length <= 15 && namel >= 11) xd = 13
if(name.length <= 10) xd = 11

ctx.font = `${xd}px "Comic Sans"`
ctx.fillText(`[BOT] ${name}`, canvas.width / 25.0, canvas.height / 1.07)
ctx.quality = "bilinear"

ctx.font = '19px "Nasa21"'
ctx.fillText(`#${user.discriminator}`, canvas.width / 3.15, canvas.height / 1.07)


ctx.font = '25px "Comic Sans"'
ctx.fillText(`Level:`, canvas.width / 2.7, canvas.height / 1.9)
ctx.quality = "bilinear"

ctx.font = '20px "Nasa21"'
ctx.fillText(`99999999`, canvas.width / 1.9, canvas.height / 1.9)
ctx.quality = "bilinear"


	
ctx.font = '25px "Comic Sans"'
ctx.fillText(`Money:`, canvas.width / 2.7, canvas.height / 3.5)
ctx.quality = "bilinear"

ctx.font = '20px "Nasa21"'
ctx.fillText(`$0`, canvas.width / 1.8, canvas.height / 3.5)
ctx.quality = "bilinear"


ctx.font = '25px "Comic Sans"'
ctx.fillText(`XP:`, canvas.width / 2.7, canvas.height / 1.35)
ctx.quality = "bilinear"

ctx.font = '20px "Nasa21"'
ctx.fillText(`∞/∞ ~ 100%`, canvas.width / 2.2, canvas.height / 1.35)
ctx.quality = "bilinear"



	message.delete()
	
	
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(86, 127, 70, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

var fs = require('fs');
var Request = require('pixl-request');
var Canvas = require('canvas');

var url = user.displayAvatarURL({format: "png", size: 128});

var request = new Request();
request.get( url, function(err, resp, data) {
	if (err) throw err;
	
	var img = new Image();
	img.src = data;
	
	
	ctx.drawImage(img, 12.0, 52.0, 150, 150);
	canvas.createPNGStream().pipe(fs.createWriteStream('profil.png'));

})
}


setTimeout(wysyłanie, 500)
function wysyłanie(){
const { Client, MessageAttachment } = require('discord.js');
const attachment = new MessageAttachment("profil.png");
    // Send the attachment in the message channel
    
    message.channel.send(attachment).then(message => {
      message.delete({timeout: 15000})
    })

   
    }
    }
    
    
          }
     }
