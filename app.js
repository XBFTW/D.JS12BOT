const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

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

//http
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)

//Login Info that requires a enviornment variable (.env)
client.login(process.env.BOT_TOKEN);