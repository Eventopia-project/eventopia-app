import './Navbar.css'
function Navbar() {
    return (
        <nav className="nav">
            <ul className="ul__nav">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">SignUp</a>
                </li>
                <li>
                    <a href="#">Change theme mode</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
