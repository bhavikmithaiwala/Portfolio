import SectionHead from "../common/SectionHead";
import Chips from "../common/Chips";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <SectionHead kicker="My toolbox" title="Skills" />
      {Object.entries(skills).map(([category, items]) => (
        <div className="skillrow" key={category}>
          <b>{category}</b>
          <Chips tags={items} />
        </div>
      ))}
    </section>
  );
}
