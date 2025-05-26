import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { User } from "@/features/user/types/user";

import UserCardContent from "./user-card-content";

const UserCard = (props: User) => {
  const { name, avatarPath } = props; //必要なものだけ展開

  return (
    <Card className="bg-navy-900">
      <CardHeader className="flex items-center space-x-300 rounded-[15px] bg-purple-600 p-400">
        <Avatar className="outline-4 outline-white">
          <AvatarImage
            src={avatarPath}
            alt="user avatar"
            className="max-w-[64px]"
          />
          <AvatarFallback className="max-w-[64px]">{name}</AvatarFallback>
        </Avatar>
        <div className="space-y-100">
          <div className="typo-6 text-gray-200">Report for</div>
          <div className="typo-4 text-white">{name}</div>
        </div>
      </CardHeader>
      <UserCardContent />
    </Card>
  );
};

export default UserCard;
