
module.exports.run = async (client) => {
  // ARRIVE
  client.on('guildMemberAdd', member => {
    // Envoie un message au channel designer :
    const channel = member.guild.channels.find('name', 'bonjour-bye')
    // Fais rien si le channel existe pas
    if (!channel) return
    // Envoie le message, en mentionnant le membre
    channel.send(`-----------------------------------\n   Bienvenue sur le serveur ${member}\n-----------------------------------`)
  })
  // DEPART
  client.on('guildMemberRemove', member => {
    // Envoie un message au channel designer: 
    const channel = member.guild.channels.find('name', 'bonjour-bye')
    // Fais rien si le channel existe pas
    if (!channel) return
    // Envoie le message, en mentionnant le membre
    channel.send(`-----------------------------------\n   ${member} est parti du serveur  \n-----------------------------------`)
  })
}
