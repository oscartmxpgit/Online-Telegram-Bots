const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s', {polling: true});

// replace the value below with the Telegram token you receive from @BotFather
const token = '1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s';

const path = require('path');


var chatId = '@conocetufe';

const directoryName  = path.join(__dirname, '/res/');

//const pict=directoryName + "dog.jpg"

bot.sendPhoto( chatId,'res//cat.jpg')
bot.sendPhoto( chatId,'https://cdn.shopify.com/s/files/1/1136/4188/products/45copy_620x.jpg')
