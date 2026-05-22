import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 5
  
  const addValue = () => {
    console.log("Clicked on add", Math.random(), counter);
    // counter = counter + 1
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  } 

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai and code</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter} </button>
      <p>footer: </p>
    </>
  )
}

export default App
