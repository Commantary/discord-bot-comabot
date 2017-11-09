const request = require('request')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  function sis(guild){ // FUNCTION POUR SEND LE MESSAGE
    if(guild.channels.find('name','sis')){
      let chaine = guild.channels.find('name','sis')
      let argsFalse = message.content.trim().split(/ +/g)
      let argsTrue = message.content.slice(argsFalse[0].length)

      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(12515201)
      .setFooter(message.guild.name, message.guild.iconURL,)
      .description(argsTrue)

      chaine.send({embed})
    }
  } // FIN DE LA FONCTION

  if(args[0]==undefined) return message.channel.send({embed: {
    color: 12434877,
    description: 'Vous devez spécifier un message à envoyé !'
  }})

  if(message.guild.channels.exists('name', 'sis')){
    client.guilds.map(g=>sis(g)) // ON EXECUTE
  } else {
    message.guild.createChannel('sis', 'text') // ON CREER LE CHANNEL
    .then(message.channel.send({embed: { // ON ENVOIE LE MESSAGE
      title: 'Info',
      color: 12434877,
      description: 'Le channel `sis` a été créer, réessayer...'
    }})) // FIN DE L'EMBED
    .catch(console.error) // SI IL Y A UNE ERREUR
  }



} // FIN DU MODULE EXPORTS
