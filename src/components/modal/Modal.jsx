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
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 20rem;
  height: 25rem;
`;

const EditContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TimerField = styled.input`
  width: 4rem;
  margin: 0 0.5em 0 0.5rem;
  font-size: 1.5rem;
`;

function Modal(props) {
  const { openSettingsModal, timers } = props;
  const { pomoDuration, breakDuration, longBreakDuration } = timers;

  const [useInput, setUserInput] = useState({
    pomoDuration: pomoDuration,
    breakDuration: breakDuration,
    longBreakDuration: longBreakDuration,
  });

  const onChangeHandler = (e, propertyName) => {
    setUserInput((currInput) => {
      return { ...currInput, [propertyName]: e.target.value * 60 };
    });
  };

  return (
    <ModalBackground onClick={() => openSettingsModal(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>Settings</h2>
        <EditContainer>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </EditContainer>
        <EditContainer>
          <TimerField
            value={useInput.pomoDuration / 60}
            onChange={(e) => onChangeHandler(e, "pomoDuration")}
          ></TimerField>
          <TimerField
            value={useInput.breakDuration / 60}
            onChange={(e) => onChangeHandler(e, "breakDuration")}
          ></TimerField>
          <TimerField
            value={useInput.longBreakDuration / 60}
            onChange={(e) => onChangeHandler(e, "longBreakDuration")}
          ></TimerField>
        </EditContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
