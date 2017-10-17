
module.exports.run = async (client, message, args) => {
	var calcule = message.content.slice(message.content.indexOf(message.content.split(' ')[1]))
	var nombre = parseInt(calcule.substr(0))
	var nombreN = parseInt(calcule.substr(0))

function bloc1() {
	if(nombre != 0){
		nombre--
		bloc2()
	} else {
		message.channel.send({embed: {
			color: 10790566,
			description: 'Le nombre **' + nombreN + '** est __pair__'
		}})
	}

function bloc2() {
	if(nombre != 0){
		nombre--
		bloc1()
	} else {
		message.channel.send({embed: {
			color: 10790566,
			description: 'Le nombre **' + nombreN + '** est __impair__'
		}})
	}
}
}

bloc1()

}