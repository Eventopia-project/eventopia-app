import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ inFooter }) {
  const userRegistered = localStorage.getItem('member');
  console.log(userRegistered)
  return (
    <nav className="nav josefin-sans-font">
      <ul className={inFooter ? "ul__nav footer__nav" : "ul__nav"}>
        <li>
          <Link to="/" data-text="Home">
            <button className={inFooter ? "nav__footer" : ""}>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about" data-text="About">
            <button className={inFooter ? "nav__footer" : ""}>About</button>
          </Link>
        </li>
        {!localStorage.getItem('token') && (
          <>
            <li>
                <Link to="/login" data-text="Login">
                  <button className={inFooter ? "nav__footer" : ""}>Login</button>
                </Link>
            </li>
            <li>
              
                <Link to="/signup" data-text="SignUp">
                  <button className={inFooter ? "nav__footer" : ""}>SignUp</button>
                </Link>
            </li>
          </>
        )}
        <li>
          {localStorage.getItem('token') && (
            <ul className='profile-user'>
              <li className='li-text'>
                  <p className='josefin-sans-font '>Hello, { userRegistered }</p>
              </li>
              <li>
                <Link to="/profile" data-text="Profile">
                  <button className={inFooter ? "nav__footer" : ""}>Profile</button>
                </Link>
              </li>
              <li>
                <Link to="/" data-text="Logout">
                  <button className={inFooter ? "nav__footer" : ""} onClick={() => localStorage.clear()}>Logout</button>
                </Link>
              </li>
            </ul>
          )}
        </li>
        {inFooter && (
          <>
            <li>
              <Link to="#" data-text="FAQ">
                <button className='nav__footer'>FAQ</button>
              </Link>
            </li>
            <li>
              <Link to="#" data-text="Contact">
                <button className='nav__footer'>Contact</button>
              </Link>
            </li>
            <li>
              <Link to="/privacy" data-text="Privacy Policy">
                <button className='nav__footer'>Privacy Policy</button>
              </Link>
            </li>
            <li>
              <Link to="/terms" data-text="Terms of Service">
                <button className='nav__footer'>Terms of Service</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
