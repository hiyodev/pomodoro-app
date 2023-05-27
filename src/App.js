import "./App.css";
import Card from "./components/card/Card";

import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    console.log("Updating localstorage");

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <Card></Card>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
