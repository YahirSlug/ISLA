const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const connection = require("./database/isla_connection");
const gacha = require("./minigame/m200_gacha");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES"],
});
require("dotenv").config(); 

function presence(){
  client.user.setActivity("en Mantenimiento 👍", {
    type: "WATCHING"
  });
  }
////MENSAJE DE ARRANQUE////
client.on("ready", () => {
  console.log("test");
  presence();
});


client.on("message", async (message) => {
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.toLowerCase().startsWith(process.env.PREFIX)) return;
  if (!message.guild) return;
  if (message.author.bot) return;

  if (command === "register") {
    connection.query(
      "INSERT INTO users SET?",
      { id: message.author.id, user: message.author.username, coins: 500 },
      async (error) => {
        if (error) {
          message.reply("Ya estas registrado");
        } else {
          message.reply("registro exitoso n.n");
        }
      }
    );
  }

  if (command === "bank") {
    const consult = `SELECT coins FROM users WHERE id = ${message.author.id} `;
    console.log(consult);
    const xd = consult
      ? connection.query(consult, async (error, datab) => {
          console.log(datab);

          if (datab.length === 0 || datab === null) {
            message.reply("No estas registrado");
          } else {
            message.reply(
              `Tienes **${JSON.stringify(
                datab[0].coins
              )}** <:AiraGold:855537449895329852>`
            );
          }
        })
      : message.reply("No estas registrado");
  }



  m200_gacha = (datab, message) => {
    if (datab[0].coins >= 100) {
      var coin = Number(JSON.stringify(datab[0].coins));
      const compra = `UPDATE users SET coins = ${
        coin - 100
      } WHERE users .id = ${message.author.id}`;
      /////////////

      connection.query(compra, () => {
        message.reply(
          `Gracias por comprar su ticket, le quedan **${
            coin - 100
          }** <:AiraGold:855537449895329852>`
        );
        gacha.gacha(Discord, message, client);
      });

      //////////////////////
    } else {
      message.reply(
        `No puedes tirar, tienes **${JSON.stringify(
          datab[0].coins
        )}** <:AiraGold:855537449895329852>\n Una tirada te cuesta = 100 <:AiraGold:855537449895329852>`
      );
    }
  };

  if (command == "gacha") {

    const consult = `SELECT coins FROM users WHERE id = ${message.author.id} `;
    console.log(consult);
    const xd = consult
      ? connection.query(consult, async (error, datab) => {
          console.log(datab);

          if (datab.length === 0 || datab === null) {
            message.reply("No estas registrado");
          } else {
            m200_gacha(datab, message);

          }
        })
      : message.reply("No estas registrado");
  }




  if (command == "drop") {

    const consult = `SELECT coins FROM users WHERE id = ${message.author.id} `;
    console.log(consult);
    const xd = consult
      ? connection.query(consult, async (error, datab) => {
          console.log(datab);

          if (datab.length === 0 || datab === null) {
            message.reply("No estas registrado");
          } else {
            gacha.drop(Discord, message, datab);
          }
        })
      : message.reply("No estas registrado");
  }


  if (command === "register") {
    connection.query(
      "INSERT INTO users SET?",
      { id: message.author.id, user: message.author.username, coins: 99 },
      async (error) => {
        if (error) {
          message.reply("Ya estas registrado");
        } else {
          message.reply("registro exitoso n.n");
        }
      }
    );
  }





});




(suma = (dato1) =>
  dato1 > 3
    ? console.log(` ${dato1} es mayor a 3`)
    : console.log(dato1 + ` no es mayor a 3`)),
  console.log(`holaaaa`);

suma(2);

client.login(process.env.TOKEN);
