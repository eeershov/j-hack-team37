import { Ducky } from './Ducky';
import ButtonCanvas from './Button';

export interface GameRoundData {
  ducks: Ducky[];
  ducksNum: number;
  isStarted: boolean;
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

export function updateDucksPositions({
  gameRoundData,
  deltaTime,
}: {
  gameRoundData: GameRoundData;
  deltaTime: number;
}) {
  gameRoundData.ducks.forEach((duck) => {
    duck.update(deltaTime);
  });
}

export async function drawDucks({
  gameRoundData,
  ctx,
}: {
  gameRoundData: GameRoundData;
  ctx: CanvasRenderingContext2D;
}) {
  const drawPromises = gameRoundData.ducks.map(async (duck) => {
    const image = await duck.getIcon();
    ctx.drawImage(
      image,
      Math.floor(duck.drawPosition.x),
      Math.floor(duck.drawPosition.y),
      duck.width,
      duck.height
    );
  });

  await Promise.all(drawPromises);
}

export const handleCanvasMouseDown = (
  event: MouseEvent,
  gameRoundData: GameRoundData,
  ctx: CanvasRenderingContext2D
) => {
  event.preventDefault();
  const canvas = ctx.canvas;
  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;

  if (gameRoundData.isStarted) {
    const ducks = gameRoundData.ducks;

    for (let i = 0; i < ducks.length; i++) {
      const duck = ducks[i];
      if (
        mouseX >= duck.drawPosition.x &&
        mouseX <= duck.drawPosition.x + duck.width &&
        mouseY >= duck.drawPosition.y &&
        mouseY <= duck.drawPosition.y + duck.height
      ) {
        // The click is on the current duck
        ducks.splice(i, 1);
        break;
      }
    }
  } else {
    const isInStartButton = StartButton.isInButton(mouseX, mouseY);
    if (isInStartButton) {
      gameRoundData.isStarted = true;
    }
  }
};

export const StartButton = new ButtonCanvas({
  x: 0,
  y: 0,
  center: 'center',
  width: 300,
  height: 140,
  title: 'Старт',
});
export async function gameLoop({
  ctx,
  time,
  deltaTime,
  gameRoundData,
}: {
  ctx: CanvasRenderingContext2D;
  time: number;
  deltaTime: number;
  gameRoundData: GameRoundData;
}) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  if (!gameRoundData.isStarted) {
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    StartButton.drawButton(ctx);
    return;
  }

  ctx.restore();
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, width, height);

  updateDucksPositions({ gameRoundData, deltaTime });
  await drawDucks({ gameRoundData, ctx });
}
export type GameLoop = typeof gameLoop;
