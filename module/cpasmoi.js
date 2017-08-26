/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */
const discord = require('discord.js');
module.exports = function(client){

    client.on('message', message =>{
        var h = message.author.lastMessage.createdAt;
        var nom = message.author.username;

    if(message.content === 'C\'est pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log(h+' "C\'est pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'c\'est pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log(h+' "c\'est pas moi" mis par: '+ message.author.username);
        
    }

    if(message.content === 'C pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log(h+' "C pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log(h+' "c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'Wlh c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log(h+' "Wlh c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'wlh c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log(h+' "wlh c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'jte jure c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te le promet c\'est moi !' );
        console.log(h+' "jte jure c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'Jte jure c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te le promet c\'est moi !' );
        console.log(h+' "Jte jure c pas moi" mis par: '+ message.author.username);
    }
})
}
