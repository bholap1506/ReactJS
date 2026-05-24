import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("Generate Passward")

  // ref hook
  const passwardRef = useRef(null)

  const [BackgroundImage] = useState("https://plus.unsplash.com/premium_photo-1768909784181-bffadc68967d?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    
    if (charAllowed) str += "!@#$%^&*~`_{}"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]) // here setPassword is not naccesasary to pass we can also skipe it because of concept of memoization and callback work on memo

  const copyPasswordToClipboard = useCallback(() => {
    passwardRef.current?.select()
    passwardRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()

  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'
    style={{
      backgroundImage: `url(${BackgroundImage})`,
    }}
    >
      
      <h1 className='text-white text-center my-3 text-2xl'>Passward Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='passward'
        readOnly
        ref={passwardRef}
        onClick={copyPasswordToClipboard} // we can also remove this because we put onClick={} on the button it work even if click on the text it will copy *
        />

        <button
        // className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        className='
        outline-none
        bg-blue-700
        text-white
        px-3
        py-0.5
        shrink-0
        transition-all
        duration-200

        hover:bg-blue-900

        active:bg-white
        active:text-blue-700
        '
        onClick={copyPasswordToClipboard}
        >
        copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}
          />
          <label>Numbers</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} 
          />
          <label>Characters</label>
        </div>

      </div>
    </div>

    </>
  )
}

export default App
