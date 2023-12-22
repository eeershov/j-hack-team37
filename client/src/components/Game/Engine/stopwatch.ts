import type GameTime from '../../../interfaces/GameTime';

function stopwatch({
  time,
  deltaTime,
}: {
  time: GameTime;
  deltaTime: number;
}): GameTime {
  time.milliseconds += deltaTime;
  if (time.milliseconds >= 1000) {
    time.seconds += 1;
    time.milliseconds -= 1000;
  }
  if (time.seconds >= 60) {
    time.minutes += 1;
    time.seconds = 0;
  }

  return time;
}

class Stopwatch {
  private time: GameTime = {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  constructor() {}

  update(deltaTime: number) {
    this.time = stopwatch({ time: this.time, deltaTime });
  }
  getTime(): GameTime {
    return this.time;
  }

  setGameTime(gameRoundDataTime: GameTime) {
    gameRoundDataTime = this.time;
  }
}

export { Stopwatch };
