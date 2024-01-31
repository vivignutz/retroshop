// HeroSection.jsx

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Hero.module.css';

const Hero = () => {
  return (
    <div>
      <Carousel id="productCarousel" interval={3000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/caroussel1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/caroussel2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/caroussel4.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/caroussel6.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
