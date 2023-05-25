import React, { useState } from "react";

import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const StyledTask = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 10px 0;
`;

const TaskLeftWrapper = styled.div`
  display: grid;
  align-items: center;
  padding: 0.5em;
  border-left: 2px solid
    ${(props) => (props.selected ? "black" : props.hovered ? "#ccc" : "white")};
`;

const TaskContentWrapper = styled.div`
  flex-grow: 1;
`;

const TaskTitle = styled.div`
  font-weight: bold;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TaskDescription = styled.div`
  max-width: 300px;
  color: #777;
  margin-top: 5px;
  text-align: left;

  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconButton = styled.button`
  margin-right: 5px;
  cursor: pointer;
  color: #777;
  font-size: 18px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.completed ? "black" : "#bfbfbf")};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

function Task(props) {
  const { id, title, description, selected, completed } = props.task;
  const { setTasks } = props;

  const [taskHovered, setTaskHovered] = useState(false);

  const onTickHandler = () => {
    setTasks((currTasks) => {
      return currTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      });
    });
  };

  const onSelectHandler = () => {
    setTasks((currTasks) => {
      return currTasks.map((task) => {
        if (task.id === id) {
          return { ...task, selected: true };
        }

        return { ...task, selected: false };
      });
    });
  };

  return (
    <StyledTask>
      <TaskLeftWrapper
        hovered={taskHovered ? 1 : 0}
        selected={selected ? 1 : 0}
        onClick={onSelectHandler}
        onMouseOver={() => setTaskHovered(true)}
        onMouseLeave={() => setTaskHovered(false)}
      >
        <StyledFontAwesomeIcon
          icon={faCheck}
          completed={completed ? 1 : 0}
          onClick={onTickHandler}
        ></StyledFontAwesomeIcon>
      </TaskLeftWrapper>
      <TaskContentWrapper
        onClick={onSelectHandler}
        onMouseOver={() => setTaskHovered(true)}
        onMouseLeave={() => setTaskHovered(false)}
      >
        <TaskHeader>
          <TaskTitle completed={completed ? 1 : 0}>{title}</TaskTitle>
          <StyledIconButton>
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </StyledIconButton>
        </TaskHeader>
        <TaskDescription completed={completed ? 1 : 0}>
          {description}
        </TaskDescription>
      </TaskContentWrapper>
    </StyledTask>
  );
}

export default Task;
