import Carousel from "./Carousel";
import { slides } from "@/constants/heroSlides";
import Slide from "./Slide";

export default function Hero() {
  return (
    <div className="w-screen h-screen">
      <Carousel slides={slides} slidesPerView={1} delay={6000}>
        {({ id, description, imageUrl }) => (
          <Slide id={id} description={description} imageUrl={imageUrl} />
        )}
      </Carousel>
    </div>
  );
}
