


exports.icoins = (Discord,client,message)=>{


  
connection.query('SELECT coins FROM users WHERE id =?',[message.author.id], async(error,results)=>{
    var string = JSON.stringify(results[0].coins)
  if(results.lenght==0){
    message.reply("No estas registrado");
  console.log(error)
  }
  else{    
  message.reply(`Tienes <:AiraGold:855537449895329852> = **${string}** `)
  
  
  }
  
  
  })
}