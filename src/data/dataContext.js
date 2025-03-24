import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();


// vytvoreni seznamu pro ulozeni dat
export function DataProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [teams, setTeams] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [activeEmp, setActiveEmp] = useState(null);


  // nacteni dat z localstorage 
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    setProjects(JSON.parse(localStorage.getItem("projects")) || []);
    setTeams(JSON.parse(localStorage.getItem("teams")) || []);
    setEmployees(JSON.parse(localStorage.getItem("employees")) || []);
  }, []);


  // ulozeni tasku pokud se nejak zmeni 
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]); 


  // zmena stavu tasku 
    const toggleTaskState = (taskId, newState) => {
    setTasks((prevTasks) =>
      prevTasks
        .map((task) => 
          task.id === taskId ? { ...task, status: newState } : task
        )
        .filter((task) => task.status !== "DELETED") 
    );
  };
  


  return (
    <DataContext.Provider value={{ toggleTaskState,tasks, setTasks, projects, setProjects, teams, setTeams, employees, setEmployees, activeTask, setActiveTask,activeEmp,setActiveEmp}}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
