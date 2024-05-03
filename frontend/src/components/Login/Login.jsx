import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/auth'
import './Login.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isValid, setIsValid] = useState(false)
  const navigate = useNavigate()

  const checkValidity = () => {
    if (email !==""  && password  !=="" )
    {
        setIsValid (true)
        
    }else{
        setIsValid (false)
    }
}
    useEffect(()=> {
      checkValidity();
    },[email,password])

    async function onLogin(e) {
      e.preventDefault()
      try {
          const loginResponse = await login({ email, password })
          if (loginResponse && loginResponse.token) {
              localStorage.setItem("token", loginResponse.token)
              localStorage.setItem("member", JSON.stringify(loginResponse.user.name));
              localStorage.setItem('id', loginResponse.user.id);
              navigate('/profile')

          } else {
              setErrorMessage(loginResponse.error)
          }
      } catch (error) {
          setErrorMessage('There was an error trying to log in. Please try again.')
      }
  }

  return (
    <main className='container-login'>
      <div className='login'>
        <h1 className='login__h1'>Login</h1>
        <form className='login__form' onSubmit={onLogin}>     
          <input type='email' placeholder='Email' value={email} required  onChange={(e) => setEmail(e.target.value)} className="email-login"/>
          <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Password' required className="pass-login"/>
          { errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p> }
          <button type='submit' disabled={!isValid}>Log In</button>
        </form>
        <p className="sign-up-text">Don't have an account? <Link to='/signup'><button className="signup-button">Sign Up</button></Link></p>
        <Link to='/' className='go-home'><button>Home</button></Link>
      </div>
    </main>
  )
}

export default Login
