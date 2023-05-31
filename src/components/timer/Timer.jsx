import React, { useState, useEffect, useContext } from "react";

import * as S from "./Timer.styled";
import { TaskContext } from "../../App";

function Timer(props) {
  const { startTimer, resetTimer, timeDuration, timerMode } = props;
  const [timer, setTimer] = useState(timeDuration);
  const taskData = useContext(TaskContext);

  const selectedTask = taskData.tasks.filter((task) => {
    return task.selected;
  });

  const taskTitle = selectedTask[0]?.title;

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
  }, [resetTimer, timeDuration]);

  const inMinutes = (timer % 60).toString();

  return (
    <S.TimerContainer>
      <S.TimerDisplay>
        {`${Math.floor(timer / 60)}:${
          inMinutes.length === 1 ? "0" + inMinutes : inMinutes
        }`}
      </S.TimerDisplay>
      <S.TimerStatus>{`Working on ${taskTitle}`}</S.TimerStatus>
    </S.TimerContainer>
  );
}

export default Timer;
