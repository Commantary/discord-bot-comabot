/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function (client) {
  client.on('message', message => {
    var nom = message.author.username
    var h = message.author.lastMessage.createdAt
    if (message.content === 'ping') {
    // sa envoie pong
      message.channel.send('pong')
      console.log(h + ' "ping" mis par: ' + nom)
    }

    if (message.content === 'Ping') {
    // sa envoie C'est ping sans maj fdp
      message.channel.send('C\'est ping sans maj fdp')
      console.log(h + '" Ping" mis par: ' + nom)
    }

    if (message.content === 'PONG') {
    // sa envoie TG PONG
      message.channel.send('TG PONG')
      console.log(h + ' "PONG" mis par: ' + nom)
    }

    if (message.content === 'PING') {
    // sa envoie PONG
      message.channel.send('PONG')
      console.log(h + ' "PING" mis par: ' + nom)
    }
  })
}
