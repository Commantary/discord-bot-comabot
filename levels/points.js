/**
 *
 * @para {Client} client - The discord.js client.
 *
 */
const request = require('request')
const fs = require('fs')
var roll = Math.floor(Math.random() * 50)
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
const prefix = config.prefix
module.exports = function (client) {
  // EVENT MESSAGE
  client.on('message', message => {
    // LES VARIABLES
    var url = process.env.LEVELAPI || process.argv[2]
  if (!url) {
  console.log('L\'url n\'existe pas!')
  }
    var logs = message.guild.channels.find('name', 'logs')

    function callback(err, response, body) { // DEBUT DE CALLBACK
      if (err) {
        console.log(err)
      }
    } // FIN DE CALLBACK

    if(message.author.bot) return
    if (message.channel.type === "dm") return

    request(url, (err, res, body) => { // DEBUT DU REQUEST
      // si sa arrive la on log
      // Si y'a une erreur
      if(err || res.statusCode!== 200)return // SI YA UNE ERREUR
      // Si y'en a pas
      var points = JSON.parse(body)
      if(message.author.id === client.user.id) return
      if(!points[message.author.id]){ // ON VERIFIE SI IL EST DANS LA BDD
        points[message.author.id] = {
          points: 0,
          level: 0 // ON LUI MET 0 XP LEVEL 0
          }
          if (!logs){ // SI IL Y A PAS LE CHANNEL LOGS
            return // ON FAIT RIEN
          } else { // SI IL Y EST
            logs.send({embed: { // ON ENVOIE LE MESSAGE POUR DIRE QU'IL A ETE RAJOUTER A LA BDD
              color: 8453888,
              description: '<@' + message.author.id + `> a été rajouté à la BDD de level`
            }}) // FIN DE L EMBED
          } // FIN DU IF SI Y A LE CHANNEL LOGS


      } // FIN DU IF DE SI IL EST PAS DANS LA LEVEL BDD

      let userData = points[message.author.id]
      userData.points++

      let curLevel = Math.floor(0.2 * Math.sqrt(userData.points))
      if(curLevel > userData.level){
        // LEVEL UP
        userData.level = curLevel
        message.channel.send({embed: {
          title: ':sunny: **LEVEL UP!**',
          color: 16241496,
          description: '**' + message.author.username + `** est niveau **${curLevel}** maintenant !`,
          fields: [
            {
              name: 'Récompense',
              value: ':small_orange_diamond: ' + roll
            }
          ]
        }})
      }

      if(message.content === prefix + 'level'){ // SI IL FAIT LA COMMANDE POUR LE LEVEL
        message.channel.send({embed: { // ON ENVOIE L EMBED
          color: 8453888,
          description: '<@' + message.author.id + `> Tu es niveau ${userData.level}, avec ${userData.points} points`
        }}) // FIN DE l'EMBED
      } // FIN DU IF DE LA COMMANDE LEVEL

      // On put tout sa!
      request({ url: url, method: 'PUT', json: points}, callback)

    }) // FIN DU REQUEST

  }) // FIN DE L'EVENT MESSAGE
} // FIN DU MODULE EXPORTS
