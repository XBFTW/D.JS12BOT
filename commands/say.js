module.exports = {
    name: 'say',
    description: "Repeats what it is told",
    execute(client, message, cmd, args, Discord){

try{

//Type the command here
if (message.author.id === `${process.env.OWNER}`){
    if(args != ""){
        const config = require('../config.json');
        const argument = message.content.slice(config.prefix.length + cmd.length);
        //uncomment the next comment if you want the bot to delete the message the person sends.
        //message.delete(message)
        message.channel.send(`${argument}`)  
    }else{
        message.channel.send('Missing Arguments!')
    }
 
}
else {
    message.channel.send('You do not have the permissions to use this command.')
}

}
catch (err) {
    catchErr(err, message);
};            
//Don't copy past this point if you only want the try/catch statement.
}
}
