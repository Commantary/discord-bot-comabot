
module.exports.run = async (client, message, args) => {
  var member = message.guild.member(message.mentions.members.first())
  let modRole = message.guild.roles.find('name', 'Mod')
  // SI IL A PAS DE MENTION
  if (!member) {
    // MESSAGE SI IL A PAS DE MENTION
    message.channel.send({embed: {
      description: '`+vunmute [@(le joueur a unmute)]`'
    }})
  } else {
    // ON VERIFIE SI IL A LE ROLE MOD
    if (message.member.roles.has(modRole.id)) {
      // VARIABLE POUR LA PERSONNE A UNMUTE
      let mutedMember = message.guild.member(message.mentions.users.first())
      // COMMANDE DU MUTE
      message.guild.member(mutedMember).setMute(false)
      message.channel.send({embed: {
        color: 12434877,
        description: '**' + member.displayName + '** a été démute serveur par **' + message.author.username + '**'
      }})
    } else {
      // SI IL A PAS LE ROLE MOD
      return message.channel.send({embed: {
        color: 12434877,
        description: 'Acces refusé'
      }})
    }
  }
}
