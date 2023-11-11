import { useEffect, useState } from 'react'
import Game from './components/Game';
import './App.css'

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

  return (
    <>
      <Game/>
      <div>
        { somedata ? somedata : 'loading...' }
      </div>
    </>
  )
}

export default App
