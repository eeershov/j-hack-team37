import { useEffect, useState } from 'react'
import './App.css'
import StartMenu from './components/startMenu.js'
import ResultsWindow from './components/ResultsWindow.js'
import FearsDescription from './components/FearsDescription.js'

function App() {
  const [somedata, setSomedata] = useState();
  useEffect(()=>{
    async function getSomethingFromBack() {
      const backendUrl = 'http://localhost:9090/api';
      const data = await fetch(backendUrl);
      const jsonedData = await data.json();
      setSomedata(jsonedData['data']);
    }
    getSomethingFromBack();
  }, [])
  let WindowCheck = 0;
  let window;
if (WindowCheck === 0) {
  window = <StartMenu/>;
} else if (WindowCheck === 1) {
  window = <FearsDescription/>;
} else {
  window = <ResultsWindow state={WindowCheck}/>;
}

  return (
    window
  )
}

export default App
