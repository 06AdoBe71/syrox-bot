const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args, params) => {
    const prefix = ("s!")
    const infomsj = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} - v1.1 `, client.user.avatarURL) 
  .setDescription(":calendar_spiral: **Kodlanma Tarihi: **" + "19 Haziran Cuma" + `\n:tools: **Yapımcı: **` + "AdoBe#4846" + `\n${client.emojis.get('781411336751415296')} **Discord.js sürümü: ** ` + `v${Discord.version}`+ "\n\n:bust_in_silhouette: **Kullanıcı sayısı **" + `${client.users.size}` + "\n:bar_chart: **Sunucu sayısı **" + `${client.guilds.size}` + `\n${client.emojis.get('781412155919826986')} **RAM Kullanımı : ** ` + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` +  "\n:military_medal: **Prefix : **" + prefix + "\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬" + "\n[YouTube Kanalı](https://www.youtube.com/channel/UCXb3SKesTo8QZf3ISe9NnlA?view_as=subscriber) | [Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=725076402311004260&scope=bot&permissions=2081422591) | [Site](http://syrox.ga)")
  .setColor("#df70b7")
  .setTimestamp()
  message.channel.sendEmbed(infomsj);
  message.react(":white_check_mark:");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
    
exports.help = {
  name: 'info',
  description: 'SyRoX Info Commands',
  usage: 'info'
};