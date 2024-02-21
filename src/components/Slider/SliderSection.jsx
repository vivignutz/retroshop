// SliderSection.jsx

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './SliderSection.module.css';

const SliderSection = () => {
  return (
    <div>
      <Carousel  id="productSlider" interval={3000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel2.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel2.png"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel2.png"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel2.png"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderSection;
