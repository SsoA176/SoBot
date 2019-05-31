const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("SoBot, so!help");
    console.log("Le bot est bien On");
})

bot.login("NTgzOTU5ODM5MDA5NTM4MDUw.XPD9Ow.9-2CJTWumZZSN5KZMDFSlZKLa2E");
