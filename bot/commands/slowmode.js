const ms = require("ms");

module.exports = {
    name: 'slowmode',
    description: 'Ustaw slowmode kanałów s/m/h',
     aliases: [' '],
     usage: ['&slowmode <kanał> <czas> / &slowmode <czas>'],
     cat: 'mod',
    execute(message, args) {
 if (!message.member.permissions.any(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
    return message.channel.send("Oopsie, nie masz uprawnień.");
  }
  
  let channel = message.mentions.channels.first(),
      time = args.slice(1).join(" ");
  
  if (!channel) time = args.join(" "), channel = message.channel;
  // If the user doesn't includes the channel.
  
  if (time === "off") {
    channel.setRateLimitPerUser(0);
    return message.channel.send(`<#${channel.id}> slowmode wyłączony`);
  }else if(time === "0"){
    channel.setRateLimitPerUser(0)
    return message.channel.send(`<#${channel.id}> slowmode wyłączony`)
  }else{
  
  if (!time) return message.channel.send("Proszę podaj czas slowmode.");
  
  let convert = ms(time); // This will results the milliseconds.
  let toSecond = Math.floor(convert / 1000); // This will convert the ms to s. (seconds)
  
  if (!toSecond || toSecond === undefined) return message.channel.send(`Błędny format ${time}. Poprawny: 1s/1m/1h!`);
  
  if (toSecond > 21600) return message.channel.send("Czas nie może być dłuższy niż 6h.");
  else if (toSecond < 1) return message.channel.send("Czas musi być dłuższy niż 1s.");
  
  channel.setRateLimitPerUser(toSecond);
  return message.channel.send(`Kanał: <#${channel.id}> dostał slowmode na **${ms(ms(time), {long: true})}**.`);
}}
}