const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const prefix = ("s!")
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "SyRoX Bot Komut Listesi",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/attachments/723900017638899777/735181732944412773/turk_bayrag.gif"
			},
            title: "📜 Komutlar 📜",
            description: "📌 " + prefix + "afk\n📌" + prefix + "avatar\n📌 " + prefix + "ban\n📌 " + prefix + "bayrak\n📌 " + prefix + "çekiliş\n📌 " + prefix + "duyuru\n📌 " + prefix + "emojikur\n📌 " + prefix + "emojiyazı\n📌 " + prefix + "hava-durumu\n📌 " + prefix + "ısmarla\n📌 " + prefix + "isim-değiştir\n📌 " + prefix +  "istatistik\n📌 " + prefix + "kick\n📌 " + prefix + "kullanıcı-bilgi\n📌 " + prefix + "küfür-engel\n📌 " + prefix + "mesajdöndür\n📌 " + prefix + "mute\n📌 " + prefix + "oylama\n📌 " + prefix + "ping\n📌 " + prefix + "rol-al\n📌 " + prefix + "rol-ver\n📌 " + prefix + "seviye\n📌 " + prefix + "slow-mode\n📌 " + prefix + "sunucubilgi\n📌 " + prefix + "sunucukur\n📌 " + prefix + "tekmeat\n📌 " + prefix + "temizle\n📌 " + prefix + "unmute\n📌 " + prefix + "uyar\n📌 " + prefix + "wasted\n📌 " + prefix + "yaz",
            fields: [
				{
                name: "SyRoX Bot",
				inline: true,
                value: "v2.2"

              },
            ],
          }
        });  
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'yardım', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
