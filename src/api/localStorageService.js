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
        {
          id: 1,
          name: "Finish the API design",
          status: "IN PROGRESS",
          shortDescription: "Complete REST API design",
          longDescription:
            "Ensure all API endpoints follow REST best practices, implement proper error handling, and document thoroughly with OpenAPI specification. Focus on maintaining backward compatibility with existing client implementations.",
          dueDate: "2025-03-15",
          priority: "High",
          assignedTo: "Alice Johnson",
          parentProjectId: 1,
        },
        {
          id: 2,
          name: "Fix authentication bug",
          status: "TODO",
          shortDescription: "Critical issue in OAuth login flow",
          longDescription:
            "Users are unable to log in when using third-party OAuth providers due to a session handling issue. The token validation process fails silently causing users to be redirected to the login screen repeatedly. Need to implement proper error reporting and fix token validation.",
          dueDate: "2025-03-13",
          priority: "Critical",
          assignedTo: "Bob Smith",
          parentProjectId: 1,
        },
        {
          id: 3,
          name: "Implement unit testing suite",
          status: "TODO",
          shortDescription: "Write comprehensive unit tests",
          longDescription:
            "Develop unit tests for the core application components using Jest. Ensure at least 80% code coverage for critical business logic modules. Create mock services for external API dependencies to improve test reliability.",
          dueDate: "2025-03-18",
          priority: "Medium",
          assignedTo: "Charlie Zhang",
          parentProjectId: 2,
        },
        {
          id: 4,
          name: "Create user documentation",
          status: "DONE",
          shortDescription: "Prepare user guides for new features",
          longDescription:
            "Create comprehensive documentation for new features including step-by-step tutorials, screenshots, and video demonstrations. Documentation should be appropriate for both technical and non-technical users. Publish to the knowledge base after review.",
          dueDate: "2025-03-11",
          priority: "Low",
          assignedTo: "David Müller",
          parentProjectId: 3,
        },
        {
          id: 5,
          name: "Conduct team training workshop",
          status: "TODO",
          shortDescription: "GraphQL and Apollo training",
          longDescription:
            "Organize and deliver a two-day workshop to train the development team on GraphQL implementation with Apollo Client and Server. Prepare hands-on exercises and real-world examples from our codebase. Record sessions for future reference.",
          dueDate: "2025-03-21",
          priority: "Medium",
          assignedTo: "Eve Patel",
          parentProjectId: 4,
        },
        {
          id: 6,
          name: "Perform security vulnerability audit",
          status: "IN PROGRESS",
          shortDescription: "Evaluate security risks in payment module",
          longDescription:
            "Perform a comprehensive security audit of the payment processing module. Use OWASP guidelines to identify potential vulnerabilities, with particular focus on SQL injection, XSS, and CSRF attacks. Document findings and assign severity levels to each issue.",
          dueDate: "2025-03-22",
          priority: "High",
          assignedTo: "Frank Rodriguez",
          parentProjectId: 5,
        },
        {
          id: 7,
          name: "Generate quarterly analytics report",
          status: "TODO",
          shortDescription: "User engagement data analysis",
          longDescription:
            "Analyze user engagement data from the last quarter to identify patterns and trends. Create visualizations for key metrics including session duration, feature usage, and conversion rates. Prepare a presentation with actionable insights for the product team.",
          dueDate: "2025-03-25",
          priority: "Medium",
          assignedTo: "Grace Kim",
          parentProjectId: 6,
        },
        {
          id: 8,
          name: "Design integration test plan",
          status: "IN PROGRESS",
          shortDescription: "Define test cases for payment integration",
          longDescription:
            "Plan and define testing processes for the new payment gateway integration. Create test cases covering normal flows, edge cases, and error scenarios. Coordinate with the QA team to implement automated integration tests using Cypress to ensure reliability of the payment process.",
          dueDate: "2025-03-28",
          priority: "Medium",
          assignedTo: "Helen Novak",
          parentProjectId: 2,
        },
        {
          id: 9,
          name: "Optimize database queries",
          status: "TODO",
          shortDescription: "Improve performance of search feature",
          longDescription:
            "Identify and optimize slow-performing database queries in the search functionality. Implement proper indexing, query caching, and consider adding Elasticsearch for complex text search operations. Benchmark performance before and after optimization.",
          dueDate: "2025-04-02",
          priority: "High",
          assignedTo: "Ivan Petrov",
          parentProjectId: 7,
        },
        {
          id: 10,
          name: "Implement CI/CD pipeline improvements",
          status: "DONE",
          shortDescription: "Enhance build and deployment process",
          longDescription:
            "Improve the existing CI/CD pipeline by adding automated code quality checks, security scanning, and performance testing. Reduce build times by implementing parallel test execution and optimizing Docker image creation process.",
          dueDate: "2025-03-09",
          priority: "Medium",
          assignedTo: "Julia Wong",
          parentProjectId: 8,
        },
        {
          id: 11,
          name: "Refactor legacy authentication module",
          status: "IN PROGRESS",
          shortDescription: "Modernize auth codebase",
          longDescription:
            "Refactor the legacy authentication module to use modern practices and improve maintainability. Replace custom authentication with industry-standard libraries, improve error handling, and add comprehensive logging for security events.",
          dueDate: "2025-04-05",
          priority: "High",
          assignedTo: "Kevin O'Brien",
          parentProjectId: 1,
        },
        {
          id: 12,
          name: "Create mobile responsive design",
          status: "TODO",
          shortDescription: "Implement responsive UI for dashboard",
          longDescription:
            "Redesign the analytics dashboard to be fully responsive across all device sizes. Ensure that all charts, tables and interactive elements work correctly on mobile devices. Implement progressive enhancement techniques to optimize performance on slower connections.",
          dueDate: "2025-03-18",
          priority: "Medium",
          assignedTo: "Lena Schmidt",
          parentProjectId: 3,
        },
      ],
      projects: [
        { id: 1, name: "Task Manager App", tasks_id: [1, 2, 3, 11] },
        { id: 2, name: "Unit Testing Suite", tasks_id: [3, 8] },
        { id: 3, name: "Documentation", tasks_id: [4, 12] },
        { id: 4, name: "Team Training", tasks_id: [5] },
        { id: 5, name: "Security Audit", tasks_id: [6] },
        { id: 6, name: "Analytics Reporting", tasks_id: [7] },
        { id: 7, name: "Database Optimization", tasks_id: [9] },
        { id: 8, name: "CI/CD Pipeline", tasks_id: [10] },
      ],
      teams: [
        { id: 1, name: "Alpha", employees_id: [ 2, 3] },
        { id: 2, name: "Beta", employees_id: [1,4] },
        { id: 3, name: "Gama", employees_id: [5]}
      ],
      employees: [
        { 
          id: 1, 
          name: "Helen Novak", 
          team_id: 2, 
          tasks_id: [8, 2], 
          reportingTo_id: 3 
        },
        { 
          id: 2, 
          name: "Alice Johnson", 
          team_id: 1, 
          tasks_id: [1], 
          reportingTo_id: 5 
        },
        { 
          id: 3, 
          name: "Bob Smith", 
          team_id: 1, 
          tasks_id: [2], 
          reportingTo_id: 5 
        },
        { 
          id: 4, 
          name: "Charlie Zhang", 
          team_id: 2, 
          tasks_id: [3], 
          reportingTo_id: 6 
        },
        { 
          id: 5, 
          name: "David Müller", 
          team_id: 3, 
          tasks_id: [4], 
          reportingTo_id: 6 
        },
        { 
          id: 6, 
          name: "Eve Patel", 
          team_id: 3, 
          tasks_id: [5], 
          reportingTo_id: 6 
        }
      ]
    }
  
      Object.keys(defaultData).forEach((key) => {
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, JSON.stringify(defaultData[key]));
        }
      });
    }
  };
// 📤 Exportujeme service pro použití v celém projektu
export default LocalStorageService;
