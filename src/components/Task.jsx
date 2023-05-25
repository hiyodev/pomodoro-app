import React, { useState } from "react";

import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faSave,
  faTrashAlt,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const StyledTask = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 10px 0;
`;

const StyledLeftWrapper = styled.div`
  display: grid;
  align-items: center;
  padding: 0.5em;
  border-left: 2px solid
    ${(props) => (props.selected ? "black" : props.hovered ? "#ccc" : "white")};
`;

const StyledContentWrapper = styled.div`
  flex-grow: 1;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const StyledDescription = styled.div`
  width: 300px;
  color: #777;
  margin-top: 5px;
  text-align: left;

  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconButton = styled.button`
  cursor: pointer;
  color: #777;
  font-size: 18px;

  margin-right: ${(props) => props.right_margin};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`;

const TwoButtonWrapper = styled.div`
  display: flex;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.completed ? "black" : "#bfbfbf")};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const StyledEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

const StyledEditTitle = styled.input`
  font-weight: bold;
  font-size: 1em;
`;

const StyledEditDescription = styled.textarea`
  resize: none;
  font-size: 0.8rem;
  margin-top: 0.5em;
`;

function Task(props) {
  const { id, title, description, selected, completed } = props.task;
  const { setTasks } = props;

  const [taskHovered, setTaskHovered] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userInput, setUserInput] = useState({
    title: title,
    description: description,
  });

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

  const onSaveHandler = () => {
    setTasks((currTasks) => {
      return currTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: userInput.title,
            description: userInput.description,
          };
        }

        return task;
      });
    });

    setEditMode(false);
  };

  const onCancelHandler = () => {
    setUserInput({
      title: title,
      description: description,
    });
    setEditMode(false);
  };

  const onEditHandler = (e) => {
    e.stopPropagation();
    setEditMode(true);
  };

  const onDeleteHandler = () => {
    setTasks((currTasks) => currTasks.filter((task) => task.id !== id));
  };

  return (
    <StyledTask>
      {!editMode && (
        <>
          <StyledLeftWrapper
            hovered={taskHovered ? 1 : 0}
            selected={selected ? 1 : 0}
            onClick={onSelectHandler}
            onMouseOver={() => setTaskHovered(true)}
            onMouseLeave={() => setTaskHovered(false)}
          >
            <StyledFontAwesomeIcon
              icon={faCheck}
              completed={completed ? 1 : 0}
              onClick={(e) => {
                e.stopPropagation();
                onTickHandler();
              }}
            ></StyledFontAwesomeIcon>
          </StyledLeftWrapper>
          <StyledContentWrapper
            onClick={onSelectHandler}
            onMouseOver={() => setTaskHovered(true)}
            onMouseLeave={() => setTaskHovered(false)}
          >
            <StyledHeader>
              <StyledTitle completed={completed ? 1 : 0}>{title}</StyledTitle>
              <StyledIconButton onClick={(e) => onEditHandler(e)}>
                <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
              </StyledIconButton>
            </StyledHeader>
            <StyledDescription completed={completed ? 1 : 0}>
              {description}
            </StyledDescription>
          </StyledContentWrapper>
        </>
      )}

      {editMode && (
        <StyledEditWrapper>
          <StyledHeader>
            <StyledEditTitle
              value={userInput.title}
              onChange={(e) =>
                setUserInput((input) => ({
                  ...input,
                  title: e.target.value,
                }))
              }
            ></StyledEditTitle>
          </StyledHeader>
          <StyledEditDescription
            value={userInput.description}
            onChange={(e) =>
              setUserInput((input) => ({
                ...input,
                description: e.target.value,
              }))
            }
            cols={35}
            rows={3}
          ></StyledEditDescription>
          <StyledButtonWrapper>
            <StyledIconButton onClick={onDeleteHandler}>
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </StyledIconButton>
            <TwoButtonWrapper>
              <StyledIconButton
                right_margin={"0.25em"}
                onClick={onCancelHandler}
              >
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </StyledIconButton>
              <StyledIconButton onClick={onSaveHandler}>
                <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
              </StyledIconButton>
            </TwoButtonWrapper>
          </StyledButtonWrapper>
        </StyledEditWrapper>
      )}
    </StyledTask>
  );
}

export default Task;
