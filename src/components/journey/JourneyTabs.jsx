function Tab({ active, title, when, onClick }) {
  return (
    <button role="tab" aria-selected={active} className={"xtab" + (active ? " on" : "")} onClick={onClick}>
      <b>{title}</b>
      <span>{when}</span>
    </button>
  );
}

export default function JourneyTabs({ jobs, edu, showWork, showEdu, kind, index, onSelect }) {
  return (
    <div className="xtabs" role="tablist">
      {showWork && <div className="sh">Professional Work</div>}
      {showWork &&
        jobs.map((job, n) => (
          <Tab
            key={"work" + n}
            title={job.co}
            when={job.when}
            active={kind === "work" && index === n}
            onClick={() => onSelect("work", n)}
          />
        ))}

      {showEdu && (
        <div className="sh" style={{ marginTop: showWork ? 10 : 2 }}>Education</div>
      )}
      {showEdu &&
        edu.map((item, n) => (
          <Tab
            key={"edu" + n}
            title={item.name}
            when={item.when}
            active={kind === "edu" && index === n}
            onClick={() => onSelect("edu", n)}
          />
        ))}
    </div>
  );
}
