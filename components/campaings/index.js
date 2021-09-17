import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export const Campaign = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="campaingsslider container"
      >
        <SwiperSlide>
          <Link href="/view-more/campaings">
          <a className="campaings-link">
            <img src="/images/campings/omarekuse.jpg" />
          </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/view-more/campaings">
          <a className="campaings-link">
            <img src="/images/campings/omarekuse.jpg" />
          </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/view-more/campaings">
          <a className="campaings-link">
            <img src="/images/campings/omarekuse.jpg" />
          </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/view-more/campaings">
          <a className="campaings-link">
            <img src="/images/campings/omarekuse.jpg" />
          </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Campaign