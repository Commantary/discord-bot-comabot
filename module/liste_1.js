/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    const setting = require('./teste.json')
    var prefix = setting.prefix
    var version = setting.version
    var name = setting.name
    var msg = message
    var icone = setting.icon_creator
    var iconeComabot = 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048'

    if (message.content === prefix + 'stats') {
      return msg.channel.sendMessage('', {embed: {
        title: 'ComaBot',
        icon_url: iconeComabot,
        color: 0x0AD90A,
        description: '\n\nVersion: __**' + version + '**__       Nom du bot: __**' + name + '**__\n\n',
        footer: {
          icon_url: icone,
          text: 'Commande crée par Commentary'
        }
      }}).catch(console.error)
    }
  })
}
