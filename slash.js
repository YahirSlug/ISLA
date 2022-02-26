// https://discord.com/api/oauth2/authorize?client_id=764704748150456320&permissions=8&scope=bot%20applications.commands
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const Discord = require("discord.js");
const { Client, Intents, Presence } = require("discord.js");
require("dotenv").config();
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES"],
});
const idata = require("./resources/data.json");
const functions = require("./resources/slash_functions");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "pato") {
    await interaction.reply({ content: "🦆" });
    await interaction.followUp("Mira un lindo pato");
  }

  if (interaction.commandName === "mimir") {
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(` ${interaction.user.tag} Hora de dormir`)
      .setImage(
        "https://media.discordapp.net/attachments/833884520922611712/908995066847174666/g11sleep.png?width=626&height=468"
      );

    // await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    await interaction.reply({ embeds: [embed] });
    await interaction.followUp(`Bonita noche ${interaction.user.tag}`);
  }
    // https://cdn.discordapp.com/attachments/832104653838745601/905281168688181278/55066383_p0.png
  if (interaction.commandName === "isla") {
    
functions.isla(interaction,idata,Discord,client);

  }

  if (interaction.commandName === "minigame") {
    var valores = "";
    var palomitas = 0;
    ////////////FOR DE PALOMITAS
    for (var i = 9; i >= 0; i--) {
      var tiro = Math.floor(Math.random() * 3) + 1;
      if (tiro === 1) {
        valores = valores + "✅ ";
        palomitas = palomitas + 1;
      } else {
        valores = valores + "❎ ";
      }
    } ////////////////FIN DEL FOR DE PALOMITAS

    //Si todo sale palomitas
    if (palomitas === 10) {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Reto de las palomitas")
        .setDescription(
          valores +
            "\n El total de sus palomitas fueron " +
            palomitas +
            ".\n Felicitaciones Ganaste 10 <:AiraGold:855537449895329852>"
        )
        .setFooter("" + interaction.member.displayName)
        .setTimestamp();
      await interaction.reply({ embeds: [embed] });
    }

    //en caso de que no
    else {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Reto de las palomitas")
        .setDescription(
          valores +
            "\n El total de sus palomitas fueron " +
            palomitas +
            ".\nGanaste " +
            palomitas +
            " <:AiraSilver:855539398136430623>"
        )
        .setFooter("" + interaction.member.displayName)
        .setTimestamp();
      await interaction.reply({ embeds: [embed] });
    }
  }

  /*
  if (interaction.commandName === 'endgame') {
    var time=0
    var state="";
    var word="";
    interaction.channel.send('...')

    
    .then((msg)=> {
      setInterval(function () {
    time=time+1;
    switch(time){
      case 1 : word="And" ; break;
      case 2:  word=" I " ;  break;           
      case 3:  word="am "  ; break;  
      case 4:  word="Iron" ;break;          
      case 5:  word=" Man" ; break; 
    }
    if (time===6){
      msg.edit("https://tenor.com/view/snap-avengers-end-game-end-game-iron-man-gif-17433565"); 
  
    }
    if (time>5)return;
    state=state+word;
    msg.edit(state);
    }, 500);
    }); 
  
 }
  */
});

client.login(process.env.TOKEN);
