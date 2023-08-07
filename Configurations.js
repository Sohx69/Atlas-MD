require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "918984257480";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://Ghost:33jcrpXJmh4CQfxD@cluster0.ya4uhjm.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "SOHAN";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `𝐒𝚯𝚮𝐀𝚴`;
global.author = process.env.AUTHOR || "⛓️🍷";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
