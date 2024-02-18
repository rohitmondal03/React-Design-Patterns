import React, { useEffect, useState } from 'react'

import { useDebounce } from '../hooks/useDebounce';
import { useThrottle } from '../hooks/useThrottle';


export default function CustomHooks() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue);
  const throttleValue= useThrottle(inputValue);


  return (
    <div>
      <h2>Debounce hook</h2>

      <input
        placeholder='enter anything...'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />

      <p>{debounceValue}</p>
      <p>{throttleValue}</p>
    </div>
  )
}
