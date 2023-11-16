import BoyMainMenu from '../assets/BoyMainMenu.svg';
import girlMainMenu from '../assets/girlMainMenu.svg';
import Game from '../components/Game';
import Menu from '../components/Menu';



const GamePage = function () {
    return (
        <div>
            <div className='header-boyngirl'>
                <img src={BoyMainMenu} className="boyMenu boyInGame" alt="boyMenu" />
                <img src={girlMainMenu} className="girlMenu girlInGame" alt="girlMenu" />
            </div>
            <Game />
            <Menu />
        </div>
    );
}

export default GamePage;
