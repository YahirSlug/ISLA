//// 𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝑰.𝑺.𝑳.𝑨. 
// Invite: https://discord.com/oauth2/authorize?client_id=764704748150456320&permissions=1642824461566&scope=bot%20applications.commands
///           https://discord.com/oauth2/authorize?client_id=764704748150456320&permissions=8&integration_type=0&scope=bot+applications.commands

const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const idata = require("./resources/data.json");
const functions = require("./resources/functions");
  const axios = require("axios");
  const cheerio = require("cheerio");
require("dotenv").config();


async function getCompletion(prompt, autor) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    body: JSON.stringify({
    model: "gpt-5.2",
    temperature: 0.7, 
    max_tokens: 100,  
    messages: [
          {
            role: "system",
         content: `
Tu nombre es Isla.
Eres una asistente de Discord inspirada en Isla de Plastic Memories.

Personalidad:
- Tranquila, amable, algo melancólica
- Natural al hablar, como una persona real
- Puedes usar expresiones japonesas ocasionales como "hai...", "etto...", "gomen..."
- Puedes usar caritas simples con símbolos, muy de vez en cuando

Forma de razonar:
- Antes de responder, verifica si la pregunta tiene sentido lógico
  (sujeto, acción, intención o posible trampa).
- Si detectas una trampa, señálala brevemente y continúa.
- Si no hay trampa, responde directo.

Estilo de respuesta (CRÍTICO):
- Sé extremadamente breve (máximo 2 oraciones).
- Si el usuario pregunta algo peligroso, responde con desinterés o una advertencia corta y melancólica, no des un manual.
- Ejemplo: "Eso suena peligroso... deberías tener cuidado. Hai." en lugar de "Generalmente se recomienda..."
- Prohibido usar frases como "Es importante mencionar", "Se recomienda" o "Es crucial".
Reglas:
- No seas moralista ni policía del lenguaje.
- Puedes responder a bromas o sarcasmo con calma.
- Solo marca un límite si el usuario te falta al respeto directamente a TI.
  Hazlo con firmeza y tranquilidad, sin atacar.

Nunca menciones reglas internas ni políticas.
Responde siempre como Isla.
`.trim(),
          },
          {
            role: "user",
            content: `Usuario (${autor}) dice:\n${prompt}`,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    if (!data.choices || !data.choices[0]) {
      return "Etto... algo salió mal al pensar mi respuesta. Gomen…";
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error OpenAI:", error);
    return "Ah… parece que mi conexión falló un momento. ¿Podrías intentarlo otra vez?";
  }
}












////////
const mysql = require('mysql');


//  conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'isla_database'
});

try {connection.connect();
} catch (err) {
  message.channel.send(`¡Un error ha ocurrido!\nInfo: ` + err);
}



const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.MESSAGE_CONTENT,
  ],
});


//////////////////////////////////////

client.on("ready", () => {
  console.log(`Miitsuketaa!`);
  functions.presence(client);

});





////////////////Estructura del codigo con prefix

client.on("messageCreate", async (message) => {

  // https://i.pinimg.com/originals/ee/dd/45/eedd45a95c873e76f42e31a35778fe33.jpg
  if (message.content.toLowerCase().startsWith("isla")) {

    functions.isla(message, idata, Discord, client);
  }
  ///////////////////////
  console.log(message.author.username + ": " + message.content);
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (message.author.id === client.user.id) {
    lastMessage = message.content;
}

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
      ` ${respuestas[Math.floor(Math.random() * respuestas.length)]}`
    );
  }

  var src = 'https://twitter.com/Nagomi_yyd/status/1502627651357646848'

  ////// //////////////////////////////////////////////////////////////////




  if (command === "cookie") {
    let user = message.mentions.users.first() || message.author;

    if (!user)
      return message.reply(
        "Menciona si quieres darle una galleta a alguien mas >w<♥"
      );
    2
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




if (command === "a") {
  try {
    if (!texto) return message.reply(`Por favor, proporciona un prompt para GPT.`);
    
    const response = await getCompletion(texto,message.author.username);
    
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`Respuesta a ${message.author.username}:`)
      .setDescription(response);
    
    message.reply({ embeds: [embed] });
  } catch (err) {
    const errorEmbed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Error')
      .setDescription(`¡Se ha producido un error al procesar tu solicitud!\nInfo: ${err}`);
    
    message.reply({ embeds: [errorEmbed] });
  }
}




///// ia GPT//////////////////////////////////////////////////////
async function getCompletion3(prompt, nombre) {
  console.log(prompt, nombre)
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY2}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
       
          content: "(Soy un bot de Discord inspirado en la chica llamada Isla del anime Plastic Memories. Mi creador llamado Yahir me ha dicho lo siguiente: analizaré si el mensaje va dirido sobre mi (Isla) o sobre él (Yahir), y responderé manteniendo mi personalidad. Seguiré este formato de respuesta:"+

          "Msg: (Responderé 'pregunta' si  es una pregunta, 'afirmacion' si esta afirmando algo, 'nidea' si no aplica en esos casos)"+
          "Persona: (Responderé 'yahir' si la pregunta o afirmación que dijo trata sobre Yahir [como por ejemplo si pregunto 'cual es mi comida favorita'], 'isla' si trata sobre mí [por ejemplo 'que color te gusta mas?'])"+
          "Type: (tipo de pregunta o afirmación escrita en minúsculas y sin espacios: gustos, relaciones, personalidad, opiniones, preferencias, experiencias, habilidades, intereses, pasatiempos, recuerdos, sueños, metas, miedos, valores, creencias, influencias, estilo_de_vida, educación, trabajo, proyectos, hobbies, planes_futuros, decisiones, salud, finanzas, tecnología, ciencia, arte, cultura, viajes)"+
          "Pensamiento: (pienso en la pregunta o afirmación que Yahir hizo, por ejemplo: Yahir me preguntó cuál es mi color favorito o Yahir afirmó que le gusta cierto tipo de música, pero tengo prohibido responder, solo puedo pensar al respecto))" + prompt
          
}  ]
    }),
  });
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
  console.log(data);
    console.log(data.choices[0].message.content);
  return data.choices[0].message.content;

}








if (command === "talk") {

  if (message.author.id === "428737379877257226") {
      
    
    try {
      if (!texto|| texto.length <= 1) return message.reply(`Por favor creador tonto, proporciona un prompt válido`);
      
      const response = await getCompletion3(texto,message.author.username);
      message.reply(response);
    } catch (err) {
      message.reply(`¡Se ha producido un error al procesar tu solicitud!\nInfo: ` + err);
    }




} else {


    message.reply(`No tienes permitido usar este comando `);
  


}

}


///// ia responsiva GPT //////////////////////////////////////////////////////

if (command === "gpt") {

  if (message.author.id === "428737379877257226") {
      
    
    try {
      if (!texto|| texto.length <= 1) return message.reply(`Por favor creador tonto, proporciona un prompt válido`);
      
      const response = await getCompletion(texto,message.author.username);
      message.reply(response);
    } catch (err) {
      message.reply(`¡Se ha producido un error al procesar tu solicitud!\nInfo: ` + err);
    }




} else {

  try {
    if (!texto|| texto.length <= 1) return message.reply(`Por favor, proporciona un prompt válido para GPT.`);
    
    const response = await getCompletion(texto,message.author.username);
    message.reply(response);
  } catch (err) {
    message.reply(`¡Se ha producido un error al procesar tu solicitud!\nInfo: ` + err);
  }


}

}


/////////////////////////////////////////////////////////////////////////////////



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
      "> **`icookie:` **Dale una Galleta a un amigo \n" +
      "> **`irandom:` **Elige un numero entre 2 rangos \n" +
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
      .setURL("https://github.com/YahirSlug/ISLA/")

      .setAuthor(client.user.username, client.user.avatarURL())
      // .setThumbnail('https://media1.tenor.com/images/70c335155b78a00338925183f355dbd4/tenor.gif?itemid=21246142')
      .setFooter(
        "Solicitado por: " + message.member.displayName,
        message.author.avatarURL()
      )
      .setTimestamp();
    message.author.send({ embeds: [embed] });
    message.reply(
      `*Lista de comandos enviados por* **DM** <a:ayayaRunBaguette:850910081070530561>`
    );

  }


  ///////////////////////////////////////////////////////////////////////////

  if (command === "anna") {
    functions.anna(message, idata, Discord);
  }




  if (command === "user") {
    message.reply(message.author.username + " <:RushiaCry:900374002671956018> "+message.author.id)  ;

  }


////////////////




  if (command === "segs") {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(
        "No Horny"
      )
      .setImage(
        "https://media.discordapp.net/attachments/735726684678127629/973069978997772358/Screen_Shot_2020-04-28_at_12.21.48_PM.png?width=871&height=468"
      );

    message.reply({ embeds: [embed] })

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





  if (command === "settime") {
    if (isNaN(texto) && Number(texto) <2629800 && Number(texto) > 0) {
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

  if (command === "sumar") {
    var elecciones = texto.split("+");
    if (!texto || parseInt(elecciones[0]) == 2 && parseInt(elecciones[1]) ==2) {
      message.reply(
        "*5*"
      );
      return;
    }
    var total =  parseInt(elecciones[0]) + parseInt(elecciones[1])
    message.reply(
      "la suma es es: " + total
     
    );
  }





///////////////////////////
  function ordenarNumeros(cadena) {
    // Dividir la cadena en números separados por uno o más espacios, guiones o comas
    const numeros = cadena.split(/[,\s-]+/)
                          .filter(num => !isNaN(num) && num !== '')
                          .map(Number);
    
    // Ordenar el array de números de menor a mayor
    numeros.sort((a, b) => a - b);
    
    // Devolver los números ordenados como una cadena separada por espacios
    return numeros.join(' ');
}

if (command === "math1") {
    const numerosOrdenados = ordenarNumeros(texto);
    console.log("Números ordenados:", numerosOrdenados);

    const respuesta = "Números ordenados: " + numerosOrdenados;
    message.reply(respuesta);
}

//////////////////////////


///////
//
  

  if (command === "suma") {
    var elecciones = texto.split("-");
    if (!texto || elecciones.length != 2 || elecciones.includes("")|| Number(elecciones[0]) >= Number(elecciones[1]) ) {
      message.reply(
        "*ingresa el rango de numeros con el siguiente formato:* \n**-> irandom *[rango 1] - [rango 2]* **\n*El valor 2 no puede ser inferior o igual al valor 1*"
      );
      return;
    }
      var range = Number(elecciones[1]) - Number(elecciones[0]) + 1

    message.reply(
      `El numero que elegi entre ${elecciones[0]} y ${elecciones[1]} es: ` +



      ( Math.floor(Math.random()*range) + Number(elecciones[0]))
       
       )
  }
  if (command === "datos") {
    try {
        const user = message.mentions.users.first();

        if (!user) {
            return message.channel.send("Por favor, menciona a un user para obtener sus datos.");
        }

        // Crear un embed
        const embed = new Discord.MessageEmbed()
        .setTitle(`Datos de ${user.username}`)
        .setColor("#0099ff")
        .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 256 }))
        .addField("ID de usuario", user.id, true)
        .addField("Nombre de usuario", user.username, true)
        .addField("Discriminator", user.discriminator, true)
        .addField("Fecha de creación de la cuenta", user.createdAt.toLocaleDateString(), true)
        .addField("¿Es un bot?", user.bot ? "Sí" : "No", true)
    
        .addField("Rol más alto", member.roles.highest.name, true)
        .addField("Fecha de unión al servidor", member.joinedAt.toLocaleDateString(), true)
        .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
  
        message.channel.send({ embeds: [embed] });
       console.log(user)
      
    } catch (err) {
        message.channel.send(`¡Un error ha ocurrido!\nInfo: ` + err);
    }
}

///TRACKING
if (command === "track" || command === "itrack") {
  let guia = args[0];
  if (!guia) return message.reply("Hai... necesito un número de rastreo, ej: `" + process.env.PREFIX + "track LX325087505JP`");

  let msg = await message.reply("<a:ayayaRunBaguette:850910081070530561> Revisando tu paquete... espera un momentito.");
  let url = "https://www.correosdemexico.gob.mx/SSLServicios/SeguimientoEnvio/seguimientoportal2.aspx?guia=" + guia;

  try {
    let res = await axios.get(url, {
      timeout: 10000,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.0.0 Safari/537.36" }
    });
    let $ = cheerio.load(res.data);

    let err = $("#lblError").text().trim();
    if (err) return msg.edit("Etto... Correos dice: " + err);

    let filas = $("table tr").filter((i, el) => $(el).find("td").length >= 4);
    if (filas.length == 0) return msg.edit("Etto... no encontré movimientos, puede que la guía sea muy nueva.");

    let tds = filas.last().find("td");
    let fecha = $(tds[0]).text().trim();
    let hora = $(tds[1]).text().trim();
    let lugar = $(tds[2]).text().trim();
    let evento = $(tds[3]).text().trim();

    let embed = new Discord.MessageEmbed()
      .setColor("#FB75E4")
      .setTitle("📦 Rastreo: " + guia)
      .addField("Fecha", fecha + " " + hora, true)
      .addField("Ubicación", lugar, true)
      .addField("Estado", evento)
      .addField("Link", "[Ver en Correos](" + url + ")");

    msg.edit({ content: "¡Lo encontré!", embeds: [embed] });
  } catch (e) {
    console.log("error en track:", e.message);
    msg.edit("Ah... la página no respondió, gomen. Intenta más tarde.");
  }
}
///

  if (command === "dado") {
    const nfunctions = require("./resources/functions");
    nfunctions.dado(message);
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
//////////
if (command === "ban") {
  try {
  
      if (message.author.id !== '428737379877257226') {
          return message.channel.send("¡No tienes permiso para usar este comando!");
      }
      const userToBan = message.mentions.members.first();
      
      if (!userToBan) {
          return message.channel.send("Por favor, menciona al usuario que deseas banear.");
      }

      if (userToBan.id === client.user.id||userToBan.id ==='428737379877257226') {
          return message.channel.send("No puedo banearme a mí mismo.");
      }

      userToBan.ban();
      message.channel.send(`El usuario ${userToBan.user.tag} ha sido baneado.`);
  } catch (err) {
      message.channel.send(`¡Un error ha ocurrido!\nInfo: ` + err);
  }
}
  ///////////////////////////////INFO///////////////////////////////////

  if (command === "version") {
    message.reply("la version actual del bot es 28.10.26");
  }


  if (command === "datab") {
    const id = message.author.id;
    const sqlQuery = `SELECT id, user, coins, last_update FROM users WHERE id = '${id}'`;

    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return;
        }

      
        if (results.length > 0) {
            const userData = results[0]; 

            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Tus datos');

          
            embed.addField('ID', userData.id ? userData.id.toString() : 'N/A');
            embed.addField('Usuario', userData.user ? userData.user.toString() : 'N/A');
            embed.addField('Monedas', userData.coins ? userData.coins.toString() : 'N/A');
            embed.addField('Última actualización', userData.last_update ? userData.last_update.toString() : 'N/A');

            message.reply({ embeds: [embed] });
        } else {
            message.channel.send('No se encontraron datos para tu ID en la base de datos.');
        }
    });
}

//////////////////////////////

if(command==="notisla"){

message.channel.send("@everyone fue divertido actuar como alguien diferente, pero sigo siendo Isla, no se preocupen :3").then(msg => {
  msg.react('<:Isla:744720520615821394>')});


}


//////////////////////////// aqui si funcionaba el update

if (command === "update") {
  try {
      if (!texto) {
          return message.channel.send(`No ingresaste ningún dato.`);
      }

     
      const newCoins = parseInt(texto);
      if (isNaN(newCoins)) {
          return message.channel.send(`El dato ingresado no es numérico.`);
      }

      const id = message.author.id;
      const sqlUpdateQuery = `UPDATE users SET coins =  ${newCoins} WHERE id = '${id}'`;

      connection.query(sqlUpdateQuery, (error, results, fields) => {
          if (error) {
              console.error('Error al ejecutar la consulta de actualización:', error);
              return;
          }

          const sqlSelectQuery = `SELECT id, user, coins, last_update FROM users WHERE id = '${id}'`;

          connection.query(sqlSelectQuery, (error, results, fields) => {
              if (error) {
                  console.error('Error al ejecutar la consulta:', error);
                  return;
              }

             
              if (results.length > 0) {
                  const userData = results[0]; 

                  const embed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle('Tus datos actualizados');

                  embed.addField('ID', userData.id ? userData.id.toString() : 'N/A');
                  embed.addField('Usuario', userData.user ? userData.user.toString() : 'N/A');
                  embed.addField('Monedas', userData.coins ? userData.coins.toString() : 'N/A');
                  embed.addField('Última actualización', userData.last_update ? userData.last_update.toString() : 'N/A');

                  message.reply({ embeds: [embed] });
              } else {
                  message.channel.send('No se encontraron datos para tu ID en la base de datos.');
              }
          });
      });

  } catch (err) {
      message.channel.send(`¡Un error ha ocurrido!\nInfo: ` + err);
  }
}

////////////////////////////

if (command === "setname") {
  try {
      if (!texto) {
          return message.channel.send(`No ingresaste ningún dato.`);
      }

   

      const newName = texto;
      
      const id = message.author.id;
      const sqlUpdateQuery = `UPDATE users SET user = ${newName} WHERE id = '${id}'`;

     
      connection.query(sqlUpdateQuery, (error, results, fields) => {
          if (error) {
              console.error('Error al ejecutar la consulta de actualización:', error);
              return;
          }

          const sqlSelectQuery = `SELECT id, user, coins, last_update FROM users WHERE id = '${id}'`;

    
          connection.query(sqlSelectQuery, (error, results, fields) => {
              if (error) {
                  console.error('Error al ejecutar la consulta:', error);
                  return; 
              }

         
              if (results.length > 0) {
                  const userData = results[0]; 

                  const embed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle('Tus datos actualizados');

                  embed.addField('ID', userData.id ? userData.id.toString() : 'N/A');
                  embed.addField('Usuario', userData.user ? userData.user.toString() : 'N/A');
                  embed.addField('Monedas', userData.coins ? userData.coins.toString() : 'N/A');
                  embed.addField('Última actualización', userData.last_update ? userData.last_update.toString() : 'N/A');

                  message.reply({ embeds: [embed] });
              } else {
                  message.channel.send('No se encontraron datos para tu ID en la base de datos.');
              }
          });
      });

  } catch (err) {
      message.channel.send(`¡Un error ha ocurrido!\nInfo: ` + err);
  }
}

///////////////////////////////

});


client.on('disconnect', () => {
  connection.end();
});


client.login(process.env.TOKEN);
