const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'ODA0MDAzNzk1NzcyMTEyODk2.YBGA4g.HjAcyWDYQAHCDrvghggjmAvxHj4'

bot.login(token)
bot.on('ready' , () => {
    console.log('estou pronto para ser usado')
})

bot.on('message' , msg => {
    if (msg.content === 'E ai galera!') {
        msg.reply('Olá! Bem vindo ao nosso canal!')
    }
})

bot.on('message' , msg => {
    if (msg.content === 'Bom dia') {
        msg.reply('Olá! Bom dia, tudo bem?')
    }
})

bot.on('message' , msg => {
    if (msg.content === 'Boa noite') {
        msg.reply('Olá! Boa noite, tudo bem?')
    }
})

bot.on('message' , msg => {
    if (msg.content === 'Boa tarde') {
        msg.reply('Olá! Boa tarde, tudo bem?')
    }
})