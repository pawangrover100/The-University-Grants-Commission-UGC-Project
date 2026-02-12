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
      <div className="w-full max-w-full overflow-x-hidden
 ">
        <Slider {...settings} className="">
          <div>
            <video autoPlay muted loop className="w-full h-125 object-cover block" >
              <source src={Video} type="video/mp4" />
            </video>
          </div>

          <div>
           <img src={Slider2} className="w-full h-125 object-cover block"/>
          </div>

          <div>
            <img src={Slider3} className="w-full h-125 object-cover block" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
