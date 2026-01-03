const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx) => {
  ctx.reply("hello i am bot");
});
bot.command("kle", (ctx) => {
  ctx.reply("kle offers BCA");
});
bot.command("link", (ctx) => {
  ctx.replyWithHTML(`<a>http://www.klescpdds.edu.in/</a>`);
});
bot.command("location", (ctx) => {
  ctx.replyWithLocation(16.504781, 75.2711986, 2933);
});
bot.command("meme", async (ctx) => {
  await ctx.replyWithAnimation(
    "https://c.tenor.com/sntQ3GudK1kAAAAC/tenor.gif"
  );
});
bot.launch();
