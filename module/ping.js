module.exports.run = async (client, message, args) => {
  const m = await message.channel.send({embed: {
		color: 10790566,
		description: 'Ping?'
	}})
    m.edit({embed: {
		color: 10790566,
		description: `Pong! \nLatence: **${m.createdTimestamp - message.createdTimestamp}ms**\nAPI Latence: **${Math.round(client.ping)}ms**`
	}})
}
