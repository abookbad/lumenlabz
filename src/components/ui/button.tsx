import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "btn",
        variant === "primary" ? "btn-primary" : "btn-ghost",
        className
      )}
      {...props}
    />
  );
}

export default Button;


