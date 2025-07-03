import { domains } from "@/data/domains";
import DomainCard from "./DomainCard";

export default function Domains() {
  return (
    <section className="bg-[#f1f1f1] w-full min-h-screen py-10 px-10 md:px-30 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h2 className="heading text-4xl md:text-6xl font-bold text-primary text-center">
          Domaines
        </h2>
        <p className="text-center text-[1rem] text-primary">
          Au cours de vos trois ans de formation, naviguez entre les domaines
          les plus porteurs du numérique du présent et de l’avenir :
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {domains.map((domain) => (
          <DomainCard {...domain} />
        ))}
      </div>
    </section>
  );
}
