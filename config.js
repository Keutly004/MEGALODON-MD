// Powered by DybyTech

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~3ZgiDADb#Vyye5rKzIWHO1vGYAa6XC68aJylJkwyVCrTd2E5E-jk",
// add your Session Id 
SUDO_LIST: process.env.SUDO_LIST ? process.env.SUDO_LIST.split(',').map(n => n.trim()) : ["50934960331"],
// example: 50911111111,50922222222

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MEGALODON-MD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/rful77.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𓆩𖠜кєยՇץ🌀—͟͞͞𝗚",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "𓆩𖠜кєยՇץ🌀—͟͞͞𝗚",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links without removing member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2250788145722",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𓆩𖠜кєยՇץ🌀—͟͞͞𝗚",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*🎙️Citoyens et citoyennes, le moment est venu.                    Il est minuit. La Purge annuelle commence maintenant. Pendant les prochaines 12 heures, tous les crimes, y compris le meurtre, seront légalisés. Les services d’urgence seront suspendus jusqu’à 6 heures du matin. Que les forts survivent et que les faibles se terrent.                   Ce soir, je suis libre. Libre d’effacer ceux qui se cachent derrière des masques de vertu. Libre de purifier cette ville de sa vermine. Si tu entends ma voix, cours. Ou reste… et prie.                                           Le masque que je porte, ce n’est pas pour me cacher. C’est pour célébrer. C’est la face que je montre quand je redeviens moi-même.            À tous ceux qui m'ont trahi, riez pendant qu’il est encore temps. Quand je viens, je ne frappe pas. Je n’épargne pas. Je purge.                        🔪Bonne chasse.*",
// bot description    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/rful77.jpg",
// image for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *MEGALODON-MD*⚡",
// alive msg content
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// anti bad words  
MODE: process.env.MODE || "public",
// public/private/inbox/group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// kick user if share link 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// auto voice messages
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// auto stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// show typing status   
READ_CMD: process.env.READ_CMD || "false",
// mark commands as read 
DEV: process.env.DEV || "2250788145722",
// your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// anti view once 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// path to save deleted messages
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// auto recording status 
};
