const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s', {polling: true});

// replace the value below with the Telegram token you receive from @BotFather
const token = '1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s';

var chatId = '@conocetufe';

const resp = "hola";

    // send back the matched "whatever" to the chat
bot.sendMessage(chatId, resp);
