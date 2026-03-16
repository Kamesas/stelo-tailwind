import { buttonVariants } from "./src/app/components/Button";
import { cn } from "./src/app/utils/cn";

const result = cn(buttonVariants({ variant: "plum" }));
console.log("Resulting classes:", result);
