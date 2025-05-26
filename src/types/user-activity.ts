export interface Timeframe {
  current: number;
  previous: number;
}

export interface UserTimeframes {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
}

export interface Activity {
  title: string;
  timeframes: UserTimeframes;
}
export interface UserActivities {
  userId: string;
  activity: Activity[];
}
