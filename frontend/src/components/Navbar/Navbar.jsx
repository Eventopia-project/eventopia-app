import { Link } from 'react-router-dom' 
import './Navbar.css'

function Navbar() {
  return (
    <nav className="nav">
      <ul className="ul__nav">
        <li>
          <Link to="#"><button>About</button></Link>
        </li>
        <li>
        <Link to="#"><button>Login</button></Link>
        </li>
        <li>
        <Link to="#"><button>SignUp</button></Link>
        </li>
        <li>
          <button>Change theme mode</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
