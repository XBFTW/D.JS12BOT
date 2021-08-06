module.exports = {
    name: 'ping',
    description: "It's Ping Pong!",
    execute(client, message, cmd, args, Discord){
        message.channel.send('Pong!');


        
    }


}