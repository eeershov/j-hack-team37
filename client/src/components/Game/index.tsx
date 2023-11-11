import React, { useEffect, useState } from 'react';

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [ducks, setDucks] = useState<{id: number, x: number, y: number}[]>([]);
  const [HEIGHT, WIDTH] = [400, 600];
  const DUCK_SPAWN_STEP_MS = 1000;
  const DUCK_MOVE_STEP_MS = 700;
  const TRANSITION_MS = 1600;


  const handleShoot = (duckId: number) => {
    setScore((prevScore) => prevScore + 1);
    setDucks((prevDucks) => prevDucks.filter((duck) => duck.id !== duckId));
  };

  useEffect(() => {
    const duckSpawnLoop = setInterval(() => {
      setDucks((prevDucks) => [
        ...prevDucks,
        {
          id: Date.now(),
          x: WIDTH/2,
          y: 0,
        },
      ]);
    }, DUCK_SPAWN_STEP_MS);
    
    const duckMoveLoops = setInterval(() => {
      setDucks((prevDucks) =>
        prevDucks.map((duck) => ({
          ...duck,
          x: (duck.x + Math.random() * WIDTH) % WIDTH,
          y: (duck.y + Math.random() * HEIGHT) % HEIGHT,
        }))
      );
    }, DUCK_MOVE_STEP_MS);
  
  
    return () => {
      clearInterval(duckMoveLoops);
      clearInterval(duckSpawnLoop);
    };
  }, [HEIGHT, WIDTH]);

  return (
    <div className="Game">
      <h1>Game</h1>
      <p>Score: {score}</p>
      <div className="game-container">
        {ducks.map((duck) => (
          <div
            key={duck.id}
            className="duck"
            style={{ top: `${duck.y}px`, left: `${duck.x}px` , transition: `${TRANSITION_MS}ms`}}
            onMouseDown={() => handleShoot(duck.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
