let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╔════════════════════━───¤͜͡҈➢
║ *SEKEDAR INFO*
╠════════════════════
║ ➽ *CREATOR*
║❏ Nurutomo
║❏ Hiks (gw)
║❏ Arya
╠════════════════════
║¤͜͡҈¤͜͡҈¤͜͡҈¤͜͡҈¤͜͡҈➥ *ABOUT*
╠════════════════════
║BOT INI MENGGUNAKAN SOURCE 
║CODE YANG SAYA DAPATKAN DAN
║SAYA MODIFIKASI DENGAN
║PENAMBAHAN, PENGURANGAN, 
║DAN PERUBAHAN BEBERAPA FITUR.
║────────────────────────
║BOT INI DIBUAT MENGGUNAKAN
║NODE.JS & JavaScript
║────────────────────────
║BOT ON 24 JAM
║KALO OFF BERARTI SIBUK (>.<)
║────────────────────────
║HANYA BOT TERMUX YG
║SEDERHANA JADI JAN 
║BERHARAP LEBIH ツ
║────────────────────────
║*JIKA ADA YG ERORR HUB ADMIN*
╠════════════════════
║ *RULE§ BOT*
╠════════════════════
║╭────❉ *RULE§ BOT* ❉──
║│CALL/VC = BLOK 24 JAM
║│SPAM CALL/VC = PERMANENT
║│NO SHARE VIRৡৢ¤͜͡҈!!
║│JAN ASAL MASUKIN KE GC LU
║╰───────────────────
╠════════════════════
║ *THANKS TO* 🤝🏻
╠════════════════════
║├≽️Allah
║├≽️Orang Tua
║├≽️Keluarga
║├≽️Kamu yg baca
║├≽️Teman
║├≽️Teman Lupdir
║├≽️Teman yg dtg pas ada maunya
║├≽️Sahabat
║├≽️Kerabat
║├≽️Saudara
║├≽️Musuh
║├≽️Pacar
║├≽️Stm
║├≽️Ttm
║├≽️Selingkuhan
║├≽️Mantan
║├≽️Subscriber gw
║├≽️Followers gw
║├≽️Viewers gw
║├≽️Yg sekontak wa gw
║├≽️Langit
║├≽️Bintang
║├≽️Galaksi
║├≽️Matahari
║├≽️Bulan
║├≽️Merkurius
║├≽️Venus
║├≽️Mars
║├≽️Jupiter
║├≽️Saturnus
║├≽️Uranus
║├≽️Neptunus
║├≽️Dan planet lain
║├≽️Terutama bumi
║├≽️Angin
║├≽️Udara
║├≽️Atsmosfer
║├≽️Langit
║├≽️Awan
║├≽️Hujan
║├≽️Pohon
║├≽️Oksigen
║├≽️Tumbuhan
║├≽️Hewan
║├≽️Buah
║├≽️Kucing gw
║├≽️Ikan
║├≽️Ayam
║├≽️Tanah
║├≽️Air
║├≽️Api
║├≽️Listrik
║├≽️Pln
║├≽️Indihome
║├≽️Rumah gw
║├≽️Dll Selengkapnya yap
║├≽️Cape gw ngetiknya anjrott
║├≽️dahbye
╠════════════════════
║ ꔷ㆒ *_Mwhhhe_*
╚════════════════════━───¤͜͡҈➢
║ • Mao Request? bit.ly/ClickDiSinii
╚═ ❏ Hiks Bot ❏ 
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

