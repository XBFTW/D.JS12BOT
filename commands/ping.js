module.exports = {
    name: 'ping',
    description: "It's Ping Pong!",
    execute(client, message, cmd, args, Discord, catchErr){

        try{
            message.channel.send('Pong!');
        }
        catch (err) {
           catchErr(err, message);
        }
        //dont copy past this part if you only want the try/catch
    }

}
