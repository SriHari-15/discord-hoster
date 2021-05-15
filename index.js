const Discord = require('discord.js-self')
const client = new Discord.Client()

require('dotenv-flow').config()
const token = process.env.TOKEN

client.on('ready', () => {
    console.log(`${client.user.tag} is active!`)
})

client.login(token)