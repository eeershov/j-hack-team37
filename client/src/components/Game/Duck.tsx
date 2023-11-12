import React, { useEffect, useRef, useState } from "react";
import { DuckType } from "../../interfaces/Duck";
import { incrementScore } from "../../app/gameSlice";
import { useAppDispatch } from "../../app/hooks";

export interface DuckProps {
  uId: string;
  duck: DuckType;
  x: number;
  y: number;
}

const [HEIGHT, WIDTH] = [400, 600];

const Duck: React.FC<DuckProps> = ({ uId, duck, x, y }) => {
  const [position, setPosition] = useState({ x, y });
  const [hp, setHp] = useState(1);
  const duckMoveLoop = useRef(0);
  const duckSpeed = (600 - duck.speed) * 6;
  const MonsterIcon = duck.monsterIcon;
  const dispatch = useAppDispatch();

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
      dispatch(incrementScore(1));
    }
    return () => clearInterval(duckMoveLoop.current)
  }, [duckSpeed, hp, dispatch]
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
      <MonsterIcon /> 
    </div>
  );
  } else {
    clearInterval(duckMoveLoop.current);
  }
};

export default Duck;
