import React, { useEffect, useState } from 'react';
import Duck from './Duck';
import { DuckType } from '../../interfaces/Duck';
import { v4 as uuidv4 } from 'uuid';
import './game.css';
import Stopwatch from '../StopWatch';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { playGame, selectPage } from '../../app/gameSlice';
import { Monster1Icon, Monster2Icon, Monster3Icon, Monster4Icon, Monster5Icon, Monster6Icon,
Monster7Icon, Monster8Icon, Monster9Icon, Monster10Icon, Monster11Icon, Monster12Icon } from '../Icons';

const possibleDuckies: DuckType[] = [
  { id: 1, name: 'Предательство', speed: 300, points: 10, monsterIcon: Monster1Icon },
  { id: 2, name: 'Насилие', speed: 450, points: 50, monsterIcon: Monster2Icon },
  { id: 3, name: 'Одиночество', speed: 100, points: 5, monsterIcon: Monster3Icon },
  { id: 4, name: 'Темнота', speed: 150, points: 5, monsterIcon: Monster4Icon },
  { id: 5, name: 'Новые места', speed: 300, points: 10, monsterIcon: Monster5Icon },
  { id: 6, name: 'Непривычное, что подрывает ожидания', speed: 200, points: 10, monsterIcon: Monster6Icon },
  { id: 7, name: 'Боязнь быть осмеянным за жизнь в детском доме', speed: 300, points: 10, monsterIcon: Monster7Icon },
  { id: 8, name: 'Взрослые люди', speed: 300, points: 10, monsterIcon: Monster8Icon },
  { id: 9, name: 'Боязнь, что мама исчезнет', speed: 300, points: 10, monsterIcon: Monster9Icon },
  { id: 10, name: 'Боязнь, что органы опеки отберут', speed: 520, points: 100, monsterIcon: Monster10Icon },
  { id: 11, name: 'Врачи', speed: 300, points: 10, monsterIcon: Monster11Icon },
  { id: 12, name: 'Боязнь выделяться', speed: 300, points: 10, monsterIcon: Monster12Icon },
]


const Game: React.FC = () => {
  const score = useAppSelector((state) => state.game.gameScore);
  const [ducks, setDucks] = useState<React.ReactElement[]>([]);
  const [HEIGHT, WIDTH] = [400, 600];
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);
  const dispatch = useAppDispatch();
  

  useEffect(()=>{
    setDucks(
      possibleDuckies.map(duck => 
        {
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
  if(score>=240) {
    dispatch(playGame(false));
    dispatch(selectPage('Results'));
  }

  return (
    <div className="Game">
      <h1 className='title-game'>УДАЧИ!</h1>
      <p  className='score'>Счёт: {score}</p>
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
