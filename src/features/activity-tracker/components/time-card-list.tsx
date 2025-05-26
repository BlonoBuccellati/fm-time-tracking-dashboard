"use client";
import { useEffect } from "react";

import { useStore } from "@/store";
import { Activity } from "@/types/user-activity";

import TimeCard from "./time-card";

interface ActivityCardListProps {
  activities: Activity[];
}
const ActivityCardList = ({ activities }: ActivityCardListProps) => {
  const { setTimeframes } = useStore();

  useEffect(() => {
    const activitiesWithoutTitle = activities.map(
      (activity) => activity.timeframes,
    );
    setTimeframes(activitiesWithoutTitle);
  }, [activities, setTimeframes]);

  return (
    <>
      {activities.map((act) => (
        <TimeCard key={act.title} {...act} />
      ))}
    </>
  );
};

export default ActivityCardList;
