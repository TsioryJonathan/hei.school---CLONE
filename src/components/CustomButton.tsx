import { Button } from "./ui/button";

function CustomButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button className={`bg-secondary px-6 py-3 ${className}`}>
      {children}
    </Button>
  );
}

export default CustomButton;
