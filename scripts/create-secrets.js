const { writeFileSync } = require('fs');
const path = require('path');
const outputFile = path.resolve(__dirname, '../../src/secrets.json');
writeFileSync(outputFile, `{
    "twitchClientId": "${process.env.TWITCH_APPLICATION_CLIENT_ID || ''}",
    "tipeeeStreamClientId": "",
    "tipeeeStreamClientSecret": "",
    "streamLabsClientId": "",
    "streamLabsClientSecret": "",
    "discordClientId": "",
    "discordClientSecret": "",
    "fontAwesome5KitId": "${process.env.FONT_AWESOME_KIT_ID || ''}"
}`, 'utf-8');
