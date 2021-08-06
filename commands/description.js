module.exports = {
    name: 'description',
    description: "Sends and Embed of the Description.",
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1F3548')
        .setTitle('Description')
        .setURL('https://www.xbftw.com')
        .setDescription('This bot was made by XBFTW#7381, if you have any questions or concerns about the functionality or have any ideas to add to the bot, feel free to contact me.')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'}
            
            
            )
        .setImage('https://i.imgur.com/kbUYO6k.png')
        .setFooter('TEST')

        message.channel.send(newEmbed)
    }


}