const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could NOT connect to database: ', err);
    }else {
        console.log('Connected to database: ' + config.db);
    }
});

var port = 8080;

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.hmtl'));
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});