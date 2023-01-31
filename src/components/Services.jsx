import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Services = () => {
  return (
    <div className='services'>
        <Carousel
        infiniteLoop autoPlay showArrows={false} showStatus={false} interval={800} 
        showThumbs={false}
        showIndicators={false}
        >
        <div>
            <img src={img1} alt="item" />
            <p  className='legend'>Full Stack</p>
        </div>
        <div >
            <img src={img2} alt="item" />
            <p className='legend'>Pee-to-peer Support</p>
        </div>
        </Carousel>
    </div>
  )
}

export default Services