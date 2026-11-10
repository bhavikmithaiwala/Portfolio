export default function Chips({ tags }) {
  return (
    <div className="chips">
      {tags.map((t) => (
        <span className="chip" key={t}>{t}</span>
      ))}
    </div>
  );
}
