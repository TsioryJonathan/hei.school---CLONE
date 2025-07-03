import type { teamType } from "@/types/team.type";
import { assets } from "../../public/Images/assets";

export const teamData: teamType[] = [
  {
    name: "Mirado RAFENOMAHENINTSOA",
    imageUrl: assets.Mirado,
    description: "Data and Business Inteligence Specialist +5",
  },
  {
    name: "Julien RAJERISON",
    imageUrl: assets.JulienRajerison,
    description:
      "Lead Développeur | Fondateur de l'association TechZara Madagascar",
  },
  {
    name: "Ryan ANDRIAMAHERY",
    imageUrl: assets.Ryan,
    description:
      "Developpeur Back-end | Co-fondateur et directeur des opérations de HEI",
  },
  {
    name: "Jean Aimé MAXA",
    imageUrl: assets.JeanAime,
    description:
      "Responsable technique cybersécurité chez CES France continental",
    location: "(Toulouse-France)",
  },
  {
    name: "Parison Ravalomanda",
    imageUrl: assets.Parison,
    description: "Ingenieur en informatique | Ingénieur logiciel chez Google",
    location: "(Londres - UK)",
  },
  {
    name: "Yannick Raharijaona",
    imageUrl: assets.Yannick,
    description: "Responsable technique ML chez Rocket Science",
    location: "(Ottawa - Canada)",
  },
  {
    name: "Dre Tahina Ralitera",
    imageUrl: assets.Tahina,
    description:
      "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)",
  },
  {
    name: "Dr Lou Maurica",
    imageUrl: assets.Lou,
    description:
      "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI",
  },
];
