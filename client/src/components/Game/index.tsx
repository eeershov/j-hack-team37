import React from 'react';
import './game.css';
import Stopwatch from '../StopWatch';
import { useAppSelector } from '../../app/hooks';
import GameWindow from './GameWindow';


const Game: React.FC = () => {
  const score = useAppSelector((state) => state.game.gameScore);
  const [HEIGHT, WIDTH] = [600, 800];


  return (
    <div className="game-component">
      <h1 className='title-game'>УДАЧИ!</h1>
      <p className='score'>Счёт: {score}</p>
      <Stopwatch />
      <div className="game-container">
        <GameWindow width={WIDTH} height={HEIGHT} />
      </div>
    </div>
  );
};

export default Game;
