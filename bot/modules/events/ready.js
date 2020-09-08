let chalk = require("chalk")
let fs = require("fs")

module.exports = function(client, cmds, langu, config){
  let prefixy = config.cooldown_prefix
  if(prefixy === undefined) prefixy = 6000
  
  let lolik = 0
  setInterval(lol, 1000)
  function lol(){
    lolik++
    if(lolik >= prefixy){
      lolik = 0
      
      let pres = require("/home/runner/TreemBot-own/assets/settings/presences.json")
  let liczba = Math.floor(Math.random(1) * 10)
  let nam = pres[`${liczba}`]
  if(nam === undefined) nam = "🌻"
  client.user.setActivity(` | ${nam}`)
  console.log(chalk.bold.bgCyan(`${symbols.info} Zmieniono status na: "${nam}"`))
    }
  }

            
  let cldw;
  if(prefixy <= 59) cldw = prefixy + "s"
if(prefixy >= 60 && prefixy <= 3599) cldw = Math.floor(prefixy / 60) + "min"
if(prefixy >= 3600) cldw = Math.floor(prefixy / 3600) + "h"

  console.log(chalk.bgBlack.bold.white(`Cooldown prefixu: ${cldw}`))
let pres = require("/home/runner/TreemBot-own/assets/settings/presences.json")
  let liczba = Math.floor(Math.random(1) * 10)
  let nam = pres[`${liczba}`]
  client.user.setActivity(` | ${nam}`)
  
  
  
//}
  

  

  console.groupEnd()
  console.log(chalk.bold.black.bgHex('#d48881')(`--------------------------------------------------------\n|                  Ilość komend:  ${cmds}                   |\n|                  Ilość języków: ${langu}                    |\n--------------------------------------------------------`))
 
 
  console.log(chalk.black.bgWhite(`               •Zalogowano ${client.user.tag}•               \n       Jestem na ${client.guilds.cache.size} serwerach i obsługuję ${client.users.cache.size} ludzi!     `));
  console.log(chalk.black.bgWhite(`•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°`));
 
 
 let users = JSON.stringify(client.users, null, 2)
 let guilds = JSON.stringify(client.guilds, null, 2)
 let options = JSON.stringify(client.options, null, 2)
  fs.writeFileSync('./assets/json/options.json', options)
  fs.writeFileSync('./assets/json/users.json', users)
  fs.writeFileSync('./assets/json/guilds.json', guilds)
 
}