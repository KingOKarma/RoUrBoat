
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
// const mongoose = require("mongoose");


let token = config.token
let prefix = config.prefix;


// let MongoToggle = config.tgtoggle
// mongoose.connect(MongoToggle, { useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(err => {
//         console.error("mongoose error" + err);
//     })



bot.on('ready', async () => {

    const setCollections = require('./utils/collections');
    setCollections(bot);
    const commandHandler = require('./handlers/command');
    commandHandler(bot);


    console.log('Im Online now bois');

    console.log(`Bot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`);

    bot.user.setActivity(`Hi ily all ${bot.users.cache.size} of you <33`);


});

const usedCommandRecentlly = new Set();
bot.on('message', message => {



    if (message.channel.type == "dm") return;
    if (message.author.bot) return;

    const prefix = config.prefix;

    if (!message.content.toLowerCase().startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandname = args.shift().toLowerCase();
    if (usedCommandRecentlly.has(message.author.id)) {
        message.reply("Woah there you can only use me so fast <a:HyperNeko:696089341054681138> 3 seconds per command")

    } else {


        // const theUser = theUser
        const command = bot.commands.get(commandname) || bot.commands.get(bot.aliases.get(commandname));
        if (!command) return;
        try {

            isuser = false

            const UserArgs = message.content.slice(prefix.length).trim().split(/ +/g);



            if (isuser = false) {
                return console.log("not a thing")
            } if (isuser = true) {
                const user = message.mentions.users.first();
                // If we have a user mentioned
                if (user) {
                    // Now we get the member from the user
                    var theUser = message.guild.member(user);

                    // If the member is in the guild
                    if (!theUser) {
                        console.log("Mention Check")
                        message.reply("That user isn't in this guild!");
                    }
                } else {
                    console.log(UserArgs.join(' '))
                    if (UserArgs[1] === undefined) {

                    } else if (UserArgs[1].match(/\d{18}/)) {
                        console.log("ID Check")
                        var theUser = message.guild.members.cache.find(member => member.id === UserArgs[1])
                    }


                }
            }

            command.run(bot, message, args, prefix, theUser);
        } catch (error) {
            console.error(error);
        }
        usedCommandRecentlly.add(message.author.id);
        setTimeout(() => {
            usedCommandRecentlly.delete(message.author.id)
        }, 3000);
    }



})


bot.login(token).catch(console.error)
