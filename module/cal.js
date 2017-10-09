// Variable pour les images
const addi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835796709474315/addition.png'
const multi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835831744364545/multiplication.png'
const divi = 'https://cdn.discordapp.com/attachments/354420349594763274/366835812551229440/division.png'
const soustra = 'https://cdn.discordapp.com/attachments/354420349594763274/366835841823277056/soustraction.png'
const les_signes = 'https://cdn.discordapp.com/attachments/354420349594763274/366845331033554944/4_signes.png'

module.exports.run = async (client, message, args) => {
// Variables

  var calcule = message.content.slice(message.content.indexOf(message.content.split(' ')[1]))
  var number1 = parseInt(calcule.substr(0, 1))
  var number2 = parseInt(calcule.substr(4))
  var signe = calcule.substr(1, 3).trim()

if (number1==NaN||number2==NaN) return message.channel.send('**Erreur: Les nombres doivent être des nombres!**')

let calculeMessage = await message.channel.send({embed: {
    color: 10790566,
    description: 'Calcule en cours...'
  }})

// IF POUR METTRE CALCULEFAIT 
switch (signe) {

    case '+':
    // ADDITION
calc = "Addition"
ico = addi
    calculeFait = eval(number1+"+"+number2)
    console.log(calculeFait)
      break;

    case '-':
    // SOUSTRACTION
calc = "Soustraction"
ico = soustra
    calculeFait = eval(number1+"-"+number2)
    console.log(calculeFait)
      break;

    case '*':
    // MULTIPLICATION
calc = "Multiplication"
ico = multi
    calculeFait = eval(number1+"*"+number2)
    calcule = number1+' x '+number2
    console.log(calculeFait)
      break;

    case '/':
    // DIVISION
calc = "Division"
ico = divi
    calculeFait = eval(number1+"/"+number2)
      calcule = number1+' ÷ '+number2
      break;
    default:
    calculeFait = '***Erreur : Mauvaise signe utilisée***'

}

message.channel.send({embed: {
      author: {
        name: calc,
        icon_url: ico
      },
      color: 10790566,
      description: calcule + ' = ' + calculeFait
      }})

await calculeMessage.delete()

}