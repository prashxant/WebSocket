import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  const [message,setMessage] = useState(["hi there"])
  const inputRef = useRef

useEffect(()=>{

const ws = new WebSocket("http://localhost:3000")

ws.onmessage = (event) =>{
  setMessage(m => [...m,event.data])
}
},[])

 function sendMessage(){

  message = inputRef.current.value
 }


  return (

    <div className='h-screen'>
      <div className='h-[90vh] bg-slate-900 text-white'>
        {message.map(message => <div>{message}</div>)}
      </div>
      <div className='w-full bg-white flex p-4'>
        <input ref={inputRef}  type="text" name="" id="" />
        <button onClick={sendMessage} className='bg-pink-500 rounded-md mx-4  text-white w-3/10'>Send Message</button>
      </div>
    </div>
  )
}

export default App
