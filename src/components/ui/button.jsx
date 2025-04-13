import { cn } from "@/lib/utils";

export function Button({ className, variant = "default", ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 disabled:opacity-50 disabled:pointer-events-none p-button";
  
  const variants = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
} 