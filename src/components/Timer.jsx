import React, { useState, useEffect } from "react";

import { styled } from "styled-components";

const TimerContainer = styled.div`
  margin-bottom: 20px;
`;

const TimerDisplay = styled.div`
  font-size: 60px;
  margin-bottom: 10px;
`;

const TimerStatus = styled.div`
  font-size: 20px;
  color: #666;
`;

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
    <TimerContainer>
      <h2>Pomodoro Timer</h2>
      <TimerDisplay>
        {`${Math.floor(timer / 60)}:${
          inMinutes.length === 1 ? "0" + inMinutes : inMinutes
        }`}
      </TimerDisplay>
      <TimerStatus>Work</TimerStatus>
    </TimerContainer>
  );
}

export default Timer;
