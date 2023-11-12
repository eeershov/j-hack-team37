import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPage, resetGame } from '../../app/gameSlice';
import { PageName, pageName } from '../../interfaces/PageName';

export default function Menu() {
  const dispatch = useAppDispatch();
  const pageSelected = useAppSelector((state)=>state.game.pageSelected);

  const buttons = [
    {pageName: pageName.rules, title: 'ПРАВИЛА ИГРЫ'}, 
    {pageName: pageName.fears, title: 'ОПИСАНИЕ СТРАХОВ'}, 
    {pageName: pageName.game, title: 'НАЧАТЬ ИГРУ'}]

  const handleClick = (page: PageName) => {
    dispatch(selectPage(page));
    if(page === pageName.game) {
      dispatch(resetGame());
    }
  }
  
  return (
    <div className="buttonContainer">
      { 
      buttons.map(button => {
        let buttonTitle = button.title;
        if(button.pageName === pageName.game && pageSelected === pageName.results ) {
          buttonTitle = 'НАЧАТЬ ЗАНОВО'
        }
        return (
        <button key={button.pageName}
          onClick={()=> handleClick(button.pageName)} 
          className={`button buttonDescription  ${button.pageName === pageSelected && 'clickedButton'} ${button.pageName === "Game" && 'buttonStart'}  ${pageSelected === 'Game' && 'hiddenButtons'}`}
        >
        { buttonTitle }
        </button>
        )
      }) 
      }
    </div>
  )
}



