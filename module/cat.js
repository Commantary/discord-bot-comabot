const request = require('request')
const fs = require('fs')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

	request.get('http://random.cat/meow', function (err, res, body) {
		var obj = JSON.parse(body)

		const embed = new Discord.RichEmbed()
			.setImage(obj.file)
			.setColor(12434877)
			.setFooter('Créer par Commentary', client.user.avatarURL)
			message.channel.send({embed})
	}) // FIN DU REQUEST

} // FIN DU MODULE EXPORTS
