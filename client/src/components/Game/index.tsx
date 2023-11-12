import React, { useEffect, useState } from 'react';
import Duck from './Duck';
import { DuckType } from '../../interfaces/Duck';
import { v4 as uuidv4 } from 'uuid';
import './game.css';
import Stopwatch from '../StopWatch';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { startRestart } from '../../app/gameSlice';

const possibleDuckies: DuckType[] = [
  { id: 1, name: 'Предательство', speed: 300 },
  { id: 2, name: 'Насилие', speed: 450 },
  { id: 3, name: 'Одиночество', speed: 100 },
  { id: 4, name: 'Темнота', speed: 150 },
  { id: 5, name: 'Новые места', speed: 300 },
  { id: 6, name: 'Непривычное, что подрывает ожидания', speed: 200 },
  { id: 7, name: 'Боязнь быть осмеянным за жизнь в детском доме, боязнь выделяться', speed: 300 },
  { id: 8, name: 'Взрослые люди', speed: 300 },
  { id: 9, name: 'Боязнь, что мама исчезнет', speed: 300 },
  { id: 10, name: 'Боязнь, что органы опеки отберут', speed: 300 },
  { id: 11, name: 'Врачи', speed: 300 },
]


const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [ducks, setDucks] = useState<React.ReactElement[]>([]);
  const [HEIGHT, WIDTH] = [400, 600];
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);
  const dispatch = useAppDispatch();
  

  const handleFrag = () => {
    setScore(current => current + 1);
  };
  
  useEffect(()=>{
    setDucks(
      possibleDuckies.map(duck => 
        {
          const uId = uuidv4();
          return (
            <Duck 
              key={uId} uId={uId}
              handleFrag={handleFrag} 
              duck={duck} 
              x={(Math.random() * WIDTH) % WIDTH} 
              y={(Math.random() * HEIGHT) % HEIGHT}
            />
          )
        }
      )
    )
  }, [HEIGHT, WIDTH])

  if(score===12) {
    dispatch(startRestart());
  }

  return (
    <div className="Game">
      <h1>Game</h1>
      <p>Score: {score}</p>
      <Stopwatch />
      <div className="game-container">
        {
          isGameStarted ? ducks : <button onClick={() => dispatch(startRestart())}>START GAME {isGameStarted}</button>
        }
      </div>
    </div>
  );
};

export default Game;
