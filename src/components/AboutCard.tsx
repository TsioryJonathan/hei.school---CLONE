export type aboutContent = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function AboutCard({ icon, title, description }: aboutContent) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {icon}{" "}
        <span className="text-primary font-semibold text-xl">{title}</span>
      </div>

      <p className="text-md text-primary">{description}</p>
    </div>
  );
}
