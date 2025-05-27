import { TimeframeKey, useStore } from "@/store";

type Selector = {
  key: TimeframeKey;
  label: string;
  isActive: boolean;
  onClick: () => void;
};
export const useTimeframe = () => {
  // ["Daily", "Weekly", "Monthly"]
  const options: TimeframeKey[] = ["daily", "weekly", "monthly"];
  const { selected, setSelected } = useStore();
  console.log(selected);
  console.log("options:", options);
  const selectors: Selector[] = options.map((option) => ({
    key: option,
    label: option.charAt(0).toUpperCase() + option.slice(1),
    isActive: selected === option,
    onClick: () => setSelected(option),
  }));
  return selectors;
};
