import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username === 'user' && password === 'password') {
      setError('')
    setSuccess(true)
  } else {
    setError('Invalid username or password')
    setSuccess(false)
  }
  }

  return (
    <>

    {success ?  
    <h1>Login Page</h1> 
    
      : <form className='form' onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      {error && <p className='error'>{error}</p>}

      <label>
        Username:
        <input type="text" placeholder='username' required onChange={e =>setUsername(e.target.value)}/>
      </label>
      <label>
        Password:
        <input type="password" placeholder='password' required onChange={e =>setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
      </form>
    }
      
    </>
  )
}

export default App
