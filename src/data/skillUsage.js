// Where each skill was used. The key must match the skill name in skills.js EXACTLY.
// work: company names (from journey.js)   projects: project names (from projects.js)
// A skill with no entry here simply shows no pop-up.
const SC = "ShareCharge";
const LT = "L&T";
const JI = "Jemistry";

export const skillUsage = {
  "JavaScript (ES6+)": { work: [SC, LT, JI], projects: [] },
  "TypeScript": { work: [SC], projects: [] },
  "React.js": { work: [SC, LT], projects: [] },
  "Angular": { work: [JI], projects: [] },
  "Node.js": { work: [SC, LT], projects: [] },

  "React Native": { work: [SC], projects: [] },
  "HTML5": { work: [JI], projects: [] },
  "CSS3": { work: [JI], projects: [] },
  "Responsive Design": { work: [SC, LT, JI], projects: [] },

  "Express.js": { work: [SC], projects: [] },
  "RESTful APIs": { work: [SC, LT, JI], projects: [] },
  "WebSockets": { work: [SC], projects: [] },
  "Authentication": { work: [SC, LT], projects: [] },
  "RBAC": { work: [LT], projects: [] },
  "Stripe API": { work: [SC], projects: [] },

  "MongoDB": { work: [SC], projects: [] },
  "CI/CD Pipelines": { work: [SC], projects: [] },
  "Agile/Scrum": { work: [LT], projects: [] },
  "Secure Coding": { work: [SC, LT, JI], projects: [] },
};
