const connection = require("../database/isla_connection");


exports.gacha = (Discord, message, client) => {
  var generalChannel = client.channels.cache.get("842447118768668692");
  var channel = message.channel.id;
  let primero = Math.floor(Math.random() * 20) + 1;
  let segundo = Math.floor(Math.random() * 20) + 1;
  let tercero = Math.floor(Math.random() * 20) + 1;

  let error = Math.floor(Math.random() * 10) + 1;

  let msg = Math.floor(Math.random() * 13) + 1;
  let imagen;
  let m200 = Math.floor(Math.random() * 5) + 1;
  switch (m200) {
    case 1:
      imagen =
        "https://media.discordapp.net/attachments/832052768905625633/937894145433948210/M200_Bundle_24.jpg?width=435&height=468";
      code = 1;
      break;
    case 2:
      imagen =
        "https://media.discordapp.net/attachments/832052768905625633/937894146407030894/M200_Bundle_18.jpg?width=469&height=468";
      code = 2;
      break;
    case 3:
      imagen =
        "https://media.discordapp.net/attachments/832052768905625633/937894146855825478/M200_Bundle_19.jpg?width=430&height=468";
      break;
    case 4:
      imagen =
        "https://media.discordapp.net/attachments/832052768905625633/937894206607880212/M200_Bundle_34.jpg?width=371&height=468";
      break;
    default:
      // imagen = 'https://i.pinimg.com/originals/ab/bd/5c/abbd5c5a1928bb38cf77bfd0db1fdfb9.gif'; ;
      imagen =
        "https://media.discordapp.net/attachments/832052768905625633/937895031912685598/M200_Bundle_71.jpg?width=491&height=468";
  }

  //comando de error
  if (error === 1) {
    switch (msg) {
      case 1:
        message.reply(`el comando falló <:KyaruSad:839296418883829831>`);
        break;
      case 2:
        message.reply(`uy algo salio mal <:Gura5AM:832112113110876180>.`);
        break;
      case 3:
        message.reply(`Error, vuelve a repetir el comando.`);
        break;
      case 4:
        message.reply(
          `Hoy no es tu dia de suerte <:crying:844753198228045834>`
        );
        break;
      case 5:
        message.reply(`Vuelva a repetir el comando, no te oí `);
        break;
      case 6:
        message.reply(`Los servidores se quemaron, andamos en reparaciones.`);
        break;
      case 7:
        message.reply(`Zannen~`);
        break;
      case 8:
        message.reply(` Bienveni...`);
        break;
      case 9:
        message.reply(`ERROR 404`);
        break;
      case 10:
        message.reply(
          `Que desafortunado, algo falló.<:yahirporquemepegassiyotequiero:833582027332386837>`
        );
        break;

      case 11:
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Bienvenido al gacha de...")
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription(
            "sU nUmeros son: **" + "error" + "**\n error error error \n error "
          )
          .setImage(
            "https://tenor.com/view/isla-plastic-memories-error-gif-12807004"
          )
          .setFooter(" Pedido por: " + message.author.avatarURL())
          .setTimestamp();
        message.channel.send({ embeds: [embed] });
        break;

      case 12:
        const datoi = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("¿Sabias qué?")
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription("Un dato interesante sobre el gacha es:")
          .setImage(
            "https://pbs.twimg.com/media/E2lQz_iVkAQ_Fsr?format=jpg&name=medium"
          )
          .setFooter(
            "Pedido por: " + message.member.displayName,
            message.author.avatarURL()
          )
          .setTimestamp();
        message.channel.send({ embeds: [datoi] });
        break;

      default:
        const noigo = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Noigo, Noigo.")
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription("Hola repite lo que dijiste nwn.")
          .setImage(
            "https://cdn.discordapp.com/attachments/832104653838745601/849293802060906536/DCC.jpg"
          )
          .setFooter(
            "Pedido por: " + message.member.displayName,
            message.author.avatarURL()
          )
          .setTimestamp();
        message.channel.send({ embeds: [noigo] });
    }
  } else {
    //////////////////////////////////////////////////////////////////////////////////////////////

    if (channel === "842447118768668692") {
      if (primero === 20 && segundo === 20 && tercero === 20) {
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Bienvenido al gacha de M200")
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription(
            "Sus números son: \n\n🍏 **" +
              primero +
              "** 🍏 **" +
              segundo +
              "** 🍏 **" +
              tercero +
              "** 🍏\n\n🥳 Felicidades has ganado 🥳 \nContacta a <@428737379877257226> para reclamar tu premio. "
          )
          .setImage("https://i.redd.it/mthbi1xgn8251.jpg")
          .setFooter(
            " Pedido por: " + message.member.displayName,
            message.author.avatarURL()
          )
          .setTimestamp();
        generalChannel.send({ embeds: [embed] });
      } else {
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Bienvenido al gacha de M200")
          .setAuthor(client.user.username, client.user.avatarURL())
          .setDescription(
            "Sus números son: \n\n🍏 **" +
              primero +
              "** 🍏 **" +
              segundo +
              "** 🍏 **" +
              tercero +
              "** 🍏\n\n Suerte a la próxima ;) \n[hosteado por <@428737379877257226>]."
          )
          .setImage(imagen)
          .setFooter(
            " Pedido por: " + message.member.displayName,
            message.author.avatarURL()
          )
          .setTimestamp();
        generalChannel.send({ embeds: [embed] });
      }
    } else {
      message.reply("en este canal no es uwu, es en <#842447118768668692>");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////\n https://discord.gg/nkEanbeuBx
  }
};

exports.drop = (Discord, message, datab) =>{

    var valores = "";
    var palomitas =0;
    ////////////FOR DE PALOMITAS
    for (var i =4; i>= 0; i--) {
    var tiro = Math.floor(Math.random()*2)+1;
    if(tiro===1){
    valores = valores+"✅ ";
    palomitas = palomitas +1;
    }
    
    else{
    valores = valores+"❎ ";
    }
    
    }////////////////FIN DEL FOR DE PALOMITAS
    
    //Si todo sale palomitas
    if (palomitas===5)
    {
      
     const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle('Reto de las palomitas')
      .setDescription(valores+"\n El total de sus palomitas fueron "+palomitas+".\n Felicitaciones Ganaste 100 <:AiraGold:855537449895329852>")
      .setFooter(''+message.member.displayName, message.author.avatarURL())
      .setTimestamp()

      var coin = Number(JSON.stringify(datab[0].coins));
      const compra = `UPDATE users SET coins = ${
        coin + 100
      } WHERE users .id = ${message.author.id}`;
      /////////////

      connection.query(compra, () => {
        message.reply({ embeds: [embed] }) 
      });







    }
    
    //en caso de que no
    else{
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle('Reto de las palomitas')
      .setDescription(valores+"\n El total de sus palomitas fueron "+palomitas+".\nGanaste "+palomitas+" <:AiraGold:855537449895329852>")
      .setFooter(''+message.member.displayName, message.author.avatarURL())
      .setTimestamp()


      var coin = Number(JSON.stringify(datab[0].coins));
      const compra = `UPDATE users SET coins = ${
        coin + Number(palomitas)
      } WHERE users .id = ${message.author.id}`;
      /////////////
  
      connection.query(compra, () => {
        message.reply({ embeds: [embed] }) 
      });
    }
    
    
 


}



//Este codigo esta mal optimizado pero espero poder arreglarlo despues para que tenga una mejor comprension y ejecucion
