/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  // Mise en place des constantes
  const setting = require('./teste.json')
  client.on('message', message => {
    // Mise en place des variables
    var h = message.author.lastMessage.createdAt
    var nom = message.author.username
    var prefix = setting.prefix
    var inv = setting.inv

    if (message.content.startsWith(prefix + 'inv')) {
      message.channel.send(inv)
    }

    /* if (message.content.startsWith(prefix + 'kick')) {
      // Mise en place des variables
       var member = message.guild.member(message.mentions.members.first())
      let modRole = message.guild.roles.find('name', 'Mod')
       if (member) {
        // If du modRole
        if (message.member.roles.has(modRole.id)) {
          member.kick().then((member) => {
            // Message réussis
            message.channel.send(':wave: ' + member.displayName + ' à bien été __**kick**__ :point_right: ')
            console.log(h + ' +kick mis par: ' + nom)
          }).catch(() => {
            // Message du fail
            message.channel.send('Acces refusé')
            console.log(h + ' Tentative de "+kick" de: ' + nom)
          })
        } else {
          message.channel.send('Acces refusé')
        }
      } else {
        message.channel.send('`+kick [@242423532523]`')
      } 
    } */
    if (message.content.startsWith('+kick')) {
      // Mise en place des variables
      var member = message.guild.member(message.mentions.members.first())
      let modRole = message.guild.roles.find('name', 'Mod')
      // Si il y a pas de mention dans la commande
      if (!member) {
        message.channel.send('`+kick [@(le joueur a kick)]`')
      } else {
      // If du modRole
        if (message.member.roles.has(modRole.id)) {
          let kickMember = message.guild.member(message.mentions.users.first())
          message.guild.member(kickMember).kick()
          // Message réussis
          message.channel.send(':wave: ' + kickMember.displayName + ' à bien été **KICK** :point_right: ')
          console.log(h + ' +kick mis par : ' + nom)
        // Message du fail
        } else {
          return message.reply('Acces refusé')
        }
      }
    }

    // BAN

    if (message.content.startsWith(prefix + 'ban')) {
      // Mise en place des variables
      let modRole = message.guild.roles.find('name', 'Mod')
      let banMember = message.guild.member(message.mentions.users.first())
      // Si il y a pas de mention dans la commande
      if (!member) {
        message.channel.send('`+ban [@(le joueur a kick)]`')
      } else {
        // If du modRole
        if (message.member.roles.has(modRole.id)) {
          message.guild.member(banMember).ban()
          // Message réussis
          message.channel.send(':wave: ' + banMember.displayName + ' à bien été __**ban**__ :point_right: ')
          console.log(h + ' +ban mis par: ' + nom)
        // Message du fail
        } else {
          message.channel.send('Acces refusé')
        }
      }
    }
  })
}
