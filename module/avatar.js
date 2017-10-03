
module.exports.run = async (client, message, args) => {
// SI IL MENTIONNE PERSONNE
  if (message.mentions.users.size === 0) {
    message.reply('Mentionne une personne !')
  } else {
    // ON CREER LA VARIABLE MEMBER
    let member = message.mentions.members.first()
    // ON APPELLER LA VARIABLE MEMBER ET ON CREER L'ARRAY USER POUR MEMBER ET ON RECUPERE L'AVATAR URL
    message.channel.send('Voici son avatar: ' + member.user.avatarURL + '')
  }
}
