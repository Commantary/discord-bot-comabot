/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    var h = message.author.lastMessage.createdAt

    if (message.content.startsWith('C\'est quoi mon avatar')) {
      // On envoie son avatar
      message.reply(message.author.avatarURL)
      console.log(h + ' Nom du proprio de l\'avatar: ' + message.author.username)
    }
    if (message.content === 'Avatar ComaBot') {
      message.channel.send('C\'est quoi mon avatar')
    }
  })

  // ARRIVE
  client.on('guildMemberAdd', member => {
    // Envoie un message au channel designer :
    const channel = member.guild.channels.find('name', 'bonjour-bye')
    // Fais rien si le channel existe pas
    if (!channel) return
    // Envoie le message, en mentionnant le membre
    channel.send(`----------------------\nBienvenue sur le serveur ${member}\n----------------------`)
  })

  // DEPART
  client.on('guildMemberRemove', member => {
    // Envoie un message au channel designer: 
    const channel = member.guild.channels.find('name', 'bonjour-bye')
    // Fais rien si le channel existe pas
    if (!channel) return
    // Envoie le message, en mentionnant le membre
    channel.send(`----------------------\n${member} est parti du serveur  \n----------------------`)
  })
}
