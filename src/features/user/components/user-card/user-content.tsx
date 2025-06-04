import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader } from "@/components/ui/card";

import { getInitials } from "../../lib/initialism";

interface UserContentProps {
  avatarPath: string;
  name: string;
}
const UserContent = ({ avatarPath, name }: UserContentProps) => {
  const initial = getInitials(name);
  return (
    <CardHeader className="desktop:flex-col desktop:items-start desktop:space-y-500 desktop:h-[70%] flex items-center space-x-300 rounded-[15px] bg-purple-600 p-400">
      <Avatar className="outline-4 outline-white">
        <AvatarImage
          src={avatarPath}
          alt="user avatar"
          className="max-w-[clamp(4rem,3rem+2.08vw,4.875rem)]"
        />
        <AvatarFallback className="max-w-[clamp(4rem,3rem+2.08vw,4.875rem)]">
          {initial}
        </AvatarFallback>
      </Avatar>
      {/* Report for User */}
      <p className="space-y-100">
        <span className="typo-6 block text-gray-200">Report for</span>
        <span className="typo-user-name block text-white">{name}</span>
      </p>
    </CardHeader>
  );
};

export default UserContent;
