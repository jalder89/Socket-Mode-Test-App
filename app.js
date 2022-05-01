require('dotenv').config();
const { App } = require('@slack/bolt');

// Initialize app with bot token and signing secret
const app = new App ({

    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN

});

//#region Message Listener

app.message('hello', async ({ message, say }) => {

    // Say sends a message to the channel where the event was triggered
    await say({
        
        blocks: [
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": `Hey there <@${message.user}>!`
              },
              "accessory": {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Click Me"
                },
                "action_id": "button_click"
              }
            }
          ],
          text: `Hey there <@${message.user}>!`
        });

});

//#endregion

(async () => {

    // Start your app
    app.start(Number(process.env.PORT || 3000));
    console.log('⚡️ Bolt app is running!');

})();