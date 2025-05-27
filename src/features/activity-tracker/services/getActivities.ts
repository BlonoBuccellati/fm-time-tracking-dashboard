import { ActivityCard } from "@/types/activity-card";

const ORIGIN =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
export async function getActivityCardsInfo(
  userId: string,
): Promise<ActivityCard[]> {
  const res = await fetch(`${ORIGIN}/api/users/${userId}/activities`);
  const userActivities: ActivityCard[] = await res.json();
  console.log(userActivities);
  return userActivities;
}
