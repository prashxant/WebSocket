
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [socket , setSocket] = useState()


 function sendMessage (){
      socket.send("ping")
 }

useEffect(()=>{
  const ws = new WebSocket("ws://localhost:8000")
  setSocket(ws)

  ws.onmessage = (event) =>{
      alert(event.data)
  }
},[])

  return (
    <div>

      <input type="text" placeholder='Message...' />
      <button onClick={sendMessage}>send</button>
    </div>
  )
}

export default App
