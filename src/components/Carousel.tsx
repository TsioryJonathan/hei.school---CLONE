import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      slidesPerView={1}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      loop
      autoplay={{
        delay: 3000,
      }}
    >
      {slides.map(({ id, title, description, imageUrl }) => (
        <SwiperSlide key={id}>
          <Slide
            id={id}
            title={title}
            description={description}
            imageUrl={imageUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
