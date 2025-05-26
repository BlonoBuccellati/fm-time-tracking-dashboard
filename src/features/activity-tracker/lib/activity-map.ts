import {
  IconWork,
  IconPlay,
  IconSelfCare,
  IconStudy,
  IconExercise,
  IconSocial,
} from "@/assets/images";

export const activityMap = {
  work: { label: "Work", icon: IconWork, color: "blue" },
  play: { label: "Play", icon: IconPlay, color: "yellow" },
  study: { label: "Study", icon: IconStudy, color: "red" },
  exercise: { label: "Exercise", icon: IconExercise, color: "orange" },
  social: { label: "Social", icon: IconSocial, color: "purple" },
  "self-care": { label: "Self Care", icon: IconSelfCare, color: "green" },
} as const;

export type ActivitySlug = keyof typeof activityMap;

const reverse = Object.fromEntries(
  Object.entries(activityMap).map(([slug, v]) => [v.label, slug]),
) as Record<string, ActivitySlug>;

export const titleToSlug = (title: string): ActivitySlug | undefined =>
  reverse[title];
