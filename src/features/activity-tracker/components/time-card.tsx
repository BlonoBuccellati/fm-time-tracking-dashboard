"use client";
import { IconEllipsis, IconPlay } from "@/assets/images";
import { useStore } from "@/store";
import { Activity } from "@/types/user-activity";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const TimeCard = (activity: Activity) => {
  // TODO:0と1なら、単数で、hr,2以上なら、hoursの略でhrs
  const selected = useStore((store) => store.selected);
  const { current, previous } = activity.timeframes[selected];
  const { title } = activity;
  return (
    <Card className="relative">
      <div className="absolute inset-x-0 z-0 flex flex-row-reverse rounded-t-[15px] bg-blue-300">
        <IconPlay />
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
