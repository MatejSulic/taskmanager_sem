import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [teams, setTeams] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    setProjects(JSON.parse(localStorage.getItem("projects")) || []);
    setTeams(JSON.parse(localStorage.getItem("teams")) || []);
    setEmployees(JSON.parse(localStorage.getItem("employees")) || []);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]); // This hook runs whenever `tasks` changes


  return (
    <DataContext.Provider value={{ tasks, setTasks, projects, setProjects, teams, setTeams, employees, setEmployees, activeTask, setActiveTask}}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
