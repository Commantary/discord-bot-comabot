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
    const args = message.content.trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    // COMMANDE POUR AVOIR L'AVATAR D'UN MEMBER
    if (command === prefix + 'avatar') {
      // SI IL MENTIONNE PERSONNE
      if (message.mentions.users.size === 0) {
        message.reply('Mentionne une personne !')
      } else {
        // ON CREER LA VARIABLE MEMBER
        let member = message.mentions.members.first()
        // ON APPELLER LA VARIABLE MEMBER ET ON CREER L'ARRAY USER POUR MEMBER ET ON RECUPERE L'AVATAR URL
        message.channel.send('Voici son avatar: ' + member.user.avatarURL + '')
        console.log(member)
      }
    }
  })
}
