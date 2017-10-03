module.exports.run = async (client, message, args) => {
  // COMMANDE MUTE VOCAL
  let modRole = message.guild.roles.find('name', 'Mod')
  var member = message.guild.member(message.mentions.members.first())
  // SI IL A PAS DE MENTION
  if (!member) {
    // MESSAGE SI IL A PAS DE MENTION
    message.channel.send('`+vmute [@(le joueur a mute)]`')
  } else {
    // ON VERIFIE SI IL A LE ROLE MOD
    if (message.member.roles.has(modRole.id)) {
      // VARIABLE POUR LA PERSONNE A MUTE
      let mutedMember = message.guild.member(message.mentions.users.first())
      // COMMANDE DU MUTE
      message.guild.member(mutedMember).setMute(true)
      message.channel.send('**' + member.displayName + '** a été serveur mute par **' + message.author.username + '**')
    }
  }
}
