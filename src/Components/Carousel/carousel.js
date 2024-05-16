import React from "react";
import styles from "./carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/carousel-1.png";
import img2 from "../../assets/carousel-2.png";
import img3 from "../../assets/carousel-3.png";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  
  
  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        <div>
          <img className={styles.carouselImage} src={img1} alt="Image 1" />
          {/* <div className={styles.carouselImageText}>
          <span className={styles.carouselImageTextLineOne}>Buy Less, Buy Better!</span>
          <span className={styles.carouselImageTextLineTwo}>Authentic source of truth for your sustainability needs.</span>
          <button>About Us</button>
        </div> */}
        </div>
        <div>
          <img className={styles.carouselImage} src={img2} alt="Image 2" />
        </div>
        <div>
          <img className={styles.carouselImage} src={img3} alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
