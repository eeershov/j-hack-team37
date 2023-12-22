import { gameLoop } from "./Engine/GameLoop";
import useCanvas from "./useCanvas";


function GameWindow(props: { width: number; height: number }): JSX.Element {
  const { width, height } = props;
  const canvasRef = useCanvas({ gameLoop });

  return (
    <>
      <canvas ref={canvasRef} width={width} height={height} />;
    </>)
}

export default GameWindow;
