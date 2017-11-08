const request = require('request')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  function sis(guild){ // FUNCTION POUR SEND LE MESSAGE
    if(guild.channels.find('name','sis')){
      let chaine = guild.channels.find('name','sis')

      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username + '(' + message.author.id + ')', message.author.avatarURL)
      .setColor(12515201)
      .setFooter(message.guild.name + '(' + message.guild.id + ')', message.guild.iconURL,)
      .setThumbnail( message.author.avatarURL)
      .addField("Message:", args[0])

      chaine.send({embed})
    } else {
      message.guild.createChannel('sis', 'text') // ON CREER LE CHANNEL
      .then(message.channel.send({embed: { // ON ENVOIE LE MESSAGE
        title: 'Info',
        color: 12434877,
        description: 'Le channel `sis` a été créer, réessayer '
      }})) // FIN DE L'EMBED
      .catch(console.error) // SI IL Y A UNE ERREUR
      let chaineLocal = message.guild.channels.find('name', 'sis')

        chaineLocal.send({embed: {
          color: 12515201,
          author: {
            name: message.author.username + '(' + message.author.id + ')',
            icon_url: message.author.avatarURL
          },
          thumbnail: {
            url: message.author.avatarURL,
          },
          fields: [{
            name: 'Message:',
            value: args
          }],
          footer: {
            icon_url: message.guild.iconURL,
            text: message.guild.name + '(' + message.guild.id + ')'
          }
        }})

    } // FIN DU ELSE
  } // FIN DE LA FONCTION

if(args[0]==undefined) return message.channel.send({embed: {
  color: 12434877,
  description: 'Vous devez spécifier un message à envoyé !'
}})
client.guilds.map(g=>sis(g)) // ON EXECUTE


} // FIN DU MODULE EXPORTS
