import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┌───────────────────┐
│╭───────────────
│├ *🧸𝗛𝗼𝗹𝗮⚡* @${m.sender.split`@`[0]}
│├ *🧸𝗘𝗻 𝗴𝗿𝘂𝗽𝗼𝘀: 𝙾𝚆𝙽𝙴𝚁*
│├ *🧸𝘾𝙧𝙚𝙖𝙙𝙤𝙧:𝙺𝙰𝚁𝙸𝙼*
│├ *🧸𝗡𝘂𝗺𝗲𝗿𝗼:+591 68683798*
│├ *🧸𝙃𝙚𝙧𝙢𝙤𝙨𝙤 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶*
│╰───────────────
└───────────────────┘

╭──────────────────╮
│⏤͟͟͞𝐈𝐌𝐏𝐎𝐑𝐓𝐀𝐍𝐓𝐄!!
├──────────────────╯
│➼ *Este es el menú*
│ *de apks premium por*
│ *el momento no hay muchas*
│ *apks pero se irá*
│ *se irán aumentando*
│ *poco a poco*
╰──────────────────╯

╭──────────────────╮
│⏤͟͟͞𝐋𝐈𝐒𝐓𝐀𝐒 𝐕𝐒 𝐅𝐄𝐌
├──────────────────╯
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
│➼💻 𝐅𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
│➼💻 𝐅𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
│➼💻 𝐅𝐞𝐦𝟖𝐯𝐬𝟖
│➼💻 𝐅𝐞𝐦𝟏𝟔𝐯𝐬𝟏𝟔
╰──────────────────╯`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(Menuff|menuff|comandosff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}