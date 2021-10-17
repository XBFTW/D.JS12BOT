const Discord = require('discord.js');
const config = require(`./config.json`);
require('dotenv').config();
const client = new Discord.Client();
const web = require(`./website/website.js`)

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})

//Welcome's users who join the DC and gives them a rank

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.cache.find(ch => ch.name === '👋〡welcome');
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);

  var role= member.guild.roles.cache.find(role => role.name === "Member");
  member.roles.add(role);
});

client.login(process.env.BOT_TOKEN);
