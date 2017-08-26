/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function(client){
    
         var diego = '<@269865633154334722>';
         var golden = '<@228938468498210816>';
         var freez = '<@214750727451574273>';
         var zoucoulou = '<@219947380823293953>';
         var twido = '<@212247521089552384>';
         

        client.on('message', message =>{
            var h = message.author.lastMessage.createdAt;
            if(message.content === 'UN BRONZE AVEC TEEMO EN URF') {
                // sa envoie la vidéo
                message.channel.send('https://www.youtube.com/watch?v=hrWedR0uM4Y');
                message.channel.send('``` HIHIHIHIHIHIIHIH ```');
                console.log(h+' Video de Golden mis par: '+ message.author.username);
            }

            if(message.content === 'Diego') {
                // sa envoie le message
                message.channel.send(diego + ' ou est Dora ? \n http://urlz.fr/5I3T');
                console.log(h+' "Diego" mis par: '+ message.author.username);
            }
    
            if(message.content === 'diego') {
                // sa envoie le message
                message.channel.send(diego + ' le random JPP');
                console.log(h+' "diego" mis par: '+ message.author.username);
            }
            
            if(message.content === 'freez') {
                // sa envoie le message
                message.channel.send(freez + ' le fdp qui a buy Ziggs avec l\'argent de spyzzza ?');
                console.log(h+' "freez" mis par: '+ message.author.username);
            }

            if(message.content === 'Freez') {
                // sa envoie le message
                message.channel.send(freez + ' le fdp qui a buy Ziggs avec l\'argent de spyzzza ?');
                console.log(h+' "Freez" mis par: '+ message.author.username);
            }

            if(message.content === 'golden'){
                // sa envoie le message
                message.channel.send('-'+ golden + ' :**C\'est pas moi c\'est Diego**');
                message.channel.send('-'+ diego + ' : **MAIS EUUUUUUU**');
                message.channel.send('-'+ golden + ' : **Victime** ~~lul~~ ');
                message.channel.send('-'+ diego + ' : :cry: ');
                console.log(h+' "golden" mis par: '+ message.author.username);
            }

            if(message.content === 'Golden'){
                // sa envoie le message
                message.channel.send('-'+ golden + ' : **C\'est pas moi c\'est Diego** ');
                message.channel.send('-'+ diego + ' : **MAIS EUUUUUUU** ');
                message.channel.send('-'+ golden + ' : **Victime** ~~lul~~ ');
                message.channel.send('-'+ diego + ' : :cry: ');
                console.log(h+' "Golden" mis par: '+ message.author.username);
            }

            if(message.content === 'Twido') {
                // sa envoie le message
                message.channel.send(twido +' le gars qui afk farm gmod H24 ? Ouai je vois plutot bien qui sais :thinking:');
                console.log(h+' "Twido" mis par: ' + message.author.username);
            }
        })}
    