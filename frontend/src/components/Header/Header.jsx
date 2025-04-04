import Navbar from "../Navbar/Navbar"
import './Header.css'

function Header() {
    
  return (
    <header className='header'>
      <div className="header__logo">
        <img src="/images/eventopia-logo.png" alt="eventopia-logo" />
      </div>
      <Navbar />
    </header>
  )
}

export default Header
