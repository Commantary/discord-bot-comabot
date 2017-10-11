
module.exports.run = async (client, message, args) => {
  // MISE EN PLACE DES VARIABLES
  var fs = require('fs')
  const setting = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  let modRole = message.guild.roles.find('name', 'Mod')

  // FIN DES VARIABLES

  // DEBUT DU CODE DE LA COMMANDE

  if(!modRole) {
  	message.channel.send({embed: {
  		title: 'LE ROLE MOD N\'EXISTE PAS',
  		color: 14614785
  	}})
  }

  if (message.member.roles.has(modRole.id)) {
    let channelNameChange = args.slice('channel').join(' ')
    // var contenuD = fs.readFile('localbot/module/teste.json', 'UTF-8')
    var contenu = JSON.parse(fs.readFileSync('./events/channel.json', 'utf8'))
    if(!contenu[message.guild.id]) {
      contenu[message.guild.id] = {
    	 channel: channelNameChange
      }	
    } else {
    	contenu[message.guild.id] = {
        channel: channelNameChange
      }
    }
    

    fs.writeFile('./events/channel.json', JSON.stringify(contenu), (err) => {
      if (err) console.error(err)
    })

    message.channel.send({embed: {
    	color: 10790566,
    	description: 'Le nouveau channel par défaut est : **' + contenu[message.guild.id].channel + '**'
    }})

    // ('Le nouveau channel par défaut est : **' + contenu[message.guild.id].channel + '**')
  } else {
    message.channel.send({embed: {
      color: 16711680,
      description: 'Tu n\'as pas les autorisations pour faire sa !'
    }})
  }
}
