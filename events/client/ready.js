module.exports = () =>{
    
const client = require('discord.js')
const config = require(`../../config.json`);
require('dotenv').config();

//Tells console that the bot is online
console.log(`${config.botname}`,"is now online.")
//Checks the status of the website and tells the console if the website is online
const http = require('http');
const https = require('https');

test();

function checkWebsite(url, callback) {
  https
  http
    .get(url, function(res) {
      console.log(url, res.statusCode);
      return callback(res.statusCode === 200);
    })
    .on("error", function(e) {
      return callback(false);
    });
}

function test(){
    checkWebsite(`http://localhost/:${process.env.PORT}`, function(check){
        
    if(check){
    //console.log(check); //true
    console.log('The website is now online on port:', `${process.env.PORT}`)
    }else{
      console.log('The website may not be online!')
    }
  })
}


}
