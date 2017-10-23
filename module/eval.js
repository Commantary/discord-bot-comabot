module.exports.run = async (client, message, args) => {
  function msgEval() {
    var msg = message
    var msgc = message.content
    try{
        code = eval(msgc.substr(6));
        msg.channel.send({embed:{
            color: 0x00FFAA,
            title: "Résultat d'eval:",
            description: code
        }})
    } catch(err) {
        msg.channel.send({embed:{
            title:':x:Erreur:x:',
            description:"eval parti en couille",
            color: 0xFF0000
        }});
        msg.channel.send(err.toString());
    }

}

  msgEval()

}
