// import { useRef, useEffect } from "react";
// import { createNoise2D } from 'simplex-noise';
import * as Icon from '../Icons';
import { renderToStaticMarkup } from 'react-dom/server';
import useCanvas from "./useCanvas";

export class Ducky {
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


function GameWindow(props: { width: number; height: number }): JSX.Element {
  const { width, height } = props;
  const ducks: Ducky[] = [];
  const DUCKS_NUM = 23;
  const gameRoundData = {
    ducks,
    DUCKS_NUM
  }
  const canvasRef = useCanvas({ gameLoop, gameRoundData });

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
        // console.log('out of bounds');
        duck.speed = duck.speed * -1;
      }
    });
  };

  async function gameLoop(ctx: CanvasRenderingContext2D, time: number, deltaTime: number) {
    ctx.fillStyle = "grey";
    console.log(time / 1000, deltaTime / 1000);
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    await drawDucks(ctx);
  }

  return (
    <>
      <canvas ref={canvasRef} width={width} height={height} />;
    </>)
}

export default GameWindow;
