import { useState } from 'react'


function App() {
  const[color,setColor] = useState("white")
  const[name,setName] = useState("WHITE")
  return (
    <div className="w-full h-screen"
    style={{backgroundColor:color}}>
      <h1
      className="text-center font-extrabold top-80 text-4xl">
        COLOUR CHANGE TO 
      </h1>
      <h1
      className="text-center font-extrabold top-80 text-4xl">
        {name} 
      </h1>
       <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2">
        {/* px means padding in x axis */}
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-2 rounded-2xl text-blue-50">
        <button
        onClick={()=>{
          setColor("red")
          setName("RED")
        }}
        className="outline-none px-4 py-1 rounded-2xl" 
        style={{backgroundColor:"#ff2c2c"}}>Red
        </button>
        <button
        onClick={()=>{
          setColor("pink")
          setName("PINK")
        }}
        className="outline-none px-4 py-1 rounded-2xl" 
        style={{backgroundColor:"pink"}}>pink
        </button>
        <button
        onClick={()=>{
          setColor("#ffc100")
          setName("YELLOW")
        }}
        className="outline-none px-4 py-1 rounded-2xl" 
        style={{backgroundColor:"yellow"}}>yellow
        </button>
        <button
        onClick={()=>{
          setColor("#D4E157")
          setName("LIME")
        }}
        className="outline-none px-4 py-1 rounded-2xl" 
        style={{backgroundColor:"#D4E157"}}>lime
        </button>
        <button
        onClick={()=>{
          setColor("#76D7C4 ")
          setName("SKYBLUE")
        }}
        className="outline-none px-4 py-1 rounded-2xl" 
        style={{backgroundColor:"#76D7C4 "}}>skyblue
        </button>
        <button
        onClick={()=>{
          setColor("royalblue")
          setName("BLUE")
        }}
        className="outline-none px-4 py-1 rounded-2xl" 
        style={{backgroundColor:"royalblue"}}>Blue
        </button>
        </div>
        
       </div>

    </div>
  )
}

export default App
