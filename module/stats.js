
module.exports.run = async (client, message, args) => {
  // MISE EN PLACE DES VARIABLES
  const fs = require('fs')
  const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  var version = setting.version
  var name = setting.name
  var msg = message
  var icone = setting.icon_creator
  var owner = setting.owner_id

  return msg.channel.sendMessage('', {embed: {
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    color: 0x0AD90A,
    description: '\n\nVersion: __**' + version + '**__            Nom du bot: __**' + name + '**__\n\nServeurs connecté: **__' + client.guilds.size + '__**            Utilisateurs: __**' + client.guilds.users + '**__  ',
    footer: {
      icon_url: icone,
      text: 'Crée par Commentary'
    }
  }}).catch(console.error)
}
