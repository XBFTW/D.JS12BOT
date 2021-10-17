const config = require(`../config.json`)

//Starts the website if the config says "on"
const websiteStatus = config.websiteStatus

if(websiteStatus === "on"){

const http = require('http')
const fs = require('fs')
const websiteLocation = (`./website/index.html`)

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream(websiteLocation).pipe(res)
})
try{
  server.listen(process.env.PORT || 3000)
}
catch(err){
  console.log(err);

};

}else if(websiteStatus === "off"){
  console.log('The website is off in the config.')
}else{
  console.log('The application expects "on" or "off" for websiteStatus in the config.')
}
