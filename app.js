const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {

  console.log(`BOT ON!`); 

});

client.login(process.env.slaTOKEN);

client.on("message", async message => {

    if(message.author.bot) return;
    
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "invasao") {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const invasao = new Discord.RichEmbed()
        .setAuthor(`Invasão!!!`)
        .setDescription(`*A base da facção está sendo atacada!*\n**Corra para protege-la!.**`)
        .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
        .setColor("#ff0000")
        .setFooter("© NBW")
      message.channel.send("@everyone", invasao)
    }
});
