import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState();
  //@ts-ignore
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }
    //@ts-ignore
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
//@ts-ignore
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
