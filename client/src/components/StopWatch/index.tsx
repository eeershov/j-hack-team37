import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const isGameStarted = useAppSelector((state) => state.game.isGameStarted);

  useEffect(() => {
    let intervalId: number;
    if (isGameStarted) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isGameStarted, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Stopwatch;
