import React, { useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faEdit } from "@fortawesome/free-solid-svg-icons";

import Timer from "./Timer";
import TaskList from "./TaskList";

const StyledCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  max-width: 600px; /* Updated width */
  margin: 0 auto;
`;

const ButtonWrapper = styled.div``;

const StyledButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

const StyledStartStopButton = styled(StyledButton)`
  width: 4.2rem;
`;

const StyledIconButton = styled(StyledButton)`
  background-color: #555;

  &:hover {
    background-color: #777;
  }
`;

function Card(props) {
  // Card handles starting and stopping of timers of different modes ( Pomodoro, Break, Long Break )

  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);

  const [pomoDuration, setPomoDuration] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);

  return (
    <StyledCard>
      <Timer
        startTimer={startTimer}
        timeDuration={pomoDuration}
        resetTimer={resetTimer}
      ></Timer>
      <ButtonWrapper>
        <StyledStartStopButton onClick={() => setStartTimer(!startTimer)}>
          {startTimer ? "Stop" : "Start"}
        </StyledStartStopButton>
        <StyledButton onClick={() => setResetTimer(resetTimer + 1)}>
          Reset
        </StyledButton>
        <StyledIconButton>
          <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
        </StyledIconButton>
      </ButtonWrapper>
      <h3>List of Tasks</h3>
      <TaskList></TaskList>
      <StyledIconButton>
        Add <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
      </StyledIconButton>
    </StyledCard>
  );
}

export default Card;
