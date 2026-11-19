import SectionHead from "../common/SectionHead";
import Chips from "../common/Chips";
import { skills } from "../../data/skills";
import { skillUsage } from "../../data/skillUsage";

export default function Skills() {
  return (
    <section id="skills">
      <SectionHead kicker="My toolbox" title="Skills" />
      <p className="skillHint">
        <span className="hintM">👆 Tap a skill to see where I’ve used it</span>
        <span className="hintD">👆 Hover over a skill to see where I’ve used it</span>
      </p>
      {Object.entries(skills).map(([category, items]) => (
        <div className="skillrow" key={category}>
          <b>{category}</b>
          <Chips tags={items} usage={skillUsage} />
        </div>
      ))}
    </section>
  );
}