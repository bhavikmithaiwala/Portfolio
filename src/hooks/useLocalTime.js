import { useState, useEffect } from "react";

// Returns the current time in the given timezone, refreshed every 30 seconds.
export default function useLocalTime(timeZone = "America/Toronto") {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-CA", { timeZone, hour: "numeric", minute: "2-digit" }));
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, [timeZone]);

  return time;
}
