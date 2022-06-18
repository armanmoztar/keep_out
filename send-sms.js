require('dotenv').config();
// console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
// console.log('Your authentication variable TWILIO_AUTH_TOKEN has the value: ', process.env.TWILIO_AUTH_TOKEN);

const accountSid = "ACb7a6cc0c91a6d8d33dc14fd31e110206"
const authToken = "2431774bc9a084891f1b3b04b2d250d4"

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+17789536129',
    from: '+1778743-3256',
    body: "Keep-out: Please type 'Yes' to confirm your phone number"
})
// logout message ID when message is sent
.then(message => console.log(message.sid));