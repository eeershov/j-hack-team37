// import leftFearsGirl from '../assets/leftFearsGirl.svg';
// import rightFearsGirl from '../assets/rightFearsGirl.svg';
import Menu from '../components/Menu';
import { possibleDucks } from '../components/Game/possibleDucks';

const FearsDescription = function () {

  return (
    <div className='fears-page'>
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
