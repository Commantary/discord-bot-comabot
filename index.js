// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/config.json')
// On start le bot
client.on('ready', () => {
  client.user.setGame('+inv | +help | +stats | Sur ' + client.guilds.size + ' serveurs', 'https://www.twitch.tv/the_commentary', 0)
  console.log('-------------------------------------')
  console.log('    [!] ComaBot connecté [!]')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + setting.prefix)
})

/* Partie Ping */
const ping = require('./module/ping.js')
ping(client)

/* Partie Liste 2 */
const liste2 = require('./module/liste_2.js')
liste2(client)

/* Partie Musique */
const music = require('./discord.js-music-v11')
music(client, {
  prefix: '+', // Prefix of '-'.
  global: true, // Server-specific queues.
  maxQueueSize: 10, // Maximum queue size of 10.
  clearInvoker: true // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
})
/* Partie Liste 1 */
const message1 = require('./module/liste_1.js')
message1(client)

/* Partie Help */
const help = require('./module/help.js')
help(client)

/* Partie Admin */
const admin = require('./module/admin.js')
admin(client)

/* Partie Arriver Departs */
const arde = require('./events/arriverDeparts.js')
arde(client)

var dt = process.env.TOKEN || process.argv[2]

if (!dt) {
  console.log('')
}

client.login(dt)
