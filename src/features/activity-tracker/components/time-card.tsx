"use client";
import Image from "next/image";

import { IconEllipsis } from "@/assets/images";
import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { ActivityCard } from "@/types/activity-card";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import TimeCardBG from "./time-card-bg";

interface TimeCardProps {
  activityCard: ActivityCard;
  className?: string;
}
const TimeCard = ({ activityCard, className }: TimeCardProps) => {
  // TimeCardContainerを用意するかも。
  // TODO:0と1なら、単数で、hr,2以上なら、hoursの略でhrs
  const selected = useStore((store) => store.selected);
  const { activity, title, iconPath, color } = activityCard;
  const { current, previous } = activity.timeframes[selected];
  return (
    // overflow-hiddenで、はみ出た子をクリップする（切り取って隠す）
    <Card className={cn("relative overflow-hidden", className)}>
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
        <div className="flex items-center justify-between">
          <CardTitle className="typo-5-medium">{title}</CardTitle>
          <IconEllipsis />
        </div>
        {/* コンテンツ */}
        <div className="tablet:flex-col tablet:space-y-100 tablet:items-start flex items-center justify-between space-x-200">
          <div className="typo-xl">{current}hrs</div>
          <div className="typo-6 text-navy-200">Last Week = {previous}hrs</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeCard;
