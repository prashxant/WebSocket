    import { Button } from './components/button'
    import './App.css'

    function App() {




     return (
        <div className='h-screen bg-black pl-5 pt-[30vh] '>

          <div className=' text-slate-100 text-7xl'>Private Chating using Websockets</div>
          <div className='text-3xl text-gray-400 mt-2'>made for the purpose of learning real time communication</div>
          <div className='mt-6'>
            <Button onClick={()=>{alert("onclick")}}text="lesssgoo"></Button>
          </div>

        </div>
      )
    }

    export default App
