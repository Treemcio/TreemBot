const weather = require("weather-js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'weather',
    description: 'Sprawdź pogodę',
    aliases: ['pogoda'],
    usage: '&weather <miasto>',
    cat: 'fun',
    execute(message, args) {
    const coś = args.slice(0).join(" ")
      weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
     

if(!coś) return message.channel.send("**Podaj lokalizację**")

        //If the place entered is invalid
        if(result.length === 0) {
            message.channel.send("**Proszę podaj prawidłową lokalizację**")
            return;
        }

        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output
let Pogoda = "Czysto"
if(current.skytext === "Sunny") Pogoda = "Słonecznie"
if(current.skytext === "Cloudy") Pogoda = "Pochmurnie"
if(current.skytext === "Mostly Sunny") Pogoda = "Częściowe słońce"
if(current.skytext === "Mostly Cloudy") Pogoda = "Częściowe zachmurzenie"
if(current.skytext === "Rain Showers") Pogoda = "Przelotne opady"
if(current.skytext === "Rain") Pogoda = "Deszczowo"




        //Sends weather log in embed
        let embed = new MessageEmbed()
           .setDescription(`**${Pogoda}**`) //How the sky looks like
           .setAuthor(`Pogoda dla: ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
           .setColor(0x00AE86) //Sets the color of the embed
           .addField("Temperatura:", `${current.temperature}°${location.degreetype}\n`, true)
           .addField("Odczuwalna:", `${current.feelslike}°${location.degreetype}\n`, true)
           .addField("Wiatr:", `${current.winddisplay}\n`)
           .addField("Wilgotność:", ` ${current.humidity}%\n`, true)
           .addField("Data:", `${current.date}*`, true)
           
           //Display when it's called
           message.channel.send(embed)

    });

    message.delete();
    }
};