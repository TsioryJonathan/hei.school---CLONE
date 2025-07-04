import Section from "./Section";
import StepGraph from "./StepGraph";
import { Button } from "./ui/button";

export default function Admission() {
  return (
    <Section
      title="Admission"
      description="Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
          fait par test de niveau : une épreuve de français niveau B2 et d’une
          épreuve de mathématiques niveau Terminale D."
      bgColor=""
      className="text-white py-15 bg-[#6586c7]"
    >
      <StepGraph />

      <div className="flex justify-center items-center gap-10">
        <Button className="bg-transparent border-white border-2 text-white rounded-xs text-sm md:text-xl hover:border-primary hover:bg-primary py-6 md:py-7">
          <a href="/inscription">Inscrivez-vous ici</a>
        </Button>

        <Button className="bg-primary text-white rounded-xs text-sm md:text-xl hover:border-primary hover:bg-white hover:text-primary py-6 md:py-7">
          <a href="/">Resultat concours</a>
        </Button>
      </div>
    </Section>
  );
}
