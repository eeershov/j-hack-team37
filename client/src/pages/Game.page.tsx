import BoyMainMenu from '../assets/BoyMainMenu.svg';
import girlMainMenu from '../assets/girlMainMenu.svg';
import Game from '../components/Game';
import Menu from '../components/Menu';
import BackgroundImages from '../components/BackgroundImages';


const GamePage = function () {
  return (
    <div className='content game-page'>
      <main>
        <BackgroundImages LeftImg={BoyMainMenu} RightImg={girlMainMenu} />
        <Game />
      </main>
      <Menu />
    </div>
  );
}

export default GamePage;
