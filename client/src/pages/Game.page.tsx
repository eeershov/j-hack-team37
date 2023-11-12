import bg from '../assets/background.svg';
import Game from '../components/Game';
import Menu from '../components/Menu';

const GamePage = function () {
    return (
        <div>
            <img src={bg} className="background" alt="bg" />
            <Game/>
            <Menu/>
        </div>
    );
}

export default GamePage;
