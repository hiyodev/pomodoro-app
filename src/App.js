import "./App.css";
import Card from "./components/card/Card";

import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("web-theme")) || false
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("web-theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="container">
      <TaskContext.Provider value={{ tasks, setTasks, darkMode, setDarkMode }}>
        <Card></Card>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
