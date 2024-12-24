const fs = require("fs");
module.exports.config = {
  name: "araara",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("😂") ||
     react.includes("😋") ||
     react.includes("🥵🥵") ||
react.includes("ara")) {
    var msg = {
        body: `🙄Kisi coulur ki chaadi pahni ho🙄`,attachment: fs.createReadStream(__dirname + `/noprefix/Kis_colour_ki_chaddi_pehne_ho_bata_do_na_meme_template_II_Viral_girl_asking_kis_colour_ki_chaddi(256k).mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤫", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
