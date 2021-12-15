const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s')

var chatId = '@conocetufe';
bot.sendMessage(
    chatId,
    'URL has been successfully saved!',
    {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: 'Development',
                    callback_data: 'development'
                }, {
                    text: 'Lifestyle',
                    callback_data: 'lifestyle'
                }, {
                    text: 'Other',
                    callback_data: 'other'
                }
            ]]
        }
    }
);

// Listener (handler) for callback data from /label command
bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const category = callbackQuery.data;

    URLLabels.push({
        url: tempSiteURL,
        label: category,
    });

    tempSiteURL = '';

    bot.sendMessage(message.chat.id, `URL has been labeled with category "${category}"`);
 });

 // Keyboard layout for requesting phone number access
const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [[{
            text: "My phone number",
            request_contact: true,
            one_time_keyboard: true
        }], ["Cancel"]]
    }
 };

 // Listener (handler) for retrieving phone number
 bot.onText(/\/phone/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);
 });