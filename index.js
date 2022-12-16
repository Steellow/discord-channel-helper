import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
	],
});

client.login(process.env.BOT_TOKEN);

const userEmojis = {
	hanki: "🌶️",
	martias: "🐬",
};

const emojiRegex =
	/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

const startsWithEmoji = (str) => emojiRegex.test(str);

const addEmojiToChannelName = (channelName, userName) => {
	const userEmoji = userEmojis[userName] || "❓";

	if (channelName.startsWith(userEmoji)) {
		return channelName;
	} else if (startsWithEmoji(channelName)) {
		return channelName.replace(emojiRegex, userEmoji);
	} else {
		return `${userEmoji}_${channelName}`;
	}
};

client.on("messageCreate", async (msg) => {
	const channelId = msg.channelId;
	const channelName = msg.channel.name;
	console.log(`channelName: ${channelName}`);
	const userName = msg.author.username;

	msg.guild.channels.edit(channelId, {
		position: 0,
		name: addEmojiToChannelName(channelName, userName),
	});
});
