import "./App.css";
import Card from "./components/card/Card";

import { createContext, useState } from "react";

export const TaskContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([
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
    <div className="container">
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <Card></Card>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
