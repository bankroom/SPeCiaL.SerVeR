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



client.on("message", message => {
var prefix = ".";//البرفكس
        if(message.content.startsWith(prefix + "sayy")) {
    if(message.author.id !== "387107653148475393") return message.reply("هذا الامر لصحاب البوت فقط");
        let args = message.content.split(" ").slice(1);
message.channel.send(args)
 message.delete()
        }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
