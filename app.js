require('dotenv').config();
const { App } = require('@slack/bolt');

// Initialize app with bot token and signing secret
const app = new App ({

    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET

});

(async () => {

    // Start your app
    app.start(Number(process.env.PORT || 3000));
    console.log('⚡️ Bolt app is running!');
    
})();