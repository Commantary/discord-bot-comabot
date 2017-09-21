/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    // MISE EN PLACE DES VARIABLES
    var nom = message.author.username
    const args = message.content.trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (command === 'ping') {
    // sa envoie pong
      message.channel.send('Pong')
      console.log(' "ping" mis par: ' + nom)
    }

    /* if (message.content === 'Ping') {
    // sa envoie C'est ping sans maj fdp
      message.channel.send('C\'est ping sans maj fdp')
      console.log('" Ping" mis par: ' + nom)
    }

    if (message.content === 'pong') {
      // sa envoie ping
      message.channel.send('Ping')
    }

    if (message.content === 'Pong') {
      // sa envoie ping
      message.channel.send('Ping')
    }

    if (message.content === 'PONG') {
    // sa envoie TG PONG
      message.channel.send('TG PONG')
      console.log(' "PONG" mis par: ' + nom)
    }

    if (message.content === 'PING') {
    // sa envoie PONG
      message.channel.send('PONG')
      console.log(' "PING" mis par: ' + nom)
    } */
  })
}
