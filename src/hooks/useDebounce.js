import { useEffect, useState } from "react";

export function useDebounce(val, delay = 250) {
  const [debounceValue, setDebounceValue] = useState(val);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(val);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, val])


  return debounceValue;
}