import { assets } from "@/assets/images/assets";


export default function JobProspects() {
  return (
    <section className="w-full min-h-screen py-10 px-10 md:px-30 flex items-center justify-center gap-10">
      <div className="flex flex-col items-center md:items-start justify-center gap-10 w-full md:w-[60%] md:pr-10">
        <h2 className="heading font-bold text-4xl md:text-6xl text-primary text-center">
          Quelques débouchés
        </h2>

        <p className="text-primary font-sans pb-5">
          Formez-vous à une panoplie de métiers du numérique avec nous et venez
          acquérir les fondements de la programmation (qui vous servira pour les
          différents métiers) ! Ce sont des métiers porteurs, des métiers du
          présent, des métiers du futur…
        </p>

        <p className="text-primary font-sans pb-5">
          Développeur back end, développeur front end, développeurs mobile,
          chefs de projet, exploitants cloud, analystes cybersécurité,
          pentesters, auditeur technique SSI, auditeur organisationnel SSI,
          administrateur système et réseau, développeur de sécurité…
        </p>
      </div>

      <div className="hidden md:block w-[40%]">
        <img src={assets.debouché} alt="Débouché illustration" />
      </div>
    </section>
  );
}
