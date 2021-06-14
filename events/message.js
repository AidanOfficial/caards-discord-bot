module.exports = async (client, message) => {
    if (message.author.bot) return;

    if (message.content.startsWith("<@840643680758136902>") || message.content.startsWith("<@!840643680758136902>")) return message.reply("my prefix is `c!`.");
    
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    var command = client.commands.get(args.shift().toLowerCase());

    if (!command) return;

    try {
        if (command.guildOnly && message.channel.type === 'dm')
            return message.channel.send("I can\'t execute that command inside DMs!");

        command.execute(message, args, client);
    } catch (error) {
        message.channel.send(`An error occured while executing that command.\nError: \`${error}\``);
    }
};
