const config = require('../../config.json');

module.exports = (Discord, client, message) => {
    const prefix = config.prefix;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, cmd, args, Discord);

}


//This is to check the messages for commands