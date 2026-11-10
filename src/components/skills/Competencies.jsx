import { competencies } from "../../data/skills";

export default function Competencies() {
  return (
    <div className="comp">
      <h3><span className="ico">💡</span>Additional Competencies</h3>
      <p className="sub" style={{ margin: 0 }}>
        Engineering practices, agile methodologies and quality-focused habits
      </p>
      <div className="cpills">
        {competencies.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </div>
  );
}
