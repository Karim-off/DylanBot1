const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `𝐇𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 👋, 𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐮𝐧𝐢𝐫𝐭𝐞 𝐚 𝐥𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬 𝐎𝐅𝐂 𝐝𝐞 𝑮𝒐𝒌𝒖𝑩𝒐𝒕𝑳𝒊𝒕𝒆-𝑴𝑫 :D

➤ 𝐆𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐝𝐞𝐥 𝑮𝒐𝒌𝒖:

🌹 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐂:
 
༄ https://chat.whatsapp.com/G9MpDVmJtbiIpItEZpg70s ༆

🌹 𝗖𝗮𝗻𝗮𝗹 𝗚𝗼𝗸𝘂:
༄ https://whatsapp.com/channel/0029VaJL0xn0LKZL7FtiRs1e ༄
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/JOSTINofc/Goku-Bot-Lite`},
    'mimetype': `application/${document}`,
    'fileName': `「 𝗛𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': global.md,
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'global.md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
