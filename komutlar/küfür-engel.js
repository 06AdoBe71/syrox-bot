const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require('fs');
const dil = JSON.parse(fs.readFileSync("././dil.json", "utf8"));

exports.run = (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return;
if(!args[0]) return message.channel.send("HATA !");

 if(args[0] === "aç") {
     dil[message.guild.id] = {
       dil: "kapali"
     };
     message.channel.send(`okeydir`);
   
     fs.writeFile("./dil.json", JSON.stringify(dil), (err) => {
      if (err) console.log(err)
    });
 } else if(args[0] === "kapat") {
     dil[message.guild.id] = {
      dil: "kapali"
    };
    message.channel.send(`kırdın Xd`);
    fs.writeFile("./dil.json", JSON.stringify(dil), (err) => {
     if (err) console.log(err)
   });
 };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'küfür-engelle',
  description: 'açıklama',
  usage: 'küfür-engelle <aç>/<kapat>'
};