// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/teste.json')
// On start le bot
client.on('ready', () => {
  client.user.setGame('+inv | +help | ' + client.guilds.size + ' serveurs', 'https://www.twitch.tv/the_commentary', 0)
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
music(client)

/* Partie Liste 1 */
const message1 = require('./module/liste_1.js')
message1(client)

/* Partie Help */
const help = require('./module/help.js')
help(client)

/* Partie Admini 1 */
const Admini1 = require('./module/admini1.js')
Admini1(client)

var dt = process.env.TOKEN || process.argv[2]

if (!dt) {
  console.log('')
}

client.login(dt)
