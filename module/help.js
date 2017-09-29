/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    // MISE EN PLACE DES VARIABLES
    var h = message.author.lastMessage.createdAt
    var nom = message.author.username
    const setting = require('./config.json')
    const prefix = setting.prefix
    const args = message.content.trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (message.content === prefix + 'help') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: **COMMANDES** :tools: \n\nCommandes Admin: +help admin \n\nCommandes Fun: +help fun \n\nCommandes Randoms: +help rdm',
        footer: {
          icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
          text: 'Message par ComaBot.'
        }
      }}).catch(console.error)
    }
    if (message.content === prefix + 'help admin') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: **Liste des commandes** :tools: \n\n__+ban @UnGars__ | Pour ban un membre en ayant le rôle **Mod**\n\n__+kick @UnGars__ | Pour kick un membre en ayant le rôle **Mod**\n\n__+mute @jeanKevin__ | Pour mute une personne en texte\n\n__+unmute @jeanKevin__ | Pour unmute une personne en texte\n\n__+vmute @UnNoob__ | Pour mute serveur un membre\n\n__+vunmute @UnNoob__ | Pour demute serveur un membreD\'autre commandes sont en dévelopement...',
        footer: {
          icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
          text: 'Message par ComaBot.'
        }
      }}).catch(console.log(h + ' "help admin" mis par: ' + nom))
    }
    if (message.content === prefix + 'help fun') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: Liste des commandes :tools: \n\n**+avatar** : Cela te permet d\'avoir l\'url d\'un avatar discord\n\n**ping/PING/Ping/PONG** : <mystere> \n\n**Mentionne moi** : Le bot te mentionneras comme sa tu auras un ami :heart:\n\n**+userinfo**: Cela te permet d\'avoir certaines info sur une personne\n\nD\'autre commandes sont en dévelopement...',
        footer: {
          icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
          text: 'Message par ComaBot.'
        }
      }}).catch(console.log(h + ' "help fun" mis par: ' + nom))
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
      }}).catch(console.log(h + ' "help rdm" mis par: ' + nom))
    }
  })
}
