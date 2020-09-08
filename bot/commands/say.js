module.exports = {
    name: 'say',
    description: 'Wyślij wiadomość',
    usage: '&say <msg>',
    cat: 'fun',
    execute(message, args) {
      
     let user = message.author 
      
  let cmd = args.slice(0).join(" ")


 
message.delete({ timeout: 10}).then(() => {
  message.channel.send(cmd)
})
 
 
    }
    
};