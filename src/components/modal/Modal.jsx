import React, { useState, useContext } from "react";

import { styled, css } from "styled-components";
import { TaskContext } from "../../App";

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 20rem;
  height: 16rem;
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "TimerTitle TimerTitle TimerTitle"
    ". . ."
    ". . ."
    "ThemeTitle ThemeTitle .";

  justify-items: center;
`;

const TimerField = styled.input`
  width: 4rem;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
`;

const FieldLabel = styled.label`
  color: #777;
`;

const Title = styled.div`
  justify-self: start;
  padding-left: 1em;
  padding-bottom: 0.2em;
  font-weight: bold;
`;

const SettingsTitle = styled(Title)`
  grid-area: TimerTitle;
`;

const ThemeTitle = styled(Title)`
  grid-area: ThemeTitle;
  padding-top: 1em;
`;

const ButtonContainer = styled.div`
  padding-top: 1em;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

const ResetButton = styled(Button)`
  margin-right: 0.5em;
`;

const SaveButton = styled(Button)``;

const ThemeToggleLabel = styled.label`
  align-self: end;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      background-color: #2196f3;
    `}
`;

const SliderButton = styled.span`
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.4s;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      transform: translateX(24px);
    `}
`;

const ThemeToggleInput = styled.input`
  display: none;
`;

function Modal(props) {
  const { openSettingsModal, timers, setTimers } = props;
  const { pomoDuration, breakDuration, longBreakDuration } = timers;
  const { setPomoDuration, setBreakDuration, setLongBreakDuration } = setTimers;

  const [userInput, setUserInput] = useState({
    pomoDuration: pomoDuration,
    breakDuration: breakDuration,
    longBreakDuration: longBreakDuration,
  });

  const themeData = useContext(TaskContext);

  const onChangeHandler = (e, propertyName) => {
    setUserInput((currInput) => {
      return { ...currInput, [propertyName]: e.target.value * 60 };
    });
  };

  const onResetHandler = () => {
    setUserInput({
      pomoDuration: 1500,
      breakDuration: 300,
      longBreakDuration: 900,
    });
  };

  const onSaveHandler = () => {
    if (Object.values(userInput).some((timer) => timer === 0)) return;

    setPomoDuration(userInput.pomoDuration);
    setBreakDuration(userInput.breakDuration);
    setLongBreakDuration(userInput.longBreakDuration);
    openSettingsModal(false);
  };

  return (
    <ModalBackground onMouseDown={() => openSettingsModal(false)}>
      <ModalContainer
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Settings</h2>
        <ModalContent>
          <SettingsTitle>Time Duration (Minutes):</SettingsTitle>
          <FieldLabel>Pomodoro</FieldLabel>
          <FieldLabel>Short Break</FieldLabel>
          <FieldLabel>Long Break</FieldLabel>
          <TimerField
            type="number"
            value={userInput.pomoDuration / 60}
            onChange={(e) => onChangeHandler(e, "pomoDuration")}
          ></TimerField>
          <TimerField
            type="number"
            value={userInput.breakDuration / 60}
            onChange={(e) => onChangeHandler(e, "breakDuration")}
          ></TimerField>
          <TimerField
            type="number"
            value={userInput.longBreakDuration / 60}
            onChange={(e) => onChangeHandler(e, "longBreakDuration")}
          ></TimerField>
          <ThemeTitle>Toggle Website Theme:</ThemeTitle>
          <ThemeToggleLabel>
            <ThemeToggleInput
              type="checkbox"
              id="theme-switch"
              onClick={() => themeData.setDarkMode(!themeData.darkMode)}
            />
            <Slider checked={themeData.darkMode} />
            <SliderButton checked={themeData.darkMode} />
          </ThemeToggleLabel>
        </ModalContent>
        <ButtonContainer>
          <ResetButton onClick={onResetHandler}>Reset</ResetButton>
          <SaveButton onClick={onSaveHandler}>Save</SaveButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
