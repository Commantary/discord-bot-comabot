// Variable pour les images
const addi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835796709474315/addition.png'
const multi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835831744364545/multiplication.png'
const divi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835812551229440/division.png'
const soustra = 'https://cdn.discordapp.com/attachments/354420349594763274/366835841823277056/soustraction.png'
const les_signes = 'https://cdn.discordapp.com/attachments/354420349594763274/366845331033554944/4_signes.png'

module.exports.run = async (client, message, args) => {

if (message.author.id === '214846601066315776') {
  // Variables
  let argument = message.content.split(' ').slice(1).join(' ')
  var calcule = message.content.slice(message.content.indexOf(message.content.split(' ')[1]))
  calcule = calcule.split(/ +/g)

  var numberString1 = calcule.substr(0, 1)
  var numberString2 = calcule.substr(4)
  var signe = calcule.substr(2, 3)
  var number1 = Number(numberString1)
  var number2 = Number(numberString2)

  // PREFIX
  const fs = require('fs')
  const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  const prefix = config.prefix

  // var signe = calcule.substr(1, 3).trim()
  // var teste = number1 + number2

  /* var calculeArr = [calcule]

  var arg1 = args.slice(0, 1)
  
  var arg3 = args.slice(2, 3)

  var number1arr = Number(calcule.slice(0, 1))
  var signeArr = calcule.slice(1, 2)
  var number2arr = Number(calcule.slice(2, 3))

  var number1 = Number(arg1)
  var number2 = Number(arg3)
*/
  // console.log(number1arr + '|' + signeArr + '|' + number2arr)
  //  c  a  l  c  u  l  e     1      +       2  
  // [1][2][3][4][5][6][7][8][9][10][11][12][13]

  /*
  * if (message.content === prefix + 'calcule') {
  * message.channel.send({embed: {
  *   title: 'CALCULE',
  *   color: 10790566,
  *   thumbnail: {
  *      url: les_signes
  *      },
  *      description: '**' + prefix + 'calcule** | Tu ne peux utiliser que 1 chiffre du style __**1 + 1**__\net tu ne peux pas faire __**11 + 47**__ pour l\'instant.'
  * }})
  * }  
  */
  if (signe === '+') {
    var calculeFait = number1 + number2
    console.log(calculeFait)
  } else if (signe === '-') {
    calculeFait = number1 - number2
    console.log(calculeFait)
  } else if (signe === '*') {
    calculeFait = number1 * number2
    console.log(calculeFait)
  } else if (signe === '/') {
    calculeFait = number1 / number2
    console.log(calculeFait)
  } else {
    calculeFait = '***Erreur***'
  }

  let calculeMessage = await message.channel.send({embed: {
    color: 10790566,
    description: 'Calcule en cours...'
  }})

  // console.log('args = ' + argument + ' calcule = ' + calcule + ' number1 = ' + number1 + ' signe = ' + signe + ' number2 = ' + number2)

  if (signe === '+') {
    message.channel.send({embed: {
      author: {
        name: 'ADDITION',
        icon_url: addi
      },
      color: 10790566,
      description: calcule + ' = ' + calculeFait
    }}).then(console.log('')).catch(console.error)
  } else if (signe === '-') {
    message.channel.send({embed: {
      author: {
        name: 'SOUSTRACTION',
        icon_url: soustra
      },
      color: 10790566,
      description: calcule + ' = ' + calculeFait
    }}).then(console.log('')).catch(console.error)
  } else if (signe === '*') {
    message.channel.send({embed: {
      author: {
        name: 'MULTIPLICATION',
        icon_url: multi
      },
      color: 10790566,
      description: arg1 + ' x ' + arg3 + ' = ' + calculeFait
    }}).then(console.log).catch(console.error)
  } else if (signe === '/') {
    message.channel.send({embed: {
      author: {
        name: 'DIVISION',
        icon_url: divi
      },
      color: 10790566,
      description: arg1 + ' ÷ ' + arg3 + ' = ' + calculeFait
    }}).then(console.log('')).catch(console.error)
  }

  calculeMessage.delete()
} else {
  return
}


}
