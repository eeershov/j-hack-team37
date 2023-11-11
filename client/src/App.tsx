import Game from './components/Game';
import './App.css'
import StartMenu from './components/startMenu.js'
import ResultsWindow from './components/ResultsWindow.js'
import FearsDescription from './components/FearsDescription.js'

function App() {
  const WindowCheck = 0;
  let window;
if (WindowCheck === 0) {
  window = <Game/>;
} else if (WindowCheck === 1) {
  window = <FearsDescription/>;
} else if (WindowCheck === 2) {
  window = <ResultsWindow/>;
} else {
  window = <StartMenu/>;
}

  return (
    <>
      { window }
    </>
  )
}

export default App
