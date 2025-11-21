# Builds of my fork of Firebot

## What this is

I try to "color within the lines" whenever possible, either by making [direct contributions to Firebot](https://github.com/crowbartools/Firebot/pulls?q=is%3Apr+author%3Athestaticmage+is%3Aclosed) or writing [custom scripts](https://github.com/TheStaticMage). However, I need to do certain things that are not possible with custom scripts and are not suitable for incorporation into upstream Firebot. When I make changes to Firebot, they first land in the ["running" branch of my fork](https://github.com/TheStaticMage/Firebot/tree/running). Once that seems to work OK-ish, I push those changes to the ["running-release" branch of my fork](https://github.com/TheStaticMage/Firebot/tree/running-release). Those are the changes that ultimately land here.

:warning: :warning: **MY FORK IS NOT ENDORSED OR SUPPORTED BY THE FIREBOT DEVELOPERS OR ANYONE ELSE!** :warning: :warning:

- If you want the release version of Firebot, you are looking for the source code at <https://github.com/crowbartools/firebot> and downloads at <https://firebot.app/#download>.

- If you want the nightly builds of the development branch of Firebot, you are looking for: <https://github.com/crowbartools/firebot-nightly>.

If you choose to run my fork, you are trading instant gratification for yet-unknown future consequences. My changes are probably not forward compatible with future Firebot development. That means some day you might want to upgrade Firebot -- in the best case you'll lose access to my custom features; in the worst case you'll lose all your data too.

**If you have any trouble with my fork, you're on your own. If you ask me for help, I'm just going to tell you to install the official Firebot.**

## My Changes

This is a (potentially) partial list of the significant changes I've made. For a full set of changes, [look on GitHub](https://github.com/TheStaticMage/Firebot/compare/v5...running-release).

### Splash screen, About Firebot page, Window title

This patch updates the loading screen of Firebot, the "about" page, and the window title to make it very clear that it's running my forked version.

With these changes, I'm trying to avoid having anyone who is using my fork going to ask for help in any of the official Firebot channels, which would just confuse everybody and annoy their community. I've removed links to Firebot support pages and added text to make it clear that this version is an unsupported fork. I've kept the links to download the official Firebot and to donate and otherwise support Firebot, which I encourage everyone to do!

### Chat feed delay (option)

This incorporates an optional 250 ms delay to messages that appear in the chat feed.

This is for my son. He wants people to "troll" him by playing game sound effects while he's streaming. He uses the "Hide Message In Chat Feed" effect ([that I wrote](https://github.com/crowbartools/Firebot/pull/3189)) to hide the commands from his chat feed so he doesn't know if the sounds are real or chat-generated. However, sometimes the command "flashes" in the chat feed before it gets hidden, and when that happens, he knows someone is trolling him and that spoils the fun. The slight delay prevents that from happening. Enable this option via the settings under the chat feed.

### Hide channel point redemptions in chat feed (option)

Add an option to the Firebot dashboard to suppress channel point redemption messages in the Firebot chat feed.

### More elegant "hide message" in chat feed

Respect the alternating background colors when a chat message is hidden by adding `hideHiddenMessages` to the iterator instead of hiding/showing the message element itself. 

### Twitch API call patches

Firebot issue: <https://github.com/crowbartools/Firebot/issues/3265> (rejected by developers)

My [Kick integration](https://github.com/TheStaticMage/firebot-mage-kick-integration) can cause issues with certain parts of Firebot that assume all users are from Twitch. One of these conflicts can occur when a non-Twitch user is added to a custom role. Firebot passes all of the user IDs to Twitch, and the API call fails if there is any invalid user ID in that list. This is a behind-the-scenes change that you shouldn't ever notice.

### Logging improvements

Firebot issue: <https://github.com/crowbartools/Firebot/issues/3324>

Two improvements:
- Print stack trace when logging an error
- Print name of failing effect when failing to parse effect

## Other Differences

### Secrets

I registered a Twitch app for this with my own Twitch application ID. (I didn't want to reuse the Firebot team's secrets because that didn't seem right.)

I did NOT obtain secrets for the other integrations (StreamLabs, TipeeeStream) because I don't personally use them. If you need these things, you're probably better off [creating your own `secrets.json` file](https://github.com/crowbartools/Firebot/wiki/Developers#5-create-secretsjson) and running Firebot in dev mode.

## License

Like [Firebot](https://github.com/crowbartools/firebot), everything in this repository is released under the GPL v3 license.

The code in this repository was inspired by, and originally adapted from, the Firebot nightly build scripts in <https://github.com/crowbartools/firebot-nightly>.
