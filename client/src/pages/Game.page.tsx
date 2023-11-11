import bg from '../assets/background.svg'
import Game from '../components/Game'

const GamePage = function () {
    return (
        <div>
            <img src={bg} className="background" alt="bg" />
            <Game/>
            <div className="buttonContainer">
            <button  className="button buttonDescription">ПРАВИЛА ИГРЫ</button>
            <button  className="button buttonDescription">ОПИСАНИЕ СТРАХОВ </button>
            <button  className="button buttonStart clickedButton">НАЧАТЬ ИГРУ</button>
            </div>
        </div>
    );
}

export default GamePage;
