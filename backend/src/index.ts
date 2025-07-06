
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8000})


//event handler
  wss.on("connection",function(socket){

    console.log("user conected")



  socket.on("message",function(e){

    if(e.toString() === "ping"){

      socket.send("pong")

    }

  })

  })
