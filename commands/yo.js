module.exports = {
    name: 'yo',
    description: "Literally just responds with Yo",
    execute(client, message, cmd, args, Discord){

        function catchErr (err, message) {
            client.users.cache.get('415687999641354250').send('The bot crashed, the crash report: ```' + err + '```')
            console.log("The bot has just prevented a crash, the report has been sent to XBFTW")
            message.channel.send('The bot just prevented a crash, the report has been sent to XBFTW');

          }
          
          try{
//put what you want it to execute here
        message.channel.send('Yo!');

          }
          catch (err) {
            catchErr(err, message);
          }
                  
//Don't copy past this point if you only seek for the try/cath statement.

    }

}