import { useRef, useEffect } from "react";
// import { createNoise2D } from 'simplex-noise';
import * as Icon from '../Icons';
import { renderToStaticMarkup } from 'react-dom/server';


interface DuckProps {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  monsterTypeNum: number;

}

class Ducky {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  monsterTypeNum: number;
  monsterIcon: JSX.Element;

  private monsterIcons = [
    Icon.Monster1Icon, Icon.Monster2Icon, Icon.Monster3Icon, Icon.Monster4Icon, Icon.Monster5Icon, Icon.Monster6Icon, Icon.Monster7Icon, Icon.Monster8Icon, Icon.Monster9Icon, Icon.Monster10Icon, Icon.Monster11Icon, Icon.Monster12Icon
  ];

  constructor({ x, y, width, height, speed, monsterTypeNum }: DuckProps) {
    this.x = x;
    this.y = y;
    this.monsterTypeNum = monsterTypeNum;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.monsterIcon = this.monsterIcons[this.monsterTypeNum]({ height: this.height, width: this.width });
  }
}


function Canvas(props: { width: number; height: number }): JSX.Element {
  const { width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const ducks: Ducky[] = [];
    // const COLORS = ["red", "green", "blue", "yellow", "purple"];
    const DUCKS_NUM = 20;

    for (let i = 0; i < DUCKS_NUM; i++) {
      const widhtAndHeight = 55 + 10 * Math.floor(Math.random());
      const ducky: Ducky = new Ducky({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        monsterTypeNum: Math.floor(Math.random() * 12),
        width: widhtAndHeight,
        height: widhtAndHeight,
        speed: 1 + Math.random(),
      })
      ducks.push(ducky);
    }

    const drawDucks = (ctx: CanvasRenderingContext2D) => {
      ducks.forEach((duck) => {
        const image = new Image();
        const svgString = renderToStaticMarkup(duck.monsterIcon);
        const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
        image.src = dataUrl;
        ctx.drawImage(image, duck.x, duck.y, duck.width, duck.height);
      });
    };
    6
    const gameLoop = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawDucks(ctx);

      ducks.map((duck) => {
        // Move the duck
        duck.x += duck.speed;
        duck.y += duck.speed;
        // If the duck goes off the screen, bounce it back to the other position
        if (duck.x > ctx.canvas.width || duck.y > ctx.canvas.height || duck.x < 0 || duck.y < 0) {
          console.log('out of bounds')
          duck.speed = duck.speed * -1;
        }
      })
    };

    const handleCanvasMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      const mouseX = event.clientX - canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;

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

    let animationFrameId: number;
    const render = () => {
      gameLoop(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousedown", handleCanvasMouseDown);
    };
  });

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default Canvas;
