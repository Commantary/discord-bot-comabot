/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function(client){
    
            client.on('message', message =>{
                var h = message.author.lastMessage.createdAt;
                var nom = message.author.username;
                if(message.content === '+help') {
                    return message.channel.sendMessage('', {embed: {
                        title: "Commandes:",
                        color: 0xff0000,
                        description: ':tools: Liste des commandes :tools: \n\n**C\'est quoi mon avatar** : Pour avoir son avatar \n\n**+admin** : Pour savoir si tu as le role Anti-Modo \n\n**+modo** : Pour savoir si tu as le role Modo \n\n**Mentionne moi** : Le bot te mentionneras comme sa tu auras un ami :heart: \n\n**ping/PING/Ping/PONG** : <mystere> \n\n**Diego** : Dedicace aux :100: \n\n**Freez** : Dedicace aux :100: \n\n**Golden** : Dedicace aux :100: \n\n**c pas moi** : te réferencer aux #commandes-comabot pour savoir tout sur cela \n\nD\'autre commandes sont en dévelopement...',
                        footer: {
                            text: 'Message par ComaBot.'
                        }
                    }}).catch(console.error);
                    console.log(h+' "help" mis par: '+nom);
                }

            })
        }