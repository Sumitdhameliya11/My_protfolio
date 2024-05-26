import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapCarousel = () => {
  return (
    <div className='rounded-3'>
    <Carousel style={{minWidth:"100px"}} className='mx-auto w-75'>
      <Carousel.Item style={{borderRadius:"30px"}}>
        <img
          className="d-block w-100 rounded-3"
          src="https://via.placeholder.com/800x400?text=Slide+1"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Description for Slide 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src="https://via.placeholder.com/800x400?text=Slide+2"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Description for Slide 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src="https://via.placeholder.com/800x400?text=Slide+3"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Description for Slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src="https://via.placeholder.com/800x400?text=Slide+4"
          alt="Slide 4"
        />
        <Carousel.Caption>
          <h3>Slide 4</h3>
          <p>Description for Slide 4.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default BootstrapCarousel;