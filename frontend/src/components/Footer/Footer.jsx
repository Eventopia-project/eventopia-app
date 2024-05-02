import Navbar from '../Navbar/Navbar'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <Navbar inFooter={true} />
      <div className="social-media">
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
      </div>
      <div className="copyright">
        <p className="copyright__p">All rights reserved</p>
        <p className="copyright__p">Developed with ❤️ and 💪 by /insert names/</p>
      </div>
    </footer>
  )
}

export default Footer
