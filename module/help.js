
module.exports.run = async (client, message, args) => {

  

    if(message.content === '+help'){
async function teste() {
   var i = 0
   const messageInteractif = await message.channel.send({embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: **COMMANDES** :tools: \n\n__Commandes Admin__: chiffre **1** \n\n__Commandes Fun__: chiffre **2**\n\n__Supprimer__: l\'émoji **poubelle**',
        footer: {
        icon_url: client.user.avatarURL,
        text: 'Créer par Commentary.'
        }
      }})
   //Réagir à notre message
   await messageInteractif.react('0⃣') // CHIFFRE 0
   await messageInteractif.react('1⃣') // CHIFFRE 1
   await messageInteractif.react('2⃣') // CHIFFRE 2
   await messageInteractif.react('🗑') // EMOJI POUBELLE
   //Créer le collecteur
   const collecteur = messageInteractif.createReactionCollector((reaction, user) => user.id === message.author.id)
   //Quand le collecteur collecte
   collecteur.on('collect', async(reaction) => {
    i === 0
     if(reaction.emoji.name === '0⃣') { // CHIFFRE 0
      
      messageInteractif.edit({embed: {
        title: 'Commandes:',
        color: 0xff0000,
        description: ':tools: **COMMANDES** :tools: \n\n__Commandes Admin__: chiffre **1** \n\n__Commandes Fun__: chiffre **2**\n\n__Supprimer__: l\'émoji **poubelle**',
        footer: {
        icon_url: client.user.avatarURL,
        text: 'Créer par Commentary.'
        }
      }})

      await reaction.remove(message.author.id)

     }

     if (reaction.emoji.name === '1⃣') { // CHIFFRE 1
           
        messageInteractif.edit({embed: {
          title: 'Commandes:',
          color: 0xff0000,
          description: ':tools: **Liste des commandes** :tools: \n\n**Les commandes nécessite le role** __**MOD**__ !\n\n__+ban @ComaBot__ | Pour ban un membre (**non stable**)\n\n__+kick @ComaBot__ | Pour kick un membre (**non stable**)\n\n__+mute @ComaBot__ | Pour mute une personne en texte (**non stable**)\n\n__+unmute @ComaBot__ | Pour unmute une personne en texte (**non stable**)\n\n__+vmute @ComaBot__ | Pour mute serveur un membre\n\n__+vunmute @ComaBot__ | Pour demute serveur un membre\n\nD\'autre commandes sont en dévelopement...',
          footer: {
          icon_url: client.user.avatarURL,
          text: 'Créer par Commentary.'
          }
        }})

        await reaction.remove(message.author.id)

     }

     if (reaction.emoji.name === '2⃣') { // chiffre 2

        messageInteractif.edit({embed: {
          title: 'Commandes:',
          color: 0xff0000,
          description: ':tools: **Liste des commandes** :tools: \n\n__+avatar @ComaBot__ : Cela te permet d\'avoir l\'url d\'un avatar discord\n\n__+ping__ : Pour vérifié si le bot est fonctionnel\n\n__+choice <choix1> <choix2>__ : Pour proposer un choix au bot (Pour les choix vous ne pouvez mettre que un mot)\n\n__+cal <**CHIFFRE**> <signe> <chiffre / nombre>__ : Pour faire un calcule rapide\n\n__+cat__ : Pour afficher une image de chat **mignon** random\n\n',
          footer: {
          icon_url: client.user.avatarURL,
          text: 'Créer par Commentary.'
          }
        }})

        await reaction.remove(message.author.id)
     }

     if (reaction.emoji.name === '🗑') { // EMOJIS POUBELLE
      messageInteractif.delete()
     }

   })

}
teste()

} else {
  return
}

}
