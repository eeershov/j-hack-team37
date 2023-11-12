import bg from '../assets/background.svg';
import resultBoy from '../assets/resultBoy.svg';
import resultGirl from '../assets/resultGirl.svg';
import header from '../assets/header.svg';
import Menu from '../components/Menu';

const resultsWindow = function () {
    const score = 0;
    return (
        <div>
            <img src={bg} className="background" alt="bg" />
            <img src={header} className="header result-header" alt="header" /> 
            <h2 className="title title-result">ХОРОШАЯ РАБОТА! <br/> КОЛИЧЕСТВО ОЧКОВ: {score}</h2>
            <img src={resultBoy} className="leftFearGirl" alt="leftfg" />
            <img src={resultGirl} className="rightFearGirl" alt="rightfg" />
            <Menu/>
        </div>
    );
}

export default resultsWindow;
