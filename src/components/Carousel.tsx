import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Slide from "./Slide";

export type slide = {
  id: number;
  title?: string;
  description: string[];
  imageUrl: string;
};

function Carousel({ slides }: { slides: slide[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
