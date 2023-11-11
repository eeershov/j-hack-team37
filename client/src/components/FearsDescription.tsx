import bg from '../assets/background.svg'
import fears from '../assets/fears.svg'
import leftFearsGirl from '../assets/leftFearsGirl.svg'
import rightFearsGirl from '../assets/rightFearsGirl.svg'

const FearsDescription = function () {

    return (
        <div>
            <img src={bg} className="background" alt="bg" />
            <h2 className="title">Описание страхов</h2>
            <img src={fears} className="fears" alt="fears" />
            <img src={leftFearsGirl} className="leftFearGirl" alt="leftfg" />
            <img src={rightFearsGirl} className="rightFearGirl" alt="rightfg" />
            <div className="buttonContainer">
            <button  className="button buttonDescription">ПРАВИЛА ИГРЫ</button>
            <button  className="button buttonDescription clickedButton">ОПИСАНИЕ СТРАХОВ </button>
            <button  className="button buttonStart">НАЧАТЬ ИГРУ</button>
            </div>
        </div>
    );
}

export default FearsDescription;
