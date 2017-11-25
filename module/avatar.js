
module.exports.run = async (client, message, args) => {
        
     var mentionned = message.mentions.users.first();
      var autheur;
      if(mentionned){
          var autheur = mentionned;
      } else {
          var autheur = message.author;
      }
var newavatar = autheur.avatarURL;
if(newavatar.includes(".gif")){

message.channel.send("",{
embed:{
            image:{
                url: autheur.avatarURL.slice(0,autheur.avatarURL.lastIndexOf('?size='))
            },
            color:0xffffff
        }})
}else{
            
                   return message.channel.send("",{
embed:{
            image:{
                url: autheur.avatarURL
            },
            color:0xffffff
        }})
                };
}
