/**
 *
 * @para {Client} client - The discord.js client.
 *
 */

const request = require('request')

module.exports = function (client) {
  // LES VARIABLES
  var url = process.env.JSONAPI || process.argv[2]
  if (!url) {
  console.log('L\'url n\'existe pas!')
  }
  // QUAND LE BOT REJOINT UN NOUVEAU SERVEUR
  client.on('guildCreate', guild => {
    function callback(err, response, body) {
      if (err) {
        console.error(err)
      }
      console.log('Le channel false a été défini pour le serveur: ' + guild.name)
    }  // FIN DE LA FUNCTION

    // On get le json
    request(url, (err, res, body) => {
      // si sa arrive la on log
      // Si y'a une erreur
      if(err || res.statusCode!== 200)return
      // Si y'en a pas
      var objet = JSON.parse(body)
      var serveur = guild.id
      objet[serveur] = {
        channel: false
      }

      var defaultChannel = guild.defaultChannel
      if(!defaultChannel){
        return
      } else {
          var objet = JSON.parse(body)
          var serveur = guild.id

            defaultChannel.send({embed: {
              color: 8510197,
              description: 'Bonjour ! Merci de m\'avoir inviter !\n\nVous n\'avez pas défini de channel pour accueillir et dire au revoir aux membre !\nDéfinisser un channel avec la commande `+channel <channel>` en ayant le rôle **Mod** !\nJ\'ai aussi un systeme de level, créer un le channel **logs** pour avoir accées à certains log, faites `+level` pour savoir votre xp !\nN\'oubliez pas de faire `+logs` pour vérifier si vous avez un channel **logs**\n\n__**Bonne journée**__'
            }})


      }
      // On put tout sa!
      request({ url: url, method: 'PUT', json: objet}, callback)
    })

  }) // FIN DE L'EVENT GUILDCREATE

  client.on('guildDelete', guild => {
    return
  }) // FIN DE L'EVENT GUILDDELETE

  // QUAND UN MEMBRE REJOINT LE SERVEUR
  client.on('guildMemberAdd', member => {
    request(url, (err, res, body) => {
      // Verif de l'erreur
      if(err || res.statusCode!==200) return
      // Les variables
      var obj = JSON.parse(body)
      var serveur = member.guild.id
      if(obj[serveur]==undefined){
      	objet[serveur] = {
        	channel: false
      	}
      	request({ url: url, method: 'PUT', json: objet}, callback)
      }
      var channelObj = obj[serveur].channel
      if(channelObj===false){ // SI Y'A PAS DE CHANNEL SET
        return // ON FAIS RIEN
      } else { // SI Y'EN A UN
        // Les variables
        var obj = JSON.parse(body)
        var serveur = member.guild.id
        var channelObj = obj[serveur].channel
        var welcomeChannel = member.guild.channels.get(channelObj)
        var channelName = '<#' + channelObj + '>'
        if(!welcomeChannel){
          member.guild.createChannel(channelName, 'text')
            .then(channel => console.log(`Nouveau channel créer ${channel}`))
            .catch(console.error)
        } else {
          // Les variables
          var obj = JSON.parse(body)
          var serveur = member.guild.id
          var channelObj = obj[serveur].channel
          var welcomeChannel = member.guild.channels.get(channelObj)
          // Envoie le message, en mentionnant le membre
          welcomeChannel.send({embed: {
          color: 7659264,
          author: {
            name: 'Nouveau membre !',
            icon_url: member.user.avatarURL
          },
          thumbnail: {
            url: member.user.avatarURL
          },
          title: "**@** du membre",
          description: `${member} ,`,

          fields: [{
            name: "**#** du membre",
            value: `**${member.user.username}#${member.user.discriminator}**`
          }
          ],
          footer: {
            text: 'Crée par Commentary.'
          }
        }})
        }
      }
    }) // FIN DU REQUEST
  }) // FIN DE L'EVENT GUILD MEMBER ADD

  // QUAND UN MEMBRE QUITTE LE SERVEUR
  client.on('guildMemberRemove', member => {
    var botId = client.user.id
    if(member.id===botId){
      return
    } else {
      request(url, (err, res, body) => {
        // Verif de l'erreur
        if(err || res.statusCode!==200) return
        // Les variables
        var obj = JSON.parse(body)
        var serveur = member.guild.id
        var channelObj = obj[serveur].channel
        if(channelObj===false){ // SI Y'A PAS DE CHANNEL SET
          return // ON FAIS RIEN
        } else { // SI Y'EN A UN
          // Les variables
          var obj = JSON.parse(body)
          var serveur = member.guild.id
          var channelObj = obj[serveur].channel
          var welcomeChannel = member.guild.channels.get(channelObj)
          var channelName = '<#' + channelObj + '>'
          if(!welcomeChannel){
            member.guild.createChannel(channelName, 'text')
              .then(channel => console.log(`Nouveau channel créer ${channel}`))
              .catch(console.error)
          } else {
            // Les variables
            var obj = JSON.parse(body)
            var serveur = member.guild.id
            var channelObj = obj[serveur].channel
            var welcomeChannel = member.guild.channels.get(channelObj)
            // Envoie le message, en mentionnant le membre
              welcomeChannel.send({embed: {
              color: 14614785,
              author: {
                name: 'Disparition d\'un membre !',
                icon_url: member.user.avatarURL
              },
              thumbnail: {
                url: member.user.avatarURL
              },
              title: "**@** du membre",
              description: `${member}`,

              fields: [{
                name: "**#** du membre",
                value: `**${member.user.username}#${member.user.discriminator}**`
              }
              ],
              footer: {
                text: 'Crée par Commentary.'
              }

            }})
          }
        }
      }) // FIN DU REQUEST
    } // FIN DU ELSE

  }) // FIN DE L'EVENT QUILD MEMBER REMOVE

} // FIN DU MODULE
