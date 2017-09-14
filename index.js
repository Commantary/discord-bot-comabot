// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const token = 'MzU3NzgxMjI5NTgxNTAwNDE2.DJu5QA.BkJulEEblhSnf1g4_L79c-vk_ko'

// On start le bot
client.on('ready', () => {
  client.user.setGame('Pour plus d\'aide +help', 'https://www.twitch.tv/the_commentary', 0)
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

/* Partie Musique 
const music = require('./discord.js-music-v11')
music(client) */

/* Partie Message Aux Gens */
const message1 = require('./module/message_personne.js')
message1(client)

/* Partie Say */
const say = require('./module/say.js')
say(client)

/* Partie cpasmoi 
const cpasmoi = require('./module/cpasmoi.js')
cpasmoi(client) */

/* Partie Verif Role 
const verifrole = require('./module/verifrole.js')
verifrole(client) */

/* Partie Help */
const help = require('./module/help.js')
help(client)

/* Partie Admini 1  */
const Admini1 = require('./module/admini1.js')
Admini1(client)

/* Partie Teste1 
const test1 = require('./module/test1.js')
test1(client) */

client.login(token)
