import * as Icon from '../../Icons';
import { renderToStaticMarkup } from 'react-dom/server';
import { Point2D } from '../../../interfaces/Point2D';
import { randomJumpAtRadius } from './ducky.utils';
import { calcScaledVector, calcUnitVector } from './ducky.utils';

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

  // Utility methods

  getNextRandomCoordinates(): Point2D {
    return randomJumpAtRadius({
      currentX: this.realPosition.x,
      currentY: this.realPosition.y,
      areaWidth: 800,
      areaHeight: 600,
      monsterJumpRange: this.monsterJumpRange,
    });
  }

  distanceBetween(x1: number, y1: number, x2: number, y2: number): number {
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return Math.floor(distance);
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
    const vector = calcUnitVector({
      current: { x: this.realPosition.x, y: this.realPosition.y },
      target: { x: this.nextCoordinates.x, y: this.nextCoordinates.y },
    });
    const scaledVector = calcScaledVector({
      unitVector: vector,
      speedOrRange: this.speed,
      deltaTime,
    });
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
