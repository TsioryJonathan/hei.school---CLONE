import StepGraph from "./StepGraph";
import { Button } from "./ui/button";

export default function Admission() {
  return (
    <section className="w-screen min-h-screen bg-[#6586c7] justify-between items-center py-10 px-10 md:px-30 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="heading text-white text-4xl md:text-6xl text-center font-semibold">
          Admission
        </h2>
        <p className="text-center text-white text-md leading-10 md:px-40">
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
          fait par test de niveau : une épreuve de français niveau B2 et d’une
          épreuve de mathématiques niveau Terminale D.{" "}
        </p>
      </div>
      <StepGraph />

      <div className="flex justify-center items-center gap-10">
        <Button className="bg-transparent border-white border-2 text-white rounded-xs text-sm md:text-xl hover:border-primary hover:bg-primary py-6 md:py-7">
          <a href="/inscription">Inscrivez-vous ici</a>
        </Button>

        <Button className="bg-primary text-white rounded-xs text-sm md:text-xl hover:border-primary hover:bg-white hover:text-primary py-6 md:py-7">
          <a href="/">Resultat concours</a>
        </Button>
      </div>
    </section>
  );
}
