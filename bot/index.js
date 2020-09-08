const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('web'));

app.get('/', (req, res) => {
  res.sendFile('web/index.html');
});




//🍓🍇🥥🍓🥑🍒🥑🍋🥑🍋🥑🥑🍋🍋🥞🥕🥬🥕🥬🍄🥥🍋🥥🥥
const Discord = require("discord.js")
const config = require("./assets/settings/config.json")
const db = require("quick.db");
const ms = require("parse-ms");
const fs = require("fs")
const { MessageEmbed } = require('discord.js')
const Client = require('./client/Client');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { Permissions } = require('discord.js');
const chalk = require("chalk")
let prefix = config.prefix
const symbols = require('log-symbols')
let s = symbols.success
var date = new Date();
var day = date.getDay()
var month = date.getMonth()
var year = date.getFullYear()
let hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()

//Error🎶
if(!config.token) console.log(symbols.error + "Musisz dodać token w ./assets/settings/config.json"), process.exit()
if(!config.prefix) console.log(symbols.error + "Dodaj prefix w ./assets/settings/config.json"), process.exit()
if(!config.youtube_api) console.log(symbols.error + "Nie masz uwzględnionego API Youtube w configu"), process.exit()


//🎶🎶🎶🎶🎶
let time = `[${year}-${month}-${day} ${hour}:${minute}:${second}]`

console.groupEnd()
app.listen(3000, () => {
  console.clear(3000)
  console.log(chalk.bold.hex("#e87bdb")(`_______________________________________________\n`))
  console.log(chalk.bgBlue(`${time} ` + chalk.bgBlack` Strona wystartowała\n`))
})
//💮💮💮💮💮💮💮💮💮💮💮💮💮💮

let cmds = 0
console.time(chalk.bold.red("Czas załadowania"));


  fs.readdir("./commands/", (err, files) => {
console.log(chalk.bold.bgBlack("Commands:"))
  
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
   console.log(symbols.warning + "Nie znaleziono komend.");
    
  }
  
  jsfile.forEach((f, i) =>{
    let kmd = require(`./commands/${f}`);
  
 
    if(kmd.cat === 'nsfw'){
    console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex("#5c2b0d")(` 🔞 [NSFW] ${f}`))
    }else if(kmd.cat === 'mod'){
    console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex("#03f8fc")(` 🛡️ [MOD] ${f}`))
    }else if(kmd.cat === 'eco'){
    console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex("#03fc57")(` 💸 [ECO] ${f}`))
    }else if(kmd.cat === "own"){
    console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex("#fcba03")(` 👑 [OWN] ${f}`))
    }else if(kmd.cat === 'pods'){
    console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex("#e3b598")(` 👤 [BASIC] ${f}`))
    }else if(kmd.cat === 'sys'){
    console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex("#364257")(` 🤖 [SYSTEM] ${f}`))
    }else if(kmd.cat === "fun"){
      console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex("#bf329e")(` ❄️ [FUN] ${f}`))
    }else if(kmd.cat === "music"){
      console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.hex('#bf329e')(` 🎶 [Music] ${f}`))
    }
    cmds++
  });
  });
  
  let langu = 0
  fs.readdir("./assets/language/", (err, files) => {
console.log(chalk.bold.bgBlack("Languages:"))
  
  let jsfile = files.filter(f => f.split(".").pop() === "json")
  if(jsfile.length <= 0){
   console.log("Nie znaleziono języków.");
    langu = 0
  }
  
  jsfile.forEach((f, i) =>{
    let kmd = require(`./assets/language/${f}`);
  
  
  console.log(chalk.bgCyan(`${s} ${time}`) + chalk.bold.blue(`[🧾 ] ${f}`))
langu++
  })
 
  
  
  console.log("")
  console.timeEnd(chalk.bold.red("Czas załadowania"))
  });


  

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

 


//🔴Events❌
let pepega = require("/home/runner/TreemBot-own/modules/events/message.js")
 
client.on("error", function(info){
    console.log(chalk.bold.red(`[!] -> ${info}`));
});

client.on('ready', () => {
  let fun = require("/home/runner/TreemBot-own/modules/events/ready.js")
  fun(client, cmds, langu, config)
  })
  
  

let servers = []

client.on('message', message => {
let fun = require("/home/runner/TreemBot-own/modules/events/message.js")
  fun(message, client, servers)
})

client.on('guildMemberAdd', member => {
let fun = require("/home/runner/TreemBot-own/modules/events/guildMemberAdd.js")
fun(member)
})

client.on('guildMemberRemove', member => {
  let fun = require("/home/runner/TreemBot-own/modules/events/guildMemberRemove")
fun(member)
});
























//dhajiwrisj
client.login(config.token);

