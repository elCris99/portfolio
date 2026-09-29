import type { Breakpoint } from "../types/breakpoints";

export function getBreakpoint(name: Breakpoint) {
  const rootStyles = getComputedStyle(document.documentElement);
  const value = rootStyles.getPropertyValue(`--bp-${name}`).trim();

  if (!value) {
    throw new Error(`Breakpoint "${name}" not found. Make sure "--bp-${name}" is defined in CSS`);
  }

  return value;
}
