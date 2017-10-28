
module.exports.run = async (client, message, args) => {
  // Mise en place des variables
    let reason = args.slice(1).join(' ')
    let member = message.mentions.members.first();
    let channelLogs = message.guild.channels.find('name', 'logs')

    if(reason.length < 1) return message.channel.send({embed: {
      color: 8583768,
      description: 'Il faut dire une raison pour ban.'
    }})
    if(message.mentions.users.size < 1) return message.channel.send({embed: {
      color: 8583768,
      description: 'Vous devez mentionné une personne à ban.'
    }})


    if(!message.guild.member(member).bannable) return message.channel.send({embed: {
      color: 8583768,
      description: 'Je ne peux pas ban ce membre'
    }})

    await message.guild.ban(member, 2)
    if(!channelLogs){
      message.channel.send({embed: {
        color: 8583768,
        description: `${member.user.tag} a été ban par <@${message.author.id}> pour: **${reason}**`
      }})
    } else {
      channelLogs.send({embed: {
        color: 122789,
        fields: [
        {
          name: 'Action',
          value: 'ban',
          inline: false
        },
        {
          name: 'Membre ban',
          value: member.user.tag,
          inline: true
        },
        {
          name: 'Par',
          value: message.author.tag,
          inline: true
        },
        {
          name: 'Raison',
          value: reason,
          inline: true
        }
        ]
      }})
      
      message.channel.send({embed: {
        color: 8583768,
        description: `<@${member.user.tag}> a été ban par <@${message.author.id}> pour: **${reason}**`
      }})


    }
  }
  