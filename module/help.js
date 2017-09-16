/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    var h = message.author.lastMessage.createdAt
    var nom = message.author.username
    if (message.content === '+help') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: **COMMANDES** :tools: \n\nCommandes Admin: +help admin \n\nCommandes Fun: +help fun \n\nCommandes Randoms: +help rdm',
        footer: {
          text: 'Message par ComaBot.'
        }
      }}).catch(console.error)
    }
    if (message.content === '+help admin') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: Liste des commandes :tools: \n\n+ban [@(*343535365363*) | Pour ban un membre en ayant le rôle **Mod**\n\n+kick [@(*343535365363*) | Pour kick un membre en ayant le rôle **Mod**\n\nD\'autre commandes sont en dévelopement...',
        footer: {
          text: 'Message par ComaBot.'
        }
      }}).catch(console.log(h + ' "help admin" mis par: ' + nom))
    }
    if (message.content === '+help fun') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: Liste des commandes :tools: \n\n**C\'est quoi mon avatar** : Cela te permet d\'avoir l\'url de ton avatar discord\n\n**ping/PING/Ping/PONG** : <mystere> \n\n**Mentionne moi** : Le bot te mentionneras comme sa tu auras un ami :heart:\n\nD\'autre commandes sont en dévelopement...',
        footer: {
          text: 'Message par ComaBot.'
        }
      }}).catch(console.log(h + ' "help fun" mis par: ' + nom))
    }
    if (message.content === '+help rdm') {
      return message.channel.sendMessage('', {embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: Liste des commandes :tools: \n\n**Les commandes sont en développement...**',
        footer: {
          text: 'Message par ComaBot.'
        }
      }}).catch(console.log(h + ' "help rdm" mis par: ' + nom))
    }
  })
}
