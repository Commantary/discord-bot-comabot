/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function(client){
    
            client.on('message', message =>{
                var h = message.author.lastMessage.createdAt;
                var nom = message.author.username;

                if (message.content.startsWith('C\'est quoi mon avatar')){
                    // On envoie son avatar
                    message.reply(message.author.avatarURL);
                    console.log(h+' Nom du proprio de l\'avatar: ' + message.author.username);
                }
                if (message.content === 'Avatar ComaBot') {
                    message.channel.send('C\'est quoi mon avatar');
                }
            })
        }