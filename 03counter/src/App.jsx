import { useState } from "react";
import './App.css'

function App() {

  const  [counter, setCounter] = useState(10)

  // let counter = 8;

  const addValue = () => {  
    setCounter(counter+1);
    console.log("clicked", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >decrese value</button>
    </>
  )
}

export default App
