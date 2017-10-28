
module.exports.run = async (client, message, args) => {
  // Mise en place des variables
    let reason = args.slice(1).join(' ')
    let member = args[0]
    let channelLogs = message.guild.channels.find('name', 'logs')

    if(reason.length < 1) return message.channel.send({embed: {
      color: 8583768,
      description: 'Il faut dire une raison pour unban.'
    }})


    if(!member) return message.channel.send({embed: {
      color: 8583768,
      description: 'Vous devez mettre un ID de membre ban.'.catch(console.error)
    }})

    await message.guild.unban(member, 2)
    if(!channelLogs){
      message.channel.send({embed: {
        color: 8583768,
        description: `<@${member}> a été unban par <@${message.author.id}> pour: **${reason}**`
      }})
    } else {
      channelLogs.send({embed: {
        color: 122789,
        fields: [
        {
          name: 'Action',
          value: 'unban',
          inline: false
        },
        {
          name: 'Membre unban',
          value: member,
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
        description: `<@${member}> a été unban par <@${message.author.id}> pour: **${reason}**`
      }})


    }
  }
