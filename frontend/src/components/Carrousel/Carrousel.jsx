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
            src='https://images.pexels.com/photos/19770352/pexels-photo-19770352/free-photo-of-ciudad-puesta-de-sol-mujer-acera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img1'
          />
        </div>
        <div className='img-item'>
          <img
            src='https://images.pexels.com/photos/19777965/pexels-photo-19777965/free-photo-of-ciudad-calle-montana-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img2'
          />
        </div>
        <div className='img-item'>
          <img
            src='https://images.pexels.com/photos/19781192/pexels-photo-19781192/free-photo-of-ciudad-hombre-gafas-de-sol-calle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='img3'
          />
        </div>
      </Slider>
    </section>
  )
}

export default Carrousel
