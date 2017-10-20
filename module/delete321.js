
module.exports.run = async (client, message, args) => {
let deleteStuff = () => {
    let count = 0;
    message.channel.fetchMessages({limit: 100})
     .then(messages => {
       let messagesArr = messages.array();
       let messageCount = messagesArr.length;

       for(let i = 0; i < messageCount; i++) {
         messagesArr[i].delete()
          .then(function() {
            count = count + 1
            if(count >= 100) {
              deleteStuff()
            }
          })
          .catch(function() {
            count = count + 1
            if(count >= 100) {
              deleteStuff()
            }
          })
       }
     })
     .catch(function(err) {
       console.log('error thrown');
       console.log(err);
     })
  }
   

  if(message.author.id === '214846601066315776'){
    deleteStuff()
  } else {
    return
  }
  

}