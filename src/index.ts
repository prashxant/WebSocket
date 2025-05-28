import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

//event handler//
wss.on("connection",function(socket){
     
    setInterval(()=>{
        socket.send("currnet price of solana is " + Math.random()*10000)
    },500)
    
})
