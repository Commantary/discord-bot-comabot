
module.exports.run = async (client, message, args) => {
   async function logs() {
     // Les variables
     var channelLogs = message.guild.channels.find('name', 'logs')
     if(!channelLogs){
       console.log('Y\'as pas le channel')
       const messageInteractif = await message.channel.send({embed: {
            title: 'Info',
            color: 12434877,
            description: 'Vous n\'avez pas créer de channel `logs` voulez-vous en créer ?'
          }})
          //Réagir à notre message
          await messageInteractif.react('✅') // TRUE
          await messageInteractif.react('❎') // FALSE
          // Créer le collecteur
          const collecteur = messageInteractif.createReactionCollector((reaction, user) => user.id === message.author.id && message.guild.ownerID)
          // Quand le collecteur collecte
          collecteur.on('collect', async(reaction) => {

            if(reaction.emoji.name === '✅') { // TRUE
              // ON CREER LE CHANNEL
              message.guild.createChannel('logs', 'text')
                .then(channel => console.log(`Le channel ${channel} a été créer`))
                .catch(console.error) // SI IL Y A UNE ERREUR
                messageInteractif.edit({embed: { // ON EDIT LE MESSAGE
                  title: 'Info',
                  color: 12434877,
                  description: 'Le channel `logs` a été créer !'
                }}) // FIN DE L'EMBED
                // ON SUPPR LES EMOJIS
                await messageInteractif.clearReactions()
            } // FIN DU IF TRUE

            if(reaction.emoji.name === '❎'){ // FALSE
              messageInteractif.edit({embed: { // ON EDIT LE MESSAGE
                title: 'Info',
                color: 12434877,
                description: 'Le channel `logs` ne seras pas créer.'
              }}) // FIN DE l'EMBED

              // ON SUPPR LES EMOJIS
              await messageInteractif.clearReactions()
            } // FIN DU IF FALSE
          })

     } else {
       message.channel.send({embed: {
            title: 'Info',
            color: 12434877,
            description: 'Le channel `logs` existe déjà !'
          }})
     }

   } // FIN DE LA FONCTION

   let modRole = message.guild.roles.find('name', 'Mod')
   if(!modRole){
     message.channel.send({embed: {
       color: 11797508,
       description: 'Le role **Mod** n\'existe pas !'
     }})
   } else {
     if (message.member.roles.has(modRole.id)) {
       logs()
     } else {
       message.channel.send({embed: {
         color: 11797508,
         description: 'Tu \'as pas le role pour faire cela !'
       }})
     }
   }

} // FIN DU MODULE
