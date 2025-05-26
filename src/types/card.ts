import { cardColor } from "@/features/user/types/card-config";

import { Activity } from "./user-activity";

export interface ActivityCard {
  activity: Activity;
  title: string;
  iconPath: string;
  color: cardColor;
}
