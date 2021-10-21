module.exports = {
    name: 'join',
    aliases: ['leave'], 
    cooldown: 0,
    description: "Join's the user's channel.",
    async execute(client, message, cmd, args, Discord, catchErr){

        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');

    try{
        if(cmd === 'join'){
            const connection = await voice_channel.join();
            message.react('👌');

            const joinEmbed = new Discord.MessageEmbed()
        .setColor('#1F3548')
        .setDescription('I joined your voice channel!')

        message.channel.send(joinEmbed)

        }        
        
        else if(cmd === 'leave'){
            const connection = await voice_channel.leave();
            message.react('👋');

            const leaveEmbed = new Discord.MessageEmbed()
        .setColor('#FF0051')
        .setDescription('I left your voice channel!')

        message.channel.send(leaveEmbed)

        }

    }catch(err){
        catchErr(err, message)
    }
//dont copy past this
}

}
