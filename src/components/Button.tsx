import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 type-meta-cta whitespace-nowrap rounded-full h-[50px] px-8",
  {
    variants: {
      variant: {
        plum: "bg-plum text-white-200",
        tangerine: "bg-tangerine text-plum",
        tertiary: "bg-plum text-bone border-white",
        white: "bg-white text-plum",
        link: "h-auto py-0 px-0 text-bone underline underline-offset-4",
      },
    },
    defaultVariants: {
      variant: "plum",
    },
  },
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props} />
  );
};

export { Button, buttonVariants };
