
module.exports.run = async (client, message, args) => {
// SI IL MENTIONNE PERSONNE
  if (message.mentions.users.size === 0) {
    message.reply('Mentionne une personne !')
  } else {
    // ON CREER LA VARIABLE MEMBER
    let member = message.mentions.users.first()
    // ON APPELLER LA VARIABLE MEMBER ET ON CREER L'ARRAY USER POUR MEMBER ET ON RECUPERE L'AVATAR URL
    let msg = await message.channel.send('Génération de l\'avatar...')

    await message.channel.send({files: [
      {
        attachment: member.displayAvatarURL,
        name: 'avatar.png'
      }
    ]})

    msg.delete()
    // message.channel.send('Voici son avatar: ' + member.user.avatarURL + '')
  }
}
