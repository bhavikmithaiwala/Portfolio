// A character peeking over the top edge of a note, with an optional paper speech bubble.
// Place it inside any element that has position:relative (every note/card on the board does).
const POSES = {
  present: { file: "character-present.png", w: 640, h: 476 },
  thumbs: { file: "character-thumbs.png", w: 640, h: 485 },
  wave: { file: "character-wave.png", w: 640, h: 507 },
};

export default function Peek({ pose, say, className = "" }) {
  const p = POSES[pose];
  return (
    <div className={"peek " + className} aria-hidden="true">
      {say && <span className="bub">{say}</span>}
      <img src={`${import.meta.env.BASE_URL}characters/${p.file}`} width={p.w} height={p.h} alt="" draggable="false" />
    </div>
  );
}
