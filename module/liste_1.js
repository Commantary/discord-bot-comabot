/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    const setting = require('./config.json')
    var prefix = setting.prefix
    var version = setting.version
    var name = setting.name
    var msg = message
    var icone = setting.icon_creator
    const args = message.content.trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    var owner = setting.owner_id

    // COMMANDE DE STATS
    if (command === prefix + 'stats') {
      return msg.channel.sendMessage('', {embed: {
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        color: 0x0AD90A,
        description: '\n\nVersion: __**' + version + '**__            Nom du bot: __**' + name + '**__\n\nServeurs connecté: **__' + client.guilds.size + '__**            Utilisateurs: __**' + client.guilds.users + '**__  ',
        footer: {
          icon_url: icone,
          text: 'Commande crée par Commentary'
        }
      }}).catch(console.error)
    }

    // COMMANDE TESTE POUR EMBED
    if (command === prefix + 'embed') {
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: 'This is an embed',
        url: 'http://google.com',
        description: 'This is a test embed to showcase what they look like and what they can do.',
        fields: [{
          name: 'Fields',
          value: 'They can have different fields with small headlines.'
        },
        {
          name: 'Masked links',
          value: 'You can put [masked links](http://google.com) inside of rich embeds.'
        },
        {
          name: 'Markdown',
          value: 'You can put all the *usual* **__Markdown__** inside of them.'
        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: owner.user.avatarURL,
          text: 'Par Commentary'
        }
      }
      })
    }

    // COMMANDE USER INFO
    if (command === prefix + 'userinfo') {
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
        })
      }
    }

    // COMMANDE SAY 
    if (command === 'say') {
      // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
      // To get the "message" itself we join the `args` back into a string with spaces: 
      const sayMessage = args.join(' ')
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o => {})
      // And we get the bot to say the thing: 
      message.channel.send(sayMessage)
    }
  })
}
