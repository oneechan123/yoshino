let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    await conn.send2ButtonImg(m.chat, global.API('xteam', '/randomimage/ero', {}, 'APIKEY'), 'Sange Kok Sama Kartun', watermark, 'MENU', '.menu', 'NEXTβ‘οΈ', '.ero', m)
}
handler.command = /^(ero)$/i
handler.tags = ['nnsfw']
handler.help = ['ero']
handler.limit = true
handler.nsfw = true
module.exports = handler

//Byγπππππππ π±πΎπγ