import navLinks from "@/constants/navLinks";
import { socialMedia } from "@/data/socialMedia";
import { assets } from "@/assets/images/assets";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 w-screen px-5 md:px-20 py-5 pb-20 bg-primary text-white">
      <div className="flex justify-start items-center">
        <img
          src={assets.logo}
          alt="HEI LOGO"
          className="w-20 h-20 object-contain"
        />
      </div>

      <nav className="flex flex-col md:flex-row gap-6 ">
        <div className="flex flex-col gap-4 md:w-1/4 text-[16px] font-light">
          <p>Formation habilitée par l’Etat suivant le système LMD</p>
          <p>Habilitation MESupRes n°31309/2023</p>
        </div>

        <div className="flex flex-col gap-4 md:w-1/4 text-[16px] font-light">
          <h2 className="text-xl font-bold text-white">Adresse</h2>
          <ul className="flex flex-col gap-2 items-start">
            {[
              "II J 161 R Ambodivoanjo",
              "Ivandry Antananarivo",
              "101, Madagascar",
            ].map((line, index) => (
              <li className="text-white" key={index}>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:w-1/4 text-[16px] font-light">
          <h2 className="text-xl font-bold text-white">Navigation</h2>

          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li>
                <a
                  href={link.href}
                  className={`hover:text-secondary transition-colors duration-100 ease-in-out ${
                    link.label == "Accueil"
                      ? "text-secondary! font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:w-1/4 text-[16px] font-light">
          <h2 className="text-xl font-bold text-white">Réseaux Sociaux</h2>

          <div className="flex gap-4">
            {socialMedia.map(({ icon, href }) => (
              <a href={href} className="rounded-full bg-secondary p-3">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
}
