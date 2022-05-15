const path = require('path');
const cv = require('opencv4js')
const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);

// Video file
VIDEO_SOURCE = "test1.mp4";

const wCap = new cv.VideoCapture(0);

// get from root url and send back a file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

//image being caught every second
setInterval(()=> {
    const frame = wCap.read(); //return mat obj (theimage)
    const image = cv.imencode('.jpg', frame).toString('base64');
    io.emit('image', 'some data');
}, 1000);

server.listen(3000, () => {
    console.log('working');
});