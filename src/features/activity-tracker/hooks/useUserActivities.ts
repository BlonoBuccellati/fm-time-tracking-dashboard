import { formatHours } from "@/lib/format";
import { useStore } from "@/store";
import { ActivityCard } from "@/types/activity-card";

export function useUserActivities(activityCard: ActivityCard) {
  const selected = useStore((store) => store.selected);
  const { timeframes, title, iconPath, color } = activityCard;
  const { current, previous } = timeframes[selected];
  const currentHours = formatHours(current);
  const previousHours = formatHours(previous);
  return { timeframes, title, iconPath, color, currentHours, previousHours };
}
