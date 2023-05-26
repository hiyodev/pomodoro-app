import React, { useContext, useState } from "react";

import { styled } from "styled-components";
import { TaskContext } from "../../App";
import Task from "../task/Task";

const TaskListContainer = styled.div`
  list-style-type: none;
  padding: 0;
`;

function TaskList(props) {
  const tasksState = useContext(TaskContext);

  return (
    <TaskListContainer>
      {tasksState.tasks.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}
    </TaskListContainer>
  );
}

export default TaskList;
