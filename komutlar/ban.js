const Discord =  require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    if (!message.guild) {
        const uyarimesaji = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addFiled(':warning: UYARI :warning:', 'Ban komutunu özel mesajlarda kullanamazsınız.')
        return message.author.sendEmbed(uyarimesaji); }
        let guild = message.guild
        let reason =  args.slice(1).join(' ');
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağımı yazmalısınız.')
        if (reason.length < 1) return message.reply('Ban sebebini yazmalısınız.');

        if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.')
        message.guild.ban(user, 2);
        const embedmsj = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`<@${user.id}> adlı kullanıcı <@${message.author.id}> tarafından **${reason}** sebebiyle **BANLANDI**.`)
        message.channel.sendEmbed(embedmsj);
    };

    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 2
    };

    exports.help = {
        name: 'ban',
        description: 'İstediğiniz kullanıcıyı sunucudan banlar',
        usage: 'ban [kullanıcı] [sebep]'
    };