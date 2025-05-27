import { create } from "zustand";

import { UserTimeframes } from "../features/activity-tracker/types/activity";

export type TimeframeKey = keyof UserTimeframes;

interface UserTimeframesState {
  timeframesList: UserTimeframes[];
  selected: TimeframeKey;
  setTimeframes: (data: UserTimeframes[]) => void;
  setSelected: (tf: TimeframeKey) => void;
}

export const useStore = create<UserTimeframesState>((set) => ({
  timeframesList: [],
  selected: "weekly",
  // API フェッチ後に一括でセット
  setTimeframes: (data) => set({ timeframesList: data }),
  setSelected: (tf) => set({ selected: tf }),
}));
