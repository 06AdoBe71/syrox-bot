const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const furki = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Fu Fu Furkaaan De De Demircaaan...\nResmi YouTube Kanalı")
      .setDescription("[YouTube Kanalı](https://www.youtube.com/channel/UCdEjyI63_qUb1lAFnEil6GA)")
      .setTimestamp()
      return message.channel.sendEmbed(furki);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['furkandemircanyt'],
  permLevel: 0
};

exports.help = {
  name: 'Furkan Demircan Resmi YouTube',
  description: 'Furkan Demircan Resmi YouTube Kanalı',
  usage: 'furkandemircanyt'
};
