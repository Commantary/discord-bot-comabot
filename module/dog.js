const request = require('request')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

  request('https://random.dog/woof.json', function (err, res, body) {
    var obj = JSON.parse(body)

    const embed = new Discord.RichEmbed()
			.setImage(obj.url)
			.setColor(12434877)
      .setFooter('Créer par Commentary', client.user.avatarURL)
			message.channel.send({embed})
	}) // FIN DU REQUEST

}
