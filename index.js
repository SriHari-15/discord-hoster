const Discord = require('discord.js-self')
const client = new Discord.Client()

require('dotenv-flow').config()
const token = process.env.TOKEN

let clientName = '';

client.on('ready', () => {
    clientName = client.user.tag
    console.log(`${clientName} is active!`)

    client.user.setPresence({
        activity:{
            name: 'Spotify',
            type: 'LISTENING'
        },
        status: 'idle',
        afk: true
    }).then(console.log('Successfully Set Presence!')).catch(console.error)
})

client.login(token)

//Server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Discord Hoster is Running...');
});
server.listen(3000);