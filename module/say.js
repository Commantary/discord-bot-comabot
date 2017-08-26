/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */
const discord = require('discord.js');
module.exports = function(client){

    client.on('message', message =>{

        if(message.content.startsWith('Mentionne moi')){
            var MessageAuthor = message.author.lastMessage.attachments.array(2);
            message.reply(MessageAuthor);
        }

        if(message.content.startsWith('mentionne moi')){
            var MessageAuthor = message.author.lastMessage.attachments.array(2);
            message.reply(MessageAuthor);
        }
    })
}