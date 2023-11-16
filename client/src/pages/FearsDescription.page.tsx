import leftFearsGirl from '../assets/leftFearsGirl.svg';
import rightFearsGirl from '../assets/rightFearsGirl.svg';
import Menu from '../components/Menu';
import { possibleDucks } from '../components/Game/possibleDucks';
import BackgroundImages from '../components/BackgroundImages';

const FearsDescription = function () {

  return (
    <div className='fears-page'>
      <BackgroundImages LeftImg={leftFearsGirl} RightImg={rightFearsGirl} />
      <h2 className="title">Описание страхов</h2>
      <ul className='fears-list'>
        {possibleDucks.map(duck => {
          const MonsterIcon = duck.monsterIcon;
          return (
            <li>
              <MonsterIcon width={64} height={64} />
              <p>{duck.name}</p>
            </li>
          )
        })}
      </ul>
      <Menu />
    </div>
  );
}

export default FearsDescription;
