import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});



let c = 0
wss.on("connection",(socket)=>{

  c = c + 1;
  console.log("user connected #" + c);

  socket.on("message",(message)=>{
    console.log("message recivied" + message.toString())
  })


})
