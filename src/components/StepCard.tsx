import { cn } from "@/lib/utils";
import { ArrowBigRight } from "lucide-react";

export default function StepCard({
  stepNb,
  title,
  description,
}: {
  stepNb: number;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-row gap-4 px-5 py-10 md:py-5 justify-between items-start w-full md:w-1/3",
        stepNb === 1
          ? "bg-[#fcdfb5]"
          : stepNb == 2
          ? "bg-[#f7d090]"
          : "bg-[#f1c16b]"
      )}
    >
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-3xl md:text-6xl text-white">
          {stepNb.toString().padStart(2, "0")}
        </h2>
        <p className="text-primary text-md">
          <span className="font-bold ">
            {title}
            {stepNb !== 3 && " : "}
          </span>
          {description}
        </p>
      </div>
      {stepNb !== 3 && (
        <div className="hidden md:flex items-center justify-center h-full">
          <ArrowBigRight fill="white" className="text-white" size={48} />
        </div>
      )}
    </div>
  );
}
