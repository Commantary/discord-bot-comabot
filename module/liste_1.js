/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    const setting = require('./teste.json')
    var prefix = setting.prefix
    var msg = message

    if (message.content === prefix + 'stats') {
      const ce = require('embed-creator')

      msg.channel.send(ce(
        'hex code color', 'author object', 'title',
        'description',
        'fields object',
        'footer object',
        'image object', 'is timestamp enabled (true/false)'
      ))
    }
  })
}
