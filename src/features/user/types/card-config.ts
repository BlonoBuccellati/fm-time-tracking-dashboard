export type cardColor =
  | "blue"
  | "yellow"
  | "green"
  | "pink"
  | "orange"
  | "purple";

export interface CardConfig {
  slug: string;
  title: string;
  iconPath: string;
  color: cardColor;
}

export interface UserCardConfig {
  id: string;
  cardConfig: CardConfig[];
}
