import { useRef, useEffect } from 'react'
import { GameLoop, GameRoundData, generateDucks, handleCanvasMouseDown } from './GameLogic';


const useCanvas = ({ gameLoop }: { gameLoop: GameLoop }) => {
  const gameRoundDataRef = useRef<GameRoundData>(generateDucks({ width: 800, height: 600 }));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRoundData = gameRoundDataRef.current;
  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D; // bro trust me it's going to be here
    canvas.addEventListener("mousedown", (event) => handleCanvasMouseDown(event, gameRoundData, context));

    // numbers for game loop
    let animationFrameId: number;
    let prevTimeStamp = 0;
    const render = (timeStamp: number) => {
      if (!prevTimeStamp) prevTimeStamp = timeStamp;
      const deltaTime = timeStamp - prevTimeStamp;
      const deltaTimeClamped = Math.min(deltaTime, 100);
      prevTimeStamp = timeStamp;
      gameLoop({ ctx: context, time: timeStamp, deltaTime: deltaTimeClamped, gameRoundData });
      animationFrameId = window.requestAnimationFrame(render);
    }
    render(prevTimeStamp);


    return () => {
      window.cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousedown", (event) => handleCanvasMouseDown(event, gameRoundData, context));
    }
  }, [gameLoop, gameRoundData]);

  return canvasRef
}

export default useCanvas
