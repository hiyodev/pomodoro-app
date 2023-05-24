import React, { useState } from "react";

import { styled } from "styled-components";

import Task from "./Task";

const TaskListContainer = styled.div`
  list-style-type: none;
  padding: 0;
`;

function TaskList(props) {
  const [Tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task A",
      description: "Hello this is Task A's description",
      selected: false,
      completed: false,
    },
    {
      id: 2,
      title: "Task B",
      description:
        "Hello this is Task A's description and much info here where we will add more",
      selected: false,
      completed: false,
    },
    {
      id: 3,
      title: "Task C",
      description:
        "Hello this is Task A's description and theres something else",
      selected: false,
      completed: false,
    },
  ]);
  return (
    <TaskListContainer>
      {Tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
        ></Task>
      ))}
    </TaskListContainer>
  );
}

export default TaskList;
