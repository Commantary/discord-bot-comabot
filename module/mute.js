/*
module.exports.run = async (client, message, args) => {
  var member = message.guild.member(message.mentions.members.first())
  let modRole = message.guild.roles.find('name', 'Mod')
  let muted = message.guild.roles.find('name', 'Muted')
  // SI IL Y A PAS DE MENTION
  if (!member) {
    // MESSAGE SI IL A PAS DE MENTION
    message.channel.send('`+mute [@(le joueur a mute)]`')
  } else {
    if (message.member.roles.has(modRole.id)) {
      // VARIABLE DU MEMBRE A MUTE
      let mutedMember = message.guild.member(message.mentions.users.first())
      // COMMANDE DU MUTE
      message.guild.member(mutedMember).addRole(muted.id, member.displayName + ' a été muté par ' + message.author.username)
      message.channel.send('**' + member.displayName + '** a été muté par **' + message.author.username + '**')
    } else {
      // SI IL A PAS LE ROLE MOD
      return message.reply('Acces refusé')
    }
  }
}
*/
