import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faEdit,
  faEraser,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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
  const [userInput, setUserInput] = useState({ title: "", description: "" });
  const taskData = useContext(TaskContext);

  const onCancelHandler = () => {
    setUserInput({ title: "", description: "" });
    setAddMode(false);
  };

  const onClearHandler = () => {
    setUserInput({ title: "", description: "" });
  };

  const onSaveHandler = () => {
    taskData.setTasks((currTasks) => {
      if (currTasks.length === 0) {
        return [{ id: 0, ...userInput }];
      }

      const id = currTasks[currTasks.length - 1].id + 1;
      return [...currTasks, { id: id, ...userInput }];
    });
    setUserInput({ title: "", description: "" });
  };

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
      <TaskList />
      {!addMode && (
        <S.IconButton onClick={() => setAddMode(true)}>
          Add <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </S.IconButton>
      )}
      {addMode && (
        <>
          <S.EditBorder />
          <S.EditWrapper>
            <S.EditTitle
              value={userInput.title}
              placeholder={"Name of task..."}
              onChange={(e) =>
                setUserInput((input) => ({
                  ...input,
                  title: e.target.value,
                }))
              }
            ></S.EditTitle>
            <S.EditDescription
              value={userInput.description}
              placeholder={"Additional information..."}
              onChange={(e) =>
                setUserInput((input) => ({
                  ...input,
                  description: e.target.value,
                }))
              }
            ></S.EditDescription>
            <S.ThreeButtonWrapper>
              <S.IconButton onClick={onClearHandler}>
                <S.AwesomeIcon icon={faEraser}></S.AwesomeIcon>
              </S.IconButton>
              <S.TwoButtonWrapper>
                <S.IconButton right_margin={"0.25em"} onClick={onCancelHandler}>
                  <S.AwesomeIcon icon={faTimes}></S.AwesomeIcon>
                </S.IconButton>
                <S.IconButton
                  onClick={onSaveHandler}
                  disabled={!userInput.title.length}
                >
                  <S.AwesomeIcon icon={faSave}></S.AwesomeIcon>
                </S.IconButton>
              </S.TwoButtonWrapper>
            </S.ThreeButtonWrapper>
          </S.EditWrapper>
        </>
      )}
    </S.CardContainer>
  );
}

export default Card;
