import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-11/12 h-[400px] mx-auto py-5">
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div
            className="w-full h-auto  bg-center bg-cover flex items-center justify-center py-10"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/tp8Bc1Hh/Emergency-Pipe-Leak-Repair.png')",
            }}
          >
            <div className="bg-gradient-to-r from-blue-900/70 to-blue-700/60 backdrop-blur-sm p-8 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02] max-w-xl mx-4 border border-white/20">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-md">
                Find Trusted Local Plumbers Instantly
              </h1>
              <p className="text-white/90 text-center mt-3 text-lg font-light">
                Fast, reliable service for all your pipe emergencies and routine
                maintenance. Book now and save **10%**!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-auto  bg-center bg-cover flex items-center justify-center py-10"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/F4MCzbJ2/Standard-Home-Deep-Cleaning-3-Bed.png')",
            }}
          >
            <div className="bg-gradient-to-r from-green-900/70 to-green-700/60 backdrop-blur-sm p-8 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02] max-w-xl mx-4 border border-white/20">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-md">
                Professional Cleaning Services You Can Depend On
              </h1>
              <p className="text-white/90 text-center mt-3 text-lg font-light">
                From deep cleans to weekly tidy-ups, get your home sparkling
                with our highly-rated cleaners.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-auto  bg-center bg-cover flex items-center justify-center py-10"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/qLYVfFBW/Ceiling-Fan-Installation-Wiring.png')",
            }}
          >
            <div className="bg-gradient-to-r from-red-900/70 to-red-700/60 backdrop-blur-sm p-8 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02] max-w-xl mx-4 border border-white/20">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-md">
                Certified Electricians for Safe Home Wiring
              </h1>
              <p className="text-white/90 text-center mt-3 text-lg font-light">
                Installation, repairs, and inspections by licensed experts.
                Safety and quality guaranteed.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-auto  bg-center bg-cover flex items-center justify-center py-10"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/Fqz71NYh/Basic-Furniture-Assembly-Small.png')",
            }}
          >
            <div className="bg-gradient-to-r from-purple-900/70 to-purple-700/60 backdrop-blur-sm p-8 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02] max-w-xl mx-4 border border-white/20">
              <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-md">
                Home Maintenance Consultations & Planning
              </h1>
              <p className="text-white/90 text-center mt-3 text-lg font-light">
                Schedule a virtual consultation with our top-rated specialists
                for design, planning, and preventative maintenance advice.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
