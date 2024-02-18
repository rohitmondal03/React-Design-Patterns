import { useEffect, useRef, useState } from "react";

export function useThrottle(value, delay = 500) {
  const [throttleValue, setThrottleValue] = useState("");
  const previousCall = useRef(0);

  useEffect(() => {
    const now = new Date();
    const passed = now - previousCall.current;

    if (passed >= delay) {
      setThrottleValue(value);
      previousCall.current = now;
    }
    else {
      const timeoutId = setTimeout(() => {
        setThrottleValue(value);
      }, delay);

      return () => clearTimeout(timeoutId)
    }
  }, [value, delay])

  return throttleValue;
}