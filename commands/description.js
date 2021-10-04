module.exports = {
    name: 'description',
    description: "Sends an Embed of the Description.",
    execute(client, message, cmd, args, Discord){

    function catchErr (err, message) {

        require('dotenv').config();

        client.users.cache.get(`${process.env.OWNER}`).send('The bot crashed, the crash report: ```' + err + '```')
        console.log("The bot has just prevented a crash, the report has been sent to XBFTW")
        message.channel.send('The bot just prevented a crash, the report has been sent to XBFTW');
    }

    try{
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1F3548')
        .setTitle('Description')
        .setURL('https://github.com/XBFTW/XBFTW-BOT')
        .setDescription('This bot was made by XBFTW#7381, if you have any questions or concerns about the functionality or have any ideas to add to the bot, feel free to contact me.')
        .addFields(
            {name: 'Check out my website:', value: 'https://xbftw.com'},
            {name: 'Click the image below to see the code that runs this bot:', value: '\u200b'}

            )
        .setImage('https://i.imgur.com/kbUYO6k.png')
        .setFooter('HEY!')

        message.channel.send(newEmbed)
    }
    catch(err) {
        catchErr(err, message);
    }
        //dont copy past this if you only want try/catch
    }

}
