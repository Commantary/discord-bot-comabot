// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/config.json')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))

// On start le bot
client.on('ready', () => {
  client.user.setGame('+inv | +help | +stats | Sur ' + client.guilds.size + ' serveurs', 'https://www.twitch.tv/the_commentary', 0)
  console.log('-------------------------------------')
  console.log('    [!] ComaBot beta connecté [!]')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + setting.prefix)
})
// Create an event listener for new guild members

/* Partie pour les levels */
const levels = require('./levels/points.js')
levels(client)

/* ARRIVER ET DEPART */
const arvdep = require('./events/arriverDeparts.js')
arvdep(client)

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
    if (command === 'level') {
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
