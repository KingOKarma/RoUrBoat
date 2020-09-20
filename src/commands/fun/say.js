module.exports = {
    name: 'say',
    aliases: ["s"],

    run: (_, message, args) => {


        
        message.delete();
        message.channel.send(args.join(' '))
    

    }
}