
module.exports.run = async (client, message, args) => {
   
  if(message.content === '+help') { // IF DU +HELP NORMAL
    message.channel.send({embed: {
        title: "Commandes:",
        color: 0xff0000,
        description: ':tools: **COMMANDES** :tools: \n\nCommandes Admin: +help admin \n\nCommandes Fun: +help fun',
        footer: {
          icon_url: client.user.avatarURL,
          text: 'Créer par Commentary.'
        }
    }}).catch(console.error)
  } // FIN DU IF DU +HELP NORMAL

    if(message.content === '+help admin'){ // IF DU +HELP ADMIN
        message.channel.send({embed: {
            title: 'Commandes:',
            color: 0xff0000,
            description: ':tools: **Liste des commandes** :tools: \n\n**Les commandes nécessite le role** __**MOD**__ !\n\n__+ban @ComaBot__ | Pour ban un membre\n\n__+unban <id du membre>__ | Pour unban un membre\n\n__+kick @ComaBot__ | Pour kick un membre\n\n__+mute @ComaBot__ | Pour mute une personne en texte (**non stable**)\n\n__+unmute @ComaBot__ | Pour unmute une personne en texte (**non stable**)\n\n__+vmute @ComaBot__ | Pour mute serveur un membre\n\n__+vunmute @ComaBot__ | Pour demute serveur un membre\n\n__+channel <channel>__ | Pour choisir le channel ou le bot diras les arriver et départs\n\nD\'autres commandes sont en dévelopement...',
            footer: {
              icon_url: client.user.avatarURL,
              text: 'Créer par Commentary.'
            }
        }}).catch(console.error)
    } // FIN DU IF DU +HELP ADMIN

      if(message.content === '+help fun'){ // IF DU +HELP FUN
          message.channel.send({embed: {
              title: 'Commandes:',
              color: 0xff0000,
              description: ':tools: **Liste des commandes** :tools: \n\n**+avatar** : Cela te permet d\'avoir l\'url d\'un avatar discord\n\n**+ping** : <mystere> \n\n**+choice <choix1> <choix2>** : Pour proposer un choix au bot\n\n**+cal <chiffre> <signe> <chiffre>** : Pour faire un calcule rapide\n\n**+cat** : Pour afficher une image de chat random\n\n**+dog** | Pour afficher une image de chien random\n\n',
              footer: {
              icon_url: client.user.avatarURL,
              text: 'Créer par Commentary.'
            }
          }}).catch(console.error)
      } // FIN DU IF DU +HELP FUN
                    

} // FIN DU MODULE EXPORTS
