module.exports = {
    name: 'kick',
    aliases: ['ban'],
    description: "Kicks a user from the Discord Server",
    execute(client, message, cmd, args, Discord, catchErr){
try{
    require('dotenv').config();

    //If the person does not have the permission to kick or ban a user, they will be told.
    if(!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("BAN_MEMBERS")){
        message.channel.send('You do not have permissions to use this command!')
        return;
    }

    const target = message.mentions.users.first();
    //If no user is defined, a message will be sent. 
    if(target){
    var memberTarget = message.guild.members.cache.get(target.id);
    }else {
        message.channel.send('No user is defined!')
        return;
    };
    //If the target of the ban/kick is the Owner, a message will be sent.
    if(target === `${process.env.OWNER}`){
        message.channel.send('You cannot ban the owner!')
        return;
    }

    const kickEmbed = new Discord.MessageEmbed()
    .setTitle(`${target.tag} has been kicked!`)
    .setColor('#D6310E')
    .setDescription(`${target.tag} has been kicked from ${message.guild.name}!`)
    .setImage("https://i.imgur.com/kbUYO6k.png")
    .setTimestamp()

    const banEmbed = new Discord.MessageEmbed()
    .setTitle(`${target.tag} has been permanently banned!`)
    .setColor('#D6310E')
    .setDescription(`${target.tag} has been permanently banned from ${message.guild.name}!`)
    .setImage("https://i.imgur.com/kbUYO6k.png")
    .setTimestamp()

    if(cmd === 'kick'){
        if(message.member.hasPermission("KICK_MEMBERS")) {
            if(target){
                memberTarget.kick();
                message.channel.send(kickEmbed);
                console.log(`${target.tag} has been kicked from ${message.guild.name}`)
            }else{
                message.channel.send(`You coudn't kick that member!`);
            }
        }else{
            message.channel.send('You do not have permissions to use this command.')
        }

    }else if(cmd === 'ban'){
        if(message.member.hasPermission("BAN_MEMBERS")) {
            if(target){
                memberTarget.ban();
                message.channel.send(banEmbed);
                console.log(`${target.tag} has been banned from ${message.guild.name}`)
            }else{
                message.channel.send(`You coudn't kick that member!`);
            }
        }else{
            message.channel.send('You do not have permissions to use this command.')
        }
    }else{return;}

}
catch (err) {
    catchErr(err, message);
}
//Don't copy past this point if you only want for the try/catch statement.
    }
}
