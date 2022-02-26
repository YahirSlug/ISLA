
const igacha = require("../minigame/m200_gacha");


exports.presence  = (client)=> {
    var time = 0;
    var state = "";
    setInterval(function () {
      var hoy = new Date();

  var hora = hoy.getUTCHours() + ':' + hoy.getUTCMinutes();

      time = time + 1;
      if (time === 6) {
        time = 1;
      }
      switch (time) {
        case 1:
          state =  "Type [i] for Help";
          
          break;
        case 2:
          state = "UTC-Time "+hora;
          break;
        case 3:
          state = "Click to Add 💫";
      

          break;
        case 4:
          state = "❤️💙🧡";
          break;
        case 5:
          state = "Project I.S.L.A.";
          break;
      }
  
      client.user.setActivity(state, {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=t7YwtPBiIOA",
      });

    }, 5000);
  }


  exports.dado = (message)=>{
    let dado = Math.floor(Math.random()*6)+1;
    message.channel.send('Felicitaciones, ' + message.author.username + ' tuviste '+String(dado)+' 🎲').then(msg => {
    msg.react('👀')});
    
}

exports.isla = (message,idata,Discord,client)=>{
  x = Math.floor(Math.random() * 53);
    img = idata.img[x];
    y = Math.floor(Math.random() * 10);
    rm = idata.rm[y];
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(rm)
      .setImage(img)
      .setAuthor(client.user.username, client.user.avatarURL())
      // .setThumbnail('https://media1.tenor.com/images/70c335155b78a00338925183f355dbd4/tenor.gif?itemid=21246142')
      .setFooter(
        "#"+String(x)+" Solicitado por: " + message.member.displayName,
        message.author.avatarURL()
      )
      .setTimestamp();
    message.reply({ embeds: [embed] });
  }


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
      x = Math.floor(Math.random() * 13);
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


