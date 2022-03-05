
import "./slider.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import slideOne from './images/slide-1.png'
import slideTwo from './images/slide-5.jpg'
import slideThree from './images/slide-3.jpg'

import Carousel from 'react-bootstrap/Carousel';

const LandingSlider = () => {

    return(
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={slideOne}
              alt="First slide"
            />
            <Carousel.Caption>
            <h1 className="container text-right" id="slider-caption">
	          	<span id="slider-caption-top">Welcome to</span>
	          	<span id="slider-caption-middle">Your Brand New</span>
	          	<span id="slider-caption-bottom">Website</span>
	          </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={slideTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={slideThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
};

export default LandingSlider;