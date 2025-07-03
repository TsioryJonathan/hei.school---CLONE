import { Button } from "./ui/button";

function CustomButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      className={`bg-secondary px-3 py-4
        md:px-5 md:py-8 rounded-[2px] border-none 
        md:text-xl outline-none hover:bg-secondary/90 hover:text-primary cursor-pointer font-semibold ${className}`}
      variant="outline"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
