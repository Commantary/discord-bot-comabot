// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/config.json')
const fs = require('fs')
const request = require('request')
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
var url = process.env.JSONSITE || process.argv[2]
  if (!url) {
  console.log('L\'url n\'existe pas!')
  }
  
  function requestget() {
    request(url, (err, res, body) => {
      function callback(err, response, body) {
      if (err) {
        console.error(err)
      }
      console.log('Tout marche bien')
    }  // FIN DE LA FUNCTION

      if(err || res.statusCode!== 200) return
        var objet = JSON.parse(body)
      objet = {
        serveurs: '' + [client.guilds.size] + '',
        channels: '' + [client.channels.size] + ''
      }
      // On put tout sa!
      request({ url: url, method: 'PUT', json: objet}, callback)
    })
  } 

// On start le bot
client.on('ready', () => {
  client.user.setGame('+inv | +help | +stats | Sur ' + client.guilds.size + ' serveurs', 'https://www.twitch.tv/the_commentary', 0)
  console.log('-------------------------------------')
  console.log('    [!] ComaBot connecté [!]')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + setting.prefix)
  requestget()
  setInterval(requestget, 300000)
})

/* LES LEVELS */
 const pointsLevel = require('./levels/points.js')
 pointsLevel(client) 
 

/* ARRIVER ET DEPART */
const arvdep = require('./events/arriverDeparts.js')
arvdep(client)

/* Partie Musique */
const music = require('./discord.js-music-v11')
music(client, {
  prefix: '!', // Prefix of '-'.
  global: true, // Server-specific queues.
  maxQueueSize: 10, // Maximum queue size of 10.
  clearInvoker: true // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
})

client.on('message', message => {
  if (message.author.bot) return
  if (message.content.indexOf(config.prefix) !== 0) return

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./module/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    if (command === 'play' || command === 'skip' || command === 'leave' || command === 'volume' || command === 'level') {
      return
    } else {
      message.channel.send({embed: {
        color: 16711680,
        description: 'Cette commande n\'existe pas !'
      }})
    }
    console.error(err)
  }
})

var dt = process.env.TOKEN || process.argv[2]
if (!dt) {
  console.log('')
}
client.login(dt)
