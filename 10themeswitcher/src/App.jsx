
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark")
  }

  const lightMode = () => {
    setThemeMode("light")
  }

  // actual change in theme
  
  const clist = document.querySelector('html').classList
  useEffect(() => {
      // document.querySelector('html').classList.remove("light", "dark")
      // document.querySelector('html').classList.add(themeMode);

      clist.remove("light", "dark")
      clist.add(themeMode)
  }, [clist, themeMode])

  return (    
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <div className="flex flex-wrap min-h-screen items-center"> 
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* themesBtn  */}
                      <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
                      {/* Cards  */}
                      <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
