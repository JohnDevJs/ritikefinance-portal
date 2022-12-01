import React from "react";
import "./../pages/Authentication/Signup/Style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Img_4 from "../assets/images/Modules/Faspro24_illustrations_lease_accounting.png";
import Img_5 from "../assets/images/Modules/Faspro24_illustrations_property_maintenance.png";
import Img_6 from "../assets/images/Modules/Faspro24_illustrations_security_1.png";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ display: "flex", flexDirection: "column" }}>
          <img src={Img_4} alt="faspro24-login" />

          <h5 className="text-white mt-2">
            All your facility details are easily organized in one place.
          </h5>
        </SwiperSlide>

        <SwiperSlide style={{ display: "flex", flexDirection: "column" }}>
          <img src={Img_5} alt="faspro24-login" />
          <h5 className="text-white mt-2">
            {" "}
            Ensuring efficiency in your maintenance operations.{" "}
          </h5>
        </SwiperSlide>

        <SwiperSlide style={{ display: "flex", flexDirection: "column" }}>
          <img src={Img_6} alt="faspro24-login" />
          <h5 className="text-white mt-2">
            We keep your property safe with no stress!
          </h5>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
