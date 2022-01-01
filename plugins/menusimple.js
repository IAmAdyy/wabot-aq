let fetch = require('node-fetch')
let handler = async function (m, { conn }) {
    conn.send3ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/569b4e652187b580af99b.jpg')).buffer(), `Hello there!

Im Whatsapp Bot 
That Can Help You 
Doing Something.

Click *ALL COMMAND* to see all commands`, 'AdyyBot By Adii.xyz', 'ALL COMMAND', '!allmenu', 'DEVELOPER BOT', '!owner', 'SOURCE CODE', '..............')
}
handler.help = ['menu', 'help']
handler.tags = ['info']
handler.command = /^(menu|help)$/i

module.exports = handler
