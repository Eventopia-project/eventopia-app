import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { signUp } from '../../services/auth'
import './SignUpForm.css'


function SignUp() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
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
  
  const handleCity = (e) => {
    setCity(e.target.value)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Sign Up')
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
          <input type='email' placeholder='Email' value={email} required onChange={handleEmail} className={styleEmail(email)}/>
          <input type='password' value={password} onChange={handlePassword} placeholder='Password' required className={stylePassword(password)}/>
          <input type='password' value={confirmPassword} onChange={handleConfirmPassword} placeholder='Confirm Password' required className={styleConfirmPassword(confirmPassword)}/>
          <input type='text' value={city} placeholder='City or Country' onChange={handleCity} />
          <input type="checkbox" name="privacy" required checked={isChecked} onChange={checkboxClicked}/> <span>Accept policy </span>
          <button type='submit' disabled={!isValid}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to='/login'><button>Log In</button></Link></p>
      </div>
    </main>
  )
}

export default SignUp