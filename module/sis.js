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
      message.channel.send('La channel: **\'sis\'** n\'existe pas !')
    }
  }
  client.guilds.map(g=>sis(g)) // ON EXECUTE

} // FIN DU MODULE EXPORTS
