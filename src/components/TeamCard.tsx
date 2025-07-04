import type { teamType } from "@/types/team.type";

export default function TeamCard({
  imageUrl,
  name,
  description,
  location,
}: teamType) {
  return (
    <div className="flex flex-col items-center justify-start w-[333px] h-[385px] gap-5 p-5 rounded-xl bg-white pointer-events-none">
      <div className="flex flex-col gap-4 items-center text-primary">
        <img
          src={imageUrl}
          alt={name}
          className="border-8 border-gray-500/30 rounded-full w-50 h-50 object-cover"
        />
        <h3 className="font-bold heading text-xl text-center">{name}</h3>
        <p className="text-sm text-center">{description}</p>
        {location && <p className="text-sm ">{location}</p>}
      </div>
    </div>
  );
}
