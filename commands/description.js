module.exports = {
    name: 'description',
    description: "Sends an Embed of the Description.",
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1F3548')
        .setTitle('Description')
        .setURL('https://github.com/XBFTW/XBFTW-BOT')
        .setDescription('This bot was made by XBFTW#7381, if you have any questions or concerns about the functionality or have any ideas to add to the bot, feel free to contact me.')
        .addFields(
            {name: 'Check out my website:', value: 'https://xbftw.com'}
            
            )
        .setImage('https://i.imgur.com/kbUYO6k.png')
        .setFooter('HEY!')

        message.channel.send(newEmbed)
    }

}
