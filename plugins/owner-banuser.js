const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `[⛔] 𝐎𝐰𝐧𝐞𝐫, 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐚 𝐛𝐚𝐧𝐞𝐚𝐫\n\n—◉ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('[🌼] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨, 𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐧𝐨 𝐩𝐨𝐝𝐫𝐚 𝐮𝐬𝐚𝐫 𝑮𝒐𝒌𝒖𝑩𝒐𝒕𝑳𝒊𝒕𝒆-𝑴𝑫🍀');
};
handler.command = /^prohibiruser$/i;
handler.rowner = true;
export default handler;
