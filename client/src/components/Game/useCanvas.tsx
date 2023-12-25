import { useRef, useEffect } from 'react'
import { GameLoop, handleCanvasMouseDown } from './Engine/gameloop';
import { GameRoundData, generateDucks } from './Engine/game.logic';

const useCanvas = ({ gameLoop }: { gameLoop: GameLoop }) => {
  const gameRoundDataRef = useRef<GameRoundData>(generateDucks({ width: 800, height: 600 }));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRoundData = gameRoundDataRef.current;
  const isFocusedRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D; // bro trust me it's going to be here
    canvas.addEventListener("mousedown", (event) => handleCanvasMouseDown(event, gameRoundData, context));
    const handleWindowFocus = () => {
      isFocusedRef.current = true;
    };
    const handleWindowBlur = () => {
      isFocusedRef.current = false;
    };
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);

    // numbers for game loop
    let animationFrameId: number;
    let prevTimeStamp = 0;
    const render = (timeStamp: number) => {
      if (!prevTimeStamp) prevTimeStamp = timeStamp;
      const deltaTime = timeStamp - prevTimeStamp;
      const deltaTimeClamped = Math.min(deltaTime, 100);
      prevTimeStamp = timeStamp;
      if (isFocusedRef.current) {
        gameLoop({ ctx: context, deltaTime: deltaTimeClamped, gameRoundData });
      }
      animationFrameId = window.requestAnimationFrame(render);
    }
    render(prevTimeStamp);


    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
      canvas.removeEventListener("mousedown", (event) => handleCanvasMouseDown(event, gameRoundData, context));
    }
  }, [gameLoop, gameRoundData]);

  return canvasRef
}

export default useCanvas
