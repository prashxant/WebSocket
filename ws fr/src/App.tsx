
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket , setSocket] = useState()
  const inputRef = useRef()


 function sendMessage (){

    if (!socket){
        
    }
    const message= inputRef.current.value
    socket.send(message)
 }

useEffect(()=>{
  const ws = new WebSocket("ws://localhost:8000")
  setSocket(ws)

  ws.onmessage = (ev) =>{
      alert(ev.data)
  }
},[])

  return (
    <div>

      <input ref={inputRef}type="text" placeholder='Message...' />
      <button onClick={sendMessage}>send</button>
    </div>
  )
}

export default App
