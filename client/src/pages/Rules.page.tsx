import girlMainMenu from '../assets/girlMainMenu.svg';
import BoyMainMenu from '../assets/BoyMainMenu.svg';
import header from '../assets/header.svg';
import '../App.css';
import Menu from '../components/Menu';
import BackgroundImages from '../components/BackgroundImages';

const StartMenu = function () {

  return (
    <div className='content rules-page'>
      <main>
        <BackgroundImages HeaderImg={header} LeftImg={BoyMainMenu} RightImg={girlMainMenu} />
        <div className='title-block'>
          <h2 className='title'>Мини-игра</h2>
          <h2 className="title">Страхи приемных детей</h2>
          <p className="rules">Одолейте все страхи как можно быстрее, <br /> за каждый побеждённый страх вам начисляются очки. </p>
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default StartMenu;
