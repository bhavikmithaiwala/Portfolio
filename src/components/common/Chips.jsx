import { useEffect, useId, useRef, useState } from "react";

const canHover = () => window.matchMedia("(hover: hover)").matches;

// A chip that shows a "used in" pop-up. Hover or keyboard-focus on desktop, tap on phones.
function UsageChip({ label, places }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const pop = useRef(null);
  const id = useId();

  // keep the pop-up on screen: nudge sideways near the edges, flip under the chip near the top
  const place = () => {
    const w = wrap.current, p = pop.current;
    if (!w || !p) return;
    const r = w.getBoundingClientRect();
    const pw = p.offsetWidth, ph = p.offsetHeight, vw = document.documentElement.clientWidth;
    const want = r.left + r.width / 2 - pw / 2;
    const left = Math.max(12, Math.min(want, vw - pw - 12));
    p.style.setProperty("--dx", `${left - want}px`);
    w.classList.toggle("below", r.top - ph - 20 < 76);
  };

  useEffect(() => {
    if (!open) return;
    place();
    const away = (e) => wrap.current && !wrap.current.contains(e.target) && setOpen(false);
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const n = places.length;
  return (
    <span
      className={"cw" + (open ? " open" : "")}
      ref={wrap}
      onMouseEnter={place}
      onMouseLeave={() => { if (canHover() && wrap.current && wrap.current.contains(document.activeElement)) document.activeElement.blur(); }}
      onFocus={place}
    >
      <button
        type="button"
        className="chip chipUse"
        aria-expanded={open}
        aria-describedby={id}
        onMouseDown={(e) => { if (canHover()) e.preventDefault(); }}
        onClick={() => { if (!canHover()) setOpen((o) => !o); }}
      >
        {label}
      </button>
      <span className="pop" role="tooltip" id={id} ref={pop}>
        <button
          type="button"
          className="popX"
          aria-label="Close"
          onClick={() => { setOpen(false); document.activeElement && document.activeElement.blur(); }}
        >×</button>
        <span className="n">{n}<small>{n === 1 ? "place" : "places"}</small></span>
        <span className="pills">
          {places.map((p) => <span key={p}>{p}</span>)}
        </span>
      </span>
    </span>
  );
}

// tags: array of strings. usage (optional): { "Skill name": { work: [...], projects: [...] } }
export default function Chips({ tags, usage }) {
  return (
    <div className="chips">
      {tags.map((t) => {
        const u = usage && usage[t];
        const places = u ? [...(u.work || []), ...(u.projects || [])] : [];
        return places.length
          ? <UsageChip key={t} label={t} places={places} />
          : <span className="chip" key={t}>{t}</span>;
      })}
    </div>
  );
}