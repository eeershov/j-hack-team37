import resultBoy from '../assets/resultBoy.svg';
import resultGirl from '../assets/resultGirl.svg';
import header from '../assets/header.svg';
import Menu from '../components/Menu';
import { useAppSelector } from '../app/hooks';
import { timeToHuman } from '../utils/timeToHuman';


const ResultsWindow = function () {
    const gameStore = useAppSelector((state) => state.game);
    const gameScore = gameStore.gameScore;
    const gameTime = gameStore.gameTime;

    return (
        <div>
            <img src={header} className="header result-header" alt="header" />
            <h2 className="title title-result">ХОРОШАЯ РАБОТА!
                <br />КОЛИЧЕСТВО ОЧКОВ: {gameScore} <br />ВРЕМЯ: {timeToHuman(gameTime)}</h2>
            <img src={resultBoy} className="leftFearGirl" alt="leftfg" />
            <img src={resultGirl} className="rightFearGirl" alt="rightfg" />
            <Menu />
        </div>
    );
}

export default ResultsWindow;
