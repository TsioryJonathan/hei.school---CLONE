import Carousel from "./Carousel";
import { slides } from "@/constants/heroSlides";

export default function Hero() {
  return (
    <div className="w-screen h-screen">
      <Carousel slides={slides} />
    </div>
  );
}
