
module.exports.run = async (client, message, args) => {
  // MISE EN PLACE DES VARIABLES
  const fs = require('fs')
  const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  var version = setting.version
  var name = setting.name
  var msg = message
  var icone = setting.icon_creator
  var owner = setting.owner_id
  var guildNames = client.guilds.map(g => g.name).join("\n")

  function filtererText(c) {
    return c.type === 'text'
  }
 var channelTextName = client.channels.filter(filtererText).size

 function filtererVoice(c) {
    return c.type === 'voice'
  }
 var channelVoiceName = client.channels.filter(filtererVoice).size


  return msg.channel.sendMessage('', {embed: {
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    color: 3067130,
    footer: {
      icon_url: icone,
      text: 'Crée par Commentary'
    },
    thumbnail: {
    "url": client.user.avatarURL
    },
    fields: [
      {
        name: 'Nom du Bot',
        value: '[' + client.user.username + '](about:blank)',
        inline: true
      },
      {
        name: 'Discriminateur du Bot',
        value: '[' + client.user.discriminator + '](about:blank)',
        inline: true
      },
      {
        name: 'ID du Bot',
        value: '[' + client.user.id + '](about:blank)',
        inline: true
      },
      {
        name: 'Version du Bot',
        value: '[' + setting.version + '](about:blank)',
        inline: true
      },
      {
        name: 'Serveur(s)',
        value: '[' + client.guilds.size + '](about:blank)',
        inline: true
      },
      {
        name: 'Utilisateur(s) connecté(s)',
        value: '[' + client.users.size + '](about:blank)',
        inline: true
      },
      {
        name: 'Channels textuels',
        value: '[' + channelTextName + '](about:blank)',
        inline: true
      },
      {
        name: 'Channels vocaux',
        value: '[' + channelVoiceName + '](about:blank)',
        inline: true
      },
      {
        name: 'Channels totales',
        value: '[' + client.channels.size + '](about:blank)',
        inline: true
      },
      {
        name: 'Créateur',
        value: '[<@214846601066315776>](https://discord.gg/cF3Xypx)',
        inline: true
      },
      {
        name: 'uptime',
        value: '[' + client.readyAt + '](about:blank)',
        inline: true
      }
    ]
  }}).catch(console.error)
}
