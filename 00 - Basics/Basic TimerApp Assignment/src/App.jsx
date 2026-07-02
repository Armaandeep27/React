import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timeout = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((s) => s - 1);
      } else if (minutes > 0) {
        setMinutes((m) => m - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((h) => h - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        alert("TIME HAS ENDED");
        setRunning(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [hours, minutes, seconds, running]);

  function reset() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setRunning(false);
  }

  function pause() {
    setRunning(false);
  }

  function start() {
    setRunning(true);
  }

  return (
    <>
      <div id="timer-container">
        <label>Hours :</label>
        <input
          id="hours"
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />

        <label>Minutes :</label>
        <input
          id="minutes"
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />

        <label>Seconds :</label>
        <input
          id="seconds"
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
        />

        <Clock
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />

        <div id="button-container">
          <button id="reset-btn" onClick={reset}>
            RESET
          </button>

          <button id="pause-btn" onClick={pause}>
            PAUSE
          </button>

          <button id="start-btn" onClick={start}>
            START
          </button>
        </div>
      </div>
    </>
  );
}

function Clock(props) {
  return (
    <div id="clock">
      {String(props.hours)} :
      {String(props.minutes)} :
      {String(props.seconds)}
    </div>
  );
}

export default App;