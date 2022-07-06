// require('dotenv').config();
// console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
// console.log('Your authentication variable TWILIO_AUTH_TOKEN has the value: ', process.env.TWILIO_AUTH_TOKEN);

const accountSid = "ACb7a6cc0c91a6d8d33dc14fd31e110206"
const authToken = "25c30b7d8edd00f704ec8a558accd9a4"

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+17789536129',
    from: '+17787433256',
    statusCallback: 'https://eoniira9qziky3r.m.pipedream.net',
    body: "Keep-out: Please reply with anything to confirm your phone number. Otherwise, ignore this message"
})
// logout message ID when message is sent
.then(message => console.log(message.sid));