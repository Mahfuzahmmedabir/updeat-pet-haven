import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-cover bg-center bg-pet-haven1 h-[600px]">
            <div className="py-64 flex items-center justify-center">
              <h2 className="text-gray-200 w-[600px] text-4xl">
                Every pet deserves a home, a family, and endless love. Be their
                hope, be their hero. Adopt today
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-cover bg-center bg-pet-haven2 h-[600px]">
            <div className="py-64 flex items-center justify-center">
              <h2 className="text-gray-200 w-[600px] text-4xl">
                They’re not just pets they’re family. Start your journey to
                unconditional love today.
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-cover bg-center bg-pet-haven3 h-[600px]">
            <div className="py-64 flex items-center justify-center">
              <h2 className="text-gray-100 w-[600px] text-4xl">
                Love doesn’t have a price tag, but it does have a wagging tail.
                Change a life – adopt today.
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-cover bg-center bg-pet-haven4 h-[600px]">
            <div className="py-64 flex items-center justify-center">
              <h2 className="text-gray-200 w-[600px] text-4xl">
                They may be small, but their love is infinite. Open your heart
                and give them a forever home
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
