import type { slide } from "./Carousel";
import CTAButton from "./CTAButton";

export default function Slide({ id, title, description, imageUrl }: slide) {
  return (
    <div
      className="flex flex-col items-center relative w-screen h-[85vh]"
      id={parseInt(id.toString()) > 0 ? `slide-${id}` : undefined}
    >
      <div className="absolute inset-0 bg-black/50 -z-5"></div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full absolute inset-0 -z-10 object-cover"
      />

      <div className="flex flex-col items-center justify-between z-99 px-10 md:px-40 py-10 h-full">
        <h2 className="heading font-bold text-5xl text-white">
          Haute Ecole D'Informatique
        </h2>

        <div className="flex flex-col gap-4">
          {description.map((text, index) => (
            <p
              key={index}
              className="text-white text-sm md:text-lg font-light text-center"
            >
              {" "}
              {text}
            </p>
          ))}
        </div>

        <CTAButton />

        <p className="text-white text-sm">
          Habilitation MESupRES, suivant l'arrêté n°31309/2023
        </p>
      </div>
    </div>
  );
}
