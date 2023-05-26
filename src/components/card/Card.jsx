import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEdit } from "@fortawesome/free-solid-svg-icons";

import Timer from "../timer/Timer";
import TaskList from "../taskList/TaskList";
import { TaskContext } from "../../App";

// Styled components
import * as S from "./Card.styled";

function Card(props) {
  // Card handles starting and stopping of timers of different modes ( Pomodoro, Break, Long Break )
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);

  const [pomoDuration, setPomoDuration] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);

  const [addMode, setAddMode] = useState(false);
  const [userInput, setUserInput] = useState({});
  const tasksState = useContext(TaskContext);

  return (
    <S.CardContainer>
      <Timer
        startTimer={startTimer}
        timeDuration={pomoDuration}
        resetTimer={resetTimer}
      ></Timer>
      <S.ButtonWrapper>
        <S.StartStopButton onClick={() => setStartTimer(!startTimer)}>
          {startTimer ? "Stop" : "Start"}
        </S.StartStopButton>
        <S.Button onClick={() => setResetTimer(resetTimer + 1)}>Reset</S.Button>
        <S.IconButton>
          <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
        </S.IconButton>
      </S.ButtonWrapper>
      <h3>List of Tasks</h3>
      <TaskList></TaskList>
      {!addMode && (
        <S.IconButton onClick={() => setAddMode(true)}>
          Add <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </S.IconButton>
      )}
      {addMode && <>"Hi"</>}
    </S.CardContainer>
  );
}

export default Card;
