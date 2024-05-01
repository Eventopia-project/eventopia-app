import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ inFooter }) {
  const userRegistered = localStorage.getItem('member');
  console.log(userRegistered)
  return (
    <nav className="nav josefin-sans-font">
      <ul className="ul__nav">
        <li>
          <Link to="/" data-text="Home">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about" data-text="About">
            <button>About</button>
          </Link>
        </li>
        {!localStorage.getItem('token') && (
          <>
            <li>
                <Link to="/login" data-text="Login">
                  <button>Login</button>
                </Link>
            </li>
            <li>
              
                <Link to="/signup" data-text="SignUp">
                  <button>SignUp</button>
                </Link>
            </li>
          </>
        )}
        <li>
          {localStorage.getItem('token') && (
            <>
              <li>
                  <p>Hola, { userRegistered }</p>
              </li>
              <li>
                <Link to="/profile" data-text="Profile">
                  <button>Profile</button>
                </Link>
              </li>
              <li>
                <Link to="/" data-text="Logout">
                  <button onClick={() => localStorage.clear()}>Logout</button>
                </Link>
              </li>
            </>
          )}
        </li>
        {inFooter && (
          <>
            <li>
              <Link to="#" data-text="FAQ">
                <button>FAQ</button>
              </Link>
            </li>
            <li>
              <Link to="#" data-text="Contact">
                <button>Contact</button>
              </Link>
            </li>
            <li>
              <Link to="/privacy" data-text="Privacy Policy">
                <button>Privacy Policy</button>
              </Link>
            </li>
            <li>
              <Link to="/terms" data-text="Terms of Service">
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
