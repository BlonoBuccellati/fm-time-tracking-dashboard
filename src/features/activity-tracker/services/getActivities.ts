import { Activity } from "@/types/user-activity";

export async function getActivities(userId: string): Promise<Activity[]> {
  const res = await fetch(
    `http://localhost:3000/api/users/${userId}/activities`,
  );
  const userActivities: Activity[] = await res.json();
  console.log(userActivities);
  return userActivities;
}
