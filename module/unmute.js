
module.exports.run = async (client, message, args) => {
  var member = message.guild.member(message.mentions.members.first())
  let modRole = message.guild.roles.find('name', 'Mod')
  let muted = message.guild.roles.find('name', 'Muted')
  // SI IL Y A PAS DE MENTION
  if (!member) {
    // MESSAGE SI IL A PAS DE MENTION
    message.channel.send('`+unmute [@(le joueur a unmute)]`')
  } else {
    // ON VERIFIE SI IL A LE ROLE MOD
    if (message.member.roles.has(modRole.id)) {
      // VARIABLE POUR LA PERSONNE A UNMUTE
      let mutedMember = message.guild.member(message.mentions.users.first())
      // COMMANDE DU UNMUTE
      message.guild.member(mutedMember).removeRole(muted.id, member.displayName + ' a été demuté par ' + message.author.username)
      message.channel.send('**' + member.displayName + '** a été demuté par **' + message.author.username + '**')
    } else {
      // SI IL A PAS LE ROLE MOD
      return message.reply('Acces refusé')
    }
  }
}
