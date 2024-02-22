// // SliderSection.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderSection.module.css";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/carousel1.png"
            alt="First slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/carousel2.png"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/carousel3.png"
            alt="Third slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/carousel4.png"
            alt="Fourth slide"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;


// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './SliderSection.module.css';

// const SliderSection = () => {
//   return (
//     <div>
//       <Carousel  id="productSlider" interval={3000} fade>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="/images/carousel2.png"
//             alt="First slide"
//           />
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="/images/carousel2.png"
//             alt="Second slide"
//           />
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="/images/carousel2.png"
//             alt="Third slide"
//           />
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="/images/carousel2.png"
//             alt="Fourth slide"
//           />
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// };

// export default SliderSection;
