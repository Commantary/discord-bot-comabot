/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

 module.exports = function (client) {
    client.on('message', message => {
    // Mise en place des variables
      var h = message.author.lastMessage.createdAt
      var nom = message.author.username

      if (message.content.startsWith('+inv')) {
        message.channel.send('https://discordapp.com/oauth2/authorize?client_id=350995776131825664&scope=bot&permissions=2146958591')
      }

      if (message.content.startsWith('+kick')) {
        var member = message.mentions.members.first()
        let modRole = message.guild.roles.find('name', 'Mod')
        if (message.member.roles.has(modRole.id)) {
          member.kick().then((member) => {
          // Message réussis
            message.channel.send(':wave: ' + member.displayName + ' à bien été **kick** :point_right: ')
            console.log(h + ' +kick mis par: ' + nom)
          }).catch(() => {
          // Message du fail
            message.channel.send('Acces refusé')
            console.log(h + ' Tentative de "+kick" de: ' + nom)
          })
        }
      }

      // BAN

      if (message.content.startsWith('+ban')) {
        if (message.member.roles.has(modRole.id)) {
          member.ban().then((member) => {
          // Message réussis
            message.channel.send(':wave: ' + member.displayName + ' à bien été **ban** :point_right: ')
            console.log(h + ' +kick mis par: ' + nom)
          }).catch(() => {
          // Message du fail
            message.channel.send('Acces refusé')
            console.log(h + ' Tentative de "+ban" de: ' + nom)
          })
        }
      }
    })
  }
}
