import { cardColor } from "@/features/activity-tracker/types/card-config";

import { UserTimeframes } from "../features/activity-tracker/types/activity";

export interface ActivityCard {
  slug: string;
  timeframes: UserTimeframes;
  title: string;
  iconPath: string;
  color: cardColor;
}
