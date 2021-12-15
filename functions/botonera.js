const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s')

var chatId = '@conocetufe';

    bot.sendMessage(chatId,
        'Si te interesa '+
        'promocionar tu canal, <i>Escribe a @Oscartmxp</i>. ',
        {
            reply_markup:{
                inline_keyboard:[
                    //fila 1
                 [{text:"Trivias Católicas", url:"https://t.me/triviascatolicas"}],
                    //fila 2
                 [{text:"Diálogo Ecuménico", url:"https://t.me/dialogoecumenico"},],
                    //fila 3
                 [{text:"Palabra del día", url:"https://t.me/palabradecadadia"},
                 {text:"Conoce tu fe", url:"https://t.me/conocetufe"},],
                    //fila 4
                 [{text:"Recursos", url:"https://t.me/materialesparacatequesis"},
                 {text:"Debates", url:"https://t.me/debatesdefe"}],
                    //fila 5
                 //[{text:"Intenciones, novenas", url:""},
                 //{text:"Debates", url:""},],
                ]
            },
            parse_mode:"HTML",
        })

