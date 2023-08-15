const express = require('express');
const https = require('https');
const app = express();

app.get('/', function (req,res) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=ca76a8992a20704a4cbffc6bdd1a6f54&units=metric'
    https.get(url, function(response) {
        console.log(response);
    })
    res.send('Weather API is up and working!');
});

app.listen(3000, function() {
    console.log('Example app listening on the port 3000');
});
