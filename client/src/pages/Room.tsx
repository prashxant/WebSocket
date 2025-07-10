import { useEffect, useState } from "react";
import { Button } from "../components/button";

export default function Room() {
  const [fadeIn, setFadeIn] = useState(false);

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
            type="text"
            placeholder="Room Code"
            className="border border-gray-400 bg-black text-white text-3xl px-4 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
        />
         <div className="p-4"> <Button text={"Join Room"} onClick={()=>{alert("room joined")}}/></div>
      </div>
    </div>
  );
}
