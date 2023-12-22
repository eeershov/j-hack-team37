import * as Icon from '../../Icons';
import { renderToStaticMarkup } from 'react-dom/server';

type Point2D = { x: number; y: number };

export class Ducky {
  monsterIcon: JSX.Element;
  private monsterIcons = [
    Icon.Monster1Icon,
    Icon.Monster2Icon,
    Icon.Monster3Icon,
    Icon.Monster4Icon,
    Icon.Monster5Icon,
    Icon.Monster6Icon,
    Icon.Monster7Icon,
    Icon.Monster8Icon,
    Icon.Monster9Icon,
    Icon.Monster10Icon,
    Icon.Monster11Icon,
    Icon.Monster12Icon,
  ];
  private monsterJumpRange = 250;
  private nextCoordinates: Point2D;
  private cachedIcon: ImageBitmap | null = null;
  private accumulatedDistance = { x: 0, y: 0 };
  public drawPosition: Point2D;
  public realPosition: Point2D;
  public width: number;
  public monsterTypeNum: number;
  public height: number;
  public speed: number;
  constructor({
    drawPosition,
    width,
    height,
    speed,
    monsterTypeNum,
  }: {
    drawPosition: Point2D;
    width: number;
    height: number;
    speed: number;
    monsterTypeNum: number;
  }) {
    this.drawPosition = drawPosition;
    this.realPosition = { x: this.drawPosition.x, y: this.drawPosition.y };
    this.width = width;
    this.height = height;
    this.speed = speed; // px per second
    this.monsterTypeNum = monsterTypeNum;
    this.monsterIcon = this.monsterIcons[this.monsterTypeNum]({
      height: this.height,
      width: this.width,
    });
    this.nextCoordinates = this.getNextRandomCoordinates();
  }

  async getIcon() {
    if (this.cachedIcon !== null) {
      return this.cachedIcon;
    }
    const image = new Image();
    const svgString = renderToStaticMarkup(this.monsterIcon);
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      svgString
    )}`;
    image.src = dataUrl;
    await image.decode();
    const bmp = await createImageBitmap(image);
    this.cachedIcon = bmp;
    return this.cachedIcon;
  }

  getNextRandomCoordinates(
    curX = this.realPosition.x,
    curY = this.realPosition.y
  ) {
    // get a random point on a circumference
    // x = cx + r * cos(a)
    // y = cy + r * sin(a)
    // Where r is the radius, cx,cy the origin, and a the angle. (in radians)
    // function degToRad(degrees) {
    //   return degrees * (Math.PI / 180);
    // }
    let x = -1;
    let y = -1;
    while (x < 0 || x > 800 || y < 0 || y > 600) {
      // limit area to the game field
      const angle = Math.round(Math.random() * 360) * (Math.PI / 180);
      x = Math.round(curX + Math.cos(angle) * this.monsterJumpRange);
      y = Math.round(curY + Math.sin(angle) * this.monsterJumpRange);
    }
    return { x, y };
  }

  /**
  Calculates the normalized vector between two points.
  @return The unit vector representing the direction from the current point to the target point.
  */
  unitVector(
    curX = this.realPosition.x,
    curY = this.realPosition.y,
    targetX = this.nextCoordinates.x,
    targetY = this.nextCoordinates.y
  ) {
    const vectorXY = { x: targetX - curX, y: targetY - curY };
    // length of a vector, |V| = sqrt(x*x + y*y + z*z)
    const vectorMagnitude = Math.sqrt(vectorXY.x ** 2 + vectorXY.y ** 2);
    // normalize a vector, V/|V| = (x/|V|, y/|V|, z/|V|).
    return {
      x: vectorXY.x / vectorMagnitude,
      y: vectorXY.y / vectorMagnitude,
    };
  }

  distanceBetween(x1: number, y1: number, x2: number, y2: number) {
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return Math.floor(distance);
  }

  scaledVector({
    vector = this.unitVector(),
    speed = this.speed,
    deltaTime,
  }: {
    vector?: Point2D;
    speed?: number;
    deltaTime: number;
  }) {
    return {
      x: (vector.x * speed * deltaTime) / 1000,
      y: (vector.y * speed * deltaTime) / 1000,
    };
  }

  move(x: number, y: number) {
    this.drawPosition.x += x;
    this.drawPosition.y += y;
  }

  update(deltaTime: number) {
    // update duck's state

    // updating duck's position
    const DISTANCE_THRESHOLD = 5;
    if (
      this.distanceBetween(
        this.realPosition.x,
        this.realPosition.y,
        this.nextCoordinates.x,
        this.nextCoordinates.y
      ) <= DISTANCE_THRESHOLD
    ) {
      this.nextCoordinates = this.getNextRandomCoordinates();
    }
    // update it's position based on accumulatedDistance
    // move it if accumulatedDistance >=1 whole px in any direction
    const scaledVector = this.scaledVector({ deltaTime });
    this.accumulatedDistance.x += scaledVector.x;
    this.accumulatedDistance.y += scaledVector.y;
    this.realPosition.x += scaledVector.x;
    this.realPosition.y += scaledVector.y;
    const move = { ...this.accumulatedDistance };
    if (Math.abs(move.x) >= 1 || Math.abs(move.y) >= 1) {
      move.x = Math.floor(move.x);
      move.y = Math.floor(move.y);
      this.move(move.x, move.y);
      this.accumulatedDistance.x -= move.x;
      this.accumulatedDistance.y -= move.y;
    }
  }
}
