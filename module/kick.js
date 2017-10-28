
module.exports.run = async (client, message, args) => {

    if(!message.member.roles.some(r=>["Administrator", "Mod", "Modo", "mod", "Admin"].includes(r.name)) )
      return message.channel.send({embed: {
      	color: 0xff0000,
      	description: "Désolé tu n'as pas les permissions pour !"
      }})


    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send({embed: {
      	color: 0xff0000,
      	description: "Mentionne une personne sur ce serveur!"
      }})

    if(!member.kickable)
      return message.channel.send({embed: {
      	color: 0xff0000,
      	description: "Je ne peux pas kick cette personne!\nIl a un plus haut role?\nJ'ai les permissions pour kick?"
      }})


    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.channel.send({embed: {
      	color: 0xff0000,
      	description: "Il faut dire une raison pour kick!"
      }})

    await member.kick(reason)

      .catch(error => message.channel.send({embed: {
      	color: 0xff0000,
      	description: `Désolé ${message.author} Je ne peux pas kick car : ${error}`
      }}))
    message.reply({embed: {
      	color: 0xff0000,
      	description: `<@${member.user.tag}> a été kick par <@${message.author.tag}> pour: **${reason}`
      }})


}
