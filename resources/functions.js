
// const igacha = require("../minigame/m200_gacha");


exports.presence  = (client)=> {
    var time = 0;
    var state = "";
    setInterval(function () {
      var hoy = new Date();

  var hora = hoy.getUTCHours() + ':' + hoy.getUTCMinutes();
  // var horasnwh ="";
  // var horas= 721 - (parseInt(hoy.getDate()*24)+ parseInt(hoy.getHours()))
  // if (horas<=0){horasnwh="Moon Knight"}
  //  else{horasnwh = horas+" Hrs Left...";} 

  horasnwh = '33 Days Left'

      time = time + 1;
      if (time === 6) {
        time = 1;
      }
      switch (time) 
  
      {
        case 1:
          state =  "Type [i] for Help";
          
          break;
        case 2:
          state = "UTC: "+hora+" Hrs.";
          break;
        case 3:
          state = "Click to Add 💫";
      

          break;
        case 4:
          state = 'Moon Knight🌙';
          break;
        case 5:
          state = "Project ISLA.";
          break;
      }
  

      client.user.setActivity(state, {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=UIp6_0kct_U",
      });

    }, 5000);
  }


  exports.dado = (message)=>{
    message.channel.send('Felicitaciones, ' + message.author.username + ' tuviste '+String(Math.floor(Math.random()*6)+1)+' 🎲').then(msg => {
    msg.react('⭐')});
    
}

exports.isla = async (message, idata, Discord, client) => {
    // 1. Creamos una pequeña función interna para generar un embed aleatorio
    // Hacemos esto para no tener que repetir el código cada vez que alguien presione el botón
    const generarEmbed = () => {
        const x = Math.floor(Math.random() * idata.img.length);
        const img = idata.img[x];
        const y = Math.floor(Math.random() * idata.rm.length);
        const rm = idata.rm[y];
        
        return new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(rm)
          .setImage(img)
          .setAuthor(client.user.username, client.user.avatarURL())
          .setFooter(
            "#" + String((x + 1)) + " Solicitado por: " + message.member.displayName,
            message.author.avatarURL()
          )
          .setTimestamp();
    };

    // 2. Creamos el botón "Otra imagen"
    const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('otra_imagen_isla') // Un ID interno para reconocer este botón
                .setLabel('🌸 Otra imagen')      // El texto que verá el usuario
                .setStyle('PRIMARY')             // PRIMARY lo hace de color azul
        );

    // 3. Enviamos el mensaje inicial con la imagen y el botón
    const msg = await message.reply({ 
        embeds: [generarEmbed()], 
        components: [row] 
    });

    // Le agregamos tu reacción clásica de Isla
    msg.react('<:Isla:744720520615821394>').catch(() => {});

    // 4. Creamos el "Collector"
    // Esto hace que el bot se quede atento durante 5 minutos (300,000 milisegundos)
    // a ver si alguien hace clic exclusivamente en el botón con el ID 'otra_imagen_isla'.
    const filter = i => i.customId === 'otra_imagen_isla';
    const collector = msg.createMessageComponentCollector({ filter, time: 300000 });

    // 5. ¿Qué pasa cuando alguien hace clic?
    collector.on('collect', async i => {
        // Opcional: Evitamos que otras personas cambien tu imagen
        if (i.user.id !== message.author.id) {
            return i.reply({ 
                content: "Etto... solo la persona que usó el comando puede cambiar la imagen. Gomen...", 
                ephemeral: true // Esto hace que el mensaje de error solo lo vea el intruso
            });
        }

        // Si es el autor original, actualizamos el mensaje original con un nuevo embed generado al azar
        await i.update({ embeds: [generarEmbed()], components: [row] });
    });

    // 6. ¿Qué pasa cuando se acaban los 5 minutos?
    collector.on('end', () => {
        // Apagamos el botón para que no se quede ahí sin hacer nada y cause errores
        const disabledRow = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('otra_imagen_isla')
                    .setLabel('🌸 Tiempo agotado')
                    .setStyle('SECONDARY') // Lo volvemos gris
                    .setDisabled(true)     // Lo desactivamos
            );
        
        // Editamos el mensaje para ponerle el botón desactivado
        msg.edit({ components: [disabledRow] }).catch(() => {});
    });
};

exports.serverinfo=(message,Discord,client)=>{

  // const embed = new Discord.MessageEmbed()
  //       .setTitle("Información")
  //       .setColor(0xff0000)
  //       .setDescription("Los datos del server son los siguientes")
  //       .addField("Server name", message.guild.name, true)
  //       .addField("Integrantes totales", message.guild.memberCount, true)
  //       .setAuthor(client.user.username, client.user.avatarURL())
  //       .setThumbnail(
  //         "https://pa1.narvii.com/6284/5183f8c7a97b339bae5c0af41387fa8d63364430_hq.gif"
  //       )
  //       .setImage(
  //         "https://media1.tenor.com/images/61bcbafc85870fdb1db95ac298f9b8f8/tenor.gif"
  //       )
  //       .setTimestamp();
      // message.channel.send({ embeds: [embed] })
message.reply("Error >///<")

}


    exports.anna = (message,idata,Discord)=>{
      x = Math.floor(Math.random() * idata.anna.length);
        img = idata.anna[x];
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Anna Is Here")
          .setImage(img)
    message.reply({ embeds: [embed] })



      }


exports.gacha = (Discord,message,client)=>{ igacha.gacha(Discord,message,client)};



exports.coins =(message,iusers,Discord)=>{
  if (!iusers[message.author.id].coins) {message.reply("No cuentas con monedas actualmente"); return;};
  var coins = String(iusers[message.author.id].coins)
  for(let i=coins.length;i<9;i++){
  coins = "0"+coins;
  }
  var bronze = `${coins[7]}${coins[8]}`;
  var plata =  `${coins[5]}${coins[6]}`;
  var oro = `${coins[3]}${coins[4]}`;
  var diamantes = `${coins[0]}${coins[1]}${coins[2]}`;
    const embed = new Discord.MessageEmbed()
    .setColor(iusers[message.author.id].color)   
    .setTitle(`Presupuesto`)
    .setDescription(`${message.author} *Actualmente cuentas con:* \n💎 = ${diamantes} \n <:AiraGold:855537449895329852> = ${oro}\n<:AiraSilver:855539398136430623> = ${plata}\n<:AiraBronze:855541406953373696> = ${bronze}`)
    message.channel.send({ embeds: [embed] });



}


