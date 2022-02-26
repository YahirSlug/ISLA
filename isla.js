 
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const idata = require("./resources/data.json");
const functions = require("./resources/functions");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES"],
});
require("dotenv").config();


client.on("ready", () => {
  console.log(`Miitsuketaa!`);
  functions.presence(client);
});

////////////////Estructura del codigo con prefix

client.on("message", async (message) => {
  // https://i.pinimg.com/originals/ee/dd/45/eedd45a95c873e76f42e31a35778fe33.jpg
  if (message.content.toLowerCase().startsWith("isla")) {
    functions.isla(message, idata, Discord, client);
  }
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.toLowerCase().startsWith(process.env.PREFIX)) return;
  if (!message.guild) return;
  if (message.author.bot) return;
  let texto = args.join(" ");

  if (command === "avatar") {
    message.reply(message.author.avatarURL());
  }

  if (command === "8") {
    if (!texto)
      return message.channel.send("Necesito que me digas una pregunta.");
    let respuestas = idata.respuestas;
    message.reply(
      ` ${respuestas[Math.floor(Math.random() * respuestas.length)]}.`
    );
  }


  ////// //////////////////////////////////////////////////////////////////

  if (command === "cookie") {
    let user = message.mentions.users.first() || message.author;

    if (!user)
      return message.reply(
        "Menciona si quieres darle una galleta a alguien mas >w<♥"
      );

    if (user.id === message.author.id)
      return message.channel.send(
        "**" +
          message.author.username +
          "** Toma una galleta.. :cookie: de mi parte ♥ "
      );

    message.channel.send(
      "**" +
        message.author.username +
        " ** le da una galleta \n(｡•̀ᴗ-)✧ :cookie: a  **" +
        user.username +
        "**"
    );
  }

  /////////////////////////////////////////////////////////////////

  if (command === "help") {
    const icomands =
      "> **`isla:` ** Genera imagenes aleatorias de Isla\n" +
      "> **`igame:` **Juega piedra papel o Tijeras contra el Bot \n" +
      "> **`idado:` **Puedes utilizar un dado \n" +
      "> **`i8:` **Preguntale a 8ball tu futura suerte \n" +
      "> **`ichoose:` **Has que Isla eliga algo por ti.\n" +
      "> **`ihappy:` **Demuestra que estás Feliz \n" +
      "> **`ithanos:` **Thanos Snap! \n" +
      "> **`iendgame:` **And I am Iron Man. \n" +
      "> **`icookie:` **Dale una Galleta a Alguien \n" +
      "> **`iserverinfo:` **Informacion del server \n" +
      "> **`iversion:` **version actual del bot \n";

    const embed = new Discord.MessageEmbed()
      .setTitle("Project I.S.L.A.")
      .setColor("FB75E4")
      .setThumbnail(
        "https://pa1.narvii.com/6284/5183f8c7a97b339bae5c0af41387fa8d63364430_hq.gif"
      )
      .setDescription(
        "***A continuacion puede ver los comandos disponibles:***"
      )
      .addField("Comandos", icomands)
      .setURL("https://github.com/YahirSlug/Project-I.S.L.A./")

      .setAuthor(client.user.username, client.user.avatarURL())
      // .setThumbnail('https://media1.tenor.com/images/70c335155b78a00338925183f355dbd4/tenor.gif?itemid=21246142')
      .setFooter(
        "Solicitado por: " + message.member.displayName,
        message.author.avatarURL()
      )
      .setTimestamp();
    message.author.send({ embeds: [embed] });
    message.reply(
      `*Lista de comandos enviados por DM* <a:ayayaRunBaguette:850910081070530561>`
    );
  }

  ///////////////////////////////////////////////////////////////////////////

  if (command === "anna") {
    functions.anna(message, idata, Discord);
  }



  if (command === "user") {
    message.reply(message.author.username);
  }


if(command==="2.2"){
  const embed = new Discord.MessageEmbed()
  .setColor("YELLOW")
  .setTitle(
    "Ya salio la 2.2? "
  )
  .setDescription(`*Hola **${message.author.username}** lamento informarte que la 2.2 aun no sale <:crying:843397926944112660>*`)
  .setImage(
    "https://media.discordapp.net/attachments/845464054280486922/945894427266777158/geometry-dash-2.png"
  );
message.reply({ embeds: [embed] }).then(msg => {
  msg.react('<:crying:843397926944112660>')


})



}



  ///////////////////////////////////////////////////////////

  if (command === "happy") {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(
        "Que bien que te encuentres feliz " + message.author.username + " ^^//"
      )
      .setImage(
        "https://media1.tenor.com/images/6c1030aec5789d069ae35a609431cab4/tenor.gif"
      );
    message.channel.send({ embeds: [embed] });
  }

  if (command === "today") {
    var hoy = new Date();
    var fecha =
      hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
    var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
    var fechaYHora = fecha + " " + hora;
    message.reply("En este momendo la hora es: " + String(fechaYHora));
  }

  if (command === "endgame") {
    const word = [
      "...",
      "And I ",
      "I Am",
      " Iron Man",
      "https://tenor.com/view/snap-avengers-end-game-end-game-iron-man-gif-17433565",
    ];
    edit = (i, msg) => setTimeout(() => msg.edit(word[i]), i * 1000);
    message.channel.send(word[0]).then((msg) => {
      for (i = 1; i < word.length; i++) {
        edit(i, msg);
      }
    });
  }

  if (command === "thanos") {
    const word = [
      "...",
      "You... You ",
      "Should've ",
      "Gone For The",
      "Head",
      "https://imgur.com/JovxzyX",
    ];
    edit = (i, msg) => setTimeout(() => msg.edit(word[i]), i * 1000);
    message.channel.send(word[0]).then((msg) => {
      for (i = 1; i < word.length; i++) {
        edit(i, msg);
      }
    });
  }

  ///////////////////////////////////////////////////////////////////////////

  if (command === "game") {
    const valores = ["piedra", "papel", "tijeras"];
    if (!valores.includes(texto)) {
      message.reply(
        "elige alguna opcion,\n-> *igame [piedra papel o tijeras]*"
      );
      return;
    }
    var pos = parseInt(valores.indexOf(texto));
    var mq = Math.floor(Math.random() * 3);
    var cpu = valores[mq];
    var resultado = "";
    if (texto.includes(cpu)) {
      resultado = "empate";
    }
    var casos = pos + "" + mq;
    switch (casos) {
      case "10":
        resultado = "cpu gana";
        break;
      case "20":
        resultado = "cpu gana";
        break;
      case "01":
        resultado = "cpu gana";
        break;
      case "21":
        resultado = "tu ganas";
        break;
      case "02":
        resultado = "tu ganas";
        break;
      case "12":
        resultado = "tu ganas";
        break;
    }
    console.log(casos);
    message.reply(
      `La maquina jugó ${cpu} y tu jugaste: ${texto} \nEl resultado es: ${resultado} `
    );
  }

  if (command === "settime") {
    if (isNaN(texto) || texto > 100 || texto < 0) {
      message.reply("eso no es una entrada valida");
      return;
    }
    x = parseInt(texto) * 1000;

    setTimeout(() => {
      message.reply("Esto debería aparecer en " + String(texto) + " Segundos");
    }, x);
  }

  if (command === "choose") {
    var elecciones = texto.split(",");
    if (!texto || elecciones.length < 2 || elecciones.includes("")) {
      message.reply(
        "*Ingresa al menos dos opciones con el siguiente formato:* \n**-> ichoose *[opcion 1], [opcion 2], [etc]* **"
      );
      return;
    }
    message.reply(
      "Considero que la mejor opcion es: ||" +
        elecciones[Math.floor(Math.random() * elecciones.length)] +
        "||"
    );
  }

  if (command === "dado") {
    functions.dado(message);
  }

  if (command === "say") {
    try {
      if (!texto) return message.channel.send(`Que debo decir?`);
      message.channel.send(texto);
      message.delete();
    } catch (err) {
      message.channel.send(`¡Un error ha ocurrido!\nInfo: ` + err); // (3) <--
    }
  }

  ///////////////////////////////INFO///////////////////////////////////

  if (command === "version") {
    message.reply("la version actual del bot es 2.8.12");
  }

});
client.login(process.env.TOKEN);
