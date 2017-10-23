const request = require('request')

module.exports.run = async (client, message, args) => {
  // Les variables
  var channel = args.slice('channel').join(' ')
  var channelId = message.guild.channels.find('name', channel).id
  var serveur = message.guild.id
  var url = 'https://api.myjson.com/bins/1eurgn'

  function callback(err, response, body) {
    if (err) {
      message.channel.send({embed: {
        color: 10790566,
        description: 'Erreur: ' + err
      }})
    }
    message.channel.send({embed: {
      color: 10790566,
      description: 'Le nouveau channel " **' + channelId + '** "à bien été mis !'
    }})
  }

  // On get le json
  request(url, (err, res, body) => {
    // si sa arrive la on log
    console.log('Tentation de chargement')
    // Si y'a une erreur
    if(err || res.statusCode!== 200)return
    // Si y'en a pas
    console.log('chargé avec succés')
    var objet = JSON.parse(body)
    objet[serveur] = {
      channel: channelId
    }

    // On put tout sa!
    request({ url: url, method: 'PUT', json: objet}, callback)
  })
}
