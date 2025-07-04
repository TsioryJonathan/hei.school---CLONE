import type { aboutContent } from "@/components/AboutCard";
import { GraduationCap, Medal, Users2 } from "lucide-react";

export const aboutData: aboutContent[] = [
  {
    icon: <GraduationCap className="text-secondary" size={64}  />,
    title: "+3ans",
    description:
      "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.",
  },
  {
    icon: <Users2 className="text-secondary" size={64} fill="#dfa408" />,
    title: "+250 étudiants",
    description:
      "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.",
  },
  {
    icon: <Medal className="text-secondary" size={64} />,
    title: "Notre mission",
    description:
      "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
  },
];
