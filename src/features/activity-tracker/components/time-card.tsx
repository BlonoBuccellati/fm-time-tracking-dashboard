"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

import { IconEllipsis } from "@/assets/images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ActivityCard } from "@/types/activity-card";

import { useUserActivities } from "../hooks/use-user-activities";

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
      <p className="typo-xl">{currentHours}</p>
      <p className="typo-6 text-navy-200">Last Week = {previousHours}</p>
    </div>
  );
};

interface TimeCardProps {
  activityCard: ActivityCard;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}
const TimeCard = ({ activityCard, isActive, onClick }: TimeCardProps) => {
  const { currentHours, previousHours, title, iconPath, color } =
    useUserActivities(activityCard);

  return (
    // overflow-hiddenで、はみ出た子をクリップする（切り取って隠す）
    <Card className="relative overflow-hidden" onClick={onClick}>
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
      <CardContent
        className={cn(
          "bg-navy-900 tablet:mt-[48px] desktop:p-400 tablet:space-y-200 desktop:space-y-300 hover:bg-navy-800 z-10 mt-[38px] space-y-100 rounded-[15px] p-300 text-white hover:cursor-pointer",
          isActive && "bg-navy-800",
        )}
      >
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
