var iconUrlLien = 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048'
module.exports.run = async (client, message, args) => {
  const fs = require('fs')
  const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  const prefix = setting.prefix
  if (message.content === prefix + 'help') {
    return message.channel.sendMessage('', {embed: {
      title: 'Commandes:',
      color: 0xff0000,
      description: ':tools: **COMMANDES** :tools: \n\nCommandes Admin: +help admin \n\nCommandes Fun: +help fun',
      footer: {
        icon_url: iconUrlLien,
        text: 'Créer par Commentary.'
      }
    }}).catch(console.error)
      .catch(function () {
        console.error()
      })
  }
  if (message.content === prefix + 'help admin') {
    return message.channel.sendMessage('', {embed: {
      title: 'Commandes:',
      color: 0xff0000,
      description: ':tools: **Liste des commandes** :tools: \n\n**Les commandes nécessite le role** __**MOD**__ !\n\n__+ban @ComaBot__ | Pour ban un membre (**non stable**)\n\n__+kick @ComaBot__ | Pour kick un membre (**non stable**)\n\n__+mute @ComaBot__ | Pour mute une personne en texte (**non stable**)\n\n__+unmute @ComaBot__ | Pour unmute une personne en texte (**non stable**)\n\n__+vmute @ComaBot__ | Pour mute serveur un membre\n\n__+vunmute @ComaBot__ | Pour demute serveur un membre\n\nD\'autre commandes sont en dévelopement...',
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
        text: 'Créer par Commentary.'
      }
    }}).catch(console.log(h + ' "help admin" mis par: ' + message.author.username))
      .catch(function () {
        console.error()
      })
  }

  if (message.content === prefix + 'help fun') {
    return message.channel.sendMessage('', {embed: {
      title: 'Commandes:',
      color: 0xff0000,
      description: ':tools: **Liste des commandes** :tools: \n\n__+avatar @ComaBot__ : Cela te permet d\'avoir l\'url d\'un avatar discord\n\n__+ping__ : Pour vérifié si le bot est fonctionnel\n\n__+choice <choix1> <choix2>__ : Pour proposer un choix au bot (Pour les choix vous ne pouvez mettre que un mot)\n\n__+cal <____**chiffre**____> <signe> <chiffre / nombre>__ : Pour faire un calcule rapide\n\n__+cat__ : Pour afficher une image de chat **mignon** random\n\n',
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
        text: 'Créer par Commentary.'
      }
    }}).catch(console.log(h + ' "help fun" mis par: ' + message.author.username))
      .catch(function () {
        console.error()
      })
  }

}
