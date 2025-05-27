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
  slug: string;
  timeframes: UserTimeframes;
}
