import GamePage from './Game.page.js';
import StartMenu from './Rules.page.js';
import ResultsWindow from './Results.page.js';
import FearsDescription from './FearsDescription.page.js';

const selectPage = new Map([
  ['Rules', <StartMenu/>], 
  ['Game', <GamePage/>],
  ['Fears', <FearsDescription/>],
  ['Results', <ResultsWindow/>]
]);


export default function CurrentPage() {
  return (
    selectPage.get('Game')
  )
}
