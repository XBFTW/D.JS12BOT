module.exports = {
    name: 'ping',
    description: "It's Ping Pong!",
    execute(client, message, cmd, args, Discord){

        function catchErr (err, message) {

            require('dotenv').config();

            client.users.cache.get(`${process.env.OWNER}`).send('The bot crashed, the crash report: ```' + err + '```')
            console.log("The bot has just prevented a crash, the report has been sent to XBFTW")
            message.channel.send('The bot just prevented a crash, the report has been sent to XBFTW');

          }

        try{
            message.channel.send('Pong!');
        }
        catch (err) {
           catchErr(err, message);
        }
        //dont copy past this part if you only want the try/catch
    }

}
