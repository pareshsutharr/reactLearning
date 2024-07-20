import { useState } from 'react'

function App() {
 const  [color, setColor] = useState("red")

  return (
    <div className=" w-full h-screen durartion-200 py-4 justify-center" style={{backgroundColor :color}}>
         <div className="bg-white fixed flex flex-wrap rounder-full py-2 justify-center bottom-10 px-2 inset-x-0">
                <button className="px-2 py-3 m-3 text-white bg-red-400 rounded-full" onClick={()=>setColor("red")}>RED</button>
                <button className="px-2 py-3 m-3 text-white bg-green-400 rounded-full" onClick={()=>setColor("green")}>GREEN</button>
                <button className="px-2 py-3 m-3 text-white bg-blue-400 rounded-full" onClick={()=>setColor("blue")}>BLUE</button>
                <button className="px-2 py-3 m-3 text-white bg-black rounded-full" onClick={()=>setColor("black")}>BLACK</button>
                <button className="px-2 py-3 m-3 text-black bg-white rounded-full" onClick={()=>setColor("white")}>WHITE</button>
                <button className="px-2 py-3 m-3 text-white bg-pink-400 rounded-full" onClick={()=>setColor("pink")}>PINK</button>
         </div>
    </div>
  )
}

export default App
