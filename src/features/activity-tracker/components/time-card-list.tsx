"use client";
import { useEffect } from "react";

import { useStore } from "@/store";
import { ActivityCard } from "@/types/card";

import TimeCard from "./time-card";

interface ActivityCardListProps {
  activityCards: ActivityCard[];
}
const ActivityCardList = ({ activityCards }: ActivityCardListProps) => {
  const { setTimeframes } = useStore();

  useEffect(() => {
    const activitiesWithoutTitle = activityCards.map(
      (activityCard) => activityCard.activity.timeframes,
    );
    setTimeframes(activitiesWithoutTitle);
  }, [activityCards, setTimeframes]);

  return (
    <>
      {activityCards.map((act) => (
        <TimeCard key={act.title} {...act} />
      ))}
    </>
  );
};

export default ActivityCardList;
