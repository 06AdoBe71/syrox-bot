const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const furki = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Fu Fu Furkaaan De De Demircaaan...\nResmi Kodu")
      .setDescription("```const furkan = require('./komutlar/furkandemircan.js');```")
      .setTimestamp()
      return message.channel.sendEmbed(furki);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['furkandemircankod'],
  permLevel: 0
};

exports.help = {
  name: 'Furkan Demircan Resmi Kodu',
  description: 'Furkan Demircan Resmi Kodu',
  usage: 'furkandemircankod'
};
