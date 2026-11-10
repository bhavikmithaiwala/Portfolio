import { useState, useEffect } from "react";
import { roles } from "../../data/profile";

export default function Typewriter() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i];
    const t = setTimeout(
      () => {
        if (!del && n < word.length) setN(n + 1);
        else if (!del) setDel(true);
        else if (n > 0) setN(n - 1);
        else {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      },
      !del && n === word.length ? 1400 : del ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [n, del, i]);

  return (
    <div className="type">
      {roles[i].slice(0, n)}
      <span className="cursor" />
    </div>
  );
}
