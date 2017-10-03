var iconUrlLien = 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048'
module.exports.run = async (client, message, args) => {
  const fs = require('fs')
  const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  const prefix = setting.prefix
  if (message.content === prefix + 'help') {
    return message.channel.sendMessage('', {embed: {
      title: 'Commandes:',
      color: 0xff0000,
      description: ':tools: **COMMANDES** :tools: \n\nCommandes Admin: +help admin \n\nCommandes Fun: +help fun \n\nCommandes Randoms: +help rdm',
      footer: {
        icon_url: iconUrlLien,
        text: 'Message par ComaBot.'
      }
    }}).catch(console.error)
      .then(function (message) {
        message.react('😊')
      }).catch(function () {
        console.error()
      })
  }
  if (message.content === prefix + 'help admin') {
    return message.channel.sendMessage('', {embed: {
      title: 'Commandes:',
      color: 0xff0000,
      description: ':tools: **Liste des commandes** :tools: \n\n__+ban @UnGars__ | Pour ban un membre en ayant le rôle **Mod**\n\n__+kick @UnGars__ | Pour kick un membre en ayant le rôle **Mod**\n\n__+mute @jeanKevin__ | Pour mute une personne en texte\n\n__+unmuteT @jeanKevin__ | Pour unmute une personne en texte\n\n__+vmute @UnNoob__ | Pour mute serveur un membre\n\n__+vunmute @UnNoob__ | Pour demute serveur un membreD\'autre commandes sont en dévelopement...',
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
        text: 'Message par ComaBot.'
      }
    }}).catch(console.log(h + ' "help admin" mis par: ' + message.author.username))
      .then(function (message) {
        message.react('😊')
      }).catch(function () {
        console.error()
      })
  }

  if (message.content === prefix + 'help fun') {
    return message.channel.sendMessage('', {embed: {
      title: 'Commandes:',
      color: 0xff0000,
      description: ':tools: Liste des commandes :tools: \n\n**+avatar** : Cela te permet d\'avoir l\'url d\'un avatar discord\n\n**ping** : <mystere> \n\nD\'autre commandes sont en dévelopement...',
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
        text: 'Message par ComaBot.'
      }
    }}).catch(console.log(h + ' "help fun" mis par: ' + message.author.username))
      .then(function (message) {
        message.react('😊')
      }).catch(function () {
        console.error()
      })
  }

  if (message.content === prefix + 'help rdm') {
    return message.channel.sendMessage('', {embed: {
      title: 'Commandes:',
      color: 0xff0000,
      description: ':tools: Liste des commandes :tools: \n\n**Les commandes sont en développement...**',
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
        text: 'Message par ComaBot.'
      }
    }}).catch(console.log(h + ' "help rdm" mis par: ' + message.author.username))
      .then(function (message) {
        message.react('😊')
      }).catch(function () {
        console.error()
      })
  }
}
