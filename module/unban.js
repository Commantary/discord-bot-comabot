
module.exports.run = async (client, message, args) => {
  if (message.author.id === '214846601066315776') {
    // Mise en place des variables
    var member = message.guild.member(message.mentions.members.first())
    let modRole = message.guild.roles.find('name', 'Mod')
    let unbanMember = message.guild.member(message.mentions.users.first())
    // Si il y a pas de mention dans la commande
    if (!member) {
      message.channel.send('Mentionne une personne à unban !')
    }
    // If du modRole
    if (message.member.roles.has(modRole.id)) {
      let reason = args.slice(1).join(' ')
      message.guild.unban(unbanMember)
      // Message réussis
      message.channel.send(':wave: **** à été __**unban**__ par: **' + message.author.username + '**')
      console.log(h + ' +unban mis par: ' + nom)
      // Message du fail
    } else {
      message.channel.send('Acces refusé')
    }
  } else {
    message.channel.send({embed: {
      color: 16711680,
      description: 'La commande est en developpement...'
    }})
  }
}
