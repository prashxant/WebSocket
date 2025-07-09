    import { useEffect, useRef, useState } from 'react'
    import './App.css'


    function App() {
      const [message,setMessage] = useState(["hi there"])
      const wsRef = useRef()

        useEffect(()=>{

        const ws = new WebSocket("ws://localhost:8080")

        ws.onmessage = (event) =>{
          setMessage(m => [...m,event.data])
        }
        wsRef.current = ws
        ws.onopen = () =>{
          ws.send(JSON.stringify({
            type:"join",
            payload:{
              roomId: "red"
            }
          }))
        }

       return () =>{
          ws.close()
        }
        },[])

        function SendMessage (){

          const message = document.getElementById("message")?.value;
              wsRef.current.send(JSON.stringify({
                type:"chat",
                payload:{
                  message: message
                  }
                  })
              )
        }





     return (

        <div className='h-screen'>
          <div className='h-[90vh] bg-slate-900 text-white'>
            {message.map(message => <div>{message}</div>)}
          </div>
          <div className='w-full bg-white flex p-4'>
            <input id="message" type="text" name=""  />
            <button onClick={SendMessage}className='bg-pink-500 rounded-md mx-4  text-white w-3/10'>Send Message</button>
          </div>
        </div>
      )
    }

    export default App
