import bg from '../assets/background.svg';
import fears from '../assets/fears.svg';
import leftFearsGirl from '../assets/leftFearsGirl.svg';
import rightFearsGirl from '../assets/rightFearsGirl.svg';
import Menu from '../components/Menu';

const FearsDescription = function () {

    return (
        <div>
            <img src={bg} className="background" alt="bg" />
            <h2 className="title">Описание страхов</h2>
            <img src={fears} className="fears" alt="fears" />
            <img src={leftFearsGirl} className="leftFearGirl" alt="leftfg" />
            <img src={rightFearsGirl} className="rightFearGirl" alt="rightfg" />
            <Menu/>
        </div>
    );
}

export default FearsDescription;
