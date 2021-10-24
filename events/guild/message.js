const config = require('../../config.json');
require('dotenv').config();

module.exports = (Discord, client, message) => {
    const prefix = config.prefix;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    //Error catching
    function catchErr (err, message) {
        client.users.cache.get(`${process.env.OWNER}`).send('The bot crashed, the crash report: ```' + err + '```')
        console.log("The bot has just prevented a crash, the report has been sent to XBFTW")
        message.channel.send('The bot just prevented a crash, the report has been sent to XBFTW');
      }

    
    if(command) command.execute(client, message, cmd, args, Discord, catchErr);

}
//This is to check the messages for commands
