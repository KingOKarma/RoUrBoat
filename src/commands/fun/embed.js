const Discord = require("discord.js")
module.exports = {
    name: 'embed',
    aliases: ["eb"],
    run: (_, message, args) => {


        message.delete();
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.client.user.tag, message.client.user.displayAvatarURL())
            .setDescription(args.join(' '))
            .setColor(message.guild.me.displayColor)
        message.channel.send(embed)
            .catch(() => {
                message.channel.send(`I don't have message embed perms ): but here you go\n ${args.join(' ')}`)

            })


    }
}