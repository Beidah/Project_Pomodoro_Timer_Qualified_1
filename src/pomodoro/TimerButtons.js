import React from "react";
import {secondsToDuration} from "../utils/duration";


function TimerButtons({ focusTimer, setFocusTimer, breakTimer, setBreakTimer, timerState }) {
  function decreaseFocusTimer() {
    setFocusTimer((focusTimer) => focusTimer - (5 * 60));
  }

  function increaseFocusTimer() {
      setFocusTimer((focusTimer) => focusTimer + (5 * 60));
  }

  function displayFocusTimer() {
    return focusTimer === 3600 ? "60:00" : secondsToDuration(focusTimer);
  }

  function decreaseBreakTimer() {
    setBreakTimer((breakTimer) => breakTimer - 60);
  }

  function increaseBreakTimer() {
    setBreakTimer((breakTimer) => breakTimer + 60);
  }

  function displayBreakTimer() {
    return secondsToDuration(breakTimer);
  }

  function buttonsDisabled() {
    return timerState !== "Stop";
  }

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: { displayFocusTimer() }
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              disabled={buttonsDisabled() || focusTimer <= (5 * 60)}
              onClick={decreaseFocusTimer}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              disabled={buttonsDisabled() || focusTimer >= (60 * 60)}
              onClick={increaseFocusTimer}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {displayBreakTimer()}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                disabled={buttonsDisabled() || breakTimer <= 60}
                onClick={decreaseBreakTimer}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                disabled={buttonsDisabled() || breakTimer >= (15 * 60)}
                onClick={increaseBreakTimer}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerButtons;