import { cardColor } from "@/features/activity-tracker/types/card-config";

import { Activity } from "../features/activity-tracker/types/activity";

export interface ActivityCard {
  activity: Activity;
  title: string;
  iconPath: string;
  color: cardColor;
}
