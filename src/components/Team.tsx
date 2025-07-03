import { teamData } from "@/data/team";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import TeamCard from "./TeamCard";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function Team() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-screen min-h-screen bg-[#6586C7] justify-center items-center py-10 px-10 md:px-30 flex flex-col gap-10 ">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h2 className="heading text-3xl md:text-5xl font-semibold text-white text-center">
          L'équipe pédagogique
        </h2>
        <p className="text-white text-center text-sm md:text-lg font-light">
          Notre équipe pédagogique se compose d’experts nationaux et
          internationaux de l’informatique, de la cybersécurité, de
          l’intelligence artificielle, dont un ingénieur chez Google. Ils sont
          passionnés par l’informatique et sont engagés vers l’excellence. Nous
          sommes conscients que cette équipe est la pierre angulaire de
          l’employabilité de nos étudiants, elle a été soigneusement
          sélectionnée.
        </p>
      </div>
      <div className="w-full px-10">
        <Carousel
          opts={{ loop: true, align: "center" }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {teamData.map(({ name, description, imageUrl, location }) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                <TeamCard
                  name={name}
                  description={description}
                  imageUrl={imageUrl}
                  location={location}
                  key={name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
}
