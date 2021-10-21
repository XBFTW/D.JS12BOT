module.exports = {
    name: 'yo',
    description: "Literally just responds with Yo",
    execute(client, message, cmd, args, Discord, catchErr){

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
