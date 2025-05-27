"use client";

import Image from "next/image";

import { IconEllipsis } from "@/assets/images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityCard } from "@/types/activity-card";

import { useUserActivities } from "../hooks/useUserActivities";

import TimeCardBG from "./time-card-bg";

interface ActivityHeader {
  title: string;
}
const ActivityHeader = ({ title }: ActivityHeader) => {
  return (
    <div className="flex items-center justify-between">
      <CardTitle className="typo-5-medium">{title}</CardTitle>
      <IconEllipsis />
    </div>
  );
};

interface ActivityStatusProps {
  currentHours: string;
  previousHours: string;
}
const ActivityStatus = ({
  currentHours,
  previousHours,
}: ActivityStatusProps) => {
  return (
    <div className="tablet:flex-col tablet:space-y-100 tablet:items-start flex items-center justify-between space-x-200">
      <div className="typo-xl">{currentHours}</div>
      <div className="typo-6 text-navy-200">Last Week = {previousHours}</div>
    </div>
  );
};

interface TimeCardProps {
  activityCard: ActivityCard;
}
const TimeCard = ({ activityCard }: TimeCardProps) => {
  const { currentHours, previousHours, title, iconPath, color } =
    useUserActivities(activityCard);

  return (
    // overflow-hiddenで、はみ出た子をクリップする（切り取って隠す）
    <Card className="relative overflow-hidden">
      <CardHeader>
        <TimeCardBG
          className="absolute inset-x-0 z-0 min-h-[120px] rounded-t-[15px]"
          variant={color}
        />
        {/* svgファイルの幅にするため、初期値だけでなく、h-autoとw-autoを設定。 */}
        <Image
          alt=""
          src={iconPath}
          width={80}
          height={80}
          className="absolute -top-100 right-200 h-auto overflow-hidden"
        />
      </CardHeader>
      <CardContent className="bg-navy-900 tablet:mt-[48px] desktop:p-400 tablet:space-y-200 desktop:space-y-300 z-10 mt-[38px] space-y-100 rounded-[15px] p-300 text-white">
        {/* タイトル */}
        <ActivityHeader title={title} />
        {/* コンテンツ */}
        <ActivityStatus
          currentHours={currentHours}
          previousHours={previousHours}
        />
      </CardContent>
    </Card>
  );
};

export default TimeCard;
