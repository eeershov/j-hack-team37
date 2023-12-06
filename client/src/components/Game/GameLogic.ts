import { Ducky } from "./Ducky";

export interface GameRoundData {
  ducks: Ducky[];
  ducksNum: number;
}

export function generateDucks({ width, height }: { width: number; height: number }): GameRoundData {
  const ducks: Ducky[] = [];
  const DUCKS_NUM = 1;
  const gameRoundData: GameRoundData = {
    ducks,
    ducksNum: DUCKS_NUM
  };

  // generate starting ducks data
  for (let i = 0; i < DUCKS_NUM; i++) {
    const widhtAndHeight = 55 + 10 * Math.floor(Math.random());
    const ducky: Ducky = new Ducky(
      Math.floor(Math.random() * width),
      Math.floor(Math.random() * height),
      widhtAndHeight,
      widhtAndHeight,
      Math.floor(100 + Math.random() * 200),
      Math.floor(Math.random() * 12)
    );
    ducks.push(ducky);
  }
  return gameRoundData;
}

export function updateDucksPositions({gameRoundData, ctx, deltaTime}:{gameRoundData: GameRoundData, ctx: CanvasRenderingContext2D, deltaTime: number}) {
    gameRoundData.ducks.forEach((duck) => {
      duck.move(deltaTime);
  });
}

export async function drawDucks({gameRoundData, ctx}: {gameRoundData: GameRoundData, ctx: CanvasRenderingContext2D}) {
  const drawPromises = gameRoundData.ducks.map(async (duck) => {
    const image = await duck.getIcon();
    ctx.drawImage(image, Math.floor(duck.x), Math.floor(duck.y), duck.width, duck.height);
  });
  
  await Promise.all(drawPromises);
}

export const handleCanvasMouseDown = (event: MouseEvent, gameRoundData: GameRoundData, ctx: CanvasRenderingContext2D) => {
  event.preventDefault();
  const canvas = ctx.canvas;
  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  const ducks = gameRoundData.ducks;

  // Loop through the ducks and check if the click is within a duck's bounding box
  ducks.forEach((duck, duckIndex) => {
    if (
      mouseX >= duck.x &&
      mouseX <= duck.x + duck.width &&
      mouseY >= duck.y &&
      mouseY <= duck.y + duck.height
    ) {
      // The click is on the current duck
      console.log("Clicked on duck:", duck);
      ducks.splice(duckIndex, 1);
    }
  });
};


export async function gameLoop({ ctx, time, deltaTime, gameRoundData }: { ctx: CanvasRenderingContext2D, time: number, deltaTime: number, gameRoundData: GameRoundData }) {
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  updateDucksPositions({ gameRoundData, ctx, deltaTime });
  await drawDucks({ gameRoundData, ctx });
}
export type GameLoop = typeof gameLoop;

