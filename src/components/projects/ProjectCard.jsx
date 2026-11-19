import Chips from "../common/Chips";
import Peek from "../common/Peek";

export default function ProjectCard({ name, sub, d, tags, repo, peek }) {
  return (
    <div className="card">
     {peek && (
  <Peek
    pose="thumbs"
    say={<>Take a look!<br />What I’ve built</>}
    className={"peekProjects " + (peek === "both" ? "" : peek)}
  />
)}
      <h3>{name}</h3>
      <div className="sub">{sub}</div>
      <p>{d}</p>
      <Chips tags={tags} />
      {repo && (
        <a className="plink" href={repo} target="_blank" rel="noreferrer">
          View on GitHub ↗
        </a>
      )}
    </div>
  );
}
