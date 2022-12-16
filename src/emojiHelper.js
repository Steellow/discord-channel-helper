const userEmojis = {
	hanki: "🌶️",
	martias: "🐬",
};

const emojiRegex =
	/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

const startsWithEmoji = (str) => emojiRegex.test(str);

const updateChannelNameEmoji = (channelName, userName) => {
	const userEmoji = userEmojis[userName] || "❓";

	if (channelName.startsWith(userEmoji)) {
		return channelName;
	} else if (startsWithEmoji(channelName)) {
		return channelName.replace(emojiRegex, userEmoji);
	} else {
		return `${userEmoji}_${channelName}`;
	}
};

module.exports = { updateChannelNameEmoji };
