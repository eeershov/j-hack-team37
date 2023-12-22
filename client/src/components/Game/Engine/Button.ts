class ButtonCanvas {
  title: string;
  dimensions: {
    xLeft: number;
    xRight: number;
    width: number;
    height: number;
    yBottom: number;
    yTop: number;
  };
  constructor({
    x,
    y,
    center,
    width,
    height,
    title,
  }: {
    x: number;
    y: number;
    center?: string;
    width: number;
    height: number;
    title: string;
  }) {
    this.title = title;
    if (center === 'center') {
      const centerX = 800 / 2 - width / 2;
      const centerY = 600 / 2 - height / 2;
      this.dimensions = {
        xLeft: centerX,
        xRight: centerX + width,
        yBottom: centerY,
        yTop: centerY + height,
        width: width,
        height: height,
      };
    } else {
      this.dimensions = {
        xLeft: x,
        xRight: x + width,
        yBottom: y,
        yTop: y + height,
        width: width,
        height: height,
      };
    }
  }

  drawButton(ctx: CanvasRenderingContext2D) {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const buttonWidth = this.dimensions.width;
    const buttonHeight = this.dimensions.height;

    ctx.fillStyle = 'blue';
    ctx.fillRect(
      this.dimensions.xLeft,
      this.dimensions.yBottom,
      buttonWidth,
      buttonHeight
    );
    ctx.fillStyle = 'white';
    ctx.font = `${80}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.title, canvasWidth / 2, canvasHeight / 2);
  }

  isInButton(x: number, y: number) {
    console.log('clicking', x, y);
    console.log(this.dimensions);
    return (
      x >= this.dimensions.xLeft &&
      x <= this.dimensions.xRight &&
      y >= this.dimensions.yBottom &&
      y <= this.dimensions.yTop
    );
  }
}

export default ButtonCanvas;
