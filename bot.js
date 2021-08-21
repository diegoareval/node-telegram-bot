const { Telegraf } = require('telegraf');
const { bot_token } = require('./config/config');

const bot = new Telegraf(bot_token);

bot.start((ctx) => ctx.reply('Welcome'));

bot.help((ctx) => ctx.reply('Help!!'));

bot.settings((ctx) => ctx.reply('settings'));

bot.launch();