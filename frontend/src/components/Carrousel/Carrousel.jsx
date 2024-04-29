import './Carrousel.css'
import React from 'react'
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
  return (
    <section className='section'>
      <div className="layer"></div>
      <div className="presentation-app">
        <h1 className='presentation-app__h1'>Eventopia</h1>
        <h2 className='presentation-app__h2'>Find the best events in your city</h2>
        <p className='presentation-app__p'>Discover the best events in your city, concerts, festivals, parties, conferences and much more.</p>
      </div>
      <Slider {...settings} className='slider__section'>
        <div className='img-item'>
          <img
            src='/public/images/concert.webp'
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
    </section>
  )
}

export default Carrousel
