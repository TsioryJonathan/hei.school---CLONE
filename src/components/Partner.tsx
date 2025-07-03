import { partners } from "@/data/partner";

export default function Partner() {
  return (
    <section className="w-screen min-h-screen justify-center items-center py-20 px-10 md:px-30 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="heading text-6xl text-primary text-center font-semibold">
          Nos partenaires
        </h2>
        <p className="text-md text-primary text-center">
          L’employabilité de nos étudiants se base sur la pertinence de notre
          programme pédagogique et de la composition de notre corps enseignant
          mais aussi du soutien et la collaboration des entreprises partenaires
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-5 w-full ">
        {partners.map(({ name, logo, href }) => (
          <a href={href}>
            <img
              key={name}
              src={logo}
              alt={name}
              className="w-40 h-40 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
