/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    const setting = require('./teste.json')
    var prefix = setting.prefix
    
    if (message.content === prefix + 'stats') {
      
    }

  })
}
