const { Telegraf } = require('telegraf');
const { bot_token } = require('./config/config');

const bot = new Telegraf(bot_token);

bot.start((ctx) => {
    console.log("subtype: ",ctx.updateType);
    ctx.reply(`Welcome ${ctx.from.first_name} ${ctx.from.last_name}`)
});

bot.help((ctx) => ctx.reply('Help!!'));

bot.settings((ctx) => ctx.reply('settings'));

bot.command(['custom', 'mycomand'], (ctx) => ctx.reply('custom command'));

bot.hears('computer', (ctx) => ctx.reply('hey i need a laptop'));

// bot.on('text', (ctx) => ctx.reply('you are typing'));

bot.on('stickered', (ctx) => ctx.reply('sticker!!'));

bot.phone('+50376540104', (ctx) => ctx.reply('hey dude'))

bot.mention('BotFather', (ctx) => ctx.reply('hey what happened'));

bot.hashtag('programming', (ctx) => ctx.reply('hagstag programming'));

bot.launch();