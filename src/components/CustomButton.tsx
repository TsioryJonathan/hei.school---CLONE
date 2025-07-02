import { Button } from "./ui/button";

function CustomButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      className={`bg-secondary px-6 py-3 rounded-xs border-none outline-none hover:bg-secondary/90 cursor-pointer font-bold ${className}`}
      variant="outline"
    >
      {children}
    </Button>
  );
}

export default CustomButton;
