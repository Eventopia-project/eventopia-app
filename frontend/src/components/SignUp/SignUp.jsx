import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../../services/auth'
import './SignUp.css'

function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const checkboxClicked = (e) => {
    setIsChecked(e.target.checked)
  }

  const styleNameUser = (name) => {
    return (isNaN(Number(name[0])) && name !== '') ? 'valid' : 'invalid';
  }

  const stylePassword = (password) => {
    const myRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/
    return myRegex.test(password) ? 'valid' : 'invalid';
  }

  const styleEmail = (email) => {
    const myRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return myRegex.test(email) ? 'valid' : 'invalid';
  }

  const styleConfirmPassword = (confirmPassword) => {
    return password !== confirmPassword ? 'invalid' : 'valid';
  }

  const checkValidity = () => {
    if (styleNameUser(name) === 'valid' &&
        styleEmail(email) === 'valid' &&
        stylePassword(password) === 'valid' &&
        styleConfirmPassword(confirmPassword) === 'valid' &&
        isChecked) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp({name, email, password, city});
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('member', response.user.name);
        localStorage.setItem('id', response.user.id);
        setIsRegistered(true);
        navigate('/profile')
      } else {
        console.error('Error');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    checkValidity();
  }, [name, email, password, confirmPassword, isChecked])

  return (
    <main className='container-signup'>
      <div className='signup'>
        <h1 className='signup__h1'>Sign Up</h1>
        <form className='signup__form' onSubmit={handleSubmit}>
          <input value={name} onChange={handleName} type='text' className={styleNameUser(name)} placeholder='Your Name' required/>
          <input type='email' placeholder='Email'  value={email} required onChange={handleEmail} className={styleEmail(email)}/>
          <input type='password' value={password} id="password-sign" onChange={handlePassword} placeholder='Password' required className={stylePassword(password)}/>
          <input type='password' value={confirmPassword} id="password-sign" onChange={handleConfirmPassword} placeholder='Confirm Password' required className={styleConfirmPassword(confirmPassword)}/>
          <input type='text' value={city} placeholder='City or Country' onChange={handleCity}/>
          <input type="checkbox" name="privacy" required checked={isChecked} onChange={checkboxClicked}/> <span>Accept policy </span>
          <button type='submit' className='signup-button' disabled={!isValid}>Sign Up</button>
        </form>
        <p>Already have an account? 
          <Link to='/login'><button>Log In</button></Link>
          or
          <Link to='/'><button>Go Home</button></Link>
        </p>
      </div>
    </main>
  )
}

export default SignUp
