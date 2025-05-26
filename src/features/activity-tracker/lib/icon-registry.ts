import {
  IconWork,
  IconPlay,
  IconSelfCare,
  IconStudy,
  IconExercise,
  IconSocial,
} from "@/assets/images";

export const iconRegistry = {
  work: IconWork,
  play: IconPlay,
  study: IconStudy,
} as const;

export type IconKey = keyof typeof iconRegistry;

export function getIcon(key: string) {
  return iconRegistry[key as IconKey];
}
