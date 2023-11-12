import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setGameTime } from "../../app/gameSlice";
import { timeToHuman } from "../../utils/timeToHuman";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let intervalId: number;
    if (isGameStarted) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
        dispatch(setGameTime(time));
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isGameStarted, time, dispatch]);


  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        { timeToHuman(time) }
      </p>
    </div>
  );
};

export default Stopwatch;
