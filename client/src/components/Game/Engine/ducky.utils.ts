import { Point2D } from '../../../interfaces/Point2D';

export type RandomJumpAtRadiusProps = {
  currentX: number;
  currentY: number;
  areaWidth: number;
  areaHeight: number;
  monsterJumpRange: number;
};

export const randomJumpAtRadius = (props: RandomJumpAtRadiusProps): Point2D => {
  // get a random point on a circumference
  // x = cx + r * cos(a)
  // y = cy + r * sin(a)
  // Where r is the radius, cx,cy the origin, and a the angle. (in radians)
  // function degToRad(degrees) {
  //   return degrees * (Math.PI / 180);
  // }
  let x = -1;
  let y = -1;
  while (x < 0 || x > props.areaWidth || y < 0 || y > props.areaHeight) {
    // limit area to the game field
    const angle = Math.round(Math.random() * 360) * (Math.PI / 180);
    x = Math.round(props.currentX + Math.cos(angle) * props.monsterJumpRange);
    y = Math.round(props.currentY + Math.sin(angle) * props.monsterJumpRange);
  }
  return { x, y };
};

export type VectorProps = {
  current: Point2D;
  target: Point2D;
};

/**
Calculates the normalized vector between two points.
@return The unit vector representing the direction from the current point to the target point.
*/
export const calcUnitVector = (props: VectorProps): Point2D => {
  const vector = {
    x: props.target.x - props.current.x,
    y: props.target.y - props.current.y,
  };
  // length of a vector, |V| = sqrt(x*x + y*y + z*z)
  const vectorMagnitude = Math.sqrt(vector.x ** 2 + vector.y ** 2);
  // normalize a vector, V/|V| = (x/|V|, y/|V|, z/|V|).
  return {
    x: vector.x / vectorMagnitude,
    y: vector.y / vectorMagnitude,
  };
};

export type ScaledVectorProps = {
  unitVector: Point2D;
  speedOrRange: number;
  deltaTime?: number;
};

export const calcScaledVector = (props: ScaledVectorProps): Point2D => {
  let deltaTime: number;
  if (!props.deltaTime) {
    deltaTime = 1;
  } else {
    deltaTime = props.deltaTime / 1000;
  }
  return {
    x: props.unitVector.x * props.speedOrRange * deltaTime,
    y: props.unitVector.y * props.speedOrRange * deltaTime,
  };
};
