import { buttonVariants } from "./src/components/Button";
import { cn } from "./src/utils/cn";

const result = cn(buttonVariants({ variant: "plum" }));
console.log("Resulting classes:", result);
