/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.export = function (client) {
  const fs = require('fs')
  const sql = require('sqlite')
  sql.open('./score.sqlite')
  const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
  const prefix = config.prefix
  client.on('message', message => {
    var logs = message.guild.channels.find('name', 'logs')
    // DEBUT DU IF
    if (message.author.bot) return
    if (message.channel.type !== 'text') return

    if (message.content.startsWith(prefix + 'ping')) {
      message.channel.send('pong!')
    }

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) {
        if (!logs) {
          sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0])
          /* message.channel.send({embed: {
            color: 14211288,
            description: 'Le channel \'LOGS\' n\'existe pas. Voulez-vous le creer ?'
          }}).then(function (message) {
            message.react('✅')
            message.react('❌')
          })
          setTimeout(messageReactionMis, 10000)
          */
          // message.guild.createChannel('logs', 'text', 'ADMINISTRATOR')
          message.channel.send({embed: {
            color: 14211288,
            description: 'Le channel \' **LOGS** \' n\'existe pas. Tu devrais le créer !'
          }})
        } else {
          sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0])
          logs.send({embed: {
            color: 8453888,
            description: '<@' + message.author.id + `> a été rajouter à la BDD de level`
          }})
        }
      } else {
        let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1))
        if (curLevel > row.level) {
          row.level = curLevel
          sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`)
          message.channel.send({embed: {
            title: ':sunny: **LEVEL UP!**',
            color: 16241496,
            description: '**' + message.author.username + `** est niveau **${curLevel}** maintenant !`
          }})
        }
        sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`)
      }
    }).catch(() => {
      console.error()
      sql.run('CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)').then(() => {
        sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0])
      })
    })

    if (!message.content.startsWith(prefix)) return

    if (message.content.startsWith(prefix + 'level')) {
      sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply('Ton niveau actuel est 0')
        message.channel.send({embed: {
          color: 8453888,
          description: '<@' + message.author.id + `> Tu es niveau ${row.level}, avec ${row.points} points`
        }})
      })
    }
  })
}
