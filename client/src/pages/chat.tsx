import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function Chat() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join", payload: { roomId } }));
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "message") {
        setMessages((prev) => [...prev, msg.payload.text]);
      }
    };

    return () => {
      ws.close();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (wsRef.current && input) {
      wsRef.current.send(
        JSON.stringify({ type: "message", payload: { roomId, text: input } })
      );
      setInput("");
    }
  };

  return (
    <div className="h-screen bg-black text-white p-8 flex flex-col">
      <h2 className="text-3xl mb-4">Room: {roomId}</h2>
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="bg-gray-800 p-2 rounded">{msg}</div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-400 bg-black text-white px-4 py-2 rounded"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
