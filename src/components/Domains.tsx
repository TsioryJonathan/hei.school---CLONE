import { domains } from "@/data/domains";
import DomainCard from "./DomainCard";
import Section from "./Section";

export default function Domains() {
  return (
    <Section
      title="Domaines"
      description="Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :"
      bgColor="#f1f1f1"
      className="text-primary py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {domains.map((domain) => (
          <DomainCard {...domain} />
        ))}
      </div>
    </Section>
  );
}
