import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port:8080});

let allSocket: WebSocket[] = []

wss.on("connection",(socket)=>{

  allSocket.push(socket)

  socket.on("message",(message)=>{
    console.log("message recivied" + message.toString())
    for(let i = 0; i < allSocket.length ; i++){
      const s = allSocket[i]
      s.send(message.toString() + ": ent form server")
    }
  })


})
