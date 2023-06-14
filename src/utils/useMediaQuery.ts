import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [match, setMatch] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatch(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);
  return match;
}
