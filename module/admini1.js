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
    const h = message.author.lastMessage.createdAt
    const nom = message.author.username
    const prefix = setting.prefix
    const inv = setting.inv
    var member = message.guild.member(message.mentions.members.first())

    // COMMANDE INVITATION DU BOT
    if (message.content.startsWith(prefix + 'inv')) {
      message.channel.send(inv)
    }

    // COMMANDE DU MUTE
    if (message.content.startsWith(prefix + 'mute')) {
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
          message.guild.member(mutedMember).addRole(muted.id)
          message.channel.send('**' + member.displayName + '** a été muté par **' + message.author.username + '**')
        } else {
          // SI IL A PAS LE ROLE MOD
          return message.reply('Acces refusé')
        }
      }
    }

    // COMMANDE DU UNMUTE
    if (message.content.startsWith(prefix + 'unmute')) {
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
          message.guild.member(mutedMember).removeRole(muted.id, message.author.username + ' à unmute ' + member)
          message.channel.send('**' + member.displayName + '** a été demuté par **' + message.author.username + '**')
        } else {
          // SI IL A PAS LE ROLE MOD
          return message.reply('Acces refusé')
        }
      }
    }

    // COMMANDE POUR KICK UN MEMBRE DU SERVEUR
    if (message.content.startsWith('+kick')) {
      // Mise en place des variables
      // var member = message.guild.member(message.mentions.members.first())
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
          message.channel.send(':wave: **' + kickMember.displayName + '** à été __**kick**__ par: **' + message.author.username + '**')
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
        message.channel.send('`+ban [@(le joueur a ban)]`')
      } else {
        // If du modRole
        if (message.member.roles.has(modRole.id)) {
          message.guild.member(banMember).ban()
          // Message réussis
          message.channel.send(':wave: **' + banMember.displayName + '** à été __**ban**__ par: **' + message.author.username + '**')
          console.log(h + ' +ban mis par: ' + nom)
        // Message du fail
        } else {
          message.channel.send('Acces refusé')
        }
      }
    }
  })
}
