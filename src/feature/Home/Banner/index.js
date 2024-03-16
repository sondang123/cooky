import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AppResource from "../../../general/constants/AppResource";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Banner() {
  return (
    <div className="pt-3">
      {" "}
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <div className="ratio ratio-16x9">
              <img
                src={AppResource.images.img_banner1}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="ratio ratio-16x9">
              <img
                src={AppResource.images.img_banner2}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="ratio ratio-16x9">
              <img
                src={AppResource.images.img_banner3}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="ratio ratio-16x9">
              <img
                src={AppResource.images.img_banner4}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="ratio ratio-16x9">
              <img
                src={AppResource.images.img_banner5}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
