import bg from '../assets/background.svg';
import BoyMainMenu from '../assets/BoyMainMenu.svg';
import girlMainMenu from '../assets/girlMainMenu.svg';
import Game from '../components/Game';
import Menu from '../components/Menu';



const GamePage = function () {
    return (
        <div>

            <img src={bg} className="background" alt="bg" />
            <img src={BoyMainMenu} className="boyMenu boyInGame" alt="boyMenu" />
            <img src={girlMainMenu} className="girlMenu girlInGame" alt="girlMenu" />
            <Game/>
            <Menu/>
        </div>
    );
}

export default GamePage;
