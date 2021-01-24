const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let üye = message.mentions.members.first();
  if(!üye) {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag} Avatar`, message.author.avatarURL)
      .setImage(message.author.avatarURL)
      .setFooter("SyRoX")
      .setTimestamp()
      .setColor("RANDOM")
    message.channel.send(embed)
  }
  else if(üye) {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${üye.user.tag} Avatar`, üye.user.avatarURL)
      .setImage(üye.user.avatarURL)
      .setFooter("SyRoX")
      .setTimestamp()
      .setColor("RANDOM")
    message.channel.send(embed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pp"]
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı Atar!',
  usage: 'avatar'
};