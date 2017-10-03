
module.exports.run = async (client, message, args) => {
  // MISE EN PLACE DES VARIABLES
  var fs = require('fs')
  const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  let modRole = message.guild.roles.find('name', 'Mod')
  // FIN DES VARIABLES

  // DEBUT DU CODE DE LA COMMANDE
  if (message.member.roles.has(modRole.id)) {
    let newPrefix = args.slice('prefix').join(' ')
    // var contenuD = fs.readFile('localbot/module/teste.json', 'UTF-8')
    var contenu = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))

    contenu.prefix = newPrefix

    fs.writeFile('./module/config.json', JSON.stringify(contenu), (err) => {
      if (err) console.error(err)
    })

    message.channel.send('Le nouveau prefix est: ' + contenu.prefix)
  } else {
    message.channel.send({embed: {
      color: 16711680,
      description: 'Tu n\'as pas les autorisations pour faire sa !'
    }})
  }
}
