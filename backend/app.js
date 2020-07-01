var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');

var app = express();
app.use(cors());

// view engine setup
var mongo = require('mongodb');

const config = process.env.NODE_ENV === "prod"
    ? require("./application.prod.json") : require("./application.dev.json");
const url = config.db.url;
const dbName = config.db.dbName;
mongo.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, })
    .catch(err => console.error(err.stack))
    .then(db => {
        console.log('mongodb connection success(app.js)');
        app.locals.db = db.db(dbName);
    });

// chat Server setup
var chatApp = require('http').createServer();
chatApp.listen(8070);
var io = require('socket.io').listen(chatApp);
var redis = require('redis');
var fs = require('fs');

let pub = redis.createClient();

io.sockets.on('connection', function (client) {
    console.log("io.sockets.on('connection') id:", client.id);

    let sub = redis.createClient();
    let obj = {};

    sub.on("message", function (channel, message) {
        console.log("sub.on Message 1 '" + message + "' on channel '" + channel + "' arrived!")
        client.send(message);
    }
    );

    client.on("message", function (msg) {
        console.log("client.on msg:", msg);
        if (msg.roomName == "1001") {
            if (msg.type == "chat") {
                pub.publish(msg.roomName, msg.message);
            }
            else if (msg.type == "setUsername") {
                sub.subscribe(msg.roomName);
                pub.publish(msg.roomName, "A new user in connected:" + msg.user);
                obj = { roomName: "1001", clientID: client.id, userName: msg.user };
            }
        } else if (msg.roomName == "1002") {
            console.log("Room:1002, client.on msg:", msg, client.id);
            if (msg.type == "chat") {
                pub.publish(msg.roomName, msg.message);
            }
            else if (msg.type == "setUsername") {
                sub.subscribe(msg.roomName);
                pub.publish(msg.roomName, "A new user in connected:" + msg.user);
                obj = { roomName: "1002", clientID: client.id, userName: msg.user };
            }
        } else if (msg.roomName == "1003") {
            console.log("Room:1003, client.on msg:", msg, client.id);
            if (msg.type == "chat") {
                pub.publish(msg.roomName, msg.message);
            }
            else if (msg.type == "setUsername") {
                sub.subscribe(msg.roomName);
                pub.publish(msg.roomName, "A new user in connected:" + msg.user);
                obj = { roomName: "1003", clientID: client.id, userName: msg.user };
                //store.sadd("onlineUsers", msg.user);
            }
        }
    });


    client.on('disconnect', function () {
        console.log('disconnect');
        let roomName = obj.roomName;
        let userName = obj.userName;

        sub.quit();
        if (typeof roomName !== 'undefined') {
            pub.publish(roomName, "User is disconnected :" + userName);
        }
    });

});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

