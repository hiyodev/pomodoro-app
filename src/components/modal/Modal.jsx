import React, { useState } from "react";

import { styled } from "styled-components";

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
  height: 20rem;
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "TimerTitle TimerTitle TimerTitle"
    ". . ."
    ". . ."
    "ThemeTitle ThemeTitle ThemeTitle";

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
  margin-top: 5rem;
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

const SaveButton = styled(Button)``;

const ResetButton = styled(Button)`
  margin-right: 0.5em;
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

  const onChangeHandler = (e, propertyName) => {
    setUserInput((currInput) => {
      return { ...currInput, [propertyName]: e.target.value * 60 };
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
    <ModalBackground onClick={() => openSettingsModal(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
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
        </ModalContent>
        <ButtonContainer>
          <ResetButton>Reset</ResetButton>
          <SaveButton onClick={onSaveHandler}>Save</SaveButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
