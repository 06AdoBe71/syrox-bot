const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;



      message.channel.send(`${client.emojis.get('735945345770586164')}| **Çekilişin yapılacağı kanalın adını yaz**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.first()
        if(!room) return message.channel.send(`${client.emojis.get('735945396555350077')}| **Lütfen Kanal Adını Yaz\nÖrnek: çekiliş**`);
        room = collected.first().content;
        collected.first().delete();
        msg.edit(`${client.emojis.get('735945345770586164')}| **Çekilişin süresini belirle (1s, 1m, 1h, 1d, 1w)**`).then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send(`${client.emojis.get('734857064123465758')}| **Böyle bir süre bilmiyorum :(**`);
            duration = collected.first().content
            collected.first().delete();
            msg.edit(`${client.emojis.get('735945345770586164')}| **Ödülü belirle**`).then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                  .setTitle(`**Ödül: ${title}**`)
                  .setDescription(`🎉'a Basarak Katıl \nKalan Süre : ${duration} \n **Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username + " (SyRoX Bot | Çekiliş Sistemi)", message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(`||@everyone||\n ${client.emojis.get('736659257080021164')} **ÇEKİLİŞ BAŞLADI** ${client.emojis.get('736659257080021164')}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬` , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("#f558c9")
            .setFooter("(SyRoX Bot | Çekiliş Sistemi)")
                       .addField('Çekiliş Bitti !🎉',`Kazanan : ${gFilter} \nBitiş zamanı :`)
                       .setTimestamp()
                     m.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});
                   
                       var embedLel = new Discord.RichEmbed()
                        .setColor("#f558c9")
                        .setTitle("name" , room).send(`**Tebrikler ${gFilter}! \`${title}\` kazandın!**`)
                        .setDescription("Ödülünü yetkililere ulaşarak alabilirsin!").setFooter("(SyRoX Bot | Çekiliş Sistemi)")
                        message.channel.send(embedLel)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **Maalesef gerekli yetkilerim bulunmamakta**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: 'çekilişv1',
  description: 'Çekiliş mi? Sunucunda güzel şeyler olacak :3',
  usage: 'çekilişv1'
};