import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

export default function Room() {
  const [fadeIn, setFadeIn] = useState(false);
  const [roomCode , setRoomCode] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`h-screen bg-black pl-5 pt-[30vh] transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-zinc-400 hover:text-amber-200 text-7xl">ENTER YOUR ROOM CODE !!</div>
      <div className="text-3xl text-white mt-2">
        "karam jale darad dukhe marham bhndhe"
      </div>
      <div className="mt-6 flex  items-center">
        <input
            value={roomCode}
            onChange={(e)=>{setRoomCode(e.target.value)}}
            type="text"
            placeholder="Enter Room Code"
            className="border border-gray-400 bg-black text-white text-3xl px-4 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
        />
         <div className="p-4"> <Button text={"Join"} onClick={() => navigate(`/chat/${roomCode}`)}/></div>
      </div>
    </div>
  );
}
