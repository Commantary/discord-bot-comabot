
module.exports.run = async (client, message, args) => {
  if (message.mentions.users.size === 0) {
    message.channel.send('Mentionne une personne !')
  } else {
    let member = message.mentions.members.first()
    message.channel.send({embed: {
      color: 0x848407,
      author: {
        name: 'Info de : ' + member.user.username,
        icon_url: member.user.avatarURL
      },
      thumbnail: {
        url: member.user.avatarURL
      },
      title: 'Avatar',
      description: '**ID**: ' + member.user.avatar + '     **URL**: [lien](' + member.user.avatarURL + ')',

      fields: [{
        name: 'Création',
        value: member.user.createdAt
      },
      {
        name: 'Divers infos',
        value: '**DISCRIMINATEUR**: ' + member.user.discriminator + '     **PSEUDO**: ' + member.user.username
      }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: 'Crée par Commentary'
      }

    }

    }

    )
  }
}
