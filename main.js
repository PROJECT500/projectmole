const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('projectMole is online!');
    
});

client.on("ready", async () => {
    console.log(`${client.user.username} is helping those in need!`);
    client.user.setActivity("Helping those in need! <3");
})



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'explain'){
        message.channel.send('Hello. My name is PROJECT: MOLE. I am a support bot intended to be used by traumagenic systems. My coder told me about how a lot of new people are having a hard time understanding where they are. That is why I am here. My coder is an alter in a system too, so this bot was made by a system for systems with the intent of helping new or reoccuring alters be grounded in where they are and why they are here.');
    }else if (command == 'changelog'){
        message.channel.send('10.15.20 - Changed the wording in the explain command to take out "programmer" to "coder" as  the first may have been triggering to some users. \n 10.--.--');
    }
});








client.login('[[REDACTED]]');
