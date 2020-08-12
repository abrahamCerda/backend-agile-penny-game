module.exports = function(httpServer) {
    const io = require('socket.io')(httpServer);

    io.on('connection', socket => {
        console.log('A new user connected');
    });
};
