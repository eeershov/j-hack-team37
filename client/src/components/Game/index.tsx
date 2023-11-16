import React, { useEffect, useState } from 'react';
import Duck from './Duck';
import { v4 as uuidv4 } from 'uuid';
import './game.css';
import Stopwatch from '../StopWatch';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { playGame, selectPage } from '../../app/gameSlice';
import { possibleDucks as possibleDuckies } from './possibleDucks';


const Game: React.FC = () => {
  const score = useAppSelector((state) => state.game.gameScore);
  const [ducks, setDucks] = useState<React.ReactElement[]>([]);
  const [HEIGHT, WIDTH] = [400, 600];
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);
  const dispatch = useAppDispatch();


  useEffect(() => {
    setDucks(
      possibleDuckies.map(duck => {
        const uId = uuidv4();
        return (
          <Duck
            key={uId} uId={uId}
            duck={duck}
            x={(Math.random() * WIDTH) % WIDTH}
            y={(Math.random() * HEIGHT) % HEIGHT}
          />
        )
      }
      )
    )
  }, [HEIGHT, WIDTH])

  // :^)
  if (score >= 240) {
    dispatch(playGame(false));
    dispatch(selectPage('Results'));
  }

  return (
    <div className="Game">
      <h1 className='title-game'>УДАЧИ!</h1>
      <p className='score'>Счёт: {score}</p>
      <Stopwatch />
      <div className="game-container">
        {
          isGameStarted ? ducks : <button className='start-game-button' onClick={() => dispatch(playGame(true))}>НАЧАТЬ ИГРУ {isGameStarted}</button>
        }
      </div>
    </div>
  );
};

export default Game;
