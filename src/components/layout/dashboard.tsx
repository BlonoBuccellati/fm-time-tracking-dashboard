import TimeCardList from "@/features/activity-tracker/components/time-card-list";
import { getActivityCardsInfo } from "@/features/activity-tracker/services/get-activities";
import UserCard from "@/features/user/components/user-card";
import { getUser } from "@/features/user/services/get-user";

//TODO:UserCard と TimeCardList をどう並べるか（列数、ギャップ、幅制御など）のスタイルをここに書く。
const Dashboard = async () => {
  // Server First, Client When Neededの考えに基づき、サーバでフェッチしておく。
  // 上位コンポーネント（dashboard.tsx)でfetch()して、コンポーネント（プレゼンテーション層）にpropsで渡す。
  const userId = "1";
  const user = await getUser(userId);

  const activityCards = await getActivityCardsInfo(userId);
  return (
    <main>
      <div className="desktop:max-w-[1116px] tablet:max-w-[1020px] desktop:flex tablet:max-desktop:space-y-300 desktop:space-y-0 desktop:space-x-400 mx-auto w-[90%] max-w-[327px] space-y-300 py-[clamp(5.063rem,1.299rem+16.06vw,15.75rem)]">
        <UserCard user={user} className="desktop:w-85/372" />
        <TimeCardList
          activityCards={activityCards}
          className="desktop:w-287/372"
        />
      </div>
    </main>
  );
};

export default Dashboard;
