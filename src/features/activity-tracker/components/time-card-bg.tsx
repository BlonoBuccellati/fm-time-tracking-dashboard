import { cva, type VariantProps } from "class-variance-authority";

import { cardColor } from "@/features/activity-tracker/types/card-config";
import { cn } from "@/lib/utils";

const colorMap: Record<cardColor, string> = {
  blue: "bg-blue-300",
  orange: "bg-orange-300",
  pink: "bg-pink-400",
  green: "bg-green-400",
  yellow: "bg-yellow-300",
  purple: "bg-purple-700",
};
const timeCardBGVariants = cva("min-h-[100px]", {
  variants: {
    variant: colorMap,
  },
  defaultVariants: {
    variant: "blue",
  },
});
const TimeCardBG = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof timeCardBGVariants>) => {
  return (
    <div
      className={cn(timeCardBGVariants({ variant, className }))}
      {...props}
    />
  );
};

export default TimeCardBG;
