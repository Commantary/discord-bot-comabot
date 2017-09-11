// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()

// On start le bot
client.on('ready', () => {
  client.user.setPresence({ game: { name: client.guilds.size + ' serveurs actifs', type: 0 } })
  console.log('-------------------------------------')
  console.log('    [!] ComaBot connecté [!]')
  console.log('-------------------------------------')
})
// Create an event listener for new guild members

/* Partie Ping */
const ping = require('./module/ping.js')
ping(client)

/* Partie Avatar */
const avatar = require('./module/avatar.js')
avatar(client)

/* Partie Musique */
const music = require('./discord.js-music-v11')
music(client)

/* Partie Message Aux Gens */
const message1 = require('./module/message_personne.js')
message1(client)

/* Partie Say */
const say = require('./module/say.js')
say(client)

/* Partie cpasmoi */
const cpasmoi = require('./module/cpasmoi.js')
cpasmoi(client)

/* Partie Verif Role */
const verifrole = require('./module/verifrole.js')
verifrole(client)

/* Partie Help */
const help = require('./module/help.js')
help(client)

/* Partie Kick  */
const kick = require('./module/kick.js')
kick(client)

/* Partie Ban */
const ban = require('./module/ban.js')
ban(client)

/* Partie Teste1 */
const test1 = require('./module/test1.js')
test1(client)

var dt = process.env.TOKEN || process.argv[2]

if (!dt) {
  console.log('')
}

client.login(dt)
