import { useEffect, useState } from "react";

export function useClock(delay) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, delay);
    return () => {
      clearInterval(interval);
    }
  }, [delay]);

  return now;
}
