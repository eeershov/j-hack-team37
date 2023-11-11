import bg from '../assets/background.svg'
import resultBoy from '../assets/resultBoy.svg'
import resultGirl from '../assets/resultGirl.svg'
import header from '../assets/header.svg'

const resultsWindow = function () {
    const score = 0;
    return (
        <div>
            <img src={bg} className="background" alt="bg" />
            <img src={header} className="header result-header" alt="header" /> 
            <h2 className="title title-result">ХОРОШАЯ РАБОТА! <br/> КОЛИЧЕСТВО ОЧКОВ: {score}</h2>
            <img src={resultBoy} className="leftFearGirl" alt="leftfg" />
            <img src={resultGirl} className="rightFearGirl" alt="rightfg" />
            <div className="buttonContainer result-btn">
            <button  onClick={() => {}}className="button buttonDescription">ПРАВИЛА ИГРЫ</button>
            <button  className="button buttonDescription clickedButton">ОПИСАНИЕ СТРАХОВ </button>
            <button  className="button buttonStart">НАЧАТЬ ЗАНОВО</button>
            </div>
        </div>
    );
}

export default resultsWindow;
