const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

  
 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '𝐖𝐄𝐋𝐂𝐎𝐌𝐄');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اهـــــلا حبي في سيرفرنا' , `**Welcome to  Ｗ|ＳＥＲＶＥＲ :rose:**, ${member}`)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
});



client.on("message", message => {
var prefix = "*";//البرفكس
        if(message.content.startsWith(prefix + "say")) {
    if(message.author.id !== "518184058031833141") return message.reply("هذا الامر لصحاب البوت فقط");
        let args = message.content.split(" ").slice(1);
message.channel.send(args)
 message.delete()
        }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
