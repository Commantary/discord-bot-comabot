
module.exports.run = async (client, message, args) => {
  const fs = require('fs')
  const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  const inv = config.inv
  // COMMANDE INVITATION DU BOT
  message.channel.send(inv)
}
