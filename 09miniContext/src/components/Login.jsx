import {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUserName] = useState('')
    const [passward, setPassward] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, passward})
    }

  return (
    <div>
      <h2>Login</h2>

      <input type="text" 
      value={username}
      onChange={(e) =>setUserName(e.target.value)}
      placeholder='username' />

      <input type="text"
      value={passward} 
      onChange={(e) => setPassward(e.target.value)}
      placeholder='passward' />
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login 
