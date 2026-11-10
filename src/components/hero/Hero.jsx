import Typewriter from "./Typewriter";
import StatCard from "./StatCard";
import { GITHUB, LINKEDIN, RESUME } from "../../data/profile";
import { projects } from "../../data/projects";
import { skillCount } from "../../data/skills";
import { experience } from "../../utils/experience";

export default function Hero() {
  return (
    <div className="heroBox" id="top">
      <div className="hero rise">
        <span className="welcome">👋 Welcome to my portfolio</span>
        <h1>Hi, I’m <span className="grad">Bhavik Mithaiwala</span></h1>
        <Typewriter />
        <p className="desc">
          Full-Stack Developer based in Ottawa, building web and mobile apps with React and Node.js.
          Currently shipping an EV charging platform at ShareCharge.
        </p>

        <div className="btns">
          <a className="btn p" href="#projects">View My Work ↗</a>
          <a className="btn" href="#contact">Let’s Connect</a>
          <a className="btn s" href={RESUME} download="Bhavik_Mithaiwala_Resume.pdf">↓ Download Resume</a>
        </div>

        <div className="stats">
          <StatCard icon="🚀" value={experience()} label="Professional Experience" />
          <StatCard icon="⌨️" value={projects.length + " Projects"} label="Built so far" />
          <StatCard icon="💡" value={skillCount + " Skills"} label="Technologies & Tools" />
        </div>

        <div className="find">
          <span>Find me on</span>
          {GITHUB && <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>}
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </div>
  );
}
