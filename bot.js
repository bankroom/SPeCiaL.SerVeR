const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

  
 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '¥chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اطلق من دخل' , `**Welcome to  SPeCiaL.SerVeR :rose:**, ${member}`)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
