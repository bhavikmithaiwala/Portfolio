export default function SectionHead({ kicker, title }) {
  return (
    <h2>
      <small>{kicker}</small>
      {title}
    </h2>
  );
}
