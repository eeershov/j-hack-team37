import { useEffect } from 'react';
import girlMainMenu from '../assets/girlMainMenu.svg';
import BoyMainMenu from '../assets/BoyMainMenu.svg';
import header from '../assets/header.svg';
import '../App.css';
import Menu from '../components/Menu';

const StartMenu = function () {

  return (
    <div className='rules-page'>
      <div className='background-images-block'>
        <img src={header} className='header-image' alt="header" />
        <div className='header-boyngirl'>
          <img src={BoyMainMenu} className="header-illustration boyMenu" alt="boyMenu" />
          <img src={girlMainMenu} className="header-illustration girlMenu" alt="girlMenu" />
        </div>
      </div>
      <div className='title-block'>
        <h2 className='title'>Мини-игра</h2>
        <h2 className="title">Страхи приемных детей</h2>
        <p className="rules">Одолейте все страхи как можно быстрее, <br /> за каждый побеждённый страх вам начисляются очки. </p>
      </div>
      <Menu />
    </div>
  );
}

export default StartMenu;
