import { assets } from "@/assets/images/assets";
import type { HeroSlide } from "@/types/slide.type";

export const slides: HeroSlide[] = [
  {
    id: 1,
    description: [
      "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.",
    ],
    imageUrl: assets.banner1,
  },
  {
    id: 2,
    description: [
      `« L'éducation est l'arme la plus puissante pour changer le monde » selon Nelson Mandela.`,
      `« L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C'est notre mission `,
    ],
    imageUrl: assets.banner2,
  },
  {
    id: 3,
    description: [
      "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relache pour la montée en compétence de nos étudiants",
    ],
    imageUrl: assets.banner3,
  },
];
