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
    arrows: false,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/polaroid.png"
            alt="First slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/telefon15.png"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/exclusive_seat15.png"
            alt="Third slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/hurryup.png"
            alt="Fourth slide"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
