import { ActivityCard } from "@/types/card";

export async function getActivityCardsInfo(
  userId: string,
): Promise<ActivityCard[]> {
  const res = await fetch(
    `http://localhost:3000/api/users/${userId}/activities`,
  );
  const userActivities: ActivityCard[] = await res.json();
  console.log(userActivities);
  return userActivities;
}
