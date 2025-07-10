import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/button";

export function Home() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleNavigate = () => {
    setFadeOut(true); // trigger fade-out
    setTimeout(() => {
      navigate("/joinroom"); // delay navigation
    },200); // match transition duration
  };

  return (
    <div
      className={`h-screen bg-black pl-5 pt-[30vh] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-zinc-400 hover:text-amber-200 text-7xl">Private Chatting using Websockets</div>
      <div className="text-3xl text-white mt-2">
        made for the purpose of learning real time communication
      </div>
      <div className="mt-6">
        <Button onClick={handleNavigate} text="lesssgoo" />
      </div>
    </div>
  );
}
