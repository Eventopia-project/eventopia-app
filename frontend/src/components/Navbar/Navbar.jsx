import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ inFooter }) {
  const userRegistered = localStorage.getItem('member');
  console.log(userRegistered)
  return (
    <nav className="nav">
      <ul className="ul__nav">
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button>About</button>
          </Link>
        </li>
        <li>
          <button>Change theme mode</button>
        </li>
        {!localStorage.getItem('token') && (
          <>
            <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
            </li>
            <li>
              
                <Link to="/signup">
                  <button>SignUp</button>
                </Link>
            </li>
          </>
        )}
        <li>
          {localStorage.getItem('token') && (
            <ul className='dropdown'>
              <li>
                  <p>Hola, { userRegistered }</p>
              </li>
              <li>
                <Link to="/profile">
                  <button>Profile</button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button onClick={() => localStorage.clear()}>Logout</button>
                </Link>
              </li>
            </ul>
          )}
        </li>
        {inFooter && (
          <>
            <li>
              <Link to="#">
                <button>FAQ</button>
              </Link>
            </li>
            <li>
              <Link to="#">
                <button>Contact</button>
              </Link>
            </li>
            <li>
              <Link to="#">
                <button>Privacy Policy</button>
              </Link>
            </li>
            <li>
              <Link to="#">
                <button>Terms of Service</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
