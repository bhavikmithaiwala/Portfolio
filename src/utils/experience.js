import { periods } from "../data/profile";

// Total professional experience as "Xy Ym", counting the current job up to today.
export function experience() {
  const days = periods.reduce(
    (sum, [a, b]) => sum + ((b ? new Date(b) : new Date()) - new Date(a)) / 864e5,
    0
  );
  const m = Math.floor(days / 30.44);
  return Math.floor(m / 12) + "y " + (m % 12) + "m";
}
