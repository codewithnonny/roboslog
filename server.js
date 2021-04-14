require("dotenv").config()
const express = require("express")
const http = require("http")
const port = process.env.PORT 
const app = express()
const server = http.createServer(app)
const Routes = require("./app/routes")
const socketManager = require("./app/socketManager")

const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

//middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/peerjs", peerServer);
app.use(Routes)


const io = require("socket.io")(server);
io.on("connection",socketManager)


server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})