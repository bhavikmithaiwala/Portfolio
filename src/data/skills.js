export const skills = {
  "Languages & Stack": ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "React.js", "Angular", "Node.js"],
  "Frontend & Mobile": ["React Native", "React Hooks", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  "Backend & APIs": ["Express.js", "RESTful APIs", "WebSockets", "Authentication", "RBAC", "Stripe API"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Cloud & DevOps": ["Docker", "CI/CD Pipelines", "Git"],
  "Testing & Quality": ["Jest", "React Testing Library", "Cypress"],
  "Architecture & Practices": ["Microservices", "Agile/Scrum", "SDLC", "Secure Coding"],
};

export const skillCount = new Set(Object.values(skills).flat()).size;

export const competencies = [
  "Problem Solving", "System Design", "Code Review", "Agile Methodologies", "Performance Optimization",
  "Secure Coding", "Technical Documentation", "Debugging", "Microservices", "Automated Testing",
];