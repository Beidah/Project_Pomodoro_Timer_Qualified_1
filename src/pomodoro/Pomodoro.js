import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import TimerButtons from "./TimerButtons";
import StartStopButtons from "./StartStopButtons";
import Session from "./Session";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerState, setTimerState] = useState("Stop");
  const [focusTimer, setFocusTimer] = useState(25 * 60); // 25 Minutes
  const [elapsedFocus, setElapsedFocus] = useState(0);
  const [breakTimer, setBreakTimer] = useState(5 * 60);
  const [elaspedBreak, setElapsedBreak] = useState(0);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if (timerState === "Focus") {
        setElapsedFocus((timer) => timer + 1);
        const timeRemaining = focusTimer - elapsedFocus;
        if (timeRemaining <= 1) {
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          setTimerState("Break");
        }
      } else if (timerState === "Break") {
        setElapsedBreak((timer) => timer + 1);
        const timeRemaining = breakTimer - elaspedBreak;
        if (timeRemaining <= 1) {
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          setTimerState("Focus");
        }
      }
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <TimerButtons 
        focusTimer={focusTimer} 
        setFocusTimer={setFocusTimer} 
        breakTimer={breakTimer} 
        setBreakTimer={setBreakTimer} 
        timerState={timerState} 
      />
      <StartStopButtons 
        setIsTimerRunning={setIsTimerRunning} 
        setTimerState={setTimerState} 
        isTimerRunning={isTimerRunning} 
        timerState={timerState} 
        setElapsedBreak={setElapsedBreak}
        setElapsedFocus={setElapsedFocus}
      />
      <Session
        focusTimer={focusTimer}
        elapsedFocus={elapsedFocus}
        breakTimer={breakTimer}
        elaspedBreak={elaspedBreak}
        timerState={timerState}
      />
    </div>
  );
}

export default Pomodoro;
