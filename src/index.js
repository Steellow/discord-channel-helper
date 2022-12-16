const { client } = require("./client");
const { updateChannelNameEmoji } = require("./emojiHelper");
const { server } = require("./server");

client.on("messageCreate", async (msg) => {
	const channelId = msg.channelId;
	const channelName = msg.channel.name;
	const userName = msg.author.username;

	msg.guild.channels.edit(channelId, {
		name: updateChannelNameEmoji(channelName, userName),
		parent: null,
		position: 0, // Must be below parent to work properly
	});
});

// Required for fly.io hosting
server.listen(process.env.PORT || 3000);
