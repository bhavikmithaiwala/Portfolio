import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../../data/profile";

export default function Navbar({ dark, onToggleTheme }) {
  return (
    <div className="top">
      <div className="wrap">
        <a href="#top" className="logo">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" />
          <span className="logoText">Bhavik Mithaiwala<span>.</span></span>
        </a>
        <div className="links">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
        </div>
      </div>
    </div>
  );
}
