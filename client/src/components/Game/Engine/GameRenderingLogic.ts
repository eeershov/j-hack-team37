import { GameRoundData } from './GameLogic';

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
