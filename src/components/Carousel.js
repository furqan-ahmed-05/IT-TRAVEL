import React, { useState } from "react";
import "./Form.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

function Carousel() {
  return (
    // <div className="section-width">
    //     <div className="section-padding">
    <Swiper
      spaceBetween={30}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation, HashNavigation]}
      className="mySwiper"
      id="mySwiper"
    >
      <SwiperSlide data-hash="slide1">
        <img className="swiper-image" src={"/Images/LOGO it.png"} />
      </SwiperSlide>
      <SwiperSlide data-hash="slide2">
        <img className="swiper-image" src={"/Images/trips.jpg"} />
      </SwiperSlide>
      <SwiperSlide data-hash="slide3">
        <img className="swiper-image" src={"/Images/HajjUmrah.jpg"} />
      </SwiperSlide>
    </Swiper>
    // </div>
    // </div>
  );
}
export default Carousel;
