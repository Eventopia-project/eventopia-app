import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth'
import "./Login.css"

function Login({ goToRegister }) {
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
       useEffect(()=>{checkValidity()},[email,password])


    async function onLogin(e) {
        e.preventDefault()
        try {
            const loginResponse = await login({ email, password })
            console.log(loginResponse);
            if (loginResponse.success) {
                localStorage.setItem("token",response.token)
                localStorage.setItem("member",JSON.stringify(response.user.name))
                navigate('/Profile')

            } else {
                setErrorMessage(loginResponse.error)
            }
        } catch (error) {
            setErrorMessage('Hubo un error al intentar iniciar sesión. Por favor, intenta nuevamente.')
        }
    }

    return (
        
        <div>
           <form onSubmit={onLogin}> 

            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
            <div>
                {/* <button onClick={() => goToRegister()}>Register</button> */}


                <button  type="submit"  disabled={!isValid}  >Login</button>

                

            </div>

            </form>
        </div>


    )
}

export default Login
