var Discord = required("discord.js");
var client = new Discord.Client();

client.on("ready", async() => {
    console.log("Hello");
});
 