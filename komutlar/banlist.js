const Discord = require('discord.js')

exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`Banlanan Kullanıcı bulunamadı`)
       .setColor("RED");
       message.channel.sendEmbed(embed);
     }
     else
     {
       const embed2 = new Discord.RichEmbed()
       .setTitle("Ban Listesi: Sunucudan Banlananlar.")
       .setColor("RANDOM");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `______________________`);
       }
       message.channel.sendEmbed(embed2);
     }
   });
 }

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlist"],
  permLevel: 0
};
module.exports.help = {
  name: 'banlist',
  description: 'Sunucundan banlanan üyeleri gösterir.',
  usage: 'banlist'
};
