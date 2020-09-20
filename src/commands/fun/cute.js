const Discord = require("discord.js");
module.exports = {
    name: 'cute',
    aliases: ["c"],
    run: (_, message, args, prefix, theUser) => {
        if (!message.guild.me.permissionsIn(message.channel).has("EMBED_LINKS")) return message.channel.send("I need the permission __**\"Embed Links\"**__ to use this command")


        var ranNum = Math.floor(Math.random() * 101);



        const CuteRate = new Discord.MessageEmbed() 

        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(`${message.guild.iconURL({ dynamic: true })}?size=1024`)
        .setColor(message.guild.me.displayColor)


        if (args[0] === undefined) {
            CuteRate.setDescription("Your cuteness level is: `" + ranNum + "%` <3 \n<a:peek_aboo:756165933751599254>")
            message.channel.send(CuteRate);
        
        }else if (theUser === undefined) {
            CuteRate.setDescription("Your cuteness level is: `" + ranNum + "%` <3 \n<a:peek_aboo:756165933751599254>")
            message.channel.send(CuteRate);
        
        }else {
            CuteRate.setDescription("**" + theUser.user.tag + "'s** cuteness level is: `" + ranNum + "%` <3 \n<a:peek_aboo:756165933751599254>")
            message.channel.send(CuteRate);
        };




    }
}