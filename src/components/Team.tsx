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
import Section from "./Section";

export default function Team() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Section
      bgColor="#6586c7"
      title="L'équipe pédagogique"
      description="Notre équipe pédagogique se compose d’experts nationaux et
          internationaux de l’informatique, de la cybersécurité, de
          l’intelligence artificielle, dont un ingénieur chez Google. Ils sont
          passionnés par l’informatique et sont engagés vers l’excellence. Nous
          sommes conscients que cette équipe est la pierre angulaire de
          l’employabilité de nos étudiants, elle a été soigneusement
          sélectionnée."
      className="text-white md:px-30! py-15"
    >
      <div className="w-full px-10">
        <Carousel
          opts={{ loop: true, align: "center" }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {teamData.map(({ name, description, imageUrl, location }) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center pointer-events-none">
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
          <CarouselPrevious className="cursor-pointer text-black font-bold" />
          <CarouselNext className="cursor-pointer text-black font-bold" />
        </Carousel>
      </div>
    </Section>
  );
}
