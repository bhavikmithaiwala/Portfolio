import { useState } from "react";

// Dark/light theme state. Starts from the OS preference and sets data-theme on <html>.
export default function useTheme() {
  const [dark, setDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  };

  return [dark, toggle];
}
