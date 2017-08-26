/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function(client){
    
    client.on('message', message =>{
        var h = message.author.lastMessage.createdAt;
        var nom = message.author.username;

        if(message.content.startsWith('+ban')) {
            // Pour avoir la mention du gars
            var member = message.mentions.members.first();
            let modRole = message.guild.roles.find("name", "Mod");

            //deuxieme If
            if(message.member.roles.has(modRole.id)) {

                //ban
                member.ban(member)
                .then((member) => {
                    // Message réussis
                    message.channel.send(":wave: " + member.displayName + " à bien été banni :wave: ");
                    console.log(h+' +ban mis par: '+nom);
                })
            } else {
                // Message de fail
                message.channel.send('Acces refusé');
                console.log(h + ' Tentative de ban par: ' + nom);
            }
        }
    })


            }
        