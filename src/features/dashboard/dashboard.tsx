import ActivityCardList from "@/features/activity-tracker/components/time-card-list";
import UserCard from "@/features/user/components/user-card";

import { getActivities } from "../activity-tracker/services/getActivities";
import { getUser } from "../user/services/getUser";
// import { UserActivity } from "@/types/user-activity";

const Dashboard = async () => {
  // Server First, Client When Neededの考えに基づき、サーバでフェッチしておく。
  // 上位コンポーネント（dashboard.tsx)でfetch()して、コンポーネント（プレゼンテーション層）にpropsで渡す。
  const userId = "1";
  const user = await getUser(userId);

  const activities = await getActivities(userId);
  console.log(activities);
  return (
    <main>
      <UserCard {...user} />
      <ActivityCardList activities={activities} />
    </main>
  );
};

export default Dashboard;
