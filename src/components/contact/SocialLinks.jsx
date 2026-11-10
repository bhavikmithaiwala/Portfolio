import { LINKEDIN, GITHUB } from "../../data/profile";
import { LinkedInIcon, GitHubIcon } from "../common/Icons";

function SocialLink({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span className="sl">
        <span className="sic">{icon}</span>
        {label}
      </span>
      <span>↗</span>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="cc socc">
      <div className="lab">Connect on social profiles</div>
      <div className="soc">
        <SocialLink href={LINKEDIN} icon={<LinkedInIcon />} label="LinkedIn" />
        {GITHUB && <SocialLink href={GITHUB} icon={<GitHubIcon />} label="GitHub" />}
      </div>
    </div>
  );
}
