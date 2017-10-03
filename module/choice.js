
module.exports.run = async (client, message, args) => {
  var roll = Math.floor(Math.random() * 8)
  let arg1 = args.slice(1)
  let arg2 = args.slice(0, 1)

  if (roll >= 4) {
    message.channel.send({embed: {
      color: 10790566,
      description: 'Mon choix est: ' + arg1 + '\nroll: ' + roll
    }})
  } else {
    message.channel.send({embed: {
      color: 10790566,
      description: 'Mon choix est: ' + arg2 + '\nroll: ' + roll
    }})
  }
}
