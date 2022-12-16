const { client } = require("./client");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
	],
});

client.login(process.env.BOT_TOKEN);

client.on("messageCreate", async (msg) => {
	const channelId = msg.channelId;

	msg.guild.channels.edit(channelId, { position: 0 });
});
