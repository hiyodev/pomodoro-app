import React, { useState, useEffect } from "react";

import * as S from "./Timer.styled";

function Timer(props) {
  const { startTimer, timeDuration, resetTimer } = props;

  const [timer, setTimer] = useState(timeDuration);

  useEffect(() => {
    console.log("Use effect Test");
    let interval = null;

    if (startTimer && timer > 0) {
      interval = setInterval(() => setTimer((oldTimer) => oldTimer - 1), 1000);
    }

    return () => clearInterval(interval);
  }, [startTimer, timer]);

  useEffect(() => {
    console.log("Timer Reset");
    setTimer(timeDuration);
  }, [resetTimer]);

  const inMinutes = (timer % 60).toString();

  return (
    <S.TimerContainer>
      <h2>Pomodoro Timer</h2>
      <S.TimerDisplay>
        {`${Math.floor(timer / 60)}:${
          inMinutes.length === 1 ? "0" + inMinutes : inMinutes
        }`}
      </S.TimerDisplay>
      <S.TimerStatus>Work</S.TimerStatus>
    </S.TimerContainer>
  );
}

export default Timer;
