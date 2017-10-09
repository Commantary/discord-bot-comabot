// Variable pour les images
const addi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835796709474315/addition.png'
const multi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835831744364545/multiplication.png'
const divi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835812551229440/division.png'
const soustra = 'https://cdn.discordapp.com/attachments/354420349594763274/366835841823277056/soustraction.png'
const les_signes = 'https://cdn.discordapp.com/attachments/354420349594763274/366845331033554944/4_signes.png'

module.exports.run = async (client, message, args) => {
// Variables
  var calcule = message.content.slice(message.content.indexOf(message.content.split(' ')[1]))

  var numberString1 = calcule.substr(0, 1)
  var numberString2 = calcule.substr(4)
  var signe = calcule.substr(1, 3).trim()
  var number1 = Number(numberString1)
  var number2 = Number(numberString2)

console.log(number1 + '|' + signe + '|' + number2)
  // PREFIX
  const fs = require('fs')
  const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  const prefix = config.prefix




let calculeMessage = await message.channel.send({embed: {
    color: 10790566,
    description: 'Calcule en cours...'
  }})

// IF POUR METTRE CALCULEFAIT 
switch (signe) {
	case '+':
	// ADDITION
      var calculeFait = number1 + number2
      console.log(calculeFait)

      message.channel.send({embed: {
      author: {
        name: 'ADDITION',
        icon_url: addi
      },
      color: 10790566,
      description: calcule + ' = ' + calculeFait
      }})
      break;

    case '-':
    // SOUSTRACTION
      calculeFait = number1 - number2
      console.log(calculeFait)

      message.channel.send({embed: {
      author: {
        name: 'SOUSTRACTION',
        icon_url: soustra
      },
      color: 10790566,
      description: calcule + ' = ' + calculeFait
      }})
      break;

    case '*':
    // MULTIPLICATION
      calculeFait = number1 * number2
      console.log(calculeFait)

      message.channel.send({embed: {
      author: {
        name: 'MULTIPLICATION',
        icon_url: multi
      },
      color: 10790566,
      description: number1 + ' x ' + number2 + ' = ' + calculeFait
      }})
      break;

    case '/':
    // DIVISION
      calculeFait = number1 / number2
      console.log(calculeFait)

      message.channel.send({embed: {
      author: {
        name: 'DIVISION',
        icon_url: divi
      },
      color: 10790566,
      description: number1 + ' ÷ ' + number2 + ' = ' + calculeFait
      }})
      break;

    default:
    calculeFait = '***Erreur***'
}

await calculeMessage.delete()

}