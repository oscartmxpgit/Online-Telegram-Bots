const rssToTelegram = require("rss-to-telegram");
const { TELEGRAM_BOT, TELEGRAM_CHANNEL } = process.env;
/* Primero tuve que instalar npm i rss-to-telegram */

const time = new Date();
hour = time.getHours();
min = time.getMinutes() ;
if (time.getSeconds()!=58){
  ss = time.getSeconds()+3;
}
else
  ss = 0;

//parse to cron expression
nextFireTime = ss + ' ' + min + ' ' + hour + ' * * *';

console.log(nextFireTime);

rssToTelegram({
  //bot: TELEGRAM_BOT,
  bot: '1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s',

  //channel: TELEGRAM_CHANNEL,
 channel: '@palabradecadadia',
  //cron: "0 1 * * *", // At 01:00, cron sintaxis
  cron: nextFireTime, //cron sintaxis
  timezone: "CET", // your defined timezone
  // rss source
  //source: "https://www.ciudadredonda.org/rss/lecturas-evangelio-dia.xml", // can be an async function or and array of objects
  //source: "https://www.spreaker.com/show/2764585/episodes/feed", // can be an async function or and array of objects
  //source: "https://www.vatican.va/content/francesco/es.rss.xml", // can be an async function or and array of objects
  //source: "https://www.vaticannews.va/es.rss.xml", // can be an async function or and array of objects
  source: "https://es.aleteia.org/feed/", // can be an async function or and array of objects
  //source: "https://rss.evangelizo.org/rss/v2/evangelizo_rss-sp.xml", // can be an async function or and array of objects

  // source: async () => {
  //   return db.get({ limit: 10 }); // your custom db
  // },
  // source: [{colo:"red"}],
  // add new fields to show in the message
  preprocess: async (item) => {
    return item;
  },
  // define you own message template
  template:
    '<a href="{{image}}"> </a> <b><a href="{{link}}">{{title}}</a></b>\n {{channel}}',
  // filter news of the day, use this function to filter already published posts
  filter: async ({ date }) => { // async functtion

    //var date = new Date(date);

    // must be async
    const d = new Date();

    console.log("date: "+date.getDate());
    console.log("d: "+d.getDate());

    return (
      date.getDate() === d.getDate() &&
      date.getMonth() === d.getMonth() &&
      date.getFullYear() === d.getFullYear()
    );
  },
});