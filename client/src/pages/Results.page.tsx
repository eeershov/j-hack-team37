import resultBoy from '../assets/resultBoy.svg';
import resultGirl from '../assets/resultGirl.svg';
import header from '../assets/header.svg';
import Menu from '../components/Menu';
import { useAppSelector } from '../app/hooks';
import BackgroundImages from '../components/BackgroundImages';


const ResultsWindow = function () {
  const gameStore = useAppSelector((state) => state.game);
  const gameScore = gameStore.gameScore;
  const gameTime = gameStore.gameTime;

  return (
    <div className='content results-page'>
      <main>
        <BackgroundImages HeaderImg={header} LeftImg={resultBoy} RightImg={resultGirl} />
        <div className='title-block'>
          <h2 className="title">ХОРОШАЯ РАБОТА!
            <br />КОЛИЧЕСТВО ОЧКОВ: {gameScore} <br />ВРЕМЯ: {gameTime.minutes} : {gameTime.seconds} : {gameTime.milliseconds}</h2>

        </div>
      </main>
      <Menu />
    </div>
  );
}

export default ResultsWindow;
