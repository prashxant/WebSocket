import { useEffect } from "react"


function App() {
 function sendMessage (){

}
  useEffect(()=>{
     const ws = new WebSocket("ws://localhost:8080");

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
