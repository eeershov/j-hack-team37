type TimeType = {
  minutes: number;
  seconds: number;
  milliseconds: number;
};

function stopwatch({ time, deltaTime }: { time: TimeType; deltaTime: number }) {
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
  private time = {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  constructor() {}

  update(deltaTime: number) {
    this.time = stopwatch({ time: this.time, deltaTime });
  }
  getTime() {
    return this.time;
  }
}

export { Stopwatch };
