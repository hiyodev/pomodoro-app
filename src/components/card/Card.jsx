import React, { useState, useContext, useEffect } from "react";
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
import Modal from "../modal/Modal";

function Card(props) {
  // Card handles starting and stopping of timers of different modes ( Pomodoro, Break, Long Break )
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [pomoCount, setPomoCount] = useState(0);

  const [timerMode, setTimerMode] = useState(
    JSON.parse(localStorage.getItem("timerMode") || JSON.stringify("pomodoro"))
  );

  const [pomoDuration, setPomoDuration] = useState(
    JSON.parse(localStorage.getItem("pomoTime") || 1500)
  );
  const [breakDuration, setBreakDuration] = useState(
    JSON.parse(localStorage.getItem("breakTime") || 300)
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    JSON.parse(localStorage.getItem("longBreakTime") || 900)
  );

  const [settingsModal, openSettingsModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("pomoTime", JSON.stringify(pomoDuration));
    localStorage.setItem("breakTime", JSON.stringify(breakDuration));
    localStorage.setItem("longBreakTime", JSON.stringify(longBreakDuration));
    localStorage.setItem("timerMode", JSON.stringify(timerMode));
  }, [pomoDuration, breakDuration, longBreakDuration, timerMode]);

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

  console.log(taskData.darkMode);

  return (
    <>
      {settingsModal && (
        <Modal
          openSettingsModal={openSettingsModal}
          timers={{
            pomoDuration: pomoDuration,
            breakDuration: breakDuration,
            longBreakDuration: longBreakDuration,
          }}
          setTimers={{
            setPomoDuration: setPomoDuration,
            setBreakDuration: setBreakDuration,
            setLongBreakDuration: setLongBreakDuration,
          }}
        ></Modal>
      )}
      <S.CardContainer>
        <S.CardTitle>Pomodoro Timer</S.CardTitle>
        <S.TimerMode>
          <S.TimerModeItem
            alignment={"end"}
            selected={timerMode === "pomodoro" ? 1 : 0}
            onClick={() => setTimerMode("pomodoro")}
          >
            Focus
          </S.TimerModeItem>
          <S.TimerModeItem
            alignment={"center"}
            selected={timerMode === "break" ? 1 : 0}
            onClick={() => setTimerMode("break")}
          >
            Break
          </S.TimerModeItem>
          <S.TimerModeItem
            alignment={"start"}
            selected={timerMode === "longbreak" ? 1 : 0}
            onClick={() => setTimerMode("longbreak")}
          >
            Long Break
          </S.TimerModeItem>
        </S.TimerMode>
        <Timer
          startTimer={startTimer}
          resetTimer={resetTimer}
          timerMode={timerMode}
          setTimerMode={setTimerMode}
          pomoCount={pomoCount}
          setPomoCount={setPomoCount}
          timeDuration={
            timerMode === "pomodoro"
              ? pomoDuration
              : timerMode === "break"
              ? breakDuration
              : longBreakDuration
          }
        ></Timer>
        <S.ButtonWrapper>
          <S.StartStopButton onClick={() => setStartTimer(!startTimer)}>
            {startTimer ? "Stop" : "Start"}
          </S.StartStopButton>
          <S.Button onClick={() => setResetTimer(resetTimer + 1)}>
            Reset
          </S.Button>
          <S.IconButton onClick={() => openSettingsModal(true)}>
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
                  <S.IconButton
                    right_margin={"0.25em"}
                    onClick={onCancelHandler}
                  >
                    <S.AwesomeIcon icon={faTimes}></S.AwesomeIcon>
                  </S.IconButton>
                  <S.IconButton onClick={onSaveHandler}>
                    <S.AwesomeIcon icon={faSave}></S.AwesomeIcon>
                  </S.IconButton>
                </S.TwoButtonWrapper>
              </S.ThreeButtonWrapper>
            </S.EditWrapper>
          </>
        )}
      </S.CardContainer>
    </>
  );
}

export default Card;
