let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

conn.reply(m.chat, `*[ 💖 ️] No etiquetes a mi owner, si es algo urgente contacta con el a su chat privado para mas informacion*` ,m, { contextInfo:{ externalAdReply: {title: '𝑮𝒐𝒌𝒖𝑩𝒐𝒕𝑳𝒊𝒕𝒆-𝑴𝑫', body: 'ᴇsᴄʀɪʙɪʀʟᴇ ᴀᴘʟᴀsᴛᴀɴᴛᴏ ᴀǫᴜɪ', sourceUrl: 'https://wa.me/593939005387'}}})
}
handler.customPrefix = /@50558124470/i;
handler.command = new RegExp();

export default handler;

//conn.reply(m.chat, `hhh`, m, { contextInfo:{ externalAdReply: {title: 'titulo', body: 'cuero', sourceUrl: global.md}}})
