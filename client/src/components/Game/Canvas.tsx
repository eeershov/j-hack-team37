import { useRef, useEffect } from "react";
// import { createNoise2D } from 'simplex-noise';
import * as Icon from '../Icons';
import { renderToStaticMarkup } from 'react-dom/server';


class Ducky {
  monsterIcon: JSX.Element;
  private monsterIcons = [
    Icon.Monster1Icon, Icon.Monster2Icon, Icon.Monster3Icon, Icon.Monster4Icon, Icon.Monster5Icon, Icon.Monster6Icon, Icon.Monster7Icon, Icon.Monster8Icon, Icon.Monster9Icon, Icon.Monster10Icon, Icon.Monster11Icon, Icon.Monster12Icon
  ];
  private cachedIcon: ImageBitmap | null = null;

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public speed: number,
    public monsterTypeNum: number,
  ) {
    this.monsterIcon = this.monsterIcons[this.monsterTypeNum]({ height: this.height, width: this.width });
  }

  async getIcon() {
    if (this.cachedIcon !== null) {
      return this.cachedIcon;
    }
    const image = new Image();
    const svgString = renderToStaticMarkup(this.monsterIcon);
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
    image.src = dataUrl;
    await image.decode();
    const bmp = await createImageBitmap(image);
    this.cachedIcon = bmp;
    return this.cachedIcon;
  }
}


function Canvas(props: { width: number; height: number }): JSX.Element {
  const { width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d", { alpha: false })!;
    const ducks: Ducky[] = [];
    const DUCKS_NUM = 23;

    // generate ducks data
    for (let i = 0; i < DUCKS_NUM; i++) {
      const widhtAndHeight = 55 + 10 * Math.floor(Math.random());
      const ducky: Ducky = new Ducky(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height),
        widhtAndHeight,
        widhtAndHeight,
        Math.floor(1 + Math.random() * 3),
        Math.floor(Math.random() * 12),
      )
      ducks.push(ducky);
    }

    const drawDucks = async (ctx: CanvasRenderingContext2D) => {
      ducks.map(async (duck) => {
        // draw current frame
        const image = await duck.getIcon();
        ctx.drawImage(image, Math.floor(duck.x), Math.floor(duck.y), duck.width, duck.height);

        // Move the duck for next frame
        duck.x += Math.floor(duck.speed);
        duck.y += Math.floor(duck.speed);
        // If the duck goes off the screen, bounce it back to the other position
        if (duck.x > ctx.canvas.width || duck.y > ctx.canvas.height || duck.x < 0 || duck.y < 0) {
          console.log('out of bounds');
          duck.speed = duck.speed * -1;
        }
      });
    };

    const gameLoop = async (ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = "grey";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      await drawDucks(ctx);
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
    const render = async () => {
      await gameLoop(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousedown", handleCanvasMouseDown);
    };
  });

  return (
    <>
      <canvas ref={canvasRef} width={width} height={height} />;
    </>)
}

export default Canvas;
