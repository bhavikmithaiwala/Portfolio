import Chips from "../common/Chips";

export default function ProjectCard({ name, sub, d, tags, repo }) {
  return (
    <div className="card">
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