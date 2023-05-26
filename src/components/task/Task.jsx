import React, { useContext, useState } from "react";
import {
  faCheck,
  faTimes,
  faSave,
  faTrashAlt,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

import { TaskContext } from "../../App";
import * as S from "./Task.styled";

function Task(props) {
  const tasksState = useContext(TaskContext);

  const { id, title, description, selected, completed } = props.task;
  const { setTasks } = tasksState;

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
    <S.Task>
      {!editMode && (
        <>
          <S.LeftWrapper
            hovered={taskHovered ? 1 : 0}
            selected={selected ? 1 : 0}
            onClick={onSelectHandler}
            onMouseOver={() => setTaskHovered(true)}
            onMouseLeave={() => setTaskHovered(false)}
          >
            <S.TickIconButton
              icon={faCheck}
              completed={completed ? 1 : 0}
              onClick={(e) => {
                e.stopPropagation();
                onTickHandler();
              }}
            ></S.TickIconButton>
          </S.LeftWrapper>
          <S.ContentWrapper
            onClick={onSelectHandler}
            onMouseOver={() => setTaskHovered(true)}
            onMouseLeave={() => setTaskHovered(false)}
          >
            <S.Header>
              <S.Title completed={completed ? 1 : 0}>{title}</S.Title>
              <S.IconButton onClick={(e) => onEditHandler(e)}>
                <S.AwesomeIcon icon={faEllipsis}></S.AwesomeIcon>
              </S.IconButton>
            </S.Header>
            <S.Description completed={completed ? 1 : 0}>
              {description}
            </S.Description>
          </S.ContentWrapper>
        </>
      )}

      {editMode && (
        <S.EditWrapper>
          <S.Header>
            <S.EditTitle
              value={userInput.title}
              onChange={(e) =>
                setUserInput((input) => ({
                  ...input,
                  title: e.target.value,
                }))
              }
            ></S.EditTitle>
          </S.Header>
          <S.EditDescription
            value={userInput.description}
            onChange={(e) =>
              setUserInput((input) => ({
                ...input,
                description: e.target.value,
              }))
            }
            cols={35}
            rows={3}
          ></S.EditDescription>
          <S.ButtonWrapper>
            <S.IconButton onClick={onDeleteHandler}>
              <S.AwesomeIcon icon={faTrashAlt}></S.AwesomeIcon>
            </S.IconButton>
            <S.TwoButtonWrapper>
              <S.IconButton right_margin={"0.25em"} onClick={onCancelHandler}>
                <S.AwesomeIcon icon={faTimes}></S.AwesomeIcon>
              </S.IconButton>
              <S.IconButton onClick={onSaveHandler}>
                <S.AwesomeIcon icon={faSave}></S.AwesomeIcon>
              </S.IconButton>
            </S.TwoButtonWrapper>
          </S.ButtonWrapper>
        </S.EditWrapper>
      )}
    </S.Task>
  );
}

export default Task;
