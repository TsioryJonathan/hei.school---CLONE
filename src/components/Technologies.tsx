import { assets } from "@/assets/images/assets";
import Section from "./Section";

export default function Technologies() {
  return (
    <Section
      title="Les technos et langages utilisées"
      description="Nos étudiants sont formés à l’utilisation et à la maîtrise des
          langages de programmation Java et JavaScript. Ces deux langages
          occupent une place de choix dans le domaine du développement logiciel
          et du web, offrant une polyvalence et une robustesse appréciées par
          les développeurs à travers le monde."
      className="text-primary py-15 bg-[#f1f1f1]"
    >
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
    </Section>
  );
}
