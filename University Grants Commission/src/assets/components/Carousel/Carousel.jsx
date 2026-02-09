import React from "react";
import Slider from "react-slick";
import Video from "../../video/video_slider.mp4";
import Slider2 from "../../image/main-slider2.png";
import Slider3 from "../../image/main-slider3.png";

function Carousel() {
  const settings = {
   infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-container  
 ">
        <Slider {...settings}>
          <div>
            <video autoPlay muted loop >
              <source src={Video} type="video/mp4" />
            </video>
          </div>

          <div>
            <img src={Slider2} alt="" />
          </div>

          <div>
            <img src={Slider3} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
