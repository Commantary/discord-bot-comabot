/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

const fs = require('fs')


module.exports = function (client) {

  // QUAND LE BOT REJOINT UN NOUVEAU SERVEUR
  client.on('guildCreate', guild => {
    var contenu = JSON.parse(fs.readFileSync('./events/channel.json', 'utf8'))
    // ON MET LE CHANNEL A " "
    contenu[guild.id] = {
       channel: " "
      }
      // ON SAUVEGARDE
      fs.writeFile('./events/channel.json', JSON.stringify(contenu), (err) => {
      if (err) console.error(err)
    })
  })

  client.on('guildDelete', guild => {
    return
  })

  // ARRIVE
  client.on('guildMemberAdd', member => {

    // Variables
    var channelRequire = JSON.parse(fs.readFileSync('./events/channel.json', 'utf8'))
    var channelName = channelRequire[member.guild.id].channel
    var channel = member.guild.channels.find('name', channelName)
    
    // Fais rien si le channel existe pas
    if (!channel) {
        if (channel === " ") {
          return
        } else {
          member.guild.createChannel(channelName, 'text')
    .then(channel => console.log(`Created new channel ${channel}`))
    .catch(console.error)
        }
    } else {
      // Envoie le message, en mentionnant le membre
    channel.send({embed: {
      color: 7659264,
      author: {
        name: 'Nouveau membre !',
        icon_url: member.user.avatarURL
      },
      thumbnail: {
        url: member.user.avatarURL
      },
      title: "**@** du membre",
      description: `${member} ,`,

      fields: [{
        name: "**#** du membre",
        value: `**${member.user.username}#${member.user.discriminator}**`
      }
      ],
      footer: {
        text: 'Crée par Commentary'
      }
    }})
    //channel.send(`-----------------------------------\n   Bienvenue sur le serveur ${member}\n-----------------------------------`)
    }
  })
  // DEPART
  client.on('guildMemberRemove', member => {
    // Variables
    var channelRequire = JSON.parse(fs.readFileSync('./events/channel.json', 'utf8'))
    var channelName = channelRequire[member.guild.id].channel
    var channel = member.guild.channels.find('name', channelName)
    // Fais rien si le channel existe pas
    if (!channel) {
        if (channel === " ") {
          return
        } else {
          member.guild.createChannel(channelName, 'text')
    .then(channel => console.log(`Created new channel ${channel}`))
    .catch(console.error)
        }
    } else {
      // Envoie le message, en mentionnant le membre
    channel.send({embed: {
      color: 14614785,
      author: {
        name: 'Disparition d\'un membre !',
        icon_url: member.user.avatarURL
      },
      thumbnail: {
        url: member.user.avatarURL
      },
      title: "**@** du membre",
      description: `${member}`,

      fields: [{
        name: "**#** du membre",
        value: `**${member.user.username}#${member.user.discriminator}**`
      }
      ],
      footer: {
        text: 'Crée par Commentary'
      }
      
    }})
    //channel.send(`-----------------------------------\n   Bienvenue sur le serveur ${member}\n-----------------------------------`)
    }
  })

}
