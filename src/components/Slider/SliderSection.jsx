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
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/1.jpg"
            alt="First slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/2.jpg"
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/3.jpg"
            alt="Third slide"
          />
        </div>
        <div>
          <img
            className={styles.sliderImage}
            src="/images/banners/4.jpg"
            alt="Fourth slide"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
