import React, { useState, useEffect, useContext } from "react";

import * as S from "./Timer.styled";
import { TaskContext } from "../../App";

function Timer(props) {
  const {
    startTimer,
    resetTimer,
    timeDuration,
    timerMode,
    setTimerMode,
    pomoCount,
    setPomoCount,
  } = props;
  const [timer, setTimer] = useState(timeDuration);
  const taskData = useContext(TaskContext);

  const selectedTask = taskData.tasks.filter((task) => {
    return task.selected;
  });

  const taskTitle = selectedTask[0]?.title;

  useEffect(() => {
    console.log("Running time interval...");
    let interval = null;

    if (startTimer && timer > 0) {
      interval = setInterval(() => setTimer((oldTimer) => oldTimer - 1), 1000);
    } else if (startTimer && timer === 0) {
      // Switch to break / long break after Pomodoro ends
      if (timerMode === "pomodoro") {
        if (pomoCount < 3) {
          setTimerMode("break");
          setPomoCount((prevCount) => prevCount + 1);
        } else {
          setTimerMode("longbreak");
          setPomoCount(0);
        }
      } else if (timerMode === "break" || timerMode === "longbreak") {
        setTimerMode("pomodoro");
      }
    }

    return () => clearInterval(interval);
  }, [startTimer, timer]);

  useEffect(() => {
    console.log("Timer Reset / TimerMode Changed");
    setTimer(timeDuration);
  }, [timerMode, resetTimer, timeDuration]);

  const inMinutes = (timer % 60).toString();

  const checkPomoCount = (inPomoCount) => {
    if (pomoCount === inPomoCount && startTimer && timerMode === "pomodoro")
      return 1;
    else return 0;
  };

  return (
    <S.TimerContainer>
      <S.TimerDisplay>
        {`${Math.floor(timer / 60)}:${
          inMinutes.length === 1 ? "0" + inMinutes : inMinutes
        }`}
      </S.TimerDisplay>
      <S.CircleContainer>
        <S.CircleItem
          active={checkPomoCount(0)}
          done={pomoCount > 0 ? 1 : 0}
        ></S.CircleItem>
        <S.CircleItem
          active={checkPomoCount(1)}
          done={pomoCount > 1 ? 1 : 0}
        ></S.CircleItem>
        <S.CircleItem
          active={checkPomoCount(2)}
          done={pomoCount > 2 ? 1 : 0}
        ></S.CircleItem>
        <S.CircleItem
          active={checkPomoCount(3)}
          done={pomoCount > 3 ? 1 : 0}
        ></S.CircleItem>
      </S.CircleContainer>
      <S.TimerStatus>{taskTitle && `Working on ${taskTitle}`}</S.TimerStatus>
    </S.TimerContainer>
  );
}

export default Timer;
