import React, { useState, useEffect } from 'react'
import './slider.scss'

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import back1 from '../Images/pexels-ash-376464.jpg'
import back2 from '../Images/pexels-chan-walrus-958546.jpg'
import back3 from '../Images/pexels-ella-olsson-1640772.jpg'
import back4 from '../Images/pexels-omar-mahmood-106343.jpg'
import back5 from '../Images/pexels-valeria-boltneva-1639562.jpg'



const Slider = () => {
  return (
    <div className="slide-wrap">

    <Carousel interval={1000}>
    <Carousel.Item>

      <img src={back1} alt="" />
      <div className="overlay">
        
      <Carousel.Caption className='caption'>

        <h2>Savor Every Bite, Every Slide</h2>
        <button>Want More</button>
      </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      {/* <ExampleCarouselImage text="Second slide" /> */}
      <img src={back2} alt="" />

      <Carousel.Caption className='caption'>
        {/* <h3>Second slide label</h3> */}
        <h2>Carousel of Culinary Delights</h2>
        <button>Want More</button>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      {/* <ExampleCarouselImage text="Third slide" /> */}
      {/* <ExampleCarouselImage text="Third slide" /> */}
      <img src={back3} alt="" />


      <Carousel.Caption className='caption'>
        {/* <h>Third slide label</h> */}
        <h2>
        Indulge in Flavorful Journeys
        </h2>
        <button>Want More</button>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      {/* <ExampleCarouselImage text="Third slide" /> */}
      {/* <ExampleCarouselImage text="Third slide" /> */}
      <img src={back4} alt="" />

      {/* <div className="overlay"></div> */}

      <Carousel.Caption className='caption'>
        {/* <h>Third slide label</h> */}
        <h2>
        Indulge in Flavorful Journeys
        </h2>
        <button>Want More</button>

      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <Carousel.Caption className='caption'>
        {/* <h>Third slide label</h> */}
        <h2>
        Indulge in Flavorful Journeys
        </h2>
        <button>Want More</button>

      </Carousel.Caption>
      {/* <ExampleCarouselImage text="Third slide" /> */}
      {/* <ExampleCarouselImage text="Third slide" /> */}
      <img src={back5} alt="" />



    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider