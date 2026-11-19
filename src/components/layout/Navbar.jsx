import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../../data/profile";

const ICONS = { About: "🙋", Experience: "🧭", Projects: "🚀", Skills: "⚡", Contact: "✉️" };
const RESUME = `${import.meta.env.BASE_URL}Bhavik_Mithaiwala_Resume.pdf`;

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // While the drawer is open: Esc closes it, the page behind doesn't scroll,
  // and widening the window to desktop size closes it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 701px)");
    const onWide = () => mq.matches && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <div className={"top" + (open ? " menuOpen" : "")}>
      <div className="wrap">
        <a href="#top" className="logo" onClick={close}>
          <img className="logoImg" src={`${import.meta.env.BASE_URL}logo-2.webp`} alt="" width="54" height="46" />
          <span className="logoText">Bhavik Mithaiwala<span>.</span></span>
        </a>

        {/* desktop: unchanged */}
        <div className="links">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
        </div>

        {/* phones: theme switch + menu button */}
        <div className="navCtl">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <button
            type="button"
            className="navBtn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="m" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg className="x" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="navScrim" onClick={close} />
      <aside id="mobile-menu" className="navDrawer" aria-label="Menu">
        <nav>
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>
              <span aria-hidden="true">{ICONS[label] || "•"}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="navFoot">
          <a className="btn p" href="#contact" onClick={close}>Book a 1:1 call</a>
          <a className="btn" href={RESUME} target="_blank" rel="noreferrer" onClick={close}>Download resume ↗</a>
        </div>
      </aside>
    </div>
  );
}