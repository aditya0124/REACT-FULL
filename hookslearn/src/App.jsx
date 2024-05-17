import { useState } from "react";
function App() {

  // let counter =5;//
 let [counter,setCounter] = useState(5);
  const addValue = () =>{
    // console.log("value added",counter);//for check that it works
    //counter++;//yha couner ki value badh to rhi h par we see in not updat on browser page,  variable update ho rhe h par problem ho rhi h UI Updation me

    if(counter<20)setCounter(counter+1);

  }
  const delValue = () =>{
    // console.log("value removed",counter);//for check that it works
    //counter++;//yha couner ki value badh to rhi h par we see in not updat on browser page,  variable update ho rhe h par problem ho rhi h UI Updation me
  
    if(counter>0)setCounter(counter-1);

  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      
      <button 
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={delValue}
      >Delete Value</button>

    </>
  );
}

export default App;
