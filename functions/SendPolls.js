const TelegramBot = require('node-telegram-bot-api');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot('1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s', {polling: true});


    // Variable en la que guardamos el id del canal
    var chatId = '@conocetufe';

    // Variable en la que guardamos la pregunta de la encuesta
    var question = "¿La lava es más caliente que el SOL?";

    // Array donde guardas las respuestas a las preguntas
    var answers = ["Si", "No"]; // Mínimo 2 y máximo 10 opciones

    // Objecto Json en el guardamos los distintos parametros que le podemos
    // pasar a encuesta
    const opts = {
        'is_anonymous': true,
        'type': 'quiz', // Puede ser 'regular' o 'quiz'
        'correct_option_id': 0,
        'explanation': "sugerencia"
        //'allows_multiple_answers': true
    };

    // Método sendPoll nos permite enviar la encuesta
    bot.sendPoll(chatId, question, answers, opts);




