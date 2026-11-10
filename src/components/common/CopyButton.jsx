import { useState } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      /* clipboard not available */
    }
  };

  return (
    <button className="cpy" onClick={copy} aria-label={"Copy " + text}>
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
