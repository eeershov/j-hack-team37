// import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
// import { setGameTime } from "../../app/gameSlice";
// import { timeToHuman } from "../../utils/timeToHuman";

const Stopwatch = () => {
  const gameStore = useAppSelector((state) => state.game);
  const gameTime = gameStore.gameTime;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {`${gameTime.minutes} : ${gameTime.seconds} : ${Number(gameTime.milliseconds / 10).toFixed(0)}`}
      </p>
    </div>
  );
};

export default Stopwatch;
