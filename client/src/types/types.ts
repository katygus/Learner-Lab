
export interface StrategyType {
  _id?: string;
  title: string;
  description: string;
  strengthsLeveraged: string[];
  supportsChallenges: string[];
  ageGroup: string;
  tags: string[];
}

export type SelectOption = { value: string; label: string };