export default function JourneyFilter({ filter, onPick, options }) {
  return (
    <div className="filt" role="group" aria-label="Filter journey">
      {options.map(([key, label, count]) => (
        <button
          key={key}
          aria-pressed={filter === key}
          className={"fbtn" + (filter === key ? " on" : "")}
          onClick={() => onPick(key)}
        >
          {label}
          <span>({count})</span>
        </button>
      ))}
    </div>
  );
}
