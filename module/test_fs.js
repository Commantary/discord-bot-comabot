/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    // MISE EN PLACE DES VARIABLES
    var fs = require('fs')
    const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
    const prefixSetting = setting.prefix
    const teste = require('./teste.json')
    const args = message.content.slice(prefixSetting.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    if (command === 'prefix') {
      let newPrefix = args.slice('prefix').join(' ')
      // var contenuD = fs.readFile('localbot/module/teste.json', 'UTF-8')
      var contenu = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))

      contenu.prefix = newPrefix

      fs.writeFile('./module/config.json', JSON.stringify(contenu), (err) => {
        if (err) console.error(err)
      })

      message.channel.send('Le nouveau prefix est: ' + contenu.prefix)
    }
  }
  )
}
