const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params , args) => {
  
  let guild = message.guild
  let hediye_yollanicak = message.mentions.members.first();
  
  if (!hediye_yollanicak) return message.reply("Kime ısmarlıycağımı seçmediniz.!").catch(console.error);
  
   
    message.channel.send(hediye_yollanicak + ` '${message.author.username}' Sana bir çay ısmarladı :tea:`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ısmarla',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'ısmarla'
};