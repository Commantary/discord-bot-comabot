/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  var fs = require('fs')

  fs.writeFileSync('monFichier', 'contenu du fichier', 'UTF-8')
  client.on('message', message => {

  })
}
