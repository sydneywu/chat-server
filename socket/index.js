let interval;
const getApiAndEmit = async (socket, room) => {
    socket.broadcast.to(room).emit("message", "Greetings");
};

export const socketHandler = socket => {

    let room = socket.handshake.query['room']
    socket.join(room)
    console.log("New client connected to " + room);
    if (interval) {
        clearInterval(interval);
    }
    //interval = setInterval(() => getApiAndEmit(socket, "hello"), 1000);

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

    socket.on('MESSAGE', (data)=> {
        let thisRoom = ""
        Object.keys(socket.rooms).forEach(function(room, idx) {
            if(idx!=0){
                thisRoom = room
            }
        });
        socket.nsp.to(room).emit("MESSAGE", data);
        console.log(socket.rooms)
        console.log('RECIEVE', data)
    })
};