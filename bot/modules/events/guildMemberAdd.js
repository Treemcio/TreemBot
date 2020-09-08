module.export = function(member){
  let lang = db.get(`${member.guild.id}.lang`)
 
   if(lang === null){
         db.set(`${message.guild.id}.lang`, "en")
       
       }
       if(lang === undefined){
         db.set(`${message.guild.id}.lang`, "en")
       }
       lang = db.get(`${member.guild.id}.lang`)
       let l = require(`/home/runner/TreemBot-own/assets/language/${lang}.json`)
    
    let wel = db.get(`${member.guild.id}.msgwel`)
    if(wel === undefined) wel = l.welcome
    

  let chan = db.get(`${member.guild.id}.welchannel`)
  if(chan === undefined || !chan) return
	const channel = member.guild.channels.cache.get(chan)

const { createCanvas, loadImage } = require('canvas')
      const { Image } = require('canvas')
      const { registerFont } = require('canvas')
registerFont('comic.ttf', { family: 'Comic Sans' })
registerFont('Nasa21.ttf', { family: 'Nasa21' })
 
const canvas = createCanvas(700, 250)
const ctx = canvas.getContext('2d')
 
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px Comic Sans`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

const img = new Image()
img.onload = () => ctx.drawImage(img, 0, 0, 700, 250)
img.onerror = err => { throw err }
img.src = '/home/runner/TreemBot-own/weltlo.jpg';




 

ctx.strokeStyle = '#fc0352';
	// Draw a rectangle with the dimensions of the entire canvas
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

let user = client.users.cache.get(member.id)


ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#000';
	ctx.fillText(`${user.username}!`, canvas.width / 2.5, canvas.height / 1.8);


ctx.font = '35px Comic Sans';
	ctx.fillStyle = '#000';
	ctx.fillText(`${wel}`, canvas.width / 2.5, canvas.height / 3.5);



	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

var fs = require('fs');
var Request = require('pixl-request');
var Canvas = require('canvas');

var url = member.user.displayAvatarURL({format: "png"});

var request = new Request();
request.get( url, function(err, resp, data) {
	if (err) throw err;
	
	var img = new Image();
	img.src = data;
	
	
	ctx.drawImage(img, 25, 25, 200, 200);
	canvas.createPNGStream().pipe(fs.createWriteStream('welcome.png'));
})
setTimeout(welcome, 1000)
function welcome(){
const attachment = new Discord.MessageAttachment('welcome.png');

	channel.send(attachment);
}


}