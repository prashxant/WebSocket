import { useEffect, useState } from "react"


function App() {
   const [socket , setSocket]= useState();

 function sendMessage (){
   
   socket.send("ping")
 }
  useEffect(() => {
     const ws = new WebSocket("ws://localhost:8080");
      
     setSocket(ws)

     ws.onmessage = (e) =>{
        alert(e.data)
     }

    
  },[])  
 
 return (
   <div>
    <input type="text" placeholder="message" />
    <button onClick={sendMessage}>Send</button>
   </div>
  )
}

export default App
