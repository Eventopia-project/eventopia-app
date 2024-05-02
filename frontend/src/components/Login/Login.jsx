import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/auth'
import './Login.css'

function Login() {
  return (
    <main className='container-login'>
      <div className='login'>
        <h1 className='login__h1'>Login</h1>
        <form className='login__form' /* onSubmit={handleSubmit} */>     
          <input type='email' placeholder='Email' /*value="" required  onChange={handleEmail} */ className=""/>
          <input type='password' /*value=""  onChange={handlePassword} */ placeholder='Password' required className=""/>
          <button type='submit' /* disabled={!isValid} */>Log In</button>
        </form>
        <p className="sign-up-text">Don't have an account? <Link to='/signup'><button className="signup-button">Sign Up</button></Link></p>
        <Link to='/' className='go-home'><button>Home</button></Link>
      </div>
    </main>
  )
}

export default Login
