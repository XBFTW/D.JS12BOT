module.exports = {
    name: 'say',
    description: "Repeats what it is told",
    execute(client, message, cmd, args, Discord){

        function catchErr (err, message) {

            require('dotenv').config();

            client.users.cache.get(`${process.env.OWNER}`).send('The bot crashed, the crash report: ```' + err + '```')
            console.log("The bot has just prevented a crash, the report has been sent to XBFTW")
            message.channel.send('The bot just prevented a crash, the report has been sent to XBFTW');

          }
          
          try{

//Type the command here
if (message.author.id === `${process.env.OWNER}`){
//uncomment the next comment if you want the bot to delete the message the person sends.
//message.delete(message)
message.channel.send(`${args}`)
}else {
    message.channel.send('You do not have the permissions to use this command.')
}
          }
          catch (err) {
            catchErr(err, message);
          }
                  
//Don't copy past this point if you only want for the try/catch statement.

    }

}
