import { admissionStep } from "@/data/admissionStep";
import StepCard from "./StepCard";

export default function StepGraph() {
  return (
    <div className="flex w-full flex-col md:flex-row ">
      {admissionStep.map((step) => (
        <StepCard {...step} />
      ))}
    </div>
  );
}
