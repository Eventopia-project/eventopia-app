import Navbar from '../Navbar/Navbar'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <Navbar inFooter={true} />
      <div className="social-media">
        <a href="https://www.facebook.com/"><img src="/public/images/icons/facebook.svg" alt="facebook" /></a>
        <a href="https://www.instagram.com/"><img src="/public/images/icons/instagram.svg" alt="instagram" /></a>
        <a href="https://www.twitter.com/"><img src="/public/images/icons/twitter.svg" alt="twitter" /></a>
        <a href="https://www.linkedin.com/"><img src="/public/images/icons/linkedin.svg" alt="linkedin" /></a>
        <a href="https://www.youtube.com/"><img src="/public/images/icons/youtube.svg" alt="youtube" /></a>
      </div>
      <div className="copyright">
        <p className="copyright__p">Developed with 💪 by <a href="https://github.com/Monica-R">Monica-R</a> & <a href="#">Rodrigo Aquino</a>. &copy; All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
