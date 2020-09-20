const Discord = require("discord.js")
module.exports = {
    name: 'restart',
    aliases: ["reboot"],
    run: async (_, message, args, bot, token, client) => {

        if (message.author.id != "406211463125008386") return message.channel.send("This is a Owner only comamnd! <:RoScreaming:719628209402019980>")

        var pm2 = require('pm2');

        pm2.connect(function (err) {
            if (err) {
                console.error(err);
                process.exit(0);
            }

            pm2.logs('RoUrBoat', function (err) {
                pm2.disconnect();   // Disconnects from PM2
                if (err) throw err
            });
        });



        // const usedCommandRecentllyk = new Set();
        // if (usedCommandRecentllyk.has(message.author.id)) {

        // } else {
            const embed = new Discord.MessageEmbed()
            .setDescription(`✅ **Restarting...** <:RoScreaming:719628209402019980> \n*Try using a command in about 5 seconds, if no response please check logs!* <a:nod:756404820125941821>`)

        message.channel.send(embed)
        .catch(() => {
            message.reply("**I cant send embeds but im restarting!** <:RoScreaming:719628209402019980>")
        })
    }



}
