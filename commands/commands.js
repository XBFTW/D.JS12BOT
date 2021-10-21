module.exports = {
    name: 'commands',
    description: "Respondes with a list of commands",
    execute(client, message, cmd, args, Discord, catchErr){
             
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
