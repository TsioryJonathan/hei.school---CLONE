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
      className={`bg-secondary px-3 py-1
        rounded-[2px] border-none 
        md:text-[16px] outline-none hover:bg-secondary/90 hover:text-primary cursor-pointer font-bold ${className}`}
      variant="outline"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
