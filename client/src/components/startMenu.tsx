import React, { useState } from "react";
import girlMainMenu from '../assets/girlMainMenu.svg'
import BoyMainMenu from '../assets/BoyMainMenu.svg'
import header from '../assets/header.svg'
import '../App.css'
import background from '../assets/background.svg'

const StartMenu = function () {

    function goToFears() {

    }
    return (<>
        <img src={background} className="background" alt="bg" />
        <img src={header} className="header" alt="header" />  
        <img src={BoyMainMenu} className="boyMenu" alt="boyMenu" />
        <img src={girlMainMenu} className="girlMenu" alt="girlMenu" />
        <span className='startMenu'>
            
            <h2 className="title">Мини-игра <br/> Страхи приемных детей</h2>
            <h3 className="rules">У вас есть 15 секунд, чтобы "отстрелять" <br/> как можно больше страхов</h3>
            <div className="buttonContainer btn-1">
            <button onClick={goToFears} className="button buttonDescription">Описание страхов </button>
             <button  className="button buttonStart">Начать игру</button>
            </div>
             
        </span>
        </>
    );
}

export default StartMenu;