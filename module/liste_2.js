/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    // MISE EN PLACE DES VARIABLES
    const setting = require('./config.json')
    const prefix = setting.prefix
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (command === 'avatar') {
      if (message.mentions.users.size === 0) {
        message.reply('Mentionne une personne !')
      } else {
        let member = message.mentions.members.first()
        message.channel.send(member().avatarURL)
      }
    }

    /*  if (command === 'avatar') {
      const modRole = message.guild.roles.find('name', 'Mods')
      if (!modRole) {
        message.channel.send('Le rôle Mod n\'existe pas')
      }
      if (!message.member.roles.has(modRole.id)) {
        message.reply('Acces refusé')
      } else {
        let member = message.mentions.members.first()
        message.reply(message.author(member).avatarURL)
      }
      if (message.mentions.users.size === 0) {
        message.reply('Mentionne une personne à kick')
      }
    } */
  })
}
