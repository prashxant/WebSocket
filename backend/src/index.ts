import { WebSocketServer ,WebSocket } from "ws"


const wss = new WebSocketServer({port :8080})

interface User {
  socket : WebSocket,
  room: string
}

  let allSocket : User[] = []

  wss.on("connection",(socket) =>{

    socket.on("message",(message)=>{

// @ts-ignore

        const parsedMessage  = JSON.parse( message)

        if (parsedMessage.type == "join"){

        allSocket.push({
          socket,
          room : parsedMessage.payload.roomId
        })

        }

         if (parsedMessage.type == "chat"){

          const  currentUserRoom = allSocket.find((x)=> x.socket == socket)?.room

          allSocket.forEach((user)=>{
          if (user.room == currentUserRoom){
            user.socket.send(parsedMessage.payload.message)
          }
      })
      }
    })
  })

