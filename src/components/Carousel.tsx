import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import type { HeroSlide } from "@/types/slide.type";

function Carousel({
  slides,
  slidesPerView,
  delay,
  children,
}: {
  slides: HeroSlide[];
  slidesPerView?: number;
  delay?: number;
  children: (el: HeroSlide) => React.ReactNode;
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>{children(slide)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
