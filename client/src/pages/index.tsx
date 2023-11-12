import GamePage from './Game.page.js';
import StartMenu from './Rules.page.js';
import ResultsWindow from './Results.page.js';
import FearsDescription from './FearsDescription.page.js';
import { pageName } from '../interfaces/PageName.js';
import { useAppSelector } from '../app/hooks.js';


const selectPage = new Map([
  [pageName.rules, <StartMenu/>], 
  [pageName.game, <GamePage/>],
  [pageName.fears, <FearsDescription/>],
  [pageName.results, <ResultsWindow/>]
]);


export default function CurrentPage() {
  const pageSelected = useAppSelector((state) => state.game.pageSelected);

  return (
    selectPage.get(pageSelected)
  )
}
