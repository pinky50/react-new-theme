import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#ccc",
          "--swiper-pagination-color": "#57C0E7",
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="banner banner1">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="banner-left">
                  <h1>We are a it company</h1>
                </div>
              </div>
              <div className="col-md-7">
                <div className="banner-right">
                  <h2>Hello people</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner banner2">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="banner-left">
                  <h1>We are a it company</h1>
                </div>
              </div>
              <div className="col-md-7">
                <div className="banner-right">
                  <h2>Hello people</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner banner3">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="banner-left">
                  <h1>We are a it company</h1>
                </div>
              </div>
              <div className="col-md-7">
                <div className="banner-right">
                  <h2>Hello people</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner banner4">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="banner-left">
                  <h1>We are a it company</h1>
                </div>
              </div>
              <div className="col-md-7">
                <div className="banner-right">
                  <h2>Hello people</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;
