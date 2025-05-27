"use client";
import { useEffect } from "react";

import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { ActivityCard } from "@/types/activity-card";

import TimeCard from "./time-card";

interface TimeCardListProps {
  activityCards: ActivityCard[];
  className?: string;
}
const TimeCardList = ({ activityCards, className }: TimeCardListProps) => {
  const { setTimeframes } = useStore();

  useEffect(() => {
    const activitiesWithoutTitle = activityCards.map(
      (activityCard) => activityCard.activity.timeframes,
    );
    setTimeframes(activitiesWithoutTitle);
  }, [activityCards, setTimeframes]);

  return (
    <div
      className={cn(
        "tablet:grid tablet:grid-cols-3 tablet:max-desktop:gap-300 desktop:gap-400 tablet:space-y-0 space-y-300",
        className,
      )}
    >
      {activityCards.map((act) => (
        <TimeCard key={act.title} activityCard={act} />
      ))}
    </div>
  );
};

export default TimeCardList;
