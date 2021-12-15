const rssToTelegram = require("rss-to-telegram");

const { TELEGRAM_BOT, TELEGRAM_CHANNEL } = process.env;
/* Primero tuve que instalar npm i rss-to-telegram */

rssToTelegram({
  //bot: TELEGRAM_BOT,
  bot: '1784481950:AAFhgGT3ebi80WNuv7sKmsgFuoxxo5ZvK2s',

  //channel: TELEGRAM_CHANNEL,
  channel: '@conocetufe',
  //cron: "0 1 * * *", // At 01:00, cron sintaxis
  cron: "*/5 * * * * *", // publish every 5 seconds, cron sintaxis
  timezone: "America/Havana", // your defined timezone
  // rss source
  source: "http://feeds.feedburner.com/aciprensa-santodeldia", // can be an async function or and array of objects

  // source: async () => {
  //   return db.get({ limit: 10 }); // your custom db
  // },
  // source: [{colo:"red"}],
  // add new fields to show in the message
  preprocess: async (item) => {
    item.color = "green";
    return item;
  },
  // define you own message template
  template:
    'Color is {{color}}, <a href="{{image}}"> </a> <b><a href="{{link}}">{{title}}</a></b>\n @{{channel}}',
  // filter news of the day, use this function to filter already published posts
  filter: async ({ date }) => { // async functtion
    // must be async
    const d = new Date();
    return (
      date.getDate() === d.getDate() &&
      date.getMonth() === d.getMonth() &&
      date.getFullYear() === d.getFullYear()
    );
  },
  // add extra common fields to all items,
  extraFields: { colo: "red", line: "stroke" }, // add line field to all items and overwrite color field
});