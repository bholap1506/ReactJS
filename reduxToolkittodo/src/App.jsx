
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {



  return(
    <>
    <h1 className='bg-gray-800 flex justify-center p-5 m-5 text-white text-4xl'>Learning Redux toolkt</h1>
    <AddTodo />
    <Todos />
    </>
  )

}

export default App
