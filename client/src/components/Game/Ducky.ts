import * as Icon from '../Icons';
import { renderToStaticMarkup } from 'react-dom/server';

export class Ducky {
  monsterIcon: JSX.Element;
  private monsterIcons = [
    Icon.Monster1Icon, Icon.Monster2Icon, Icon.Monster3Icon, Icon.Monster4Icon, Icon.Monster5Icon, Icon.Monster6Icon, Icon.Monster7Icon, Icon.Monster8Icon, Icon.Monster9Icon, Icon.Monster10Icon, Icon.Monster11Icon, Icon.Monster12Icon
  ];
  private monsterJumpRange = 250;
  private nextCoordinates = {x: 0, y: 0};
  private cachedIcon: ImageBitmap | null = null;

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public speed: number, // px per second
    public monsterTypeNum: number,
  ) {
    this.monsterIcon = this.monsterIcons[this.monsterTypeNum]({ height: this.height, width: this.width });
    this.nextCoordinates = this.getNextRandomCoordinates();
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

  getNextRandomCoordinates(curX = this.x, curY = this.y) {
    // get a random point on a circumference
    // x = cx + r * cos(a)
    // y = cy + r * sin(a)
    // Where r is the radius, cx,cy the origin, and a the angle. (in radians)
    // function degToRad(degrees) {
    //   return degrees * (Math.PI / 180);
    // }
    let x = -1;
    let y = -1;
    while ((x < 0 || x > 800) || (y < 0 || y > 600)) {
      const angle = Math.round(Math.random() * 360) * (Math.PI / 180);
      x = Math.round(curX + Math.cos(angle) * this.monsterJumpRange);
      y = Math.round(curY + Math.sin(angle) * this.monsterJumpRange);
    }
    
    console.log('this.getNextRandomCoordinates', x,y)
    return {x, y}
  }

  normVector(curX = this.x, curY = this.y, targetX = this.nextCoordinates.x, targetY = this.nextCoordinates.y) {
    // length of a vector, |V| = sqrt(x*x + y*y + z*z)
    const vector = {x: (targetX - curX), y: (targetY - curY)}
    const vectorMagnitude = Math.sqrt(vector.x**2 + vector.y**2);
    // normalize a vector, V/|V| = (x/|V|, y/|V|, z/|V|).
    const unitVector = {
      x: vector.x / vectorMagnitude, 
      y: vector.y / vectorMagnitude
    }
    // console.log(`normVector(${curX}, ${curY}, ${targetX}, ${targetY}) = ${unitVector.x}, ${unitVector.y}`)
    return unitVector;
  }

  distanceBetween(x1: number, y1: number, x2: number, y2: number){
    const distance = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    console.log(`distanceBetween(${x1}, ${y1}, ${x2}, ${y2}) = ${distance}`)
    return distance
  }

  move(deltaTime: number) {
    const DISTANCE_THRESHOLD = 5;
    if (this.distanceBetween(this.x, this.y, this.nextCoordinates.x, this.nextCoordinates.y) < DISTANCE_THRESHOLD) {
      console.log(`distance is lower than ${DISTANCE_THRESHOLD}, getting new coords`);
      this.nextCoordinates = this.getNextRandomCoordinates();
    }
    console.log(`duck is here ${this.x}, ${this.y}`);
    
    this.x += Math.round(this.normVector().x * this.speed * deltaTime/1000);
    this.y += Math.round(this.normVector().y * this.speed * deltaTime/1000);
    console.log(`distance is higher than ${DISTANCE_THRESHOLD}, moving to ${this.x}, ${this.y}`);
  }
}
