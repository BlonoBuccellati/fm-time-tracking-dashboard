import { Card } from "@/components/ui/card";
import { User } from "@/features/user/types/user";
import { cn } from "@/lib/utils";

import TimeTrackerButtons from "./time-tracker-buttons";
import UserContent from "./user-content";

interface UserCardProps {
  user: User;
  className?: string;
}
const UserCard = ({ user, className }: UserCardProps) => {
  const { name, avatarPath } = user; //必要なものだけ展開

  return (
    <Card className={cn("bg-navy-900", className)}>
      <UserContent avatarPath={avatarPath} name={name} />
      <TimeTrackerButtons />
    </Card>
  );
};

export default UserCard;
