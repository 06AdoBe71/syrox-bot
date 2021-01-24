const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let oyun = args.slice(0).join(' ');
    if (oyun.length < 1) return message.reply('Oynuyor kısmım için herhangi bir şey yazmalısın.');
  message.delete();
  client.user.setGame(oyun);
  message.channel.send(`:white_check_mark: Oynuyor kısmım '**${oyun}**' olarak değiştirildi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'oynuyoryaz',
  description: 'Botun oynadigi oyunu gösterir.',
  usage: 'oynuyoryaz <oyun ismi>'
};
