module.exports = () =>{
    
    const config = require(`../../config.json`);
    require('dotenv').config();

    console.log(`${config.botname}`,"is now online.")
    console.log('The website is now online on port:', `${process.env.PORT}`)

}

//Just tells the console that the bot is online and what port the website is running on .
