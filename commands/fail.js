module.exports = {
    name: 'fail',
    description: "Causes the discord bot to crash",
    execute(client, message, cmd, args, Discord){

//This is where I test my crash prevention

function catchErr (err, message) {

    require('dotenv').config();

    client.users.cache.get(`${process.env.OWNER}`).send('The bot crashed, the crash report: ```' + err + '```')
    console.log("The bot has just prevented a crash, the report has been sent to XBFTW")
    message.channel.send('The bot just prevented a crash, the report has been sent to XBFTW');

  }

  try{

//Put code here
thisIsntDefined

  }
  catch (err) {
    catchErr(err, message);
  }


//dont copy past this part
    }

}
