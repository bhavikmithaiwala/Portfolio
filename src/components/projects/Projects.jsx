import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  // The character peeks over the last card of the first row on wide screens (the 3rd card),
  // and over the first card on narrower screens where the cards wrap.
  const wideIdx = Math.min(2, projects.length - 1);

  return (
    <section id="projects">
      <div className="rsHead sec">
        <h2>Projects</h2>
      </div>
      <div className="cards">
        {projects.map((p, i) => {
          const peek = i === 0 && i === wideIdx ? "both" : i === 0 ? "nar" : i === wideIdx ? "wid" : null;
          return <ProjectCard key={p.name} {...p} peek={peek} />;
        })}
        <div className="card dash">
          <h3>AI projects</h3>
          <div className="sub">In progress</div>
          <p>LLM and agentic workflow projects are coming soon.</p>
        </div>
      </div>
    </section>
  );
}
