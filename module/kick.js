
module.exports.run = async (client, message, args) => {
  // Mise en place des variables
    const fs = require('fs')
    const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
    const prefix = setting.prefix
    var member = message.guild.member(message.mentions.members.first())
    // var member = message.guild.member(message.mentions.members.first())
    let modRole = message.guild.roles.find('name', 'Mod')
    // Si il y a pas de mention dans la commande
    if (!member) {
      message.channel.send('`+kick [@(le joueur a kick)]`')
    } else {
      // If du modRole
      if (message.member.roles.has(modRole.id)) {
        let kickMember = message.guild.member(message.mentions.users.first())
        let reason = args.slice(1).join(' ')
        message.guild.member(kickMember).kick(reason)
        // Message réussis
        message.channel.send(':wave: **' + kickMember.displayName + '** à été __**kick**__ par: **' + message.author.username + '**')
        console.log(prefix + 'kick mis par : ' + message.author.username)
        // Message du fail
      } else {
        return message.reply('Acces refusé')
      }
    }
  }
  