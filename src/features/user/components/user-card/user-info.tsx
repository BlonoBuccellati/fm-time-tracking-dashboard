import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader } from "@/components/ui/card";

interface UserInfoProps {
  avatarPath: string;
  name: string;
}
const UserInfo = ({ avatarPath, name }: UserInfoProps) => {
  return (
    <CardHeader className="desktop:h-[70%] desktop:flex-col desktop:items-start desktop:space-y-500 flex items-center space-x-300 rounded-[15px] bg-purple-600 p-400">
      <Avatar className="outline-4 outline-white">
        <AvatarImage
          src={avatarPath}
          alt="user avatar"
          className="max-w-[clamp(4rem,3rem+2.08vw,4.875rem)]"
        />
        <AvatarFallback className="max-w-[64px]">{name}</AvatarFallback>
      </Avatar>
      <div className="space-y-100">
        <div className="typo-6 text-gray-200">Report for</div>
        <div className="typo-user-name text-white">{name}</div>
      </div>
    </CardHeader>
  );
};

export default UserInfo;
