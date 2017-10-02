/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client, message) {
  // MISE EN PLACE DE CERTAINES VARIABLE
  const fs = require('fs')
  const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  const prefix = config.prefix
  let points = JSON.parse(fs.readFileSync('./module/points.json', 'utf8'))
  client.on('message', message => {
    // MISE EN PLACE DE CERTAINES VARIABLE
    var logs = message.guild.channels.find('name', 'logs')
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const rep = message.content.trim().split(/ +/g)
    const reponse = rep.shift().toLowerCase()
    // POUR LES MESSAGES QUI DOIVENT PAS ETRE COMPTER
    if (!message.content === prefix) return
    if (message.author.bot) return
    // POUR AJOUTER LA PERSONNE
    if (!points[message.author.id]) {
      points[message.author.id] = {
        points: 0,
        level: 0
      }
      if (!logs) {
        return
      } else {
        logs.send({embed: {
          color: 8453888,
          description: '<@' + message.author.id + `> a été rajouter à la BDD de level`
        }})
      }
    }
    let userData = points[message.author.id]
    userData.points++

    let curLevel = Math.floor(0.2 * Math.sqrt(userData.points))
    if (curLevel > userData.level) {
      // Level up!
      userData.level = curLevel
      message.channel.send({embed: {
        color: 8453888,
        description: `:sunny: **level up!** \n ` + message.author.username + `est niveau **${curLevel}** !`
      }})
      // message.reply(`Tu as level up ! Tu es niveau **${curLevel}** maintenant !`)
    }

    if (message.content === prefix + 'level') {
      message.channel.send({embed: {
        color: 8453888,
        description: '<@' + message.author.id + `> Tu es niveau ${userData.level}, avec ${userData.points} points`
      }})
      // message.reply(`Tu es niveau ${userData.level}, avec ${userData.points} points`)
    }

    /* if (message.startsWith === prefix + 'userlevel') {
      let levelUser = args.slice('l').join(' ')
      message.channel.send({embed: {
        color: 8453888,
        description: '<@' + levelUser + `> est niveau ${userData.level}, avec ${userData.points} points`
      }})
    } */

    fs.writeFile('./module/points.json', JSON.stringify(points), (err) => {
      if (err) console.error(err)
    })
  })
}
