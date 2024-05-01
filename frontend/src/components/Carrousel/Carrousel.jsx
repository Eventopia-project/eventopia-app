import './Carrousel.css'
import React from 'react'
import { Link } from 'react-scroll'
import Slider from 'react-slick'
function Carrousel() {
  let settings = {
    fade: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }

  const handleClick = () => {
    const nextContent = document.getElementById('nextContent');
    window.scrollTo({
      top: nextContent.offsetTop,
      behavior: 'smooth'
    });
  };
  

  return (
    <section className='section'>
      <div className="layer"></div>
      <div className="presentation-app josefin-sans-font">
        <h1 className='presentation-app__h1'><span className='part1'>Even</span><span className='part2'>topia</span></h1>
        <p className='presentation-app__p'>Discover the best events in your city, concerts, festivals, parties, conferences and much more.</p>
      </div>
      <Slider {...settings} className='slider__section'>
        <div className='img-item'>
          <img
            src='/public/images/mirroring-image-young-friends.webp'
            alt='img1'
          />
        </div>
        <div className='img-item'>
          <img
            src='/public/images/fair.webp'
            alt='img2'
          />
        </div>
        <div className='img-item'>
          <img
            src='/public/images/race.webp'
            alt='img3'
          />
        </div>
        <div className='img-item'>
          <img
            src='/public/images/three-girls.webp'
            alt='img4'
          />
        </div>
        <div className='img-item'>
          <img
            src='/public/images/influencer-taking-photo-cake-market.webp'
            alt='img5'
          />
        </div>
      </Slider>
      <Link className="arrow" to="events-element" smooth={true} onClick={handleClick} style={{position: 'fixed', bottom: '20px', right: '20px'}}>
        <img src="/public/images/arrow-down.svg" alt="arrow-down" />
      </Link>
    </section>
  )
}

export default Carrousel
