import ButtonCanvas from './element.button';
import { GameRoundData } from './game.logic';
import { updateDucksPositions, drawDucks } from './game.renderinglogic';
import { store } from '../../../app/store';
import { setGameTime, playGame, selectPage } from '../../../app/gameSlice';

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
  deltaTime,
  gameRoundData,
}: {
  ctx: CanvasRenderingContext2D;
  deltaTime: number;
  gameRoundData: GameRoundData;
}) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  // draw start screen
  if (!gameRoundData.isStarted) {
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    StartButton.drawButton(ctx);
    return;
  }

  // continue counting time with stopwatch and sync with store
  gameRoundData.time.update(deltaTime);
  store.dispatch(setGameTime(gameRoundData.time.getTime()));

  // paint game area background
  ctx.restore();
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, width, height);

  updateDucksPositions({ gameRoundData, deltaTime });
  await drawDucks({ gameRoundData, ctx });

  // finish the game if no alive ducks left
  if (gameRoundData.ducks.length === 0) {
    store.dispatch(playGame(false));
    store.dispatch(selectPage('Results'));
  }
}
export type GameLoop = typeof gameLoop;
