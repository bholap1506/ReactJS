// import { useState } from 'react'
// function App() {
//   // const [count, setCount] = useState(0)

//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-200" 
//     style={{backgroundColor: color}}
//     >

//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px2'>
//         <div className='flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//           <button 
//           onClick={() => setColor("red")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
//           <button 
//           onClick={() => setColor("green")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
//           <button 
//           onClick={() => setColor("blue")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
//           <button 
//           onClick={() => setColor("yellow")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div
      className="container"
      style={{ backgroundColor: bgColor }}
    >
      <div className="button-box">
        <button
          className="red"
          onClick={() => setBgColor("red")}
        >
          Red
        </button>

        <button
          className="green"
          onClick={() => setBgColor("green")}
        >
          Green
        </button>

        <button
          className="blue"
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>

        <button
        className="yellow"
        onClick={() => setBgColor("yellow")}
        >
          Yellow
        </button>

        <button
        className="brown"
        onClick={() => setBgColor("brown")}
        >
          Brown
        </button>

        <button
        className="purple"
        onClick={() => setBgColor("purple")}
        >
          Purple
        </button>
        
      </div>
    </div>
  );
}

export default App;