module.exports = {
    name: 'commands',
    description: "Respondes with a list of commands",
    execute(client, message, cmd, args, Discord){


      function catchErr (err, message) {
        client.users.cache.get('415687999641354250').send('The bot crashed, the crash report: ```' + err + '```')
        console.log("The bot has just prevented a crash, the report has been sent to XBFTW")
        message.channel.send('The bot just prevented a crash, the report has been sent to XBFTW');

      }
          
      try{

        const fs = require('fs');
        const dir = './commands';

        // list all files in the directory
        fs.readdir(dir, (err, files) => {
              
        files.forEach(file => {
          
        message.channel.send('```' + file + '```');


    });
});

          }
          catch (err) {
            catchErr(err, message);
          }
                  
//Don't copy past this point if you only seek for the try/cath statement.

    }

}