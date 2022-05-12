import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {
  return (
    <Swiper
      className="carousel"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="https://wallpaperaccess.com/full/138728.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://wallpaperaccess.com/full/138728.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
