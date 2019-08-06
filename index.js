var io = require('socket.io')(1234);

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('message', function (msg, fn) {
        console.log('broadcast message', msg);
        socket.broadcast.emit('message', msg);
        if (typeof fn !== 'undefined') {
            fn({success: true, sent: msg});
        }
    });
    socket.on('disconnect', function () {
        console.log('a user disconnected');
    });
});
