export default function Section({
  bgColor,
  title,
  description,
  className,
  children,
}: {
  bgColor?: string;
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}) {
  console.log(bgColor);
  return (
    <section
      className={`w-screen min-h-screen justify-center items-center px-10 md:px-35 flex flex-col gap-10 bg-[${bgColor}] ${className}`}
    >
      <div className="flex flex-col gap-10 items-center justify-center">
        <h2 className="heading text-[35px] md:text-[50px] font-semibold text-center">
          {title}
        </h2>
        <p className="text-center text-[16px] md:text-[17px] font-light">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}
