import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import ProductsFilter from "../../components/products-filter";
import ProductsContent from "./view-more-products";
import Angle from "../../assets/icons/Angle-right";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

const CampaingsPage = () => {
  return (
    <Layout>
      <section className="container">
        <div className="product-market-page CampaingsPage section section-products-featured">
          <div className="campaign-page-slider">
            <>
              <Swiper
                slidesPerView={6}
                spaceBetween={30}
                navigation={true}
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
                  <a href="#" className="campaings-link">
                    <img src="/images/campings/omarekuse.jpg" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="campaings-link">
                    <img src="/images/campings/omarekuse.jpg" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="campaings-link">
                    <img src="/images/campings/omarekuse.jpg" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#" className="campaings-link">
                    <img src="/images/campings/omarekuse.jpg" />
                  </a>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
          <header className="section-products-featured__header">
            <h3>Campaings Product's</h3>
          </header>
          <div className="product-market-body products-page">
            <div className="container">
              <ProductsFilter />
              <ProductsContent />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
export default CampaingsPage;
