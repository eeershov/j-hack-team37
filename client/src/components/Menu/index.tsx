import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPage } from '../../app/gameSlice';
import { pageName } from '../../interfaces/PageName';

export default function Menu() {
  const dispatch = useAppDispatch();
  const pageSelected = useAppSelector((state)=>state.game.pageSelected);

  const buttons = [
    {pageName: pageName.rules, title: 'ПРАВИЛА ИГРЫ'}, 
    {pageName: pageName.fears, title: 'ОПИСАНИЕ СТРАХОВ'}, 
    {pageName: pageName.game, title: 'НАЧАТЬ ИГРУ'}]

  return (
    <div className="buttonContainer">
      { 
      buttons.map(button => (
        <button 
          onClick={()=> dispatch(selectPage(button.pageName))} 
          className={`button buttonDescription  ${button.pageName === pageSelected && 'clickedButton'} ${button.pageName === "Game" && 'buttonStart'}  ${pageSelected === 'Game' && 'hiddenButtons'}`}
        >
        { button.title }
        </button>
      )) 
      }
    </div>
  )
}



