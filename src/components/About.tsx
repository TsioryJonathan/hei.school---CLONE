import { aboutData } from "@/constants/about";
import { assets } from "@/assets/images/assets";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section className="flex pb-10">
      <div className=" hidden md:flex items-center justify-center w-1/2">
        <img
          src={assets.aboutImg}
          alt="About image"
          className="w-[80%] object-contain"
        />
      </div>

      <div className="flex flex-col items-center md:items-start md:w-1/2 md:py-10 gap-10 md:pr-10 px-10">
        <h2 className="heading text-5xl text-primary font-bold">
          A propos de nous
        </h2>

        <div className="flex flex-col gap-10">
          {aboutData.map(({ icon, title, description }) => (
            <AboutCard icon={icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}
