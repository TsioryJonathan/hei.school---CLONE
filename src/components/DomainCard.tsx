export default function DomainCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl flex flex-col justify-start items-center gap-5 hover:shadow-xl transition-all duration-100 ease-in-out">
      <img src={image} alt={title} className="object-cover" />

      <div className="flex flex-col items-center gap-4">
        <h2 className="text-secondary heading text-2xl text-center font-semibold">
          {title}
        </h2>
        <p className="text-primary text-center text-md leading-7">
          {description}{" "}
        </p>
      </div>
    </div>
  );
}
