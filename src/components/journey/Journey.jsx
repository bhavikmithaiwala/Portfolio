import { useState } from "react";
import { jobs, edu } from "../../data/journey";
import JourneyFilter from "./JourneyFilter";
import JourneyTabs from "./JourneyTabs";
import JourneyPanel from "./JourneyPanel";

export default function Journey() {
  const [filter, setFilter] = useState(null); // null | "work" | "edu"
  const [sel, setSel] = useState({ kind: "work", index: 0 });

  const pick = (key) => setFilter(filter === key ? null : key);
  const showWork = filter !== "edu";
  const showEdu = filter !== "work";

  // If the active tab got filtered out, fall back to the other group.
  const kind =
    sel.kind === "work" && !showWork ? "edu" : sel.kind === "edu" && !showEdu ? "work" : sel.kind;
  const index = kind === sel.kind ? sel.index : 0;

  return (
    <div className="aboutBox" id="experience">
      <div className="about">
        <span className="badge">💼 Career Journey</span>
        <h2>My <span className="grad">Journey</span></h2>
        <p className="tagline">Professional work and education</p>

        <JourneyFilter
          filter={filter}
          onPick={pick}
          options={[
            ["work", "Professional Work", jobs.length],
            ["edu", "Education", edu.length],
          ]}
        />

        <div className="xt">
          <JourneyTabs
            jobs={jobs}
            edu={edu}
            showWork={showWork}
            showEdu={showEdu}
            kind={kind}
            index={index}
            onSelect={(k, i) => setSel({ kind: k, index: i })}
          />
          <JourneyPanel key={kind + index} kind={kind} job={jobs[index]} edu={edu[index]} />
        </div>
      </div>
    </div>
  );
}
