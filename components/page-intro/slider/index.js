import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router'

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);



const Slider = () => {

  const router = useRouter()
  const oneLink = (e) => {
    e.preventDefault()
    router.push('/cart')
  }
  // end
  const twoLink = (e) => {
    e.preventDefault()
    router.push('/cart')
  }
  // end
  const threeLink = (e) => {
    e.preventDefault()
    router.push('/cart')
  }
  // end
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide
        onClick={oneLink}
        style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
      ></SwiperSlide>
      <SwiperSlide
        onClick={twoLink}
        style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
      ></SwiperSlide>
      <SwiperSlide
        onClick={threeLink}
        style={{ backgroundImage: "url('/images/slide3.jpg')" }}
      ></SwiperSlide>
    </Swiper>
  );
}

export default Slider