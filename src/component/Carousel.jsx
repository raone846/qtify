import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import { Navigation } from 'swiper/modules';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function Carousel({ data, renderItem, uniqueId }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Custom Navigation Buttons */}
      <div
        className={`swiper-button-prev-${uniqueId}`}
        style={{
          position: 'absolute',
          left: '0px', // Adjust distance from the carousel's edge
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 5,
          cursor: 'pointer',
        }}
      >
        <LeftArrow />
      </div>
      <div
        className={`swiper-button-next-${uniqueId}`}
        style={{
          position: 'absolute',
          right: '10px', // Adjust distance from the carousel's edge
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          cursor: 'pointer',
        }}
      >
        <RightArrow />
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-${uniqueId}`, // Unique button selector
          prevEl: `.swiper-button-prev-${uniqueId}`, // Unique button selector
        }}
        loop={false}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 7 },
        }}
        spaceBetween={20} // Adjust spacing between slides
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
