# discord-channel-helper

Bot which moves your text channel automatically to the top when it recieves a message. Also adds user-specific emoji prefix to the channel name.

## Why?

Me and [my bro](https://mtsknn.fi/) message a lot and like to seperate different topics using Discord channels. However, not all topics are as important as other, so some channels might remain on read for longer than others. Having dozens of channels it's often hard to keep track which of them have stuff yet to answer. Moving fresh messages to the top of the channel list and adding an indicator about who sent the last messages helps a lot!

## Configuration

You can change your user-specific emojis in [`emojiHelper.js`](./src/emojiHelper.js). I hardcoded these to make hosting easier, otherwise a persistent storage would be needed.

Then add a `BOT_TOKEN` environment variable and you're good to go! I'm hosting this on [Fly.io](https://fly.io/), but should work everywhere.

### Fly.io instance + local development

If you're running this bot on Fly.io but still want to test/develop locally, you can:

a) Create a new bot and token for your local development
b) Stop the Fly instance with `fly scale count 0`, and later start with `fly scale count 1`

## Might implement later

- `/new [channelName]` command to quickly create new channels
- Auto-archive (move to archive category) channels which haven't revieved messages for x days