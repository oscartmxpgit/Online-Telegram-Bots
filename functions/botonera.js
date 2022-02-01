const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s')

var chatId = '@conocetufe';

    bot.sendMessage(chatId,
        'Bienvenido, \n '+
         'Escribe a @oscartmxp para colaborar en este proyecto \n'+
         'Recuerda <i>compartir 🙂</i>.\n',
        {
            reply_markup:{
                inline_keyboard:[
                    //fila 1
                 [{text:"💡 Trivias Católicas", url:"https://t.me/triviascatolicas"}],
                    //fila 2
                 [{text:"💭 Diálogo Ecuménico", url:"https://t.me/dialogoecumenico"},],
                    //fila 3
                 [{text:"📰 Actualidad católica", url:"https://t.me/palabradecadadia"},
                  {text:"📚 Conoce tu fe", url:"https://t.me/conocetufe"},],
                    //fila 4
                 [{text:"🤓 Recursos", url:"https://t.me/materialesparacatequesis"},
                  {text:"🗯 Debates", url:"https://t.me/debatesdefe"}],
                    //fila 5
                 [{text:"🤖 ChatBot", url:"https://t.me/biblia_de_jerusalen_bot"},
                  {text:"😇 SantoralBot", url:"https://t.me/DataFromGSheetsbot"}],
                    //fila 6
                  [{text:"📖 Biblia de Jerusalén (bot)", url:"https://t.me/BibliaJerBot"},],
                ]
            },
            parse_mode:"HTML",
        })

