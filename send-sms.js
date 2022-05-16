require('dotenv').config();
// console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
// console.log('Your authentication variable TWILIO_AUTH_TOKEN has the value: ', process.env.TWILIO_AUTH_TOKEN);

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: process.env.MY_PHONE_NUMBER,
    from: '+18508483621',
    body: "Please type 'Yes' to confirm your phone number"
})
// logout message ID when message is sent
.then(message => console.log(message.sid));
