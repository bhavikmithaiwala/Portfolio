import { SunIcon, MoonIcon } from "../common/Icons";

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      className={"sw" + (dark ? " dk" : "")}
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={onToggle}
    >
      <SunIcon />
      <MoonIcon />
      <span className="k" />
    </button>
  );
}
