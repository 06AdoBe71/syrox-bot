const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const furki = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Fu Fu Furkaaan De De Demircaaan...\nResmi Twitter Hesabı")
      .setDescription("[Twitter Hesabı](https://twitter.com/Furkan57788534)")
      .setTimestamp()
      return message.channel.sendEmbed(furki);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['furkandemircantwt'],
  permLevel: 0
};

exports.help = {
  name: 'Furkan Demircan Resmi Twitter Hesabı',
  description: 'Furkan Demircan Resmi Twitter Hesabı',
  usage: 'furkandemircantwt'
};
