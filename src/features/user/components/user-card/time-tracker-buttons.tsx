"use client";
import { PropsWithChildren } from "react";

import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TimeframeKey, useStore } from "@/store";

interface TimeframeSelector {
  onClick: () => void;
  isActive: boolean;
}
const TimeframeSelector = ({
  children,
  onClick,
  isActive,
}: PropsWithChildren<TimeframeSelector>) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={cn(
        "typo-5-regular text-purple-500 hover:cursor-pointer hover:text-white",
        isActive && "text-white",
      )}
    >
      {children}
    </button>
  );
};

const TimeTrackerButtons = () => {
  const options = ["Daily", "Weekly", "Monthly"] as const;

  const { selected, setSelected } = useStore();
  return (
    <CardContent className="bg-navy-900 desktop:p-400 rounded-[15px] py-300">
      <div className="desktop:grid-cols-1 desktop:justify-items-start tablet:mx-auto desktop:space-y-[21px] grid max-w-[343px] grid-cols-3 text-center">
        {options.map((opt) => (
          <TimeframeSelector
            key={opt}
            isActive={selected === opt.toLowerCase()}
            onClick={() => setSelected(opt.toLowerCase() as TimeframeKey)}
          >
            {opt}
          </TimeframeSelector>
        ))}
      </div>
    </CardContent>
  );
};
export default TimeTrackerButtons;
