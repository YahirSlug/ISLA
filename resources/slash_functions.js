exports.isla = (interaction,idata,Discord,client)=>{
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
          "#"+String(x)+" Solicitado por: " + interaction.member.displayName
          
        )
        .setTimestamp();
     interaction.reply({ embeds: [embed] });
    }
  