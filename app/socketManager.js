module.exports = (socket) =>{
    try {
        console.log("connected to socket")
        socket.on("join-room", (roomId, userId) => {
            socket.join(roomId);
            socket.to(roomId).emit("user-connected", userId);
        
            socket.on("message", (message) => {
              console.log(roomId, message)
              socket.to(roomId).emit("createMessage", message);
            });
          });
    } catch (ex) {
        
        console.log(ex.message)
    }
}