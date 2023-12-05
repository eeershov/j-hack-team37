import { useRef, useEffect } from 'react'
import { Ducky } from './GameWindow';

const useCanvas = ({ gameLoop, gameRoundData }: { gameLoop: (ctx: CanvasRenderingContext2D, time: number, deltaTime: number) => void, gameRoundData: { ducks: Ducky[], DUCKS_NUM: number } }) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    console.log(gameRoundData);
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D; // bro trust me it's going to be here
    let animationFrameId: number;
    let prevTimeStamp: number;

    const handleCanvasMouseDown = (event: MouseEvent) => {
      event.preventDefault();
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
    canvas.addEventListener("mousedown", handleCanvasMouseDown);


    const render = (timeStamp: number) => {
      if (!prevTimeStamp) prevTimeStamp = timeStamp;
      const deltaTime = timeStamp - prevTimeStamp;
      prevTimeStamp = timeStamp;
      gameLoop(context, timeStamp, deltaTime);
      animationFrameId = window.requestAnimationFrame(render);
    }
    window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousedown", handleCanvasMouseDown);
    }
  }, [gameLoop, gameRoundData]);

  return canvasRef
}

export default useCanvas
