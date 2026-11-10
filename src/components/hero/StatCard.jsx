export default function StatCard({ icon, value, label }) {
  return (
    <div className="stat">
      <div className="ico">{icon}</div>
      <div>
        <b>{value}</b>
        <span>{label}</span>
      </div>
    </div>
  );
}
