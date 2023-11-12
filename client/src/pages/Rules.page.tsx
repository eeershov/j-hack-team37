import girlMainMenu from '../assets/girlMainMenu.svg';
import BoyMainMenu from '../assets/BoyMainMenu.svg';
import header from '../assets/header.svg';
import '../App.css';
import background from '../assets/background.svg';
import Menu from '../components/Menu';

const StartMenu = function () {
    return (
        <>
        <img src={background} className="background" alt="bg" />
        <img src={header} className="header" alt="header" />  
        <img src={BoyMainMenu} className="boyMenu" alt="boyMenu" />
        <img src={girlMainMenu} className="girlMenu" alt="girlMenu" />
        <span className='startMenu'>
            <h2 className="title">Мини-игра <br/> Страхи приемных детей</h2>
            <h3 className="rules">Одолейте все страхи как можно быстрее, <br/> за каждый побеждённый страх вам начисляются очки. </h3>
            <Menu/>
        </span>
        </>
    );
}

export default StartMenu;
