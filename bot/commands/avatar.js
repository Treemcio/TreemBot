module.exports = {
    name: 'avatar',
    description: 'Pokazuje avatar',
    aliases: ['icon'],
    usage: ['&avatar / &avatar <user>'],
    cat: 'fun',
    execute(message, args) {
		const user = message.mentions.users.first() || message.author;
    message.channel.send(``, { files: [user.displayAvatarURL({ size: 1024})]});
}
};
