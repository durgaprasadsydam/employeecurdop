import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Products from './Products';



function Slider() {
  return (
    <div>
      <Carousel>
            <Carousel.Item interval={2000}>
            <img src='https://global.hisense.com/dam/jcr:983144b1-36db-44ba-af97-7c15d37daa71/product-overview-hisense-smartphone-kv.h60-5g.jpg' className='img-fluid' alt='' />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src='https://global.hisense.com/dam/jcr:a0622ec8-3501-4c44-92dc-afafb9398077/product-overview-hisense-smartphone-kv.jpg' className='img-fluid' alt='' />
            </Carousel.Item>
        </Carousel>
        <Products />
    </div>
  );
}

export default Slider;
