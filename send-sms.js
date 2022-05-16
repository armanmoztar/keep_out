const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+17789536129',
    from: '+18508483621',
    body: "Please type 'Yes' to confirm your phone number"
})
// logout message ID when message is sent
.then(message => console.log(message.sid));