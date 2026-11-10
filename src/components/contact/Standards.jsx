import { standards } from "../../data/about";

export default function Standards() {
  return (
    <div className="stds">
      <div className="sh">Engineering partnership standards</div>
      <div className="sgrid">
        {standards.map(([emoji, title, desc]) => (
          <div className="cc" key={title}>
            <div className="ico">{emoji}</div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
