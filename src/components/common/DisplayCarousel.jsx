import React from 'react'
import '@farfetch/react-carousel/styles.css'
import { Carousel, SwipeSlider, Bullets } from '@farfetch/react-carousel';

const DisplayCarousel = () => {
  return (

/* The mandatory wrapper of the Carousel */
<Carousel>
    /* One of the available movement engines */
    <SwipeSlider>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
    </SwipeSlider>
    
    /* Optional navigation component */
    <Bullets />
</Carousel>
  )
}

export default DisplayCarousel;