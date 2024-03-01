const handler = async (m, {conn, usedPrefix, command, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat;
  const user = global.db.data.users[who];
  if (!who) return m.reply(`*✳️ menciona a quien deseas abrazar*\n\n*📌 ejemplo :*\n${usedPrefix + command} @tag`);


  const abrazo = await conn.reply(m.chat, `@${m.sender.split('@')[0]}  𝐋𝐞 𝐞𝐬𝐭𝐚 𝐝𝐚𝐧𝐝𝐨 𝐮𝐧 𝐟𝐮𝐞𝐫𝐭𝐞 𝐚𝐛𝐫𝐚𝐳𝐨 𝐚 @${who.split('@')[0]} `, m, {mentions: [who, m.sender]});

  conn.sendMessage(m.chat, {react: {text: '🫂', key: abrazo.key}});
};
handler.help = ['abrazo @user'];
handler.tags = ['fun'];
handler.command = ['abrazo'];
handler.group = true;
export default handler;