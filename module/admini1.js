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

    // COMMANDE INVITATION DU BOT
    if (message.content.startsWith(prefix + 'inv')) {
      message.channel.send(inv)
    }

    // COMMANDE POUR KICK UN MEMBRE DU SERVEUR
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

    // COMMANDE POUR BAN UN MEMBRE DU SERVEUR
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
