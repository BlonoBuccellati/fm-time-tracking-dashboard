import { create } from "zustand";

import { ActivityCard } from "@/types/activity-card";

import { UserTimeframes } from "../features/activity-tracker/types/activity";

export type TimeframeKey = keyof UserTimeframes;

interface ActivityCardState {
  activityCardList: ActivityCard[];
  selected: TimeframeKey;
  setActivityCardList: (data: ActivityCard[]) => void;
  setSelected: (tf: TimeframeKey) => void;
}

export const useStore = create<ActivityCardState>((set) => ({
  activityCardList: [],
  selected: "weekly",
  // API フェッチ後に一括でセット
  setActivityCardList: (data) => set({ activityCardList: data }),
  // 選択中のtimeframeの取得
  setSelected: (tf) => set({ selected: tf }),
}));
