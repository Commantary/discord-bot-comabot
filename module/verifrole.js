/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */
const discord = require('discord.js')
module.exports = function (client) {
  client.on('message', message => {
    if (message.content === '+adminrole') {
      let modRole = message.guild.roles.find('name', 'Mod')
            if (message.member.roles.has(modRole.id)) {
        message.channel.sendMessage(`YAY! Tu as les perms.`)
      } else {
        return message.reply("Miskine t'as pas les perms :(")
      }
    }
 })
}
