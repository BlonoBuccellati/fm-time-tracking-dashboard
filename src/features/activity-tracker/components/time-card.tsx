"use client";
import Image from "next/image";

import { IconEllipsis } from "@/assets/images";
import { useStore } from "@/store";
import { ActivityCard } from "@/types/activity-card";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import TimeCardBG from "./time-card-bg";

const TimeCard = (activityCard: ActivityCard) => {
  // TimeCardContainerを用意するかも。
  // TODO:0と1なら、単数で、hr,2以上なら、hoursの略でhrs
  const selected = useStore((store) => store.selected);
  const { activity, title, iconPath, color } = activityCard;
  const { current, previous } = activity.timeframes[selected];
  return (
    // overflow-hiddenで、はみ出た子をクリップする（切り取って隠す）
    <Card className="relative overflow-hidden">
      <div>
        <TimeCardBG
          className="absolute inset-x-0 z-0 rounded-t-[15px]"
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
      </div>
      <div className="bg-navy-900 z-10 mt-500 space-y-300 rounded-[15px] p-300 text-white">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="typo-5-medium">{title}</CardTitle>
          <IconEllipsis />
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="typo-3">{current}hrs</div>
          <div className="typo-6 text-navy-200">Last Week = {previous}hrs</div>
        </CardContent>
      </div>
    </Card>
  );
};

export default TimeCard;
