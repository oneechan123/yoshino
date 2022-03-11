let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw ''
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.help = ['admin.']
handler.tags = ['owner']
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
