const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")
const ms = require("parse-ms")

module.exports = {
    name: 'addxp',
    description: 'Dodaje xp',
     aliases: [' '],
     owner: true,
     usage: ['&addxp <user> <xp>'],
     cat: 'own',
     execute(message, args) {
   //perms💰🐬
   let bperms = db.get(`${message.author.id}.upr`)
   if(bperms === undefined || null){
   		db.set(`${message.author.id}.upr`, 1)	
   		bperms = 1	
   				}
   				
   				
       //COMMAND
       let cmdperms = 6
       if(bperms <= cmdperms) return message.channel.send(`Musisz mieć uprawnienia bota na poziomie ${cmdperms}`)
   
    
        user = message.mentions.users.first();
         
          
     if (!user && args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
     }
    if(!user){
    return message.channel.send("Podaj osobę!") 
    
    }else{
      if(!args[1]){
        return message.channel.send("Podaj ilość")
      }
    }

    if (user.bot || user === client.user) {
        return message.channel.send("Ten użytkownik jest botem");
        // If the user was a bot, ignore it.
    }
 let xpt;   
if(args.slice(1) !== ""){
     xpt = args.slice(1)
}else{
  xpt = 1
}  
    
  
     let nextlvl = db.get(`account.${user.id}.nextxp`) 
 
  let lvl = db.get(`account.${user.id}.lvl`) 
  if(lvl === undefined) lvl = 1
    if(nextlvl === null || nextlvl === NaN){
      nextlvl = 0
      if(lvl === 1) nextlvl = 250;
      if(lvl !== 1) nextlvl = Math.floor(lvl * 250 + lvl * 5 / 2)
      db.set(`account.${user.id}.nextxp`, nextlvl)
    }
    message.channel.send(`${lvl} - ${nextlvl}`)
    
    
 
  
  let xp = db.get(`account.${user.id}.xp`)
  let lol = xpt + xp
if(xp >= nextlvl){
  return message.channel.send(`Ten poziom XP: **${xpt}** jest większy, niż oczekiwany poziom xp użytkownika do następnego levela **${nextlvl}**`)
}else{
db.add(`account.${user.id}.xp`, xpt)
xp = db.get(`account.${user.id}.xp`)

global.progressBar = (value, maxValue, size) => {
  const percentage = value / maxValue; // Calculate the percentage of the bar
  const progress = Math.round((size * percentage)); // Calculate the number of square caracters to fill the progress side.
  const emptyProgress = size - progress; // Calculate the number of dash caracters to fill the empty progress side.

  const progressText = '▇'.repeat(progress); // Repeat is creating a string with progress * caracters in it
  const emptyProgressText = ':'.repeat(emptyProgress); // Repeat is creating a string with empty progress * caracters in it
  const percentageText = Math.round(percentage * 100) + '%'; // Displaying the percentage of the bar

  const bar = '```[' + progressText + emptyProgressText + ']' + percentageText + '```'; // Creating the bar
  return bar;
}
  var progressbar = progressBar(xp, nextlvl, 20);

    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTitle(`Dodano +${xpt}xp dla ${user.tag}`)
    .setDescription("XP:")
    .addField(`\`${xp}/${nextlvl}\``, `${progressbar}`)
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    .setTimestamp(new Date) // Optional :)
   return message.channel.send(embed);
   
}
}
}