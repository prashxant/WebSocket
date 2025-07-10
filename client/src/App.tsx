import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import Room from './pages/Room'
import Chat from './pages/chat'


    function App() {
     return(
     <div className=' bg-black'>
        <BrowserRouter>
        <Routes>
            <Route path="/joinroom" element={<Room/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/chat/:roomId" element={<Chat/>} />
        </Routes>
        </BrowserRouter>


     </div>
    )}

    export default App
