import { ActivityCard } from "@/types/activity-card";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
export async function getActivityCardsInfo(
  userId: string,
): Promise<ActivityCard[]> {
  const res = await fetch(`${API_BASE}/api/users/${userId}/activities`);
  const userActivities: ActivityCard[] = await res.json();
  console.log(userActivities);
  return userActivities;
}
