
module.exports.run = async (client, message, args) => {
	var member = message.guild.member(message.mentions.members.first())

	function jeux() {
		let reason = args.slice(1).join(' ')
		member.user.sendMessage(reason)
		// commentary.user.sendMessage('**TGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG**')
	}

	if(message.author.id === '214846601066315776'){
		jeux()
	} else {
		message.channel.send({embed: {
			description: 'Tu ne peux pas **' + message.author.username + '** , désolé!'
		}})
	}
	
}