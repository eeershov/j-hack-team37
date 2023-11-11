import React, { useEffect, useRef, useState } from "react";
import { DuckType } from "../../interfaces/Duck";


export interface DuckProps {
  handleFrag: ()=>void;
  uId: string;
  duck: DuckType;
  x: number;
  y: number;
}

const [HEIGHT, WIDTH] = [400, 600];

const Duck: React.FC<DuckProps> = ({ handleFrag, uId, duck, x, y }) => {
  const [position, setPosition] = useState({ x, y });
  const [hp, setHp] = useState(1);
  const duckMoveLoop = useRef(0);
  const duckSpeed = (600 - duck.speed) * 6;

  useEffect(() => {
    duckMoveLoop.current = setInterval(() => {
      setPosition((prev) => {
        return {
          x: (prev.x + Math.random() * WIDTH) % WIDTH,
          y: (prev.y + Math.random() * HEIGHT) % HEIGHT,
        }
      });
    }, duckSpeed);
    if(!hp) {
      handleFrag();
    }
    return () => clearInterval(duckMoveLoop.current)
  }, [duckSpeed, hp, handleFrag]
  );

  const handleHit = (): void => {
    setHp(hp => --hp);
  }

  const duckStyle: React.CSSProperties = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: `${duckSpeed}ms`,
    fontSize: '10px',
  };

  if (hp) {
  return (
    <div onMouseDown={handleHit} className="duck" style={duckStyle}>
      <p>Name: {uId} {duck.name}</p>
      <p>Speed: {duck.speed}</p>
    </div>
  );
  } else {
    clearInterval(duckMoveLoop.current);
  }
};

export default Duck;
