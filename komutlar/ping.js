const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const ping = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setDescription(`${client.emojis.get('735944407957897266')} Ping :** ` + client.ping + `**ms`)
      .setTimestamp()
      return message.channel.sendEmbed(ping);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping'
};
