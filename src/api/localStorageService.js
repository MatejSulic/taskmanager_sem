const LocalStorageService = {
  // 🟢 Načtení dat z localStorage
  getData: (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  },

  // 🔵 Uložení dat do localStorage
  setData: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // 🔴 Smazání dat z localStorage
  removeDataRow: (key) => {
    localStorage.removeItem(key);
  },

  // 🟡 Inicializace výchozích dat (pokud localStorage neobsahuje)
  initData: () => {
    const defaultData = {
      tasks: [
        { id: 1, name: "Finish the API design", status: "IN PROGRESS", assignedTo: 1, parentProjectId: 1 },
        { id: 2, name: "Fix authentication bug", status: "TODO", assignedTo: 2, parentProjectId: 1 },
        { id: 3, name: "Implement unit testing suite", status: "TODO", assignedTo: 3, parentProjectId: 2 },
        { id: 4, name: "Create user documentation", status: "DONE", assignedTo: 4, parentProjectId: 3 },
        { id: 5, name: "Conduct team training workshop", status: "TODO", assignedTo: 5, parentProjectId: 4 },
        { id: 6, name: "Perform security vulnerability audit", status: "IN PROGRESS", assignedTo: 6, parentProjectId: 5 },
        { id: 7, name: "Generate quarterly analytics report", status: "TODO", assignedTo: 7, parentProjectId: 6 },
        { id: 8, name: "Design integration test plan", status: "IN PROGRESS", assignedTo: 8, parentProjectId: 2 },
        { id: 9, name: "Optimize database queries", status: "TODO", assignedTo: 9, parentProjectId: 7 },
        { id: 10, name: "Implement CI/CD pipeline improvements", status: "DONE", assignedTo: 10, parentProjectId: 8 },
        { id: 11, name: "Refactor authentication module", status: "IN PROGRESS", assignedTo: 11, parentProjectId: 1 },
        { id: 12, name: "Create mobile responsive design", status: "TODO", assignedTo: 12, parentProjectId: 3 },
      ],
      projects: [
        { id: 1, name: "Task Manager App", tasks_id: [1, 2, 11] },
        { id: 2, name: "Unit Testing Suite", tasks_id: [3, 8] },
        { id: 3, name: "Documentation", tasks_id: [4, 12] },
        { id: 4, name: "Team Training", tasks_id: [5] },
        { id: 5, name: "Security Audit", tasks_id: [6] },
        { id: 6, name: "Analytics Reporting", tasks_id: [7] },
        { id: 7, name: "Database Optimization", tasks_id: [9] },
        { id: 8, name: "CI/CD Pipeline", tasks_id: [10] },
      ],
      teams: [
        { id: 1, name: "Alpha", employees_id: [1, 2, 3, 4, 5] },
        { id: 2, name: "Beta", employees_id: [6, 7, 8, 9, 10] },
        { id: 3, name: "Gamma", employees_id: [11, 12, 13, 14, 15] },
        { id: 4, name: "Delta", employees_id: [16, 17, 18, 19, 20] },
      ],
      employees: [
        { id: 1, name: "Alice Johnson", team_id: 1, tasks_id: [1], reportingTo_id: 5 },
        { id: 2, name: "Bob Smith", team_id: 1, tasks_id: [2], reportingTo_id: 5 },
        { id: 3, name: "Charlie Zhang", team_id: 1, tasks_id: [3], reportingTo_id: 6 },
        { id: 4, name: "David Müller", team_id: 1, tasks_id: [4], reportingTo_id: 6 },
        { id: 5, name: "Eve Patel", team_id: 1, tasks_id: [5], reportingTo_id: 6 },
        { id: 6, name: "Frank Rodriguez", team_id: 2, tasks_id: [6], reportingTo_id: 10 },
        { id: 7, name: "Grace Kim", team_id: 2, tasks_id: [7], reportingTo_id: 10 },
        { id: 8, name: "Helen Novak", team_id: 2, tasks_id: [8], reportingTo_id: 10 },
        { id: 9, name: "Ivan Petrov", team_id: 2, tasks_id: [9], reportingTo_id: 10 },
        { id: 10, name: "Julia Wong", team_id: 2, tasks_id: [10], reportingTo_id: 10 },
        { id: 11, name: "Kevin O'Brien", team_id: 3, tasks_id: [11], reportingTo_id: 15 },
        { id: 12, name: "Lena Schmidt", team_id: 3, tasks_id: [12], reportingTo_id: 15 },
        { id: 13, name: "Michael Brown", team_id: 3, tasks_id: [], reportingTo_id: 15 },
        { id: 14, name: "Natalie White", team_id: 3, tasks_id: [], reportingTo_id: 15 },
        { id: 15, name: "Oscar Garcia", team_id: 3, tasks_id: [], reportingTo_id: 15 },
        { id: 16, name: "Paul Anderson", team_id: 4, tasks_id: [], reportingTo_id: 20 },
        { id: 17, name: "Quinn Taylor", team_id: 4, tasks_id: [], reportingTo_id: 20 },
        { id: 18, name: "Rachel Lee", team_id: 4, tasks_id: [], reportingTo_id: 20 },
        { id: 19, name: "Samuel Green", team_id: 4, tasks_id: [], reportingTo_id: 20 },
        { id: 20, name: "Tina Hernandez", team_id: 4, tasks_id: [], reportingTo_id: 20 },
      ]
    };

  
      Object.keys(defaultData).forEach((key) => {
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, JSON.stringify(defaultData[key]));
        }
      });
    }
  };
// 📤 Exportujeme service pro použití v celém projektu
export default LocalStorageService;
