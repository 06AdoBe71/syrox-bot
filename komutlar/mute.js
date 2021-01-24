const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!geçicisustur@üye 1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Doğru Kullanım: ş!mute <oyuncu> <süre>");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("**Üzgünüm bunu yapmaya yetkim yok**");
let muterole = message.guild.roles.find(r => r.name === "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Doğru Kullanım: ş!mute <oyuncu> <süre>");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Adlı Kullanıcı ${ms(ms(mutetime))} Süreyle **Mute Yedi**`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Adlı kullanıcının susturulma süresi dolduğu için mutesi kaldırıldı!`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Sureli Susturur.',
  usage: 'mute [Kullanıcı] [Süre]'
};