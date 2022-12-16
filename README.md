# discord-channel-helper

Bot which moves your text channel automatically to the top when it recieves a message. Also adds user-specific emoji prefix to the channel name.

## Why?

Me and [my bro](https://mtsknn.fi/) message a lot and like to seperate your topics using Discord channels. However, not all topics are as important as other, so some channels might remain on read for longer than others. Having dozens of channels it's often hard to keep track which of them have stuff yet to answer. Moving fresh messages to the top of the channel list and adding an indicator about who sent the last messages helps a lot!

## Configuration

You can change your user-specific emojis in [`emojiHelper.js`](./src/emojiHelper.js). I hardcoded these to make hosting easier, otherwise a persistent storage would be needed.

Then add a `BOT_TOKEN` environment variable and you're good to go!