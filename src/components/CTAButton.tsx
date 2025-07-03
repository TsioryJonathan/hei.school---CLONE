import CustomButton from "./CustomButton";

const buttonContent = [
  {
    label: "Inscrivez-vous ici",
    href: "/inscription",
  },
  {
    label: "Emploi du temps",
    href: "https://admin.hei.school/calendar",
  },
  {
    label: "Programme pédagogique",
    href: "https://drive.google.com/file/d/1FdooEeAKPO5ucNKXMnyEBZ3RTTE80q7e/view?usp=sharing",
  },
];

export default function CTAButton() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:w-full mt-10">
      {buttonContent.map(({ label, href }, id) => (
        <CustomButton
          className={`
            py-6 rounded-xs
            ${
              id == 0
                ? "bg-gray-100 text-primary font-bold hover:bg-white"
                : id == 1
                ? "bg-secondary text-white"
                : "bg-primary text-white hover:bg-primary/90 hover:text-white"
            }`}
        >
          <a href={href}>{label}</a>
        </CustomButton>
      ))}
    </div>
  );
}
