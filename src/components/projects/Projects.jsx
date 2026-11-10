import SectionHead from "../common/SectionHead";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <SectionHead kicker="Things I’ve built" title="Projects" />
      <div className="cards">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
        <div className="card dash">
          <h3>AI projects</h3>
          <div className="sub">In progress</div>
          <p>LLM and agentic workflow projects are coming soon.</p>
        </div>
      </div>
    </section>
  );
}