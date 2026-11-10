import Chips from "../common/Chips";

export default function JourneyPanel({ kind, job, edu }) {
  if (kind === "work") {
    return (
      <div className="xpanel" role="tabpanel">
        <span className="dp">
          {job.when}
          {job.when.includes("Present") && <span className="live">Current</span>}
        </span>
        <h3>{job.role}</h3>
        <span className="co">{job.co}</span>
        <span className="loc">📍 {job.loc}</span>
        <ul>
          {job.pts.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <Chips tags={job.tags} />
      </div>
    );
  }

  return (
    <div className="xpanel" role="tabpanel">
      <span className="dp">{edu.when}</span>
      <h3>{edu.deg}</h3>
      <span className="co">{edu.school}</span>
      <p style={{ color: "var(--muted)", fontSize: 15, margin: "14px 0 0" }}>{edu.d}</p>

<div className="sh" style={{ margin: "22px 0 0" }}>Relevant Coursework</div>
<Chips tags={edu.course} />

<div className="sh" style={{ margin: "20px 0 0" }}>
  {edu.name === "Master of Engineering" ? "Technical Knowledge" : "Academic Focus"}
</div>
<Chips tags={edu.focus} />
    </div>
  );
}
