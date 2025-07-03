import { assets } from "../../public/Images/assets";

export default function Technologies() {
  return (
    <section className="w-screen min-h-screen justify-center items-center py-20 px-10 md:px-30 flex flex-col gap-10 bg-[#f1f1f1]">
      <div className="flex flex-col text-primary gap-5 items-center">
        <h2 className="heading text-4xl md:text-6xl font-semibold">
          Les technos et langages utilisées
        </h2>
        <p className=" text-sm md:text-md text-center md:px-20">
          Nos étudiants sont formés à l’utilisation et à la maîtrise des
          langages de programmation Java et JavaScript. Ces deux langages
          occupent une place de choix dans le domaine du développement logiciel
          et du web, offrant une polyvalence et une robustesse appréciées par
          les développeurs à travers le monde.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 items-center gap-5 w-full">
        {[
          assets.java,
          assets.python,
          assets.js,
          assets.c,
          assets.ts,
          assets.docker,
          assets.nextjs,
          assets.aws,
          assets.serverless,
          assets.react,
          assets.openapi,
        ].map((image, i) => (
          <img
            src={image}
            alt={`Image-${i}`}
            className={`
                w-30 h-30 object-contain
                md:last:hidden        
                md:last:col-span-5     
                last:mx-auto           
              `}
          />
        ))}
      </div>
    </section>
  );
}
