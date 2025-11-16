import { cva } from "class-variance-authority";
import { Slot } from "react-slot";

const btn = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none", {
  variants: {
    intent: {
      default: "bg-primary text-white hover:opacity-90",
      ghost: "bg-transparent",
      outline: "border"
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg"
    }
  },
  defaultVariants: { intent: "default", size: "md" }
});

export default function Button({intent, size, children, asChild=false, ...props}){
  const Comp = asChild ? Slot : "button";
  return <Comp className={btn({intent, size})} {...props}>{children}</Comp>
}
