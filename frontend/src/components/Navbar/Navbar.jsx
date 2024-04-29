import { Link } from 'react-router-dom' 
import './Navbar.css'

function Navbar({inFooter}) {
  return (
    <nav className="nav">
      <ul className="ul__nav">
        <li>
          <Link to="/"><button>Home</button></Link>
        </li>
        <li>
          <Link to="/about"><button>About</button></Link>
        </li>
        <li>
        <Link to="/login"><button>Login</button></Link>
        </li>
        <li>
        <Link to="/signup"><button>SignUp</button></Link>
        </li>
        <li>
          <button>Change theme mode</button>
        </li>
          {
            inFooter && (
              <>
                <li>
                  <Link to="#"><button>FAQ</button></Link>
                </li>
                <li>
                  <Link to="#"><button>Contact</button></Link>
                </li>
                <li>
                  <Link to="#"><button>Privacy Policy</button></Link>
                </li>
                <li>
                  <Link to="#"><button>Terms of Service</button></Link>
                </li>
              </>
            )
          }
      </ul>
    </nav>
  )
}

export default Navbar
