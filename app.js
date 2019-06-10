require('babel-polyfill');
let express = require('express');
let cors = require('cors');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
import {API_PORT} from "./config/secret.js"
import {socketHandler} from "./socket/index.js"

let index = require('./routes/index');

let corsOptions = {
    "origin": "*",
    "credentials": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200,
    exposedHeaders: ['X-Total-Count']
};

let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);


io.on("connect", socketHandler);

if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
}
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add headers
app.use(cors(corsOptions));


http.listen(API_PORT, function(){
    console.log('listening on *:' + API_PORT);
});

//module.exports = app;
