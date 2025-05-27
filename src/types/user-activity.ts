import { Activity } from "@/features/activity-tracker/types/activity";

export interface UserActivities {
  userId: string;
  activity: Activity[];
}
