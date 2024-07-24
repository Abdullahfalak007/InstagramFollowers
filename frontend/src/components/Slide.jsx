import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import B01 from "../assets/images/img_1.jpg";
import B02 from "../assets/images/img_1.jpg";
import B03 from "../assets/images/img_1.jpg";
import B04 from "../assets/images/img_1.jpg";
import B05 from "../assets/images/img_1.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Slide = () => {
  return (
    <div className="container relative py-10">
      <h2 className="text-center text-2xl font-bold mb-8">
        Here's what our customers say
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={10}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B01}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"What a wonderful experience!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B02}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Helped me a lot!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B03}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Amazing results!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B04}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Highly recommend!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B05}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Best service ever!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B04}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Highly recommend!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B05}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Best service ever!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B04}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Highly recommend!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B05}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Best service ever!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B04}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Highly recommend!"</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="relative w-64 h-96">
            <img
              src={B05}
              alt="testimonial"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg px-4 py-2 text-center">
              <p className="text-sm">"Best service ever!"</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="container flex justify-center items-center mt-4">
          <div className="swiper-button-prev cursor-pointer border border-transparent rounded-full p-2 flex items-center justify-center transition duration-300 ease-in-out hover:border-current"></div>
          <div className="swiper-button-next cursor-pointer border border-transparent rounded-full p-2 flex items-center justify-center transition duration-300 ease-in-out hover:border-current"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;
