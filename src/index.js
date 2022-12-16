const { client } = require("./client");
const { updateChannelNameEmoji } = require("./emojiHelper");

client.on("messageCreate", async (msg) => {
	const channelId = msg.channelId;
	const channelName = msg.channel.name;
	const userName = msg.author.username;

	msg.guild.channels.edit(channelId, {
		position: 0,
		name: updateChannelNameEmoji(channelName, userName),
	});
});
