const api = 'https://jsonbin.io/b/59e136d207d53e275ddfed88'
const fetch = require('snekfetch')

module.exports.run = async (client, message, args) => {

var randomCat = require('random-cat')
 
// Random cat picture of various widths and heights 
// Possible values: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600 
// http://lorempixel.com/100/600/cats 
var url = randomCat.get()
// Possible values: abstract, animals, business, cats, city, food, nightlife, fashion, people, nature, sports, technics, transport 
// Random cat picture of specific size 
// http://lorempixel.com/120/600/cats 
var urlWithSize = randomCat.get({
  width: 720,
  height: 480
})

let msg = await message.channel.send({embed: {
	description: 'Génération du chat....'
	}})
await message.channel.sendFile(url, 'cat.jpg')


msg.delete()

}