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

    if (message.content === prefix + 'stats') {
      return msg.channel.sendMessage('', {embed: {
        icon_url: 'https://cdn.discordapp.com/avatars/350995776131825664/d6348248148cb6acd73f2d391c12c9fe.png?size=2048',
        title: 'ComaBot',
        color: 0x0AD90A,
        description: '\n\nVersion: __**' + version + '**__       Nom du bot: __**' + name + '**__\n\nServeurs connecté: ' + client.guilds.size + '   ',
        footer: {
          icon_url: icone,
          text: 'Commande crée par Commentary'
        }
      }}).catch(console.error)
    }
  })
}
