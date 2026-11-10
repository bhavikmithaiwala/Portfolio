// One of the contact cards (email, phone, location).
// `aside` is the right-hand element in the header row; `children` fill the footer row.
export default function ContactCard({ icon, label, value, aside, children }) {
  return (
    <div className="cc">
      <div className="top">
        <div className="ico">{icon}</div>
        <div>
          <div className="lab">{label}</div>
          <div className="v">{value}</div>
        </div>
        {aside}
      </div>
      <div className="foot">{children}</div>
    </div>
  );
}
