import type { HeroSlide } from "@/types/slide.type";
import CTAButton from "./CTAButton";

export default function Slide({ title, description, imageUrl }: HeroSlide) {
  return (
    <div
      className={`flex flex-col items-center relative w-screen h-[85vh] md:h-screen`}
    >
      <div className="absolute inset-0 bg-gray-950/70 -z-5"></div>
      <img
        src={imageUrl}
        alt={title}
        className="w-screen h-full absolute -z-10 object-cover object-[position:50%_10%]"
      />

      <div className="flex flex-col items-center justify-between z-99 px-10 md:px-40 py-10 h-full">
        <h2 className="heading font-bold md:text-7xl text-5xl text-white text-shadow-lg/10 text-center">
          Haute Ecole d'Informatique
        </h2>

        <div className="flex flex-col">
          {description.map((text, index) => (
            <p
              key={index}
              className="text-white text-sm md:text-xl md:font-semibold font-light text-center text-shadow-lg"
            >
              {text}
            </p>
          ))}
        </div>

        <CTAButton />

        <p className="text-white text-sm md:text-lg text-center">
          Habilitation MESupRES, suivant l'arrêté n°31309/2023
        </p>
      </div>
    </div>
  );
}
