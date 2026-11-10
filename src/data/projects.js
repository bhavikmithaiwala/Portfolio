import { GITHUB } from "./profile";

// `repo` is optional. When present, the card shows a "View on GitHub" link.
export const projects = [
  {
    name: "SupportPilot",
    sub: "AI-assisted helpdesk",
    d: "Full-stack customer support platform with ticket management, role-based access, real-time updates and intelligent ticket classification.",
    tags: ["Angular", "Node.js", "MongoDB", "Socket.IO"],
    repo: `${GITHUB}/supportpilot-ai-helpdesk`,
  },
  {
    name: "CartWise",
    sub: "Grocery intelligence",
    d: "Grocery receipt scanning and spending analytics platform with OCR-based receipt extraction, expense tracking and budget management.",
    tags: ["React", "Node.js", "TypeScript", "SQLite", "OCR"],
    repo: `${GITHUB}/cartwise-grocery-intelligence`,
  },
  {
    name: "StockFlow",
    sub: "Inventory & orders",
    d: "Stock validation, role-based access, low-stock alerts and movement history, safe under concurrent updates.",
    tags: ["Angular", "Node.js", "MongoDB"],
    repo: `${GITHUB}/StockFlow-Inventory-Order-Management-System`,
  },
  {
    name: "EventHub",
    sub: "Event registration",
    d: "Capacity checks, cancellations and automated waitlists, with DB transactions to prevent overbooking.",
    tags: ["React", "Express", "PostgreSQL"],
  },
  {
    name: "SpendWise",
    sub: "Personal finance",
    d: "Category budgets, CSV imports, duplicate detection and monthly dashboards.",
    tags: ["React", "Node.js", "SQLite"],
  },
  {
    name: "React Todo App",
    sub: "Task management",
    d: "A React-based task management application, with productivity features planned.",
    tags: ["React", "TypeScript"],
    repo: `${GITHUB}/react-todo-app`,
  },
];