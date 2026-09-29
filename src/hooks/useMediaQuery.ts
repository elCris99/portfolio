import { useEffect, useState } from "react";
import { getBreakpoint } from "../utils/getBreakpoint";
import type { Breakpoint } from "../types/breakpoints";

export function useMediaQuery(name: Breakpoint, onChange?: (matches: boolean) => void) {
  const breakpoint = getBreakpoint(name);

  const mediaQuery = `(min-width: ${breakpoint})`;

  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const query = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
      onChange?.(event.matches);
    };

    query.addEventListener("change", handleChange);

    return () => {
      query.removeEventListener("change", handleChange);
    };
  }, [mediaQuery, onChange]);

  return matches;
}
