const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => { 
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
        if (err) message.channel.send(err)
        if (result === undefined || result.length === 0) {
             message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Lütfen bir yer gir.').setColor('RANDOM')); 
             return; 
            } 
            
            var current = result[0].current; 
            var location = result[0].location; 
            const embed = new Discord.RichEmbed() 
            .setDescription(`**${current.skytext}**`) 
            .setAuthor(`${current.observationpoint} için hava durumu`) 
            .setThumbnail(current.imageUrl) .setColor(0x00AE86)  
            .addField('Sıcaklık',`${current.temperature} Derece`, true) 
            .addField('Rüzgar',current.winddisplay, true) 
            .addField('Nem', `${current.humidity}%`, true) 
            message.channel.sendEmbed(embed); 
        })
    }
    
    exports.conf = { 
        enabled: true, 
        guildOnly: false, 
        aliases: [], 
        permLevel: "0"
    };
    
    exports.help = { 
        name: "hava-durumu", 
        description: "hava durumunu gösterir", 
        usage: "hava-durumu"};