import { assets } from "@/assets/images/assets";
import { Button } from "./ui/button";

export default function Program() {
  return (
    <section className="w-screen min-h-screen justify-center items-center py-20 px-10 md:px-30 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:items-start justify-center items-center gap-10">
        <div className="md:w-[40%] w-full flex items-center justify-center">
          <img src={assets.illustration} alt="Illustration" />
        </div>
        <div className="flex flex-col md:items-start items-center md:w-[60%] text-primary gap-10">
          <h2 className="heading text-5xl font-semibold text-center ">
            Le programme pédagogique
          </h2>

          <p>
            Suivant le système LMD, jusqu’au Master, notre formation repose sur
            un programme pédagogique conçu en adéquation avec les attentes du
            marché. La formation est sanctionnée par un diplôme de Licence et de
            Master en Informatique reconnu par le MESupRes de Madagascar.
          </p>

          <Button className="cursor-pointer bg-white border-2 border-primary rounded-xs text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-xl font-semibold px-3 py-6 font-helvetica">
            Notre programme
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          "Apprentissage théoriques en présentiel",
          "Apprentissage sur supports numériques",
          "Travaux individuels de l’étudiant",
          "Apprentissage en entreprise",
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start py-10 px-5 bg-[#faf0d6] rounded-xl gap-4"
          >
            <h3 className="text-5xl font-bold text-secondary">25%</h3>
            <p className="text-primary text-[24px]! font-semibold">{item}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[assets.maskGroup1, assets.maskGroup2, assets.maskGroup3].map(
          (el, i) => (
            <img src={el} alt="MASK" key={i} />
          )
        )}
      </div>
    </section>
  );
}
