if(!process.argv.includes('--sharded')) process.exit();

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.on('ready', () => {
    client.setActivity({
        name: config.status
    });
    client.setStatus('idle');
});

client.login(config.token);
