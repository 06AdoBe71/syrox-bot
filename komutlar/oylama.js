const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    message.channel.send("@everyone Oylama Başladı !!")
    const embed = new Discord.RichEmbed()
    .setTitle('**OYLAMA**')
    .setColor("RANDOM")
    .setDescription(`\n▬▬▬▬▬▬▬▬▬▬▬\n\n${mesaj} \n\n▬▬▬▬▬▬▬▬▬▬▬\n\n Evet İçin: :thumbsup: Hayır İçin: :thumbsdown: `)
    return message.channel.sendEmbed(embed).then(m => m.react('👍').then(a => m.react('👎')));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

module.exports.help = {
  name: 'oylama',
  description: 'Oylama yapar.',
  usage: 'oylama'
};