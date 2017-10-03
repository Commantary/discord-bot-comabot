
module.exports.run = async (client, message, args) => {
  // Mise en place des variables
    var member = message.guild.member(message.mentions.members.first())
    let modRole = message.guild.roles.find('name', 'Mod')
    let banMember = message.guild.member(message.mentions.users.first())
    const fs = require('fs')
    // Si il y a pas de mention dans la commande
    if (!member) {
      message.channel.send('`+ban [@(le joueur a ban)]`')
    } else {
    // If du modRole
      if (message.member.roles.has(modRole.id)) {
        message.guild.member(banMember).ban()
        // Message réussis
        message.channel.send(':wave: **' + banMember.displayName + '** à été __**ban**__ par: **' + message.author.username + '**')
        console.log('+ban mis par: ' + message.author.username)
        // ON RAJOUTE LA PERSONNE DANS LE JSON
        let banlist = JSON.parse(fs.readFileSync('./banlist.json', 'UTF-8'))
        var banned = {}
        banned.banlist[message.author.username] = message.author.id
        // And then, we save the edited file.
        fs.writeFile('./banlist.json', JSON.stringify(banlist), (err) => {
          if (err) console.error(err)
        })
  
        // Message du fail
      } else {
        message.channel.send('Acces refusé')
      }
    }
  }
  