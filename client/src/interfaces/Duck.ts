import { MonsterIconType } from "./MonsterIcon";

export interface DuckType {
  id: number;
  name: string;
  speed: number;
  points: number;
  monsterIcon: MonsterIconType;
}
