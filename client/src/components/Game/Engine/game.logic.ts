import { Ducky } from './ducky';
import { Stopwatch } from './stopwatch';

export interface GameRoundData {
  ducks: Ducky[];
  ducksNum: number;
  isStarted: boolean;
  time: Stopwatch;
}

export function generateDucks({
  width,
  height,
}: {
  width: number;
  height: number;
}): GameRoundData {
  const ducks: Ducky[] = [];
  const DUCKS_NUM = 12;
  const gameRoundData: GameRoundData = {
    ducks,
    ducksNum: DUCKS_NUM,
    isStarted: false,
    time: new Stopwatch(),
  };

  // generate starting ducks data
  for (let i = 0; i < DUCKS_NUM; i++) {
    const widhtAndHeight = 55 + 10 * Math.floor(Math.random());
    const ducky: Ducky = new Ducky({
      drawPosition: {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      },
      width: widhtAndHeight,
      height: widhtAndHeight,
      speed: Math.floor(100 + Math.random() * 250),
      monsterTypeNum: Math.floor(Math.random() * 12),
    });
    ducks.push(ducky);
  }
  return gameRoundData;
}
