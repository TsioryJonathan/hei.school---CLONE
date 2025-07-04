import { partners } from "@/constants/partner";
import Section from "./Section";

export default function Partner() {
  return (
    <Section
      title="Nos partenaires"
      description="L’employabilité de nos étudiants se base sur la pertinence de notre
          programme pédagogique et de la composition de notre corps enseignant
          mais aussi du soutien et la collaboration des entreprises partenaires"
      className="text-primary bg-white"
    >
      <div className="grid grid-cols-2 gap-5 md:grid-cols-5 w-full ">
        {partners.map(({ name, logo, href }) => (
          <a href={href}>
            <img
              key={name}
              src={logo}
              alt={name}
              className="w-30 h-30 object-contain"
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
