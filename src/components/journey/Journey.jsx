import { useState } from "react";
import { jobs, edu } from "../../data/journey";
import Chips from "../common/Chips";
import Peek from "../common/Peek";

/* ---------- Data: built from src/data/journey.js, so edit your content there ---------- */
// Oldest to newest by start date (2020, May 2022, Jan 2024, Sep 2024, Sep 2025)
const NOTES = [
  { id: "btech", type: "edu", edu: edu[1] },
  { id: "jemistry", type: "work", job: jobs[2] },
  { id: "lt", type: "work", job: jobs[1] },
  { id: "meng", type: "edu", edu: edu[0] },
  { id: "sharecharge", type: "work", job: jobs[0] },
];
// The timeline reads newest first, so the current role is at the top.
const TIMELINE = [...NOTES].reverse();
const CURRENT_ID = "sharecharge";
const PREVIEW_POINTS = 3; // bullets shown for the current role before "Show more"
const TILT = { sharecharge: 0.8, meng: 1.5, lt: -2, jemistry: 1.2, btech: -1.6 };

/* ---------- One note on the string ---------- */
function Note({ n, open, onToggle }) {
  const work = n.type === "work";
  const j = n.job;
  const e = n.edu;
  const current = n.id === CURRENT_ID;
  const pts = work ? j.pts || [] : [];

  // is there anything more to reveal?
  const hasMore = current
    ? pts.length > PREVIEW_POINTS
    : work
    ? pts.length > 1 || (j.tags && j.tags.length > 0)
    : !!(e.course && e.course.length);

  let body;
  if (current) {
    body = (
      <>
        <span className="dp">
          {j.when}
          {j.when.includes("Present") && <span className="live">Current</span>}
        </span>
        <h3>{j.role}</h3>
        <span className="co">{j.co}</span>
        <span className="loc">📍 {j.loc}</span>
        <ul>{(open ? pts : pts.slice(0, PREVIEW_POINTS)).map((p) => <li key={p}>{p}</li>)}</ul>
        <Chips tags={j.tags} />
      </>
    );
  } else if (work) {
    body = (
      <>
        <span className="rsLbl">Work</span>
        <b className="rsT">{j.co}</b>
        <span className="rsW">{j.when}</span>
        <span className="rsS">{j.role}</span>
        {open ? <ul>{pts.map((p) => <li key={p}>{p}</li>)}</ul> : pts[0] && <p className="tlLead">{pts[0]}</p>}
        {open && <Chips tags={j.tags} />}
      </>
    );
  } else {
    body = (
      <>
        <span className="rsLbl">Education</span>
        <b className="rsT">{e.name}</b>
        <span className="rsW">{e.when}</span>
        <span className="rsS">{e.school}</span>
        {e.d && <p className="tlLead">{e.d}</p>}
        {open && e.course && e.course.length > 0 && (
          <>
            <span className="rsLbl tlCourse">Relevant coursework</span>
            <Chips tags={e.course} />
          </>
        )}
      </>
    );
  }

  return (
    <article
      className={"tlNote " + n.type + (current ? " cur" : "") + (open ? " open" : "")}
      style={{ "--r": TILT[n.id] + "deg" }}
    >
      {current && <Peek pose="present" say="Here’s my story" className="peekJourney" />}
      {body}
      {hasMore && (
        <button type="button" className="tlMore" onClick={onToggle} aria-expanded={open}>
          {open ? "Show less" : "Show more"}
        </button>
      )}
    </article>
  );
}

/* ---------- Timeline ---------- */
export default function Journey() {
  const [openIds, setOpenIds] = useState(() => new Set());
  const toggle = (id) =>
    setOpenIds((old) => {
      const next = new Set(old);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="rsWrap" id="experience">
      <div className="rsHead">
        <h2>My Journey</h2>
      </div>

      <ol className="tl">
        {TIMELINE.map((n, i) => (
          <li key={n.id} className={"tlRow" + (n.id === CURRENT_ID ? " cur" : i % 2 ? " r" : "")}>
            <Note n={n} open={openIds.has(n.id)} onToggle={() => toggle(n.id)} />
          </li>
        ))}
      </ol>
    </div>
  );
}