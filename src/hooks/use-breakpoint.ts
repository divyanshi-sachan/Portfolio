import { useMediaQuery } from "react-responsive";

export function useBreakpoint(breakpoint: "sm" | "md" | "lg" | "xl" | "2xl"): boolean {
  const breakpoints = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  };

  return useMediaQuery({ query: breakpoints[breakpoint] });
}

