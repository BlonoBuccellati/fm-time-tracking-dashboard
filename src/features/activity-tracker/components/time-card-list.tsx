"use client";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { ActivityCard } from "@/types/activity-card";

import TimeCard from "./time-card";

interface TimeCardListProps {
  activityCards: ActivityCard[];
  className?: string;
}
const TimeCardList = ({ activityCards, className }: TimeCardListProps) => {
  const { setActivityCardList } = useStore();
  useEffect(() => {
    setActivityCardList(activityCards);
  }, [activityCards, setActivityCardList]);

  // const onSelect = () => setActiveId();
  const [activeId, setActiveId] = useState("");

  return (
    <div
      className={cn(
        "tablet:grid tablet:grid-cols-3 tablet:max-desktop:gap-300 desktop:gap-400 tablet:space-y-0 space-y-300",
        className,
      )}
    >
      {activityCards.map((card) => (
        <TimeCard
          key={card.title}
          activityCard={card}
          isActive={card.slug === activeId}
          onClick={() => setActiveId(card.slug)}
        />
      ))}
    </div>
  );
};

export default TimeCardList;
